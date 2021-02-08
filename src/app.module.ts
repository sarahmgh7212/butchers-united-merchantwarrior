import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModelModule } from './models/products/products.model.module';
import { AuthModule } from './core/auth/auth.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { PaymentsModelModule } from './models/payments/payments.model.module';
import { PaymentMethodModelModule } from './models/payment-methods/payment-method.model.module';
import { UsersModelModule } from './models/users/users.model.module';
import { InvitesModelModule } from './models/invites/invites.model.module';
import { CustomersModelModule } from './models/customers/customers.model.module';
import { ProductUnitModelModule } from './models/products-units/productUnit.model.module';
import { VariantsModelModule } from './models/variants/variants.model.module';
import { DiscountsModelModule } from './models/discounts/discounts.model.module';
import { CollectionsModelModule } from './models/collections/collections.model.module';
import { AvailabilityRulesModelModule } from './models/availability-rules/availability-rules.model.module';
import { BrandsModelModule } from './models/brands/brands.model.module';
import { MediaModelModule } from './models/media/media.model.module';
import { PlacesModelModule } from './models/places/places.model.module';
import { OrdersModelModule } from './models/orders/orders.model.module';
import { OrderItemsModelModule } from './models/order-items/order-items.model.module';

@Module({
  imports: [
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
