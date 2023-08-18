/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GetProductDetail, PostCartQuantity } from "../../ApiHandler";
import { A11yHidden } from "../common/A11yHidden";

export default function ProductDetails() {
  const { productId } = useParams();

  // * 상품 상세 페이지 데이터 호출
  const { response: prod, callApi: getProdId } = GetProductDetail(productId);

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

  // * 장바구니 수량 변경
  const [unitPrice, setUnitPrice] = useState(price);
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(true);

  const handleCartCount = e => {
    const buttonValue = e.target.value;
    let cartQuantity = count;

    if (buttonValue === "minus" && count > 1) {
      cartQuantity = count - 1;
    } else if (buttonValue === "plus") {
      cartQuantity = count + 1;
    }
    setCount(cartQuantity);
    setUnitPrice(cartQuantity * price);
  };

  // * 장바구니 담기
  const [data, setData] = useState({
    product_id: Number(productId),
    quantity: count,
    check: stock,
  });

  const { response: cartInt, callApi: postCartInt } = PostCartQuantity();
  const handleCartProdAdd = () => {
    postCartInt(data);
  };

  return (
    <section>
      <h2>
        <A11yHidden>상품 상세</A11yHidden>
        <p>test</p>
      </h2>
      {prod && (
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
        <button type="button" value="minus" onClick={e => handleCartCount(e)}>
          -
        </button>
        <span>{count}</span>
        <button type="button" value="plus" onClick={e => handleCartCount(e)}>
          +
        </button>
      </article>

      <article>
        <h2>총 상품금액</h2>
        <p>
          총 수량
          <strong>{count}</strong>개
        </p>
        <p>{unitPrice}</p>
      </article>
      <button type="button">바로 구매</button>
      <button type="button" onClick={handleCartProdAdd}>
        장바구니
      </button>
    </section>
  );
}
