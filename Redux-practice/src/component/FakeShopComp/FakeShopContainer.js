import React from "react";
import FakeShopHeader from "./FakeShopHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
import FakeShopProductList from "./FakeShopProductList";
import FakeShopProductDetails from "./FakeShopProductDetails";

const FakeShopContainer = () => {
  return (
    <div>
      <Router>
        <FakeShopHeader />
        <Routes>
          <Route
            path="\productlist"
            exact
            Component={FakeShopProductList}
          ></Route>
          <Route
            path="/productDetails"
            Component={FakeShopProductDetails}
          ></Route>
          <Route>404 Product Not Found</Route>
        </Routes>
      </Router>
      {/* <FakeShopHeader/><br/>
      <FakeShopProductList/><br/>
      <FakeShopProductDetails/><br/> */}
    </div>
  );
};

export default FakeShopContainer;
