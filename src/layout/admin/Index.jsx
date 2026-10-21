import { useContext } from "react";
import NavbarElement from "./navbar/Index";
import SidebarElement from "./sidebar/Index";
import AdminContextContainer, { adminContext } from "../../context/adminContextLayout";

const Index = () => {
  const { showSidebar } = useContext(adminContext);
  return (
    <>
      <AdminContextContainer>
        <NavbarElement />
        <SidebarElement />
        <section id="content_section" className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}></section>
      </AdminContextContainer>
    </>
  );
};

export default Index;
