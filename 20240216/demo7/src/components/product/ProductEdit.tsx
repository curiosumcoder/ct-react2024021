import { SyntheticEvent, useEffect, useMemo, useRef, useState } from "react";
import IProduct from "../../models/IProduct";
import ProductService from "../../services/ProductService";

type productEditProps = { id: number; onEdit?: () => void };

function ProductEdit({ id, onEdit }: productEditProps) {
  const ps = useMemo(() => new ProductService(), []);
  const [product, setProduct] = useState<IProduct | null>({} as IProduct);
  const [isValid, setIsValid] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    console.log("After render component ...");

    (async () => {
      setProduct(await ps.get(id));
      // Validar los datos del objeto recien cargado
      setIsValid(form.current?.checkValidity() ?? false);
    })();

    return () => {
      console.log("Clean-up component ...");
    };
  }, [ps, id]);  

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const ps = new ProductService();
    await ps.edit(id, product!);
    onEdit?.();
  };

  const checkValidation = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      setIsValid(form.current?.checkValidity() ?? false);
      console.log(target.validity);
      if (!target.validity.valid) {
        target.classList.add("is-invalid");
      } else {
        target.classList.remove("is-invalid");
        target.classList.add("is-valid");

        // Si el input es válido se actualiza la propiedad en el objeto
        setProduct({ ...product!, ...{ [target.name]: target.value } });
      }
    }
  };

  return (
    <>
      {product && (
        <>
          <h6>Product Edit</h6>
          {/* {JSON.stringify(product)} */}
          <form onSubmit={(event) => handleSubmit(event)} ref={form}>
            <div className="mb-3">
              <label htmlFor="iName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="iName"
                placeholder="Name"
                required
                minLength={2}
                maxLength={32}
                name="productName"
                defaultValue={product.productName}
                onChange={(event) => checkValidation(event)}
              />
              <span id="iNameValidation"></span>
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
                defaultValue={product.unitPrice}
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
                defaultValue={product.quantityPerUnit}
                onChange={(event) => checkValidation(event)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isValid}
            >
              Save
            </button>
          </form>
        </>
      )}
      {!product && (
        <p className="alert alert-info ">No product details to show!</p>
      )}
    </>
  );
}

export default ProductEdit;
