import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import Cart from "../cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
