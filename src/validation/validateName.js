import validate from "./validate.js";

const validateName = (value) => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  return validate(reg, value, 2, 50, "name").map((err) => `${err}`);
};

export default validateName;
