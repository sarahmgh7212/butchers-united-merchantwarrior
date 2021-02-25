import { Injectable } from '@nestjs/common';
import { ProductUnit, User } from '@prisma/client';
import { RegisterPolicy } from 'src/core/policies/policies.decorators';
import { Policy } from 'src/core/policies/policy';

@RegisterPolicy('productUnit')
@Injectable()
export class ProductUnitsPolicy extends Policy<ProductUnit> {
  list(user: User) {
    return false;
  }
}
