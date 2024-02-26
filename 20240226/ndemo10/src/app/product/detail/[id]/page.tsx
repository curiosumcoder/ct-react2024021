//export const revalidate = 0;
import ProductData from "@/app/_data/ProductData";
import React from "react";
import { productDelete } from "../../_actions/productActions";

type pdParams = { params: { id: string } };

export default async function ProductDetails({ params }: pdParams) {
  const { id } = params;
  console.log(id);

  const pD = new ProductData();
  const p = await pD.get(id);
  console.log(p);

  return (
    <>
      <h1>Product Detail</h1>

      <dl>
        <dt>Id</dt>
        <dd>{p?.id}</dd>
        <dt>Name</dt>
        <dd>{p?.productName}</dd>
        <dt>Unit Price</dt>
        <dd>{p?.unitPrice}</dd>
        <dt>Quantity Per Unit</dt>
        <dd>{p?.quantityPerUnit}</dd>
      </dl>
      <form action={productDelete}>
        <input type="hidden" name="id" value={p?.id} />
        <button type="submit" className="btn btn-danger">Delete</button>
      </form>
    </>
  );
}
