import React from "react";
import ProductData from "../_data/ProductData";
import Link from "next/link";

type piProps = { params: any; searchParams: { filter: string } };

export default async function ProductIndex({ params, searchParams }: piProps) {
  console.log(searchParams);
  const { filter } = searchParams;
  //console.log(filter)
  const pD = new ProductData();
  const products = await pD.search(filter);

  return (
    <>
      <h1>Product</h1>

      <Link href={"/product/create"}>Create</Link>
      <hr />
      <form>
        <input
          type="search"
          name="filter"
          defaultValue={filter}
          placeholder="Type here ..."
        />
        <button type="submit">Search</button>
      </form>
      <hr />
      {products &&
        products.map((p) => (
          <li key={p.id}>
            {p.id},{p.productName},{p.unitPrice},
            <Link href={`/product/detail/${p.id}`}>Detail</Link>
          </li>
        ))}
      {products.length === 0 && <p>No data</p>}
    </>
  );
}
