import type { User } from '@prisma/client';
import type { auth } from 'firebase-admin';
import type { Request } from 'express';

export enum AuthenticationResults {
  NO_LOCAL_USER_PROFILE = 'no-local-user-profile',
  INVALID_FIREBASE_TOKEN = 'invalid-firebase-token',
  INVALID_BEARER = 'invalid-bearer',
  NO_AUTH_HEADER = 'no-auth-header',
  SUCCESS = 'success',
}

export enum UnauthorizedCodes {
  // NO_LOCAL_USER_PROFILE = 'no-local-user-profile',
  // INVALID_FIREBASE_TOKEN = 'invalid-firebase-token',
  // INVALID_BEARER = 'invalid-bearer',
  // NO_AUTH_HEADER = 'no-auth-header',
  GUEST_ONLY = 'guest-only',
}

export interface AuthedRequest extends Request {
  authResult?: AuthenticationResults;
  firebaseUser?: auth.DecodedIdToken;
  authedUser?: AuthedUser;
}

export type AuthedUser = User;
