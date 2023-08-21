import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Loading from "./Components/common/Loading";
import CartList from "./Components/Shop/Cart/CartList";

const Header = lazy(() => import("./Components/Header/Header"));
const ProductDetails = lazy(() =>
  import("./Components/Product/ProductDetails"),
);
const ProductList = lazy(() => import("./Components/Product/ProductList"));
const Signin = lazy(() => import("./Components/Sign/Signin"));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/">
              <Route path="" element={<ProductList />} />
              <Route path="signin" element={<Signin />} />
              <Route path=":productId" element={<ProductDetails />} />
              <Route path="cart" element={<CartList />} />
            </Route>
          </Routes>
        </Wrapper>
      </Suspense>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
`;
