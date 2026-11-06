import { useContext } from "react";
import Category from "./category/Category";
import { adminContext } from "../context/adminContextLayout";
import Product from "./product/Product";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Colors from "./colors/Color";
import Guaranties from "./guaranties/Guaranties";
import Brands from "./brands/Brand";
import DisCount from "./discount/DisCount";
import Cart from "./cart/Cart";
import Order from "./order/Order";
import Delivery from "./delivery/Delivery";
import Users from "./users/Users";
import Roles from "./roles/Roles";
import Permissions from "./permissions/Permissions";
import Comments from "./comments/Comments";
import Questions from "./questions/Questions";

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
        <Route path="/colors" element={<Colors />} />
        <Route path="/guaranties" element={<Guaranties />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/discount" element={<DisCount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/comments" element={<Comments />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </section>
  );
};

export default Content;
