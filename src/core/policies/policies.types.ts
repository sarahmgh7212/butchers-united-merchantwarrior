import { AuthedUser } from 'src/core/auth/auth.types';
import { ModelService } from 'src/libs/resources/types';

export interface Policy<T> {
  list?: (user: AuthedUser) => boolean; //-
  view?: (user: AuthedUser, model: T) => boolean; //user & model
  create?: (user: AuthedUser) => boolean; //-
  update?: (user: AuthedUser, model: T) => boolean; //user & model
  delete?: (user: AuthedUser, model: T) => boolean; //user & model
  destroy?: (user: AuthedUser, model: T) => boolean; //user & model
}

export interface PolicyWrappedModelService extends ModelService {
  wrappedServices: { [key: string]: Partial<ModelService> };
}

export interface PolicyOptions {}
