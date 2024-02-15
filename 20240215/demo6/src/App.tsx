import { useState } from 'react'
import './App.css'
import ProductSearch from './ProductSearch'
import ProductList from './ProductList'
import IProduct from './model/IProduct'

function App() {
  const [productsList, setProductsList] = useState(Array<IProduct>())
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Demo 6
          </a>
        </div>
      </nav>
      {/* <p style="margin-top: 1em;"></p> */}
      <div className="container" style={{ marginTop: "1em" }}>
        {productsList.length}
        <ProductSearch onResults={(r: Array<IProduct>) => setProductsList(r) } />
        <ProductList products={productsList} />
      </div>      
    </>
  )
}

export default App
