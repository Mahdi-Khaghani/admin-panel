import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login";
import { useIsLogin } from "../../hooks/authHook";

const AuthLayout = () => {
  const [isLogin, isloading] = useIsLogin();
  return (
    <div className="limiter">
      {isloading ? (
        <h1 className="text-center">لطفا صبر کنید</h1>
      ) : !isLogin ? (
        <div className="container-login100">
          <Routes>
            <Route path="/auth/login" element={<Login />} />
          </Routes>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};

export default AuthLayout;
