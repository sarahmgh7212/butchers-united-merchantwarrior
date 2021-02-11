import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthedRequest } from './firebase-auth.middleware';
import { AuthenticationResults, UnauthorizedCodes } from './types';

@Injectable()
export class IsGuestGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest() as AuthedRequest;

    if (req.authResult === AuthenticationResults.SUCCESS || req.authedUser) {
      throw new UnauthorizedException(UnauthorizedCodes.GUEST_ONLY);
    }

    return true;
  }
}
