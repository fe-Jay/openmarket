/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// eslint-disable-next-line import/namespace
import useFetch from "./Hook/useFetch";

// * 로그인(post)
export function PostSignIn() {
  const { response, error, executeFetch } = useFetch();

  const signIn = (username, password, login_type) => {
    executeFetch("/accounts/login/", "POST", {
      username,
      password,
      login_type,
    });
  };

  return { response, error, signIn };
}

// * 상품 전체 불러오기(get)
export function GetProductList() {
  const { response, error, executeFetch } = useFetch();

  const getProdList = () => {
    executeFetch("/products/");
  };

  return { response, error, getProdList };
}

// * 상품 상세 불러오기(get)
export function GetProductDetail(productId) {
  const { response, error, executeFetch } = useFetch();

  const getProdDetail = () => {
    executeFetch(`/products/${productId}/`);
  };

  return { response, error, getProdDetail };
}

// * 장바구니에 물건 넣기(post)
export function PostProdCartAdd(product_id, quantity, check) {
  const { response, error, executeFetch } = useFetch();

  const postCartAdd = () => {
    executeFetch("/cart/", "POST", {
      product_id,
      quantity,
      check,
    });
  };

  return { response, error, postCartAdd };
}

// ✅ usage
// import { function } from "../../ApiHandler";
// const { response, error, function } = function();
