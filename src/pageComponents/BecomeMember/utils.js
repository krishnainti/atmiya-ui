const isValidPhoneNumber = (phoneNumber) => {
  return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phoneNumber);
};

const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

const isValidZipCode = (zipCode) => {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
};

export const validateRegistrationFrom = ({
  userDetails,
  addressDetails,
  membershipDetails,
  passwordDetails,
  familyDetails,
  stateCodes,
}) => {
  let isValid = true;
  const errors = {
    userDetailsErrors: {},
    addressDetailsErrors: {},
    membershipDetailsErrors: {},
    passwordDetailsErrors: {},
    familyDetailsErrors: {},
  };

  const userDetailsErrors = validateUserDetails(userDetails);
  if (Object.keys(userDetailsErrors).length) {
    isValid = false;
    errors.userDetailsErrors = userDetailsErrors;
  }

  const addressDetailsErrors = validateAddressDetails(
    addressDetails,
    stateCodes
  );
  if (Object.keys(addressDetailsErrors).length) {
    isValid = false;
    errors.addressDetailsErrors = addressDetailsErrors;
  }

  const membershipDetailsErrors = validateMembershipDetails(membershipDetails);
  if (Object.keys(membershipDetailsErrors).length) {
    isValid = false;
    errors.membershipDetailsErrors = membershipDetailsErrors;
  }

  const passwordDetailsErrors = validatePasswordDetails(passwordDetails);
  if (Object.keys(passwordDetailsErrors).length) {
    isValid = false;
    errors.passwordDetailsErrors = passwordDetailsErrors;
  }

  const familyDetailsErrors = validateFamilyDetails(familyDetails);
  if (Object.keys(familyDetailsErrors).length) {
    if (
      Object.keys(familyDetailsErrors).length === 1 &&
      familyDetailsErrors.family_members.length
    ) {
      const allFamilyMembersFilled = familyDetailsErrors.family_members.every(
        (item) => Object.keys(item).length === 0
      );

      if (!allFamilyMembersFilled) isValid = false;
    } else {
      isValid = false;
    }

    errors.familyDetailsErrors = familyDetailsErrors;
  }

  return { isValid, errors };
};

const validateFamilyDetails = (familyDetails) => {
  const familyDetailsErrors = {};

  if (!familyDetails.spouse_first_name) {
    familyDetailsErrors.spouse_first_name = "Enter Spouse First Name";
  }

  if (!familyDetails.spouse_last_name) {
    familyDetailsErrors.spouse_last_name = "Enter Spouse Last Name";
  }

  if (!familyDetails.spouse_email) {
    familyDetailsErrors.spouse_email = "Enter Spouse Email";
  } else if (!validateEmail(familyDetails.spouse_email)) {
    familyDetailsErrors.spouse_email = "Enter Valid Spouse Email";
  }

  if (!familyDetails.spouse_phone) {
    familyDetailsErrors.spouse_phone = "Enter Spouse Phone Number";
  } else if (!isValidPhoneNumber(familyDetails.spouse_phone)) {
    familyDetailsErrors.spouse_phone = "Enter Valid Spouse Phone Number";
  }

  if (familyDetails.family_members?.length) {
    const familyMembersError = familyDetails.family_members.map(
      (familyMember) => validateFamilyMember(familyMember)
    );

    familyDetailsErrors.family_members = familyMembersError;
  } else {
    familyDetailsErrors.family_members = [];
  }

  return familyDetailsErrors;
};

const validateFamilyMember = (familyMember) => {
  const familyMemberErrors = {};
  if (!familyMember.first_name) {
    familyMemberErrors.first_name = "Enter First Name";
  }

  if (!familyMember.last_name) {
    familyMemberErrors.last_name = "Enter Last Name";
  }

  if (!familyMember.age) {
    familyMemberErrors.age = "Select Age";
  }

  if (!familyMember.email) {
    familyMemberErrors.email = "Enter Email";
  } else if (!validateEmail(familyMember.email)) {
    familyMemberErrors.email = "Enter Valid Email";
  }

  if (!familyMember.phone) {
    familyMemberErrors.phone = "Enter Phone Number";
  } else if (!isValidPhoneNumber(familyMember.phone)) {
    familyMemberErrors.phone = "Enter Valid Phone Number";
  }

  return familyMemberErrors;
};

