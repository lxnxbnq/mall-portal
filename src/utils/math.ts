// 小数运算精度
export function formatFloat(f: number, digit: number): number {
  // Math.pow(指数，幂指数)
  const m = Math.pow(10, digit);
  // Math.round（） 四舍五入
  return Math.round(f * m) / m;
}
