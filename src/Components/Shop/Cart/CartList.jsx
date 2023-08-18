/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import { GetCartList } from "../../../ApiHandler";

export default function CartList() {
  const { response, callApi } = GetCartList();
  useEffect(() => {
    callApi();
  }, []);

  const hasResponse = response?.results?.length > 0;
  console.log("🚀response", response);

  return (
    <div>
      <h2>장바구니</h2>
      {hasResponse ? (
        response.results.map(prod => {
          const { product_id, is_active, quantity } = prod;
          return (
            <article key={product_id}>
              <h3>{is_active ? "판매중" : "품절"}</h3>
              <p>{product_id}</p>
              <p>{quantity}</p>
            </article>
          );
        })
      ) : (
        <div>장바구니가 비었습니다.</div>
      )}
    </div>
  );
}
