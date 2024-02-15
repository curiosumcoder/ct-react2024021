import { SyntheticEvent, useRef } from "react";
import ProductService from "./services/ProductService";
import IProduct from "./model/IProduct";

type productSearchProps = { onResults?: (r: Array<IProduct>) => void };

function ProductSearch({ onResults }: productSearchProps) {
  const iFilter = useRef<HTMLInputElement>(null);

  const searchAsync = async (event: SyntheticEvent) => {
    event.preventDefault();
    const filter = iFilter.current?.value ?? "";
    if (filter) {
      console.log(`Searching REST service for ${filter} ...`);
      const ps = new ProductService();
      try {
        const filtered = await ps.search(filter);
        //console.log(filtered);

        onResults?.(filtered);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="mb-3">
        <h6>Product Search</h6>
        <form className="row g-3" onSubmit={(event) => searchAsync(event)}>
          <input
            type="search"
            className="form-control"
            placeholder="Search here ..."
            ref={iFilter}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default ProductSearch;
