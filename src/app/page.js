"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1c1f23] text-white shadow-md">
      <div className="hidden sm:flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="bg-yellow-400 text-black font-bold text-lg px-4 py-2 rounded-tr-full rounded-br-full">
            RaviWeb
          </div>
        </div>

        <ul className="flex space-x-6 text-sm font-medium items-center">
          <li>
            <button className="bg-yellow-400 text-black px-4 py-1 rounded-full shadow hover:bg-yellow-500 transition">
              Home
            </button>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            About Us
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Our Services
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Our Gallery
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Enquiry
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Contact Us
          </li>
        </ul>
      </div>

      <div className="sm:hidden">
        <div className="flex flex-col items-center px-4 py-4">
          <div className="bg-yellow-400 text-black font-bold text-lg px-4 py-2 rounded-tr-full rounded-br-full mb-4">
            RaviWeb
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="bg-[#2a2e33] px-4 py-2">
            <ul className="flex flex-col items-center space-y-4 text-sm font-medium">
              <li>
                <button className="w-32 bg-yellow-400 text-black px-4 py-2 rounded-full shadow hover:bg-yellow-500 transition">
                  Home
                </button>
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition py-1">
                About Us
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition py-1">
                Our Services
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition py-1">
                Our Gallery
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition py-1">
                Enquiry
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition py-1">
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
