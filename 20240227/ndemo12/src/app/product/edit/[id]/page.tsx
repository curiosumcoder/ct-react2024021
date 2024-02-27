import React from "react";
import { productEdit } from "../../_actions/productActions";
import ProductService from "@/app/_services/ProductService";

type pdParams = { params: { id: string } };

export default async function ProductDetails({ params }: pdParams) {
  const { id } = params;
  console.log(id);

  const pS = new ProductService();
  const p = await pS.get(Number(id));
  console.log(p);

  return (
    <>
      <h3>Edit</h3>

      {p && (
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
      )}
    </>
  );
}
