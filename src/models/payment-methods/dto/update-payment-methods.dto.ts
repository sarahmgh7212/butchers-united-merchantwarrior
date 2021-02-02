import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentMethodsDto } from './create-payment-methods.dto';

export class UpdatePaymentMethodsDto extends PartialType(CreatePaymentMethodsDto) {}
