import React from "react";
import { assets } from "../../assets/assets";
import Facebook from "../../assets/Facebook";
import Twitter from "../../assets/Twitter";
import Google from "../../assets/Google";

function Footer() {
  return (
    <footer className="bg-orange-50 text-gray-800 mt-20" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Description */}
        <div className="space-y-4">
          <img src={assets.logo} alt="logo" className="w-32" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Discover your favorite meals with Tomato. Fresh ingredients, fast
            delivery, and delicious taste.
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook />
            <Twitter />
            <Google />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="cursor-pointer hover:text-orange-500 transition">
              Home
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition">
              About Us
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition">
              Delivery
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>+9639-515-486-85</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      {/* Divider and Copyright */}
      <hr className="border-gray-300" />
      <div className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} Tomato. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
