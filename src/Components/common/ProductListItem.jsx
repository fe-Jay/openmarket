/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect } from "react";
import styled from "styled-components";

import { GetProductDetail } from "../../ApiHandler";

export default function ProductListItem({ prodId }) {
  const { response: prod, callApi: getProdId } = GetProductDetail(prodId);
  useEffect(() => {
    getProdId();
  }, []);

  const {
    product_id,
    store_name,
    product_name,
    price,
    shipping_method,
    shipping_fee,
    image,
  } = prod || {};
  return (
    <ProductItem>
      <span>
        <img src={image} alt={product_name} />
      </span>
      <p>{store_name}</p>
      <h3>{product_name}</h3>
      <h4>
        <strong>{price}</strong>원
      </h4>
      <p>
        {shipping_method} / {shipping_fee}
      </p>
    </ProductItem>
  );
}

const ProductItem = styled.section`
  border: 1px solid var(--color-light);
  margin: 20px 0;
`;
