import { Product } from '@prisma/client';
import { RegisterPolicy } from 'src/core/policies/policies.decorators';
import { Policy } from 'src/core/policies/policy';

@RegisterPolicy('product')
export class ProductsPolicy extends Policy<Product> {}
