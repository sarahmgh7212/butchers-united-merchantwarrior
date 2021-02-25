import { Module } from '@nestjs/common';
import { ProductUnitModelService } from './productUnit.model.service';
import { ProductUnitModelController } from './productUnit.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { PoliciesModule } from 'src/core/policies/policies.module';
import { ProductUnitsPolicy } from './product-units.policy';

@Module({
  imports: [PrismaModule, PoliciesModule],
  controllers: [ProductUnitModelController],
  providers: [ProductUnitModelService, ProductUnitsPolicy],
})
export class ProductUnitModelModule {}
