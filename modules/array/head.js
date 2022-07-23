export function head(array = []) {
    if (!Array.isArray(array)) return array;

    return array[0];
}