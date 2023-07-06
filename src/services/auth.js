import axiosOb from ".";

export const register = (payload) => {
  return axiosOb
    .post("api/register", payload)
    .then((res) => res.data.data || []);
};

export const login = (payload) => {
  return axiosOb.post("api/login", payload).then((res) => res.data.data || []);
};

export const submitProfile = (payload) => {
  return axiosOb
    .post("api/submit-profile", payload)
    .then((res) => res.data.data || []);
};

export const findProfileByEmail = (params) => {
  return axiosOb
    .get("api/find-profile-by-email", { params })
    .then((res) => res.data.data || null);
};

export const fetchReviewProfiles = (params) => {
  return axiosOb
    .get("api/review-profiles", { params })
    .then((res) => res.data.data || null);
};
