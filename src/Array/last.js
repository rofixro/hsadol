/**
 * Get the last element of the array
 * @version 0.0.1
 * @param {*[]} array - Arrays to be queried
 * @returns {*} Returns the last element of the array
 * @see https://ojhaywood.github.io/hsadol/function/index.html#static-function-last
 * @example
 * last([1, 2, 3])
 * // 3
 *
 * last([])
 * // undefined
 */
export function last(array) {
  return array ? array[array.length - 1] : undefined;
}
