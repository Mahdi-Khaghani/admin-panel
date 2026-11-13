import axios from "axios";
import { useEffect, useState } from "react";

export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken"));
    if (loginToken) {
      axios
        .get("https://ecomadminapi.azhadev.ir/api/auth/user", {
          headers: {
            Authorization: `Bearer ${loginToken.token}`,
          },
        })
        .then((res) => {
          setIsLogin(res.status == 200 ? true : false);
          setIsLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("loginToken");
          setIsLogin(false);
          setIsLoading(false);
        });
    } else {
      setIsLogin(false);
      setIsLoading(false);
    }
  }, []);

  return [isLogin, isloading];
};
