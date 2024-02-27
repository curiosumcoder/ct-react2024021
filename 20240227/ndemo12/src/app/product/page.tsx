'use cliente'
//export const dynamic = 'force-dynamic'
import React from "react";
import Link from "next/link";
import ProductService from "../_services/ProductService";

type piParams = { params: any; searchParams: { filter: string } };

export default async function ProductIndex({ searchParams }: piParams) {
  //const {filter} = searchProps;
  console.log(searchParams);
  const { filter } = searchParams;
  console.log(filter);

  const pS = new ProductService();
  const products = await pS.search(filter);

  return (
    <>
      <Link className="btn btn-primary" href={"/product/create"}>
        Create
      </Link>
      <br />

      <div className="mt-3 mb-3">
        <form>
          <input
            type="search"
            name="filter"
            className="form-control"
            defaultValue={filter}
            placeholder="Type here ..."
          />
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
      <hr />
      {products && (
        <>
          <h6>Product List</h6>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.productName}</td>
                  <td>{p.unitPrice}</td>
                  <td>
                    <Link href={`/product/detail/${p.id}`} prefetch={true}>
                      <i
                        className="bi bi-caret-right"
                        style={{ color: "green", cursor: "pointer" }}
                      ></i>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/product/edit/${p.id}`}>
                      <i
                        className="bi bi-pencil-square"
                        style={{ color: "gray", cursor: "pointer" }}
                      ></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
