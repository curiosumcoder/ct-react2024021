import { useState, useRef, SyntheticEvent } from "react";
import IProduct from "../../models/IProduct";
import ProductService from "../../services/ProductService";

type productSearchProps = { onResults?: (r: Array<IProduct>) => void };

function ProductSearch({ onResults }: productSearchProps) {
  const iFilter = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isError, setIsError] = useState(false);

  const search = async (event: SyntheticEvent) => {
    event.preventDefault();

    const filter = iFilter.current?.value ?? "";

    if (filter) {
      console.log(`Searching REST service for ${filter} ...`);

      const ps = new ProductService();

      setIsProcessing(true);
      setIsError(false);

      try {
        const filtered = await ps.search(filter);
        onResults?.(filtered);
      } catch (error) {
        setIsError(true);
      }
      setIsProcessing(false);
    }
  };

  return (
    <div className="mt-3 mb-3">
      <h6>Product Search</h6>
      <form className="row g-3" onSubmit={(event) => search(event)}>
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
      {isProcessing && (
        <div className="alert alert-secondary">Processing 👾...</div>
      )}
      {isError && (
        <div className="alert alert-warning">Something went wrong 😮...</div>
      )}
    </div>
  );
}

export default ProductSearch;