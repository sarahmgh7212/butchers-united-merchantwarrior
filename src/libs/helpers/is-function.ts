/* From: https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type */

export function isFunction(func) {
  return func && {}.toString.call(func) === '[object Function]';
}
