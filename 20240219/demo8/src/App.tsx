import { useState, createContext } from "react";
import "./App.css";
import CurrencyCurrent from "./components/CurrencyCurrent";
import HooksTest from "./components/hooks/HooksTest";
import CompositionTest from "./components/composition/CompositionTest";
import HighOrderTest from "./components/highOrder/HighOrderTest";

export const monedas = {
  colon: {
    id: 1,
    nombre: "Colón",
    signo: "₡",
  },
  dolar: {
    id: 2,
    nombre: "Dólar",
    signo: "$",
  },
};

export const MonedaContext = createContext({});
export const IdiomaContext = createContext({});

function App() {
  const [moneda, setMoneda] = useState(monedas.colon);
  const [idioma, setIdioma] = useState('ES');
  return (
    <>
      {/* <MonedaContext.Provider value={moneda}>         */}
      <MonedaContext.Provider value={{ moneda, setMoneda }}>
        <IdiomaContext.Provider value={idioma}>
          <nav className="navbar bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                App
              </a>
              <div className="navbar-text">
                {`${moneda.signo} - ${moneda.nombre}`}
                <select
                  className="form-control-sm"
                  onChange={(e) => {
                    e.target.value === "1"
                      ? setMoneda(monedas.colon)
                      : setMoneda(monedas.dolar);
                  }}
                >
                  <option value="1">₡ - Colón </option>
                  <option value="2"> $- Dólar</option>
                </select>
              </div>
            </div>
          </nav>
          <div className="container" style={{ marginTop: "1em" }}>
            {/* <CurrencyCurrent /> */}
            {/* <HooksTest /> */}
            {/* <CompositionTest /> */}
            {/* <HighOrderTest/> */}
          </div>
        </IdiomaContext.Provider>
      </MonedaContext.Provider>
    </>
  );
}

export default App;

