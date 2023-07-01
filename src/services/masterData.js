import axiosOb from "./";

export const fetchChapterStates = () => {
  return axiosOb.get("api/chapter-states").then((res) => res.data.data || []);
};

export const fetchMembershipCategories = () => {
  return axiosOb
    .get("api/membership-categories")
    .then((res) => res.data.data || []);
};

export const fetchChapters = () => {
  return axiosOb.get("api/chapters").then((res) => res.data.data || []);
};
