import { createBrowserRouter } from "react-router";
import App from "../App";
import ProductDetailPage from "../page/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailPage />,
  },
]);

export { router };
