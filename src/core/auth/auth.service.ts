import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { AuthedRequest } from './auth.types';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  constructor(@Inject(REQUEST) private request: AuthedRequest) {}

  get authedUser() {
    return this.request.authedUser;
  }
}
