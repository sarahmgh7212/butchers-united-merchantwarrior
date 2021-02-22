import { INestApplicationContext } from '@nestjs/common';
import { ContextIdFactory, NestFactory } from '@nestjs/core';
import { Context, Handler } from 'aws-lambda';
import { JobsService } from '../core/jobs/jobs.service';
import { AppModule } from '../app.module';

let cachedApp: INestApplicationContext;

async function bootstrapApp(): Promise<INestApplicationContext> {
  if (!cachedApp) {
    cachedApp = await NestFactory.createApplicationContext(AppModule);
  }

  return cachedApp;
}

export const handler: Handler = async (event: any, context: Context) => {
  const instance = await bootstrapApp();

  const contextId = ContextIdFactory.create();
  instance.registerRequestByContextId({ context }, contextId);

  const service = await instance.resolve<JobsService>(JobsService, contextId);
  const result = await service.process(
    event.detail.job,
    event.detail.data,
    instance,
    contextId,
  );

  console.log(`Result: ${result}`);

  return;
};
