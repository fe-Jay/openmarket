import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./Components/Header/Header";
import ProductDetails from "./Components/Product/ProductDetails";
import ProductList from "./Components/Product/ProductList";
import Signin from "./Components/Sign/Signin";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/">
            <Route path="" element={<ProductList />} />
            <Route path=":product_id" element={<ProductDetails />} />
            <Route path="signin" element={<Signin />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
`;
