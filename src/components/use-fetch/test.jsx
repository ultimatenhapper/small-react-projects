import React from "react";
import useFetch from ".";

function UseFetchHookTest() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, loading);

  if (loading) return <h1>Loading data...</h1>;
  if (error) return <h1>Some error occurred! {error.message}</h1>;
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {data &&
        data.products &&
        data.products.map((dataItem) => (
          <p key={dataItem.id}>{dataItem.title}</p>
        ))}
    </div>
  );
}

export default UseFetchHookTest;
