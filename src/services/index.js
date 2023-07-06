import axios from "axios";
import { webStore } from "../store";

let axiosOb = axios.create();
axiosOb.defaults.baseURL = process.env.REACT_APP_API_URL;

axiosOb.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosOb.interceptors.request.use(
  async function (config) {
    config.headers["Authorization"] = `Bearer ${
      webStore.getState().user.token
    }`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosOb.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.message.includes("500")) {
      console.log("server error!");
    } else if (error.message.includes("403")) {
      console.log("access forbidden error!");
    }
    return Promise.reject(error);
  }
);

export default axiosOb;
