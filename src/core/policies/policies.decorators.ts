import { SetMetadata } from '@nestjs/common';
import { POLICY_MODEL_NAME } from './policies.constants';

export const RegisterPolicy = (modelName: string) => {
  return SetMetadata(POLICY_MODEL_NAME, modelName);
};
