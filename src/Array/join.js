export function join(target, separator = ",") {
  if (!Array.isArray(target) || typeof separator !== "string") return "";

  return target.join(separator);
}
