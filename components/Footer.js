import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-lg p-2 mr-3 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Trident Realty</h3>
                <p className="text-gray-400">Projects Details</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect property. We
              specialize in premium residential and commercial real estate with
              a focus on quality and customer satisfaction.{" "}
              <a
                href="/privacy-policy"
                className="text-gray-400 underline hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                📞{" "}
                <a
                  href="tel:+919138331358"
                  className="hover:text-white transition-colors"
                >
                  +91 9138331357
                </a>
              </p>
              <p>
                📧{" "}
                <a
                  href="mailto:info@tridentrealityinfo.com"
                  className="hover:text-white transition-colors"
                >
                  info@tridentrealityinfo..com
                </a>
              </p>
              <p>
                💬{" "}
                <a
                  href="https://wa.me/919138331357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Godrej Properties
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                M3M India
              </a>
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Real Estate Panipat
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Trident Realty. All rights reserved.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-400">
              <strong>Disclaimer:</strong> This website is operated by a channel
              partner of Trident Realty and is not the official site of Trident
              Realty. The content provided is for informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
