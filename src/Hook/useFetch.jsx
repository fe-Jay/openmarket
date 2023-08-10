/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "https://openmarket.weniv.co.kr/";

const useFetch = (
  initialUrl = "",
  initialMethod = "GET",
  initialData = null,
) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState({
    url: initialUrl,
    method: initialMethod,
    data: initialData,
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchResult = await axios({
          url: BASE_URL + options.url,
          method: options.method,
          data: options.data,
        });
        setResponse(fetchResult.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    if (options.url) fetchData();
  }, [options]);

  const executeFetch = (url, method = "GET", data = null) => {
    setOptions({ url, method, data });
  };

  return { response, error, isLoading, executeFetch };
};

export default useFetch;
