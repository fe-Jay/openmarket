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
      <article>
        <p>{store_name}</p>
        <h3>{product_name}</h3>
        <p>
          <strong>{price}</strong>원
        </p>
        <p>
          {shipping_method} / {shipping_fee}
        </p>
      </article>
    </ProductItem>
  );
}

const ProductItem = styled.section`
  border: 1px solid var(--color-light);
  margin: 20px 0;
  display: flex;
  gap: 1rem;
  span {
    background-color: var(--color-light);
    flex: 0 1 min(30%, 200px);
    border-radius: 0.5rem;
    overflow: hidden;
    img {
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }
  article {
    flex: 1 0 0;
    border: 1px solid var(--color-light);
  }
`;
