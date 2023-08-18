/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// eslint-disable-next-line import/namespace
import useFetch from "./Hook/useFetch";

function createApiHandler(endpoint, method = "GET") {
  const { response, error, executeFetch } = useFetch();

  const callApi = (data = null) => {
    executeFetch(endpoint, method, data);
  };

  return { response, error, callApi };
}
// * 로그인(post)
export function PostSignIn() {
  return createApiHandler("/accounts/login/", "POST");
}

// * 상품 전체 불러오기(get)
export function GetProductList() {
  return createApiHandler("/products/");
}

// * 상품 상세 불러오기(get)
export function GetProductDetail(productId) {
  return createApiHandler(`/products/${productId}/`, "GET");
}

// * 장바구니에 물건 넣기(post)
export function PostCartQuantity() {
  return createApiHandler("/cart/", "POST");
}

// * 장바구니 목록 보기(get)
export function GetCartList() {
  return createApiHandler("/cart/", "GET");
}

// ✅ usage
// import { function } from "../../ApiHandler";
// const { response: sampleRes, callApi: sampleFunc } = MethodFunc(arg);
