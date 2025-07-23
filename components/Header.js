import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X, Home } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCallClick = () => {
    window.open("tel:+919138331357", "_self");
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your premium properties. Please share more details."
    );
    window.open(`https://wa.me/919138331357?text=${message}`, "_blank");
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <div className="bg-white rounded-lg p-2 mr-3 shadow-lg border border-gray-200">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Trident Realty
                </h1>
                <p className="text-sm text-gray-600">Project Info</p>
              </div>
            </Link>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="/#projects"
                className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 border border-gray-300 rounded-lg hover:border-blue-600 transition-colors font-medium"
              >
                <Home className="h-4 w-4 mr-2" />
                All Projects
              </a>
              <button
                onClick={handleCallClick}
                className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 border border-gray-300 rounded-lg hover:border-blue-600 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                9138331357
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4 mb-4">
                <Link
                  href="/"
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
                <Link
                  href="/#projects"
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  <Home className="h-4 w-4 mr-2" />
                  All Projects
                </Link>
              </nav>
              <div className="space-y-3 mt-4">
                <div className="flex space-x-3">
                  <button
                    onClick={handleCallClick}
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 border border-gray-300 rounded-lg hover:border-blue-600 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    9138331357
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
