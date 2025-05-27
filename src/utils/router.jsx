import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import Menu from "../pages/Menu/Menu";
import ErrorFallback from "../pages/ErrorFallback/ErrorFallback";
import Cart from "../components/Cart/Cart";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import AboutUs from "../pages/AboutUs/AboutUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorFallback />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "menu",
        element: <AboutUs />,
      },

      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "place-order",
        element: <PlaceOrder />,
      },
    ],
  },
]);

export default router;
