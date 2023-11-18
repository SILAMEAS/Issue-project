export function $ok(o: any): boolean {
  return o !== undefined && typeof o !== "undefined" && o !== null;
}
export const $isArray = (s: any[]) => {
  console.log("s", s);
  return s !== undefined && s !== null && s.length > 0;
};
