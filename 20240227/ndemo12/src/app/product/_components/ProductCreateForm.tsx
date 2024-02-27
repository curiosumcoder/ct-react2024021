"use client";

import React, { SyntheticEvent, useRef, useState } from "react";
import ButtonSave from "@/app/_components/ButtonSave";
import { productCreate } from "@/app/product/_actions/productActions";

function ProductCreateForm() {
  const [isValid, setIsValid] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const checkValidation = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      setIsValid(form.current?.checkValidity() ?? false);
      console.log(target.validity);
      if (!target.validity.valid) {
        target.classList.remove("invalid");
        target.classList.add("is-invalid");
      } else {
        target.classList.remove("is-invalid");
        target.classList.add("is-valid");
      }
    }
  };

  return (
    <>
      <form ref={form} action={productCreate}>
        <div className="mb-3">
          <label htmlFor="iName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="iName"
            placeholder="Product Name"
            required
            minLength={2}
            maxLength={32}
            name="productName"
            onChange={(event) => checkValidation(event)}
          />
          <label htmlFor="iUnitPrice" className="form-label">
            Unit Price
          </label>
          <input
            type="number"
            className="form-control"
            id="iUnitPrice"
            placeholder="Unit Price"
            required
            min={1}
            name="unitPrice"
            onChange={(event) => checkValidation(event)}
          />
          <label htmlFor="iQuantityPerUnit" className="form-label">
            Quantity Per Unit
          </label>
          <input
            type="text"
            className="form-control"
            id="iQuantityPerUnit"
            placeholder="Quantity Per Unit"
            required
            minLength={2}
            name="quantityPerUnit"
            onChange={(event) => checkValidation(event)}
          />
        </div>

        <ButtonSave isValid={isValid} />
      </form>
    </>
  );
}

export default ProductCreateForm;
