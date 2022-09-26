/**
 * Get the last element of the array
 * @version 0.0.1
 * @param {*[]} target - Arrays to be queried
 * @returns {*} Returns the last element of the array
 * @see https://ojhaywood.github.io/hsadol/function/index.html#static-function-last
 * @example
 * last([1, 2, 3])
 * // 3
 *
 * last([])
 * // undefined
 */
export function last(target) {
  return target ? target[target.length - 1] : undefined;
}
