import React from "react";
import {
  MapPin,
  Star,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  ChevronUp,
  MessageSquare,
} from "lucide-react";

const ProjectContact = ({
  project,
  setShowBrochureModal,
  setShowPricingModal,
  expandedFaq,
  setExpandedFaq,
  handleCall,
  handleWhatsApp,
}) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 transition-colors ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      {/* FAQs */}
      {project.faqs && project.faqs.length > 0 && (
        <section className="py-8 lg:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                {project.name} FAQs
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Frequently asked questions about this project
              </p>
            </div>
            <div className="space-y-4">
              {project.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <button
                    className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {expandedFaq === index ? (
                        <ChevronUp className="h-6 w-6 text-blue-600 transform group-hover:scale-110 transition-transform" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-500 transform group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 sm:px-6 pb-4 animate-fadeIn">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      {project.reviews && project.reviews.length > 0 && (
        <section className="py-8 lg:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                {project.name} Reviews
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                What our customers say about us
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 shadow-md">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">T</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed italic">
                    "{review.comment}"
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-gray-600 font-semibold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500">Verified Customer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Info with Links */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              {project.name} Contact Info
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Get in touch with our expert team
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg border border-blue-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center shadow-md">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Call Now
                </h3>
                <p className="text-base font-semibold text-gray-900 mb-3">
                  9138331357
                </p>
                <button
                  onClick={handleCall}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                >
                  Call Now
                </button>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center shadow-md">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  WhatsApp
                </h3>
                <p className="text-base font-semibold text-gray-900 mb-3">
                  Quick Response
                </p>
                <button
                  onClick={() => handleWhatsApp("pricing")}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold text-sm"
                >
                  WhatsApp
                </button>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center shadow-md">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-base font-semibold text-gray-900 mb-3 break-words">
                  info@tridentrealityinfo.com
                </p>
                <button
                  onClick={() =>
                    (window.location.href = `mailto:info@tridentrealityinfo.com`)
                  }
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm"
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Address */}
      <section className="py-8 lg:py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              {project.name} Office Address
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Visit our office for personalized consultation
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                {project.contactInfo.address}
              </p>
              <div className="flex items-center justify-center text-gray-600 mb-4 sm:mb-6">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-medium text-sm sm:text-base">
                  {project.contactInfo.officeHours}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                <span className="text-white text-lg font-bold">T</span>
              </div>
            </div>
            <div className="text-left">
              <div className="text-xl font-bold">Trident Realty</div>
              <div className="text-blue-200">Your Trusted Partner</div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Ready to Make {project.name} Your Home?
          </h2>
          <p className="text-sm sm:text-base mb-6 opacity-90">
            Don't miss out on this premium opportunity. Contact our experts
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setShowPricingModal(true)}
              className="px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              Schedule Site Visit
            </button>
            <button
              onClick={() => setShowBrochureModal(true)}
              className="px-6 py-3 bg-transparent text-white border-2 border-white rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              Get Complete Details
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectContact;
