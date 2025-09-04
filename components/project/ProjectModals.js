import React, { useState } from "react";
import {
  Download,
  IndianRupee,
  Phone,
  X,
  MessageSquare,
  Layout,
} from "lucide-react";
import { submitFormData } from "../../lib/api";

const ProjectModals = ({
  project,
  showBrochureModal,
  showPricingModal,
  showVideoLeadModal,
  showLayoutModal,
  showImageModal,
  setShowImageModal,
  selectedImage,
  formData,
  setFormData,
  showSuccess,
  resetForm,
  handleWhatsApp,
  handleCall,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const handleFormSubmit = async (e, type) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const interestMap = {
      brochure: "Download Brochure",
      pricing: "Get Price Details",
      video: "Watch Project Video",
      layout: "View Layout Plans",
    };

    try {
      const data = await submitFormData({
        name: formData.name,
        phone: formData.phone,
        email: formData.email || "",
        interest: interestMap[type] || "Website Lead",
      });

      console.log("Parsed response data:", data);

      // Check the response data
      if (data && data.status === "success") {
        setShowSuccess(true);
        resetForm(); // Reset form after successful submission
      } else {
        setError(data?.message || "Something went wrong while submitting. Please try again.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setError("Network error. Please check your connection and try again.");
      } else {
        setError(error.message || "An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSuccessMessage = (modalType) => (
    <div className="text-center">
      <div className="flex items-center justify-center mb-4 sm:mb-6">
        <div className="bg-green-100 p-4 rounded-full">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">✓</span>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Thank You!</h3>
      <p className="text-gray-600 mb-6">
        {modalType === "brochure" &&
          "Your request has been sent. You'll receive the brochure shortly."}
        {modalType === "pricing" &&
          "Our team will contact you with detailed pricing information."}
        {modalType === "video" &&
          "Video access will be provided shortly via WhatsApp or call."}
        {modalType === "layout" &&
          "Detailed layout plans will be shared with you shortly."}
      </p>
      <div className="space-y-3 mb-6">
        <button
          onClick={() => handleWhatsApp(modalType)}
          className="w-full flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          Send WhatsApp Message
        </button>
        <button
          onClick={handleCall}
          className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          <Phone className="h-5 w-5 mr-2" />
          Call Us Now
        </button>
      </div>
      <button
        onClick={() => resetForm(modalType)}
        className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
      >
        Close
      </button>
    </div>
  );

  const renderForm = (
    modalType,
    title,
    icon,
    buttonText,
    buttonColorClass = "bg-blue-600 hover:bg-blue-700"
  ) => (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {icon}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <button
          onClick={() => {
            setError("");
            setIsSubmitting(false);
            resetForm(modalType);
          }}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      <form
        onSubmit={(e) => handleFormSubmit(e, modalType)}
        className="space-y-4"
      >
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="9138331357"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget Range *
          </label>
          <select
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
          >
            <option value="">Select your budget range</option>
            <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
            <option value="1Cr-2Cr">₹1 Crore - ₹2 Crores</option>
            <option value="2Cr-3Cr">₹2 Crores - ₹3 Crores</option>
            <option value="3Cr-5Cr">₹3 Crores - ₹5 Crores</option>
            <option value="5Cr+">₹5 Crores & Above</option>
            <option value="flexible">Flexible Budget</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-4 py-3 text-white rounded-lg transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${buttonColorClass}`}
        >
          {isSubmitting ? "Submitting..." : buttonText}
        </button>
      </form>
    </>
  );

  const videoIcon = (
    <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center shadow-md mr-3">
      <span className="text-white text-xs font-bold ml-0.5">▶</span>
    </div>
  );

  return (
    <>
      {(showBrochureModal ||
        showPricingModal ||
        showVideoLeadModal ||
        showLayoutModal) && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 py-4">
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={() => {
                setError("");
                setIsSubmitting(false);
                if (showBrochureModal) resetForm("brochure");
                if (showPricingModal) resetForm("pricing");
                if (showVideoLeadModal) resetForm("video");
                if (showLayoutModal) resetForm("layout");
              }}
            ></div>
            <div className="relative w-full max-w-md p-4 sm:p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {showBrochureModal &&
                (showSuccess
                  ? renderSuccessMessage("brochure")
                  : renderForm(
                      "brochure",
                      "Download Brochure",
                      <Download className="h-6 w-6 text-blue-600 mr-3" />,
                      "Download Brochure"
                    ))}
              {showPricingModal &&
                (showSuccess
                  ? renderSuccessMessage("pricing")
                  : renderForm(
                      "pricing",
                      `Get Pricing - ${project?.name}`,
                      <IndianRupee className="h-6 w-6 text-blue-600 mr-3" />,
                      "Submit Request"
                    ))}
              {showVideoLeadModal &&
                (showSuccess
                  ? renderSuccessMessage("video")
                  : renderForm(
                      "video",
                      `Watch ${project?.name} Video`,
                      videoIcon,
                      "Watch Video Now",
                      "bg-red-500 hover:bg-red-600"
                    ))}
              {showLayoutModal &&
                (showSuccess
                  ? renderSuccessMessage("layout")
                  : renderForm(
                      "layout",
                      "View Layout Plans",
                      <Layout className="h-6 w-6 text-blue-600 mr-3" />,
                      "View Layout Plans"
                    ))}
            </div>
          </div>
        </div>
      )}

      {showImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative w-full h-full max-w-5xl max-h-screen p-4">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Project Image"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center mr-2">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="text-xs font-semibold text-gray-800">
                  Godrej Properties
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModals;
