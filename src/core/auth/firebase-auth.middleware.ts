import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { auth } from 'firebase-admin';
import { UsersModelService } from 'src/models/users/users.model.service';
import { AuthenticationResults } from './types';

export interface AuthedRequest extends Request {
  authResult?: AuthenticationResults;
  firebaseUser?: auth.DecodedIdToken;
  authedUser?: User;
}

@Injectable()
export class FirebaseAuthMiddleware implements NestMiddleware {
  constructor(
    private firebaseAuth: FirebaseAuthenticationService,
    private usersService: UsersModelService,
  ) {}

  async use(req: AuthedRequest, res: Response, next: () => void) {
    console.log(req.authResult);

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
