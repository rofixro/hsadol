export function drop(target, n = 1) {
  if (!Array.isArray(target) || !target.length || !Number.isSafeInteger(n)) return [];
  target.splice(0, +n)
  return target;
}
