import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModelModule } from './models/products/products.model.module';
import { AuthModule } from './core/auth/auth.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { PaymentsModelModule } from './models/payments/payments.model.module';
import { PaymentMethodsModelModule } from './models/payment-methods/payment-methods.model.module';
import { UsersModelModule } from './models/users/users.model.module';
import { InvitationsModelModule } from './models/invitations/invitations.model.module';
import { CustomersModelModule } from './models/customers/customers.model.module';

@Module({
  imports: [
    ProductsModelModule,
    AuthModule,
    PrismaModule,
    PaymentsModelModule,
    PaymentMethodsModelModule,
    UsersModelModule,
    InvitationsModelModule,
    CustomersModelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
