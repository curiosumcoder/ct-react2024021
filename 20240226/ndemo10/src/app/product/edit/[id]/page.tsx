import ProductData from "@/app/_data/ProductData";
import React from "react";
import { productEdit } from "../../_actions/productActions";

type pdParams = { params: { id: string } };

export default async function ProductDetails({ params }: pdParams) {
  const { id } = params;
  console.log(id);

  const pD = new ProductData();
  const p = await pD.get(id);
  console.log(p);

  return (
    <>
      <h3>Edit</h3>

      <form action={productEdit}>
        <input type="hidden" name="id" value={id} />
        <input
          type="text"
          name="productName"
          defaultValue={p.productName}
          placeholder="productName"
        />
        <br />
        <input
          type="text"
          name="quantityPerUnit"
          defaultValue={p.quantityPerUnit}
          placeholder="quantityPerUnit"
        />
        <br />
        <input
          type="number"
          name="unitPrice"
          defaultValue={p.unitPrice}
          placeholder="unitPrice"
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
