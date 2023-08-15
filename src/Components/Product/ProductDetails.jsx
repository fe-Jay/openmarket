/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import { GetProductDetail, PostProdCartAdd } from "../../ApiHandler";
import cartCountAtom from "../../recoil/cartCountAtom";
import { A11yHidden } from "../common/A11yHidden";

export default function ProductDetails() {
  const { productId } = useParams();
  const [count, setCount] = useState(1);
  const [quantity, setQuantity] = useRecoilState(cartCountAtom);

  const { response: prodId, getProdDetail } = GetProductDetail(productId);
  const { response: cartAdd, postCartAdd } = PostProdCartAdd();

  useEffect(() => {
    getProdDetail();
  }, []);

  const handleCartAdd = (productId, quantity, boolean) => {
    console.log("장바구니", productId, quantity, boolean);
    postCartAdd(productId, count, boolean);
    setQuantity(count);
  };

  const {
    product_id,
    store_name,
    product_name,
    price,
    shipping_method,
    shipping_fee,
    image,
  } = prodId || {};
  return (
    <section>
      <h2>
        <A11yHidden>상품 상세</A11yHidden>
        <p>test</p>
      </h2>
      {prodId && (
        <article key={product_id}>
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
        </article>
      )}

      <article>
        <h2>
          <A11yHidden>상품 수량 선택</A11yHidden>
        </h2>
        <button
          type="button"
          onClick={() => setCount(prevState => prevState - 1)}
        >
          -
        </button>
        <span>{count}</span>
        <button
          type="button"
          onClick={() => setCount(prevState => prevState + 1)}
        >
          +
        </button>
      </article>

      <article>
        <h2>총 상품금액</h2>
        <p>
          총 수량
          <strong>1</strong>개
        </p>
        <p>{price}</p>
      </article>
      <button type="button">바로 구매</button>
      <button
        type="button"
        onClick={() => handleCartAdd(prodId.product_id, count, true)}
      >
        장바구니
      </button>
    </section>
  );
}
