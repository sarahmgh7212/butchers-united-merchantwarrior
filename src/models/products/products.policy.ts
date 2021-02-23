import { Product } from '@prisma/client';
import { Policy } from 'src/core/policies/policies.types';

export class ProductsPolicy implements Policy<Product> {}
