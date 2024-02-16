import { useEffect, useMemo, useState} from 'react';
import IProduct from '../../models/IProduct';
import ProductService from '../../services/ProductService';

function ProductDetail({id}: {id: number}) {

  const ps = useMemo(() => new ProductService(), []);
  const [product, setProduct] = useState<IProduct|null>();  

  useEffect(() => {
    console.log("After render component ...");

    (async () => {
      setProduct(await ps.get(id));
    })();

    return () => {
      console.log("Clean-up component ...");
    };
  },[ps, id]);

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
