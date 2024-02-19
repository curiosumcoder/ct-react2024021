import { useEffect, useState } from "react";
import useInput, { IInput } from "../../hooks/useInput";
import useProductSearch from "../../hooks/useProductSearch";
import IProduct from "../../models/IProduct";

function HooksTest() {
  // const [filter, setFilter] = useState('')
  const [nameProps, setName] = useInput("");

  // DRY
  const [{ data, isProcessing, isError }, doSearch] = useProductSearch();

  useEffect(() => {
    console.log(nameProps)
    doSearch((nameProps as IInput<string>).value);
  });

  return (
    <>
      <hr />
      <h5>HooksTest</h5>
      <p>
        {/* <input type="text" value={filter} onChange={(ev) => setFilter(ev.target.value)} /> */}
        <input type="text" {...nameProps} className="form-control-sm" />
        <br />
        {(nameProps as IInput<string>).value}
      </p>
      <hr />
      {data && (
        <ul>
          {data.map((p: IProduct) => (
            <li key={p.id}>{p.productName}</li>
          ))}
        </ul>
      )}
      {isProcessing && (
        <div className="alert alert-secondary">Processing 👾...</div>
      )}
      {isError && (
        <div className="alert alert-warning">Something went wrong 😮...</div>
      )}
    </>
  );
}

export default HooksTest;
