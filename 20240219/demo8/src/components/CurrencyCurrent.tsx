import { useContext, useEffect } from "react";
import { MonedaContext, monedas } from "../App";

function CurrencyCurrent() {
    const {moneda, setMoneda} = useContext(MonedaContext);
    
    useEffect(() => {
      console.log("CurrencyCurrent: ", moneda, new Date());
    });

    return (
      <>
            <div className="mb-3"><strong>{moneda.signo}</strong> {moneda.nombre} </div>            
            <button className="btn btn-primary" onClick={()=> setMoneda(monedas.dolar)}>Set Dolar</button>
      </>
    );
  }

export default CurrencyCurrent