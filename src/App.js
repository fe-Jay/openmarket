import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Header from "./Components/Header/Header";
import ProductDetails from "./Components/Product/ProductDetails";
import ProductList from "./Components/Product/ProductList";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route path="" element={<ProductList />} />
            <Route path=":product_id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default App;
