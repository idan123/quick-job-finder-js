const validate = (regex, value, min, max, type) => {
  let msgsArr = [];

  // Check for length
  if (value.trim().length === 0) {
    msgsArr.push("*cannot be empty");
  } else if (value.length < min) {
    msgsArr.push(`*Must be at least ${min} characters long`);
  } else if (value.length > max) {
    msgsArr.push(`*Must be at most ${max} characters long`);
  }

  // Check against regex
  switch (type) {
    case "name":
      if (!regex.test(value)) {
        msgsArr.push(
          "*Please ensure that the name consists of only letters, digits, spaces, and hyphens, and begins with an uppercase letter"
        );
      }
      break;
    case "email":
      if (!regex.test(value)) {
        msgsArr.push("*Please enter a valid email address");
      }
      break;
    case "password":
      if (!regex.test(value)) {
        msgsArr.push(
          "*Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character"
        );
      }
      break;
    default:
      break;
  }

  return msgsArr;
};

export default validate;
