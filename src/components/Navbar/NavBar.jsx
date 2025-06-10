import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const navItems = ["home", "menu", "about us", "contact"];
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white relative">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="h-8 cursor-pointer"
      />

      {/* Nav Items - Desktop */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => {
              setMenu(item);
              setMobileMenuOpen(false);
              navigate(
                item === "home"
                  ? "/"
                  : item === "about us"
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

      {/* Actions */}
      <div className="hidden md:flex items-center gap-4">
        <img
          src={assets.search_icon}
          alt="search"
          className="h-5 cursor-pointer"
        />
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img src={assets.basket_icon} alt="basket" className="h-5" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
        >
          Sign In
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X className="h-6 w-6  cursor-pointer" />
          ) : (
            <Menu className="h-6 w-6 cursor-pointer" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 z-10 md:hidden">
          {navItems.map((item) => (
            <div
              key={item}
              onClick={() => {
                setMenu(item);
                setMobileMenuOpen(false);
                navigate(
                  item === "home"
                    ? "/"
                    : item === "about us"
                    ? "/about-us"
                    : item === "menu"
                    ? "/menu"
                    : item === "mobile-app"
                    ? "#app-download"
                    : "#contact"
                );
              }}
              className={`cursor-pointer capitalize border-b pb-2 ${
                menu === item
                  ? "text-orange-500 border-orange-500"
                  : "hover:text-orange-500 border-transparent hover:border-orange-500"
              }`}
            >
              {item.replace("-", " ")}
            </div>
          ))}

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 mt-4">
            <img
              src={assets.search_icon}
              alt="search"
              className="h-5 cursor-pointer"
            />
            <div
              onClick={() => navigate("/cart")}
              className="relative cursor-pointer"
            >
              <img src={assets.basket_icon} alt="basket" className="h-5" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            </div>
            <button
              onClick={() => {
                setShowLogin(true);
                setMobileMenuOpen(false);
              }}
              className="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-orange-600 transition w-full"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
