import { useContext } from "react";
import Category from "./category/Category";
import { adminContext } from "../context/adminContextLayout";
import Product from "./product/Product";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

const Content = () => {
  const { showSidebar } = useContext(adminContext);

  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/products" element={<Product />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </section>
  );
};

export default Content;
