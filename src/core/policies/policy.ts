import { AuthedUser } from '../auth/auth.types';
import { DEFAULT_POLICY_OPTIONS } from './policies.constants';
import { PolicyOptions } from './policies.types';

export abstract class Policy<T> {
  private readonly _options: PolicyOptions;

  constructor(options?: PolicyOptions) {
    this._options = {
      ...DEFAULT_POLICY_OPTIONS,
      ...options,
    };
  }

  get options() {
    return this._options;
  }

  list?: (user: AuthedUser) => boolean;
  view?: (user: AuthedUser, model: T) => boolean;
  create?: (user: AuthedUser) => boolean;
  update?: (user: AuthedUser, model: T) => boolean;
  delete?: (user: AuthedUser, model: T) => boolean;
  destroy?: (user: AuthedUser, model: T) => boolean;
}
