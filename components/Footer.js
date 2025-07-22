import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-lg p-2 mr-3 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Trident Realty</h3>
                <p className="text-gray-400">Premium Properties</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect property. We specialize in premium 
              residential and commercial real estate with a focus on quality and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 +91 98765 43210</p>
              <p>📧 info@tridentrealty.com</p>
              <p>📍 Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Trident Realty. All rights reserved.
            </p>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-400">
              <strong>Disclaimer:</strong> This website is operated by a channel partner of Trident Realty 
              and is not the official site of Trident Realty. The content provided is for informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;