import ProductData from '@/app/_data/ProductData';
import { redirect } from 'next/navigation';
import React from 'react'

type pdProps = { params: { id: string } };

export default async function ProductDetail({params}: pdProps) {
    console.log(params.id);
    const {id} = params;

    const pD = new ProductData();
    const p = await pD.get(id);

    async function productDelete(fd: FormData) {
        'use server'

        const id = Number(fd.get('id'))

        const pD = new ProductData();
        await pD.delete(id)

        redirect('/product')
    }

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
            <input type="hidden" name='id' value={p.id} />
            <button type="submit">Delete</button>
          </form>
    </>
  )
}
