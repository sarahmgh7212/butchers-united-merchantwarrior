import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModelModule } from './models/products/products.model.module';
import { AuthModule } from './core/auth/auth.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { UsersModule } from './models/users/users.module';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LogLevel } from '@sentry/types';
import { TwilioModule } from 'nestjs-twilio';
import { SendGridModule } from '@anchan828/nest-sendgrid';
import { SlackModule } from 'nestjs-slack-webhook';
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin';
import { readFileSync } from 'fs';
import { join } from 'path';
import { MerchantWarriorModule } from './core/merchant-warrior/merchant-warrior.module';
import * as admin from 'firebase-admin';
import { FirebaseAuthMiddleware } from './core/auth/firebase-auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductsModelModule,
    AuthModule,
    PrismaModule,
    UsersModule,
    FirebaseAdminModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const serviceAccount = JSON.parse(
          readFileSync(
            join(process.cwd(), './', configService.get('FIREBASE_SA_KEY')),
          ).toString(),
        );

        return {
          credential: admin.credential.cert(serviceAccount),
        };
      },
    }),
    SendGridModule.forRootAsync({
      useFactory: async (cfg: ConfigService) => ({
        apikey: cfg.get('SENDGRID_API_KEY'),
      }),
      inject: [ConfigService],
    }),
    SentryModule.forRootAsync({
      useFactory: async (cfg: ConfigService) => ({
        dsn: cfg.get('SENTRY_DSN'),
        debug: false,
        environment: cfg.get('NODE_ENV'),
        release: 'some_release',
        logLevel: LogLevel.Debug, //based on sentry.io loglevel //
      }),
      inject: [ConfigService],
    }),
    SlackModule.forRootAsync({
      useFactory: async (cfg: ConfigService) => ({
        url: cfg.get('SLACK_WEBHOOK_URL'),
      }),
      inject: [ConfigService],
    }),
    TwilioModule.forRootAsync({
      useFactory: async (cfg: ConfigService) => ({
        accountSid: cfg.get('TWILIO_ACCOUNT_SID'),
        authToken: cfg.get('TWILIO_AUTH_TOKEN'),
      }),
      inject: [ConfigService],
    }),
    MerchantWarriorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(FirebaseAuthMiddleware).forRoutes('*');
  }
}
