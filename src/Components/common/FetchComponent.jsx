import React from "react";

import useFetch from "../../Hook/useFetch";

function FetchComponent({ url, children }) {
  const fetchUrl = url;
  const { loading, data, error } = useFetch(fetchUrl);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error : {error.message}</div>;

  return children(data);
}

export default FetchComponent;
