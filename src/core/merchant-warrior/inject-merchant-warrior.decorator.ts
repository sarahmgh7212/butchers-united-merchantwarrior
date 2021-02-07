import { SetMetadata } from '@nestjs/common';

export const InjectMerchantWarrior = (...args: string[]) => SetMetadata('inject-merchant-warrior', args);
