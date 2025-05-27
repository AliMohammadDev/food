import React, { useState } from "react";
import { assets } from "../../assets/assets";

function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <form className="bg-white p-8 rounded-xl w-full max-w-md shadow-lg relative animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
            className="w-6 h-6 cursor-pointer hover:rotate-90 transition-transform duration-200"
          />
        </div>

        <div className="space-y-4 mb-6">
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
        >
          {currentState === "Sign Up" ? "Sign Up" : "Login"}
        </button>

        <div className="flex items-start gap-2 text-sm mt-4 text-gray-600">
          <input type="checkbox" required className="mt-1" />
          <p>
            By continuing, you agree to our{" "}
            <span className="text-orange-500 underline cursor-pointer">
              Terms of Use
            </span>{" "}
            and{" "}
            <span className="text-orange-500 underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>

        <p className="mt-6 text-sm text-center text-gray-700">
          {currentState === "Login" ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setCurrentState("Sign Up")}
                className="text-orange-500 cursor-pointer font-semibold"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setCurrentState("Login")}
                className="text-orange-500 cursor-pointer font-semibold"
              >
                Login
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}

export default LoginPopup;
