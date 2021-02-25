import { HttpException } from '@nestjs/common';

export interface HttpExceptionConstructor {
  new (...args): HttpException;
}