const validatePasswordDetails = (passwordDetails) => {
  let passwordDetailsErrors = {};

  if (!passwordDetails.password) {
    passwordDetailsErrors.password = "Enter Password";
  } else if (passwordDetails.password.length < 8) {
    passwordDetailsErrors.password = "Password Minimum 8 Characters";
  } else if (!/[A-Z]/.test(passwordDetails.password)) {
    passwordDetailsErrors.password =
      "Password must have one uppercase character";
  } else if (!/[a-z]/.test(passwordDetails.password)) {
    passwordDetailsErrors.password =
      "Password must have one smallcase character";
  } else if (!/[0-9]/.test(passwordDetails.password)) {
    passwordDetailsErrors.password = "Password must have one number";
  } else if (
    !/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(passwordDetails.password)
  ) {
    passwordDetailsErrors.password = "Password must have one special character";
  }

  if (!passwordDetails.confirm_password) {
    passwordDetailsErrors.confirm_password = "Enter Confirm Password";
  } else if (passwordDetails.password !== passwordDetails.confirm_password) {
    passwordDetailsErrors.confirm_password =
      "Confirm Password and Password not same";
  }

  return passwordDetailsErrors;
};

const validateMembershipDetails = (membershipDetails) => {
  let membershipDetailsErrors = {};

  if (!membershipDetails.membership_category) {
    membershipDetailsErrors.membership_category = "Select Membership Category";
  }

  return membershipDetailsErrors;
};

const validateAddressDetails = (addressDetails, stateCodes) => {
  const addressDetailsErrors = {};

  if (!addressDetails.address_line_1) {
    addressDetailsErrors.address_line_1 = "Enter Address Line";
  }

  if (!addressDetails.city) {
    addressDetailsErrors.city = "Enter City";
  }

  if (!addressDetails.state) {
    addressDetailsErrors.state = "Select State";
  }

  if (!addressDetails.zip_code) {
    addressDetailsErrors.zip_code = "Enter Zip Code";
  } else if (!isValidZipCode(addressDetails.zip_code)) {
    addressDetailsErrors.zip_code = "Enter Valid Zip Code";
  }

  const selectedState = stateCodes.find(
    (i) => i.value.toString() === addressDetails.state
  );

  if (
    selectedState?.original?.metro_areas?.length &&
    !addressDetails.metro_area
  ) {
    addressDetailsErrors.metro_area = "Select Metro Area";
  }

  return addressDetailsErrors;
};

const validateUserDetails = (userDetails) => {
  const userDetailsErrors = {};

  if (!userDetails.reference_by) {
    userDetailsErrors.reference_by = "Enter Reference by";
  }

  if (!userDetails.reference_phone) {
    userDetailsErrors.reference_phone = "Enter Reference Phone";
  } else if (!isValidPhoneNumber(userDetails.reference_phone)) {
    userDetailsErrors.reference_phone = "Enter Valid Phone Number";
  }

  if (!userDetails.first_name) {
    userDetailsErrors.first_name = "Enter First Name";
  }

  if (!userDetails.last_name) {
    userDetailsErrors.last_name = "Enter Last Name";
  }

  if (!userDetails.email) {
    userDetailsErrors.email = "Enter Email";
  } else if (!validateEmail(userDetails.email)) {
    userDetailsErrors.email = "Enter Valid Email";
  }

  if (!userDetails.phone) {
    userDetailsErrors.phone = "Enter Phone Number";
  } else if (!isValidPhoneNumber(userDetails.phone)) {
    userDetailsErrors.phone = "Enter Valid Phone Number";
  }

  if (!userDetails.marital_status) {
    userDetailsErrors.marital_status = "Select Marital Status";
  }

  if (!userDetails.gender) {
    userDetailsErrors.gender = "Select Gender";
  }

  return userDetailsErrors;
};
