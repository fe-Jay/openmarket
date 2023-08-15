/* eslint-disable camelcase */
// eslint-disable-next-line import/namespace
import useFetch from "./Hook/useFetch";

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

export function GetProductList() {
  const { response, error, executeFetch } = useFetch();

  const getProducts = () => {
    executeFetch("/products/");
  };

  return { response, error, getProducts };
}

// ✅ usage
// import { function } from "../../ApiHandler";
// const { response, error, function } = function();
