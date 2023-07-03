import { validateEmail } from "../../utils";

export const validateLoginDetails = (loginDetails) => {
  let isValid = true;

  const errors = {};

  if (!loginDetails.email) {
    errors.email = "Enter Email";
  } else if (!validateEmail(loginDetails.email)) {
    errors.email = "Enter Valid Email";
  }

  if (!loginDetails.password) {
    errors.password = "Enter Password";
  }

  if (Object.keys(errors).length) {
    isValid = false;
  }

  return { isValid, errors };
};
