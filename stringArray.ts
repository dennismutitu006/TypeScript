//a function return different values depending on whether it is passed a string or an array:
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];

  }
  return obj;
}
