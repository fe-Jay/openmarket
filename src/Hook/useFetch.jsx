/* eslint-disable no-shadow */
import axios from "axios";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import userDataAtom from "../recoil/userDataAtom";

// eslint-disable-next-line no-unused-vars
const userToken = () => {
  const [userData] = useRecoilState(userDataAtom);
  return userData.token || "";
};

const useFetch = (
  initialUrl = "",
  initialMethod = "GET",
  initialData = {},
  // token = null,
  token = null || userToken(),
) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState({
    url: initialUrl,
    method: initialMethod,
    data: initialData,
  });

  const headers = {
    "Content-type": "application/json",
    Authorization: token ? `JWT ${token}` : undefined,
  };

  const BASE_URL = "https://openmarket.weniv.co.kr";
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchResult = await axios({
          url: `${BASE_URL}${options.url}`,
          method: options.method,
          data: options.data,
          headers,
        });
        setResponse(fetchResult.data);
        setIsLoading(false);
      } catch (error) {
        console.error(
          "There was an error with the fetch",
          error.response || error.message,
        );
        setError(error);
        setIsLoading(false);
      }
    };

    if (options.url) fetchData();
  }, [options]);

  const executeFetch = (url, method = "GET", data = null) => {
    setOptions({ url, method, data });
  };

  if (isLoading) console.warn("🤔loading...", token);
  if (error) console.warn("🥶error!", error);
  if (response) console.table(response);

  return { response, error, isLoading, executeFetch };
};

export default useFetch;
