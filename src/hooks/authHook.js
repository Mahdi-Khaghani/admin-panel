import { useEffect, useState } from "react";
import { getUserService } from "../services/auth";

export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  const handleCheckLogin = async () => {
    try {
      const res = await getUserService();
      setIsLogin(res.status == 200 ? true : false);
      setIsLoading(false);
    } catch {
      localStorage.removeItem("loginToken");
      setIsLogin(false);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken"));
    if (loginToken) {
      handleCheckLogin();
    } else {
      setIsLogin(false);
      setIsLoading(false);
    }
  }, []);

  return [isLogin, isloading];
};
