import { ValidationError } from 'class-validator';
import { flatten } from 'lodash';

export function flattenValidationErrors(errors: ValidationError[]) {
  if (!errors || errors.length == 0) return [];
  return errors.concat(
    flattenValidationErrors(
      flatten(
        errors.map((e) =>
          e.children.map((c) => ({
            ...c,
            property: `${e.property}.${c.property}`,
          })),
        ),
      ),
    ),
  );
}
