"use server";

import IProduct, { IProductSchema } from "@/app/_models/IProduct";
import ProductService from "@/app/_services/ProductService";
import { redirect } from "next/navigation";

function sleep(ms:number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function productCreate(fd: FormData) {
  "use server";
  console.log("productCreate: Creating product ...");

  await sleep(2000);

  const productName = fd.get("productName")?.valueOf();
  const quantityPerUnit = fd.get("quantityPerUnit")?.valueOf();
  const unitPrice = Number(fd.get("unitPrice")?.valueOf());

  const product = { productName, quantityPerUnit, unitPrice } as IProduct;
  console.log(product);

  const pS = new ProductService();
  await pS.save(product);

  redirect("/product");
}

export async function productEdit(fd: FormData) {
    console.log("Creating product ...");

    const id = Number(fd.get("id")?.valueOf());
    const productName = fd.get("productName")?.valueOf();
    const quantityPerUnit = fd.get("quantityPerUnit")?.valueOf();
    const unitPrice = Number(fd.get("unitPrice")?.valueOf());

    const product = {
      id,
      productName,
      quantityPerUnit,
      unitPrice
    } as IProduct;
    console.log(product);

    const pS = new ProductService();
    await pS.edit(id, product);

    redirect("/product");
  }

export async function productDelete(fd: FormData) {
  const id = Number(fd.get("id"));

  const pS = new ProductService();
  await pS.delete(id);

  redirect("/product");
}
