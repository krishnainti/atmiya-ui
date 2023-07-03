export const isValidPhoneNumber = (phoneNumber) => {
  return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phoneNumber);
};

export const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const isValidZipCode = (zipCode) => {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
};
