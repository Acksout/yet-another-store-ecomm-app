import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing-page/landing-page";
import ProductsPage from "./components/products-page/products-page";

const NotFound = () => <h1>Yo! This page may or may not exist! Go Back!</h1>; // Custom 404 component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
};

export default App;
