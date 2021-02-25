import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { RequestContext } from 'nestjs-request-context';
import type { AuthedRequest } from './auth.types';

@Injectable()
export class AuthService {
  get authedUser() {
    return this.request.authedUser;
  }

  get request() {
    return RequestContext.currentContext.req as AuthedRequest;
  }
}
