import { ForbiddenException } from '@nestjs/common';
import { BasePolicyOptions } from './policies.types';

export const POLICY_MODEL_NAME = Symbol.for('PolicyModelName');

export const DEFAULT_POLICY_OPTIONS: BasePolicyOptions = {
  cannotException: ForbiddenException,
};
