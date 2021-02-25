import { HttpExceptionConstructor } from 'src/libs/helpers/helpers.types';
import { Policy } from './policy';

export interface PolicyConstructor<T> {
  new (options?: PolicyOptions): Policy<T>;
}

export type PolicyActions =
  | 'list'
  | 'view'
  | 'create'
  | 'update'
  | 'delete'
  | 'destroy';

export interface BasePolicyOptions {
  cannotException: HttpExceptionConstructor;
}

export type PolicyOptions = Partial<BasePolicyOptions>;

export interface PolicyMap {
  [key: string]: Policy<any>;
}
