import NavbarElement from "./navbar/Index";
import SidebarElement from "./sidebar/Index";
import AdminContextContainer from "../../context/adminContextLayout";
import Content from "../../pages/Content";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../../hooks/authHook";

const Index = () => {
  const [isLogin, isloading] = useIsLogin();
  return (
    <AdminContextContainer>
      {isloading ? (
        <h1 className="text-center">لطفا صبر کنید</h1>
      ) : isLogin ? (
        <div>
          <Content />
          <NavbarElement />
          <SidebarElement />
        </div>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </AdminContextContainer>
  );
};

export default Index;
