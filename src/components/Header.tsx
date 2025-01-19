import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-black py-1 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-white text-2xl font-bold cursor-pointer"
            >
              Blog Posts
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 lg:space-x-2">
            <p className="text-white text-sm font-semibold">user Name</p>

            <div
              onClick={() => {
                sessionStorage.removeItem("token");
                window.location.href = "/sign-in";
              }}
              className="block  py-2 px-4 text-sm bg-white rounded-sm font-semibold hover:bg-gray-100 cursor-pointer active:scale-95"
            >
              Sign out
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
