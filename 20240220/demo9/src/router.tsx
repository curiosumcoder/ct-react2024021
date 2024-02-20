import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import ProductMain from "./components/product/ProductMain";
import ProductIndex from "./components/product/ProductIndex";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App />, 
    errorElement: <Error />,
    children: [
        { 
            path: 'product', 
            element: <ProductMain />,
            children: [
                { index: true, element: <ProductIndex />},
                { path: 'create', element: <h3>Create Product</h3> },
                { path: 'detail/:id', element: <h3>Product Details</h3> },
            ]
        },
    ]
    },
  {
    path: "/about",
    element: (
      <>
        <h1>About</h1>
        <p>Description of our app</p>
      </>
    ),
  },
]);

export default router;
