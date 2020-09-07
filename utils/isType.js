import isDate from "./isDate";

const isType = (value) =>
  (Array.isArray(value) && "array") ||
  (typeof value !== "number" && isDate(value) && "date") ||
  typeof value;

export default isType;
