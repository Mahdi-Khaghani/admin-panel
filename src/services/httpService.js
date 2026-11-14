import axios from "axios";
import config from "./config.json";

const httpService = (url, method, data = null) => {
  const loginToken = JSON.parse(localStorage.getItem("loginToken"));
  return axios({
    url: config.onlineApi + url,
    method,
    data,
    headers: {
      Authorization: loginToken ? `Bearer ${loginToken.token}` : null,
      "Content-Type" : "application/json"
    },
  });
};

export default httpService;
