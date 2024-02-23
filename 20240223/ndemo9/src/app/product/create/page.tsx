import ProductData from '@/app/_data/ProductData';
import IProduct from '@/app/_models/IProduct';
import { redirect } from 'next/navigation';
import React from 'react'

export default function ProductCreate() {
    console.log('ProductCreate constructor ...');

    async function productCreate(fd: FormData) {
        'use server'
        console.log('productCreate ...');

        const product = fd.get('productName')
        const newP = { 
            productName: fd.get('productName')   
        } as IProduct;

        const p = Object.fromEntries(fd.entries());
        console.log(p);

        const pD = new ProductData();
        await pD.create(p)

        redirect('/product')
    }

  return (
    <>
        <h1>Product Create</h1>
        <form action={productCreate}>
            <input type="text" 
            name="productName" 
            placeholder='productName' />
            <br />
            <input type="number" name="unitPrice" 
            placeholder='unitPrice'/>
            <br />
            <input type="number" name="quantity" 
            placeholder='quantity'/>
            <br />
            <input type="text" name="quantityPerUnit" 
            placeholder='quantityPerUnit'/>
            <br />
            <br />
            <button type='submit'>Save</button>
        </form>
    </>
  )
}
