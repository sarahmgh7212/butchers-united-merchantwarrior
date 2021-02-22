import {
  DiscoveredMethodWithMeta,
  DiscoveryService,
} from '@golevelup/nestjs-discovery';
import {
  INestApplicationContext,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ContextId } from '@nestjs/core';
import * as AWS from 'aws-sdk';
import { JOB_NAME } from './jobs.constants';
import { JobHandler } from './jobs.types';

@Injectable()
export class JobsService implements OnModuleInit {
  private readonly handlerMap: { [key: string]: JobHandler };
  private readonly eventBridge: AWS.EventBridge;

  constructor(
    private readonly discover: DiscoveryService,
    private readonly configService: ConfigService,
  ) {
    this.handlerMap = {};

    if (['development', 'staging'].includes(process.env.NODE_ENV)) {
      this.eventBridge = new AWS.EventBridge({
        endpoint: 'http://127.0.0.1:4010',
        accessKeyId: 'YOURKEY',
        secretAccessKey: 'YOURSECRET',
        region: 'eu-west-1',
      });
    } else {
      this.eventBridge = new AWS.EventBridge();
    }
  }

  async onModuleInit() {
    const methods = await this.discover.providerMethodsWithMetaAtKey<string>(
      JOB_NAME,
    );

    methods.forEach(this.registerHandler);

    // console.log(Object.keys(this.handlerMap));
  }

  registerHandler(method: DiscoveredMethodWithMeta<string>) {
    this.handlerMap[method.meta] = {
      providerClass: method.discoveredMethod.parentClass.dependencyType,
      providerInstance: method.discoveredMethod.parentClass.instance,
      methodName: method.discoveredMethod.methodName,
      handler: method.discoveredMethod.handler,
    };
  }

  async run(job: string, data: any) {
    if (!Object.prototype.hasOwnProperty.call(this.handlerMap, job)) {
      throw new Error(`No job '${job}' has been registered`);
    }

    const detail = {
      job,
      data,
    };

    const EventBusName = this.configService.get<string>('EVENT_BUS_NAME');

    const params: AWS.EventBridge.PutEventsRequest = {
      Entries: [
        {
          Detail: JSON.stringify(detail),
          DetailType: 'job',
          EventBusName,
          // Resources: [],
          Source: 'api',
          Time: new Date(),
        },
      ],
    };

    return this.eventBridge.putEvents(params).promise();
  }

  async process(
    job: string,
    data: any,
    instance: INestApplicationContext,
    contextId: ContextId,
  ) {
    if (!Object.prototype.hasOwnProperty.call(this.handlerMap, job)) {
      throw new Error(`No job '${job}' has been registered`);
    }

    const handler = this.handlerMap[job];
    const service = await instance.resolve(handler.providerClass, contextId);

    await service[handler.methodName](data);
  }
}
