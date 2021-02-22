import { Type } from '@nestjs/common';

export interface JobHandler {
  providerClass: Type<Record<string, (data: any) => any>>;
  providerInstance: Record<string, (data: any) => any>;
  methodName: string;
  handler: (data: any) => any;
}
