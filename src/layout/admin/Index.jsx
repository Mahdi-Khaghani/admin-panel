import NavbarElement from "./navbar/Index";
import SidebarElement from "./sidebar/Index";
import AdminContextContainer from "../../context/adminContextLayout";
// import Dashboard from "../../pages/dashboard/Dashboard";
import Content from "../../pages/Content";

const Index = () => {
  return (
    <AdminContextContainer>
      <div>
        <Content />
        <NavbarElement />
        <SidebarElement />
      </div>
    </AdminContextContainer>
  );
};

export default Index;
