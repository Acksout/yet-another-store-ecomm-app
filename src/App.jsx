import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./components/landing-page/landing-page";
import ProductsPage from "./components/products-page/products-page";

const App = () => {
  return (
    <Router>
      <div>
        <ProductsPage />
      </div>
    </Router>
  );
};

export default App;
