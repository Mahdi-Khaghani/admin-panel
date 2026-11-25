import axios from "axios";
import config from "./config.json";
import { Alert } from "../utils/alert";

axios.interceptors.response.use(
  (res) => {
    if (res.status < 200 || res.status >= 300) {
      Alert("مشکل", res.data.message, "warning");
    }
    return res;
  },
  (error) => {
    const status = error.response?.status || "خطا";
    Alert(status, "مشکلی رخ داده است!", "error");
    return Promise.reject(error);
  },
);

const httpService = (url, method, data = null) => {
  const loginToken = JSON.parse(localStorage.getItem("loginToken"));
  return axios({
    url: config.onlineApi + url,
    method,
    data,
    headers: {
      Authorization: loginToken ? `Bearer ${loginToken.token}` : null,
    },
  });
};

export default httpService;
