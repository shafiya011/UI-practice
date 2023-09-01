import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import FakeShopPeoductComp from "./FakeShopPeoductComp";
import axios from "axios";
import { setProduct } from "../../Redux_comp/FakeShop/FakeShopAction";

const FakeShopProductList = () => {
  const dispatch=useDispatch()
  const products = useSelector((state) => state.allproducts.products);
  console.log(products);

  const fetchProducts = async() => {
    const response = await axios
      .get("https://fakestoreapi.com/products").catch((err) => {console.log("error", err)});
  dispatch(setProduct(response.data))
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products:", products);
  return (
    <div className="ui grid container">
      <FakeShopPeoductComp />
    </div>
  );
};

export default FakeShopProductList;
