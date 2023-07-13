import { isValidPhoneNumber, isValidZipCode, validateEmail } from "../../utils";
import {
  defaultAddressDetails,
  defaultFamilyDetails,
  defaultMembershipDetails,
  defaultPasswordDetails,
  defaultUserDetails,
} from "./consts";

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

  if (
    ["2", "3", "4"].includes(
      membershipDetails.membership_category.toString()
    ) &&
    userDetails.marital_status === "married"
  ) {
    const familyDetailsErrors = validateFamilyDetails(familyDetails);

    if (Object.keys(familyDetailsErrors).length) {
      if (
        Object.keys(familyDetailsErrors).length === 1 &&
        familyDetailsErrors.family_members
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

  if (!familyMember.relationship) {
    familyMemberErrors.relationship = "Select Relationship";
  }

  if (!familyMember.gender) {
    familyMemberErrors.gender = "Select Gender";
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
    (i) => i.value.toString() === addressDetails.state.toString()
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

export const prepareRegisterPayload = ({
  userDetails,
  addressDetails,
  membershipDetails,
  passwordDetails,
  familyDetails,
  paymentMode,
  selectedChapterState,
}) => {
  return {
    reference_by: userDetails.reference_by,
    reference_phone: `${userDetails.reference_phone_code} ${userDetails.reference_phone}`,
    first_name: userDetails.first_name,
    last_name: userDetails.last_name,
    email: userDetails.email,
    phone: `${userDetails.phone_code} ${userDetails.phone}`,
    marital_status: userDetails.marital_status,
    gender: userDetails.gender,

    address_line_1: addressDetails.address_line_1,
    address_line_2: addressDetails.address_line_2,
    city: addressDetails.city,
    state: selectedChapterState.id,
    metro_area: addressDetails.metro_area,
    zip_code: addressDetails.zip_code,
    country: addressDetails.country,

    membership_category: +membershipDetails.membership_category,

    spouse_first_name: familyDetails.spouse_first_name,
    spouse_last_name: familyDetails.spouse_last_name,
    spouse_email: familyDetails.spouse_email,
    spouse_phone: `${familyDetails.spouse_phone_code} ${familyDetails.spouse_phone}`,
    family_members: familyDetails.family_members,

    payment_mode: paymentMode,

    password: passwordDetails.password,
    confirm_password: passwordDetails.confirm_password,
  };
};

export const prepareServerErrors = (errors) => {
  const errorsOb = {
    userDetailsErrors: {},
    addressDetailsErrors: {},
    membershipDetailsErrors: {},
    passwordDetailsErrors: {},
    familyDetailsErrors: {},
  };

  // personal details
  if (errors.reference_by) {
    errorsOb.userDetailsErrors.reference_by = errors.reference_by[0] || "";
  }

  if (errors.reference_phone) {
    errorsOb.userDetailsErrors.reference_phone =
      errors.reference_phone[0] || "";
  }

  if (errors.first_name) {
    errorsOb.userDetailsErrors.first_name = errors.first_name[0] || "";
  }

  if (errors.last_name) {
    errorsOb.userDetailsErrors.last_name = errors.last_name[0] || "";
  }

  if (errors.email) {
    errorsOb.userDetailsErrors.email = errors.email[0] || "";
  }

  if (errors.phone) {
    errorsOb.userDetailsErrors.phone = errors.phone[0] || "";
  }

  if (errors.marital_status) {
    errorsOb.userDetailsErrors.marital_status = errors.marital_status[0] || "";
  }

  if (errors.gender) {
    errorsOb.userDetailsErrors.gender = errors.gender[0] || "";
  }

  // address details
  if (errors.address_line_1) {
    errorsOb.addressDetailsErrors.address_line_1 =
      errors.address_line_1[0] || "";
  }

  if (errors.city) {
    errorsOb.addressDetailsErrors.city = errors.city[0] || "";
  }

  if (errors.state) {
    errorsOb.addressDetailsErrors.state = errors.state[0] || "";
  }

  if (errors.zip_code) {
    errorsOb.addressDetailsErrors.zip_code = errors.zip_code[0] || "";
  }

  if (errors.metro_area) {
    errorsOb.addressDetailsErrors.metro_area = errors.metro_area[0] || "";
  }

  // membership details
  if (errors.membership_category) {
    errorsOb.membershipDetailsErrors.membership_category =
      errors.membership_category[0] || "";
  }

  // Password details
  if (errors.password) {
    errorsOb.passwordDetailsErrors.password = errors.password[0] || "";
  }

  if (errors.confirm_password) {
    errorsOb.passwordDetailsErrors.confirm_password =
      errors.confirm_password[0] || "";
  }

  // Family details
  if (errors.spouse_first_name) {
    errorsOb.familyDetailsErrors.spouse_first_name = errors.spouse_first_name;
  }

  if (errors.spouse_last_name) {
    errorsOb.familyDetailsErrors.spouse_last_name = errors.spouse_last_name;
  }

  if (errors.spouse_email) {
    errorsOb.familyDetailsErrors.spouse_email = errors.spouse_email;
  }

  if (errors.spouse_phone) {
    errorsOb.familyDetailsErrors.spouse_phone = errors.spouse_phone;
  }

  return errorsOb;
};

const getMobileNumbers = (mobileStr) => {
  return {
    code: mobileStr.substring(0, mobileStr.indexOf(" ")) || "+1",
    phone: mobileStr.substring(mobileStr.indexOf(" ") + 1) || "",
  };
};

export const prefillTheData = ({ user, profile }) => {
  const data = {
    userDetails: { ...defaultUserDetails },
    addressDetails: { ...defaultAddressDetails },
    membershipDetails: { ...defaultMembershipDetails },
    passwordDetails: { ...defaultPasswordDetails },
    familyDetails: { ...defaultFamilyDetails },
    paymentMode: "paypal",
  };

  const refPhone = getMobileNumbers(profile.reference_phone);
  const userPhone = getMobileNumbers(profile.phone);
  const spousePhone = getMobileNumbers(profile.spouse_phone);

  data.userDetails.reference_by = profile.reference_by;
  data.userDetails.reference_phone = refPhone.phone;
  data.userDetails.reference_phone_code = refPhone.code;
  data.userDetails.first_name = profile.first_name;
  data.userDetails.last_name = profile.last_name;
  data.userDetails.email = user.email;
  data.userDetails.phone = userPhone.phone;
  data.userDetails.phone_code = userPhone.code;
  data.userDetails.marital_status = profile.marital_status;
  data.userDetails.gender = profile.gender;

  data.addressDetails.address_line_1 = profile.address_line_1;
  data.addressDetails.address_line_2 = profile.address_line_2;
  data.addressDetails.city = profile.city;
  data.addressDetails.state = profile.state;
  data.addressDetails.metro_area = profile.metro_area;
  data.addressDetails.zip_code = profile.zip_code;
  data.addressDetails.country = profile.country;

  data.membershipDetails.membership_category = profile.membership_category;

  data.familyDetails.spouse_first_name = profile.spouse_first_name;
  data.familyDetails.spouse_last_name = profile.spouse_last_name;
  data.familyDetails.spouse_email = profile.spouse_email;
  data.familyDetails.spouse_phone = spousePhone.phone;
  data.familyDetails.spouse_phone_code = spousePhone.code;
  data.familyDetails.family_members = profile.family_members || [];

  data.paymentMode = profile.payment_mode;

  return data;
};
