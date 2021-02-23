import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
import { UsersModelService } from 'src/models/users/users.model.service';
import { AuthedRequest, AuthenticationResults } from './auth.types';

@Injectable()
export class FirebaseAuthMiddleware implements NestMiddleware {
  constructor(
    private firebaseAuth: FirebaseAuthenticationService,
    private usersService: UsersModelService,
  ) {}

  async use(req: AuthedRequest, res: Response, next: () => void) {
    if (req.authResult) {
      next();
    }

    const { authorization } = req.headers;

    if (authorization) {
      const tokenParts = authorization.split(' ');

      if (tokenParts && tokenParts[0] === 'Bearer' && tokenParts[1]) {
        const token = tokenParts[1];

        try {
          const decode = await this.firebaseAuth.verifyIdToken(token);

          req.firebaseUser = decode;

          const localUser = await this.usersService.findUnique({
            where: { authProviderId: decode.uid },
          });

          if (localUser) {
            req.authedUser = localUser;
            req.authResult = AuthenticationResults.SUCCESS;
          } else {
            req.authResult = AuthenticationResults.NO_LOCAL_USER_PROFILE;
          }
        } catch (e) {
          //TODO: Add specific error states and only log not known errors
          console.error(e);
          req.authResult = AuthenticationResults.INVALID_FIREBASE_TOKEN;
        }
      } else {
        req.authResult = AuthenticationResults.INVALID_BEARER;
      }
    } else {
      req.authResult = AuthenticationResults.NO_AUTH_HEADER;
    }

    next();
  }
}
