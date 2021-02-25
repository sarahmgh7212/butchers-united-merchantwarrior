/* From: https://stackoverflow.com/questions/29093396/how-do-you-check-the-difference-between-an-ecmascript-6-class-and-function */

export function isClass(func) {
  return (
    typeof func === 'function' &&
    /^class\s/.test(Function.prototype.toString.call(func))
  );
}
