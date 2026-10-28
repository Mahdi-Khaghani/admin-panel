import { useContext } from "react";
// import Category from "./category/Category";
import { adminContext } from "../context/adminContextLayout";
import Product from "./product/Product";

const Content = () => {
  const { showSidebar } = useContext(adminContext);

  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
    >
      {/* <Dashboard/> */}
      {/* <Category /> */}
      <Product/>
    </section>
  );
};

export default Content;
