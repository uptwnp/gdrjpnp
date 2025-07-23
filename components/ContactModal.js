import React, { useState } from "react";
import { X, Phone, MessageSquare, IndianRupee } from "lucide-react";

const ContactModal = ({ isOpen, onClose, type, projectName }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    budget: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://prop.digiheadway.in/api/submit.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            budget: formData.budget,
          }),
        }
      );

      if (response.ok) {
        console.log("Data saved successfully");
        setShowSuccess(true); // show thank you message or modal
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handleWhatsApp = () => {
    const message = getWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919138331357?text=${encodedMessage}`, "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919138331357", "_self");
  };

  const getWhatsAppMessage = () => {
    const baseMessage = `Hi! I'm interested in ${
      projectName || "your project"
    }.`;

    switch (type) {
      case "pricing":
        return `${baseMessage} Can you please share the complete price list and current offers? My budget is ${formData.budget}. Name: ${formData.name}, Phone: ${formData.phone}`;
      case "video":
        return `${baseMessage} I would like to watch the project walkthrough video. Name: ${formData.name}, Phone: ${formData.phone}`;
      case "callback":
        return `${baseMessage} Please call me back for detailed information. Name: ${formData.name}, Phone: ${formData.phone}`;
      case "call":
        return `${baseMessage} I would like to schedule a call to discuss the project details. Name: ${formData.name}, Phone: ${formData.phone}`;
      case "whatsapp":
        return `${baseMessage} I'm interested in getting more information. Name: ${formData.name}, Phone: ${formData.phone}`;
      default:
        return `${baseMessage} Name: ${formData.name}, Phone: ${formData.phone}`;
    }
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", budget: "" });
    setShowSuccess(false);
    onClose();
  };

  const getModalTitle = () => {
    switch (type) {
      case "call":
        return "Request a Call";
      case "whatsapp":
        return "Connect on WhatsApp";
      case "pricing":
        return `Get Pricing - ${projectName}`;
      case "callback":
        return "Request a Callback";
      case "video":
        return `Watch ${projectName} Video`;
      default:
        return "Contact Us";
    }
  };

  const getModalIcon = () => {
    switch (type) {
      case "call":
        return <Phone className="h-6 w-6 text-blue-600" />;
      case "whatsapp":
        return <MessageSquare className="h-6 w-6 text-green-600" />;
      case "pricing":
        return <IndianRupee className="h-6 w-6 text-blue-600" />;
      case "callback":
        return <Phone className="h-6 w-6 text-blue-600" />;
      case "video":
        return (
          <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-xs font-bold ml-0.5">▶</span>
          </div>
        );
      default:
        return <Phone className="h-6 w-6 text-blue-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={showSuccess ? resetForm : onClose}
        ></div>

        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {showSuccess ? (
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Your details have been sent to our team and you will be
                contacted soon.
              </p>

              <div className="space-y-3 mb-6">
                <p className="text-sm text-gray-500">
                  While you wait, you can also:
                </p>

                <button
                  onClick={handleWhatsApp}
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
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {type === "video" && (
                <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
                  <div className="flex items-center mb-0">
                    <div className="bg-red-500 rounded-full p-3 mr-3 shadow-lg">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">▶</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Exclusive Video Access
                      </h4>
                      <p className="text-sm text-gray-600">
                        Get instant access to project walkthrough video
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {getModalIcon()}
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">
                    {getModalTitle()}
                  </h3>
                </div>
                <button
                  onClick={resetForm}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    placeholder="9138331357"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg bg-white"
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
                  className={`w-full px-4 py-2 rounded-lg transition-colors font-semibold ${
                    type === "video"
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : type === "whatsapp"
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {type === "whatsapp"
                    ? "Send WhatsApp Message"
                    : type === "video"
                    ? "Watch Video Now"
                    : "Submit Request"}
                </button>
              </form>

              <p className="mt-4 text-xs text-gray-500">
                {type === "video"
                  ? "Your information is secure. Video access will be provided instantly after submission."
                  : "Your information is secure and will only be used to contact you about your inquiry."}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
