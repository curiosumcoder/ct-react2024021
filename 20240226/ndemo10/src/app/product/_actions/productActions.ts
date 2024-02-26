"use server";

import ProductData from "@/app/_data/ProductData";
import IProduct, { IProductSchema } from "@/app/_models/IProduct";
import { redirect } from "next/navigation";
import { z } from "zod";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function productCreate(fd: FormData) {
  "use server";
  console.log("productCreate: Creating product ...");

  await sleep(2000);

  const productName = fd.get("productName")?.valueOf();
  const quantityPerUnit = fd.get("quantityPerUnit")?.valueOf();
  const unitPrice = Number(fd.get("unitPrice")?.valueOf());

  const newProduct = { productName, quantityPerUnit, unitPrice } as IProduct;
  console.log(newProduct);

  const pD = new ProductData();
  //await pD.create(newProduct);

  redirect("/product");
}

// Para ser utilizado con el Hook useFormState
export type productCreateState = {
  message: string;
  validation?: Array<{ id: string; msg: string }>;
} | null;
export async function productCreateValidate(
  previousState: productCreateState,
  fd: FormData
): Promise<productCreateState> {
  console.log("productCreateValidate: Creating product ...");
  console.log("previousState: ", previousState);

  await sleep(2000);

  const productName = fd.get("productName")?.valueOf();
  const quantityPerUnit = fd.get("quantityPerUnit")?.valueOf();
  const unitPrice = Number(fd.get("unitPrice")?.valueOf());

  const newProduct = { productName, quantityPerUnit, unitPrice } as IProduct;
  console.log(newProduct);

  // Data validation
  const parse = IProductSchema.safeParse(newProduct);

  if (!parse.success) {
    let validation: Array<{ id: string; msg: string }> = [];
    parse.error.errors.forEach((errorDetail, index) => {
      validation.push({
        id: errorDetail.path.join("."),
        msg: errorDetail.message,
      });
    });

    return { message: "Product is invalid", validation };
  }

  return {
    message: "Product created successfully.",
  };
}

export async function productEdit(fd: FormData) {
    console.log("Creating product ...");

    const id = Number(fd.get("id")?.valueOf());
    const productName = fd.get("productName")?.valueOf();
    const quantityPerUnit = fd.get("quantityPerUnit")?.valueOf();
    const unitPrice = Number(fd.get("unitPrice")?.valueOf());
    const quantity = Number(fd.get("quantity")?.valueOf());

    const newP = {
      id,
      productName,
      quantityPerUnit,
      unitPrice,
      quantity,
    } as IProduct;
    console.log(newP);

    const pD = new ProductData();
    //await pD.update(newP);

    redirect("/product");
  }

export async function productDelete(fd: FormData) {
  const id = Number(fd.get("id"));

  const pD = new ProductData();
  //await pD.delete(id);

  redirect("/product");
}
