export const defaultUserDetails = {
  reference_by: "",
  reference_phone: "",
  reference_phone_code: "+1",
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  phone_code: "+1",
  marital_status: "",
  gender: "",
};

export const defaultAddressDetails = {
  address_line_1: "",
  address_line_2: "",
  city: "",
  state: "",
  metro_area: "",
  zip_code: "",
  country: "USA",
};

export const defaultMembershipDetails = {
  membership_category: "",
};

export const defaultPasswordDetails = {
  password: "",
  confirm_password: "",
};

export const defaultFamilyDetails = {
  spouse_first_name: "",
  spouse_last_name: "",
  spouse_email: "",
  spouse_phone: "",
  spouse_phone_code: "+1",
  family_members: [],
};

export const paymentOptions = [
  {
    label: "Paypal/Credit/DebitCard",
    value: "paypal",
  },
  {
    label: "Zelle",
    value: "zelle",
  },
  // {
  //   label: "Credit/DebitCard",
  //   value: "card",
  // },
];

export const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

export const maritalStatusOptions = [
  {
    label: "Single",
    value: "single",
  },
  {
    label: "Married",
    value: "married",
  },
];

export const relationshipOptions = [
  {
    label: "Son",
    value: "son",
  },
  {
    label: "Daughter",
    value: "daughter",
  },
];

export const countryCodeOptions = [
  {
    label: "+1",
    value: "+1",
  },
  {
    label: "+91",
    value: "+91",
  },
  {
    label: "+44",
    value: "+44",
  },
  {
    label: "+61",
    value: "+61",
  },
  {
    label: "+971",
    value: "+971",
  },
];
