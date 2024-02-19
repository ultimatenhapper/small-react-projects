import React, { useState, useEffect, useRef } from "react";

import "./styles.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  let shouldFetch = useRef(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
      console.log("Data ", data);
    } catch (e) {
      console.log("Error ", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchProducts();
      shouldFetch = false;
    }
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length ? (
          products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
            </div>
          ))
        ) : (
          <div>No products</div>
        )}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load more products
        </button>
      </div>
      {disableButton ? <div>You have reached 100 products</div> : null}
    </div>
  );
};

export default LoadMoreData;
