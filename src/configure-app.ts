import {
  INestApplication,
  UnprocessableEntityException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CoreLogger } from './core/core-logger/core.logger';

export function configureApp(app: INestApplication) {
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

  app.useLogger(app.get(CoreLogger));

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
