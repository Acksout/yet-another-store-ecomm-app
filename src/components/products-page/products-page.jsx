import React from "react";
import Sidebar from "./Sidebar";
import ProductListing from "./product-listing";
import Footer from "../landing-page/Footer";
import Navbar from "../landing-page/Navbar";
const ProductsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="w-full" />
      <div className="flex flex-grow">
        <Sidebar className="w-64 flex-shrink-0" />
        <ProductListing className="flex-grow px-4" />
      </div>
      <Footer className="w-full" />
    </div>
  );
};

export default ProductsPage;
