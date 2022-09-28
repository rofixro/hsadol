export function initial(target) {
  if (!Array.isArray(target) || !target.length) return [];

  return target.slice(0, target.length - 1);
}
