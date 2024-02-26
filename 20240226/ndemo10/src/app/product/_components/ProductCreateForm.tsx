"use client";

import React, { SyntheticEvent, useRef, useState } from "react";
import ButtonSave from "@/app/_components/ButtonSave";
import {
  productCreate,
  productCreateValidate,
} from "@/app/product/_actions/productActions";
import { useFormState } from "react-dom";

function ProductCreateForm() {
  const [state, formAction] = useFormState(productCreateValidate,null);

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
      <form ref={form} action={formAction}>
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
      <p className="text-info">{state?.message}</p>
      {state?.validation && (
        <p className="text-danger">
          {state?.validation.map((m) => (
            <>
              {m.id} - {m.msg}<br />
            </>
          ))}
        </p>
      )}
    </>
  );
}

export default ProductCreateForm;
