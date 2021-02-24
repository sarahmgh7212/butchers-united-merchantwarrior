import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin';
import { SendGridModule } from '@anchan828/nest-sendgrid';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { LogLevel } from '@sentry/types';
import * as admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { SlackModule } from 'nestjs-slack-webhook';
import { TwilioModule } from 'nestjs-twilio';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { FirebaseAuthMiddleware } from './core/auth/firebase-auth.middleware';
import { JobsModule } from './core/jobs/jobs.module';
import { MerchantWarriorModule } from './core/merchant-warrior/merchant-warrior.module';
import { PoliciesModule } from './core/policies/policies.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { AvailabilityRulesModelModule } from './models/availability-rules/availability-rules.model.module';
import { BrandsModelModule } from './models/brands/brands.model.module';
import { CartsModelModule } from './models/carts/carts.model.module';
import { CollectionsModelModule } from './models/collections/collections.model.module';
import { CustomersModelModule } from './models/customers/customers.model.module';
import { DiscountsModelModule } from './models/discounts/discounts.model.module';
import { InvitesModelModule } from './models/invites/invites.model.module';
import { MediaModelModule } from './models/media/media.model.module';
import { OrderItemsModelModule } from './models/order-items/order-items.model.module';
import { OrdersModelModule } from './models/orders/orders.model.module';
import { PaymentMethodModelModule } from './models/payment-methods/payment-method.model.module';
import { PaymentsModelModule } from './models/payments/payments.model.module';
import { PlacesModelModule } from './models/places/places.model.module';
import { ProductUnitModelModule } from './models/products-units/productUnit.model.module';
import { ProductsModelModule } from './models/products/products.model.module';
import { UsersModelModule } from './models/users/users.model.module';
import { VariantsModelModule } from './models/variants/variants.model.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductsModelModule,
    AuthModule,
    PrismaModule,
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
    ProductsModelModule,
    AuthModule,
    PrismaModule,
    PaymentsModelModule,
    PaymentMethodModelModule,
    UsersModelModule,
    InvitesModelModule,
    CustomersModelModule,
    ProductUnitModelModule,
    VariantsModelModule,
    DiscountsModelModule,
    CollectionsModelModule,
    AvailabilityRulesModelModule,
    BrandsModelModule,
    MediaModelModule,
    PlacesModelModule,
    OrdersModelModule,
    OrderItemsModelModule,
    CartsModelModule,
    JobsModule,
    PoliciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(FirebaseAuthMiddleware).forRoutes('*');
  }
}
