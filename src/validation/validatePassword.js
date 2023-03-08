import validate from "./validate.js";

const validatePassword = (value) => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
    "g"
  );
  return validate(reg, value, 8, 50, "password").map((err) => `${err}`);
};

const validateRepeatPassword = (password, repeatPassword) => {
  if (repeatPassword !== "") {
    if (password !== repeatPassword) {
      return ["passwords do not match"];
    }
  }
  return [];
};

export default validatePassword;
export { validateRepeatPassword };
