import { useState } from "react";
import "./App.css";
import ProductCreate from "./components/product/ProductCreate";
import ProductDetail from "./components/product/ProductDetail";
import ProductSearch from "./components/product/ProductSearch";
import ProductList from "./components/product/ProductList";
import IProduct from "./models/IProduct";
import AppState from "./models/AppState";
import ProductEdit from "./components/product/ProductEdit";

function App() {
  const [appState, setAppState] = useState(AppState.Search);
  const [products, setProducts] = useState(Array<IProduct>());
  const [productId, setProductId] = useState<number>(0);

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            onClick={() => setAppState(AppState.Search)}
          >
            App
          </a>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "1em", backgroundColor: "white" }}>
        {appState}<br/>
        {appState === AppState.Create && (
          <ProductCreate onCreate={() => setAppState(AppState.Search)} />
        )}

        {appState === AppState.Details &&  (
          // <ProductDetail id={productId} 
          // name={'Sandía'} peso={'1 Kg'}
          // fn1={(msg) => console.log('Ejecuntando a fn1' + msg)}
          // />
          <ProductDetail id={productId} />
        )}

        {appState === AppState.Edit &&  (
          <ProductEdit id={productId} onEdit={() => setAppState(AppState.Search)} />
        )}

        {appState === AppState.Search && (
          <>
            <button
              className="btn btn-primary"
              onClick={() => setAppState(AppState.Create)}
            >
              New
            </button>
            <ProductSearch onResults={(r) => setProducts(r)}/>
            <hr />
            <ProductList
              products={products}
              onSelect={(p) => {
                setProductId(p.id);
                setAppState(AppState.Details);
              }}
              onEdit={(p) => {
                setProductId(p.id);
                setAppState(AppState.Edit);
              }}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
