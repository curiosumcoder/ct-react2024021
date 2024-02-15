import React from "react";
import IProduct from "./model/IProduct";

type productListProps = {
  products: Array<IProduct>;
  onSelect?: (p: IProduct) => void;
};

function ProductList({ products, onSelect }: productListProps) {
  if (products && products.length > 0) {
    return (
      <>
        <h6>Product List</h6>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: IProduct) => (
              <tr key={p.productID}>
                <td>{p.productID}</td>
                <td>{p.productName}</td>
                <td>{p.unitPrice}</td>
                <td>{p.category?.categoryName ?? ""}</td>
                <td>
                  <i
                    className="bi bi-plus-circle-fill"
                    style={{ color: "green", cursor: "pointer" }}
                    onClick={() => onSelect?.(p)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  } else {
    return <p className="alert alert-info">No data to show!</p>;
  }
}

export default ProductList;
