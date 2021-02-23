import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthedRequest, AuthenticationResults } from './auth.types';

@Injectable()
export class IsAuthedGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest() as AuthedRequest;

    if (req.authResult === AuthenticationResults.NO_LOCAL_USER_PROFILE) {
      throw new NotFoundException(req.authResult);
    } else if (
      req.authResult !== AuthenticationResults.SUCCESS ||
      !req.authedUser
    ) {
      throw new UnauthorizedException(req.authResult);
    }

    return true;
  }
}
