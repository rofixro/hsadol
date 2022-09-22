export function head(array = []) {
  // 只有 null 和 undefined 获取下标时会报错
  return array ? array[0] : undefined;
}
