import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';

import { AppModule } from '../app.module';
import { configureApp } from '../configure-app';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below
const binaryMimeTypes: string[] = [];

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  console.log(`Is server cached: ${!!cachedServer}`);

  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    nestApp.use(eventContext());
    configureApp(nestApp, 'dev');
    nestApp.enableCors();
    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }

  return cachedServer;
}

export const handler: Handler = async (event: any, context: Context) => {
  if (event.path === '/docs') {
    event.path = '/docs/';
  }

  event.path = event.path.includes('swagger-ui')
    ? `/docs${event.path}`
    : event.path;

  const server = await bootstrapServer();
  return proxy(server, event, context, 'PROMISE').promise;
};
