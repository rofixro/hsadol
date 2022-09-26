/**
 * Get the first element of the array
 * @version 0.0.1
 * @param {*[]} target - Arrays to be queried
 * @returns {*} Returns the first element of the array
 * @see https://ojhaywood.github.io/hsadol/function/index.html#static-function-head
 * @example
 * head([1, 2, 3])
 * // 1
 *
 * head([])
 * // undefined
 */
export function head(target) {
  return target ? target[0] : undefined;
}
