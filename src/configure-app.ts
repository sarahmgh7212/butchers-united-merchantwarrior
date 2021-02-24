import {
  INestApplication,
  INestApplicationContext,
  UnprocessableEntityException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

function useValidation(app: INestApplication) {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (validationErrors: ValidationError[]) => {
        // const errors = this.flattenValidationErrors(validationErrors);
        // const formattedErrors = errors.map(e => {

        //   return {

        //   }
        // });
        return new UnprocessableEntityException(validationErrors);
      },
    }),
  );
}

function useLogger(app: INestApplicationContext) {
  app.useLogger(app.get(Logger));
}

function useDocs(app: INestApplication) {
  if (['development', 'staging'].includes(process.env.NODE_ENV)) {
    const options = new DocumentBuilder()
      .setTitle('VSC')
      .setDescription('API for VSC')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }
}

function configureApp(app: INestApplication) {
  useValidation(app);
  useLogger(app);
  useDocs(app);
}

function configureAppContext(app: INestApplicationContext) {
  useLogger(app);
}

export { useValidation, useLogger, useDocs, configureApp, configureAppContext };
