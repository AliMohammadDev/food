import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import LoginGroup from "./components/Logingroup/LoginGroup";

const App = () => {
  const location = useLocation();

  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      {showLogin ? <LoginGroup /> : <></>}
      <NavBar setShowLogin={setShowLogin} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
