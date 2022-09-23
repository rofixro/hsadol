/**
 * Get the first element of the array
 * @version 0.0.1
 * @param {*[]} array - Arrays to be queried
 * @returns {*} Returns the first element of the array
 * @see https://ojhaywood.github.io/hsadol/function/index.html#static-function-head
 * @example
 * head([1, 2, 3])
 * // 1
 *
 * head([])
 * // undefined
 */
export function head(array) {
  return array ? array[0] : undefined;
}
