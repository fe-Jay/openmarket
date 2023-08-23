/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { GetProductDetail, PostCartQuantity } from "../../ApiHandler";
import { countAtom, priceAtom, stockAtom } from "../../recoil/cartCountAtom";
import { totalPrice } from "../../recoil/cartCountSelector";
import A11yHidden from "../common/A11yHidden";
import Button from "../common/Button";
import Counter from "../common/Counter";

export default function ProductDetails() {
  const { productId } = useParams();
  // const count = useRecoilValue(countAtom);
  const [quantity, setQuantity] = useRecoilState(countAtom);
  const total = useRecoilValue(totalPrice);

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

  // * 장바구니 담기
  // 장바구니 담을 수량
  const [unitPrice, setUnitPrice] = useRecoilState(priceAtom);
  const [stock, setStock] = useRecoilState(stockAtom);
  const [data, setData] = useState({
    product_id: Number(productId),
    quantity,
    check: 1,
  });

  useEffect(() => {
    if (prod && prod.price) {
      setUnitPrice(prod.price);
    }
  }, [prod, setUnitPrice]);

  useEffect(() => {
    setData(prevData => ({ ...prevData, quantity }));
  }, [quantity, total]);

  // 장바구니 담기 API 호출
  const { response: cartInt, callApi: postCartInt } = PostCartQuantity();
  const handleCartProdAdd = () => {
    postCartInt(data);
    console.warn(data.product_id, data.quantity, data.check);
  };

  return (
    <section>
      <h2>
        <A11yHidden>상품 상세</A11yHidden>
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

      <Counter />

      <article>
        <h2>총 상품금액</h2>
        <p>{total}</p>
      </article>
      <Button size="md" variant="primary">
        바로 구매
      </Button>
      <Button size="md" variant="primary" onClick={handleCartProdAdd}>
        장바구니
      </Button>
    </section>
  );
}
