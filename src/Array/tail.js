export function tail(target) {
  if (!Array.isArray(target) || !target.length) return [];

  return target.slice(1);
}
