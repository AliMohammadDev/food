import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useState } from "react";

function NavBar({setShowLogin}) {
  const [menu, setMenu] = useState("home");
  const navItems = ["home", "menu", "about us","mobile-app", "contact"];
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <img
      onClick={() => navigate("/")}
      src={assets.logo} alt="logo" className="h-8 cursor-pointer"  />

      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => {
              setMenu(item);
              navigate(
                item === "home"
                  ? "/" : item === "about us"
                  ? "/about-us"
                  : item === "menu"
                  ? "/menu"
                  : item === "mobile-app"
                  ? "#app-download"
                  : "#contact"
              );
            }}
            className={`cursor-pointer capitalize transition border-b-2 ${
              menu === item
                ? "text-orange-500 border-orange-500"
                : "hover:text-orange-500 border-transparent hover:border-orange-500"
            }`}
          >
            {item.replace("-", " ")}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <img
          src={assets.search_icon}
          alt="search"
          className="h-5 cursor-pointer"
        />
        <div
        onClick={() => navigate("/cart")}
        className="relative cursor-pointer">
          <img src={assets.basket_icon} alt="basket" className="h-5" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
        </div>

        <button
        onClick={() => setShowLogin(true)}
        className="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default NavBar;
