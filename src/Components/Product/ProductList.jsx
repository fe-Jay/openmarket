import React from 'react';
import FetchComponent from '../common/FetchComponent';
import { A11yHidden } from '../common/A11yHidden';

const ProductList = () => (
    <FetchComponent url="products/">
        {(data) => (
            <section>
                <h2>
                    <A11yHidden txt={'상품리스트'} />
                </h2>
                {data && data.results && Array.isArray(data.results) ? (
                    data.results.map((product) => (
                        <article key={product.product_id}>
                            <img src={product.image} alt={product.product_name} />
                            <h3>{product.product_name}</h3>
                            <p>{product.price}</p>
                            <p>{product.store_name}</p>
                        </article>
                    ))
                ) : (
                    <div>상품이 없습니다.</div>
                )}
            </section>
        )}
    </FetchComponent>
);

export default ProductList;
