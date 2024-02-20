import { useEffect, useMemo, useState } from "react";
import IProduct from "../../models/IProduct";
import ProductService from "../../services/ProductService";
import { useLoaderData, useParams } from "react-router-dom";

function ProductDetail() {
  // Opción #1
  const ps = useMemo(() => new ProductService(), []);
  const [product, setProduct] = useState<IProduct | null>();

  const parametros = useParams();
  console.log(parametros);

  const { id } = useParams();

  useEffect(() => {
    console.log("After render component ...");

    (async () => {
      setProduct(await ps.get(Number(id)));
    })();

    return () => {
      console.log("Clean-up component ...");
    };
  }, [ps, id]);

  // Opción 2
  // const product: IProduct = useLoaderData() as IProduct;

  return (
    <>
      {product && (
        <>
          <h6>Product Details</h6>
          <dl>
            <dt>Id</dt>
            <dd>{product?.id}</dd>
            <dt>Name</dt>
            <dd>{product?.productName}</dd>
            <dt>Unit Price</dt>
            <dd>{product?.unitPrice}</dd>
            <dt>Quantity Per Unit</dt>
            <dd>{product?.quantityPerUnit}</dd>
            <dt>Category</dt>
            <dd>{product.category?.categoryName ?? "No category"}</dd>
            <dt>Supplier</dt>
            <dd>{product.supplier?.companyName ?? "No supplier"}</dd>
          </dl>
        </>
      )}
      {!product && (
        <p className="alert alert-info ">No product details to show!</p>
      )}
    </>
  );
}

export default ProductDetail;
