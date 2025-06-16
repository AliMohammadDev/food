import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import Menu from "../pages/Menu/Menu";
import ErrorFallback from "../pages/ErrorFallback/ErrorFallback";
import Cart from "../components/Cart/Cart";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Logout from "../pages/Logout";
import Order from "../pages/Order";
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
        element: <Menu />,
      },

      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "place-order",
        element: <PlaceOrder />,
      },
      {
        path: "orders",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
