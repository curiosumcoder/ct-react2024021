import React from "react";
import ProductCreateForm from "../_components/ProductCreateForm";
import Link from "next/link";

export default function ProductCreate() {
  return (
    <>
      <h3>Create</h3>
      <Link className="btn btn-secondary" href={"/product"}>
        Back
      </Link>

      <ProductCreateForm />
    </>
  );
}
