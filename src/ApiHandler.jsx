/* eslint-disable camelcase */
import useFetch from "./Hook/useFetch";

export default function PostSignIn() {
  const { response, error, isLoading, executeFetch } = useFetch();

  const signIn = (username, password, login_type) => {
    executeFetch("accounts/login", "POST", {
      username,
      password,
      login_type,
    });
  };

  return { response, error, isLoading, signIn };
}
