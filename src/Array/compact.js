export function compact(target) {
  if (!Array.isArray(target) || !target.length) return [];

  return target.filter(Boolean);
}
