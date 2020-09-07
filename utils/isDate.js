const isDate = (value) =>
  value &&
  Object.prototype.toString.call(value) === "[object Date]" &&
  !isNaN(value);

export default isDate;
