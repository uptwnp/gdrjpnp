import React from "react";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";

const Hero = () => {
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
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Welcome to
              <span className="text-blue-600"> Trident Reality</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore top Trident Reality Projects – Verified. Profitable. Ready
              to Move. Get expert help. Buy smart.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <button
                onClick={handleCallClick}
                className="flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-3" />
                Call us now
                <ArrowRight className="h-5 w-5 ml-3" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageSquare className="h-5 w-5 mr-3" />
                WhatsApp Us
                <ArrowRight className="h-5 w-5 ml-3" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">35+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">20K+</div>
                <div className="text-sm text-gray-600">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">17+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  13 Million+
                </div>
                <div className="text-sm text-gray-600">Sq.ft. Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
