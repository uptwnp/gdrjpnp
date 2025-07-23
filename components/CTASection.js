import React, { useState } from "react";
import ContactModal from "./ContactModal";

const CTASection = () => {
  const [showCallbackModal, setShowCallbackModal] = useState(false);

  return (
    <>
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Didn't find the project you're looking for?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Call us for exclusive information on unlisted projects and special
            offers. Our experts are ready to assist you.
          </p>
          <button
            onClick={() => setShowCallbackModal(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg"
          >
            Request a Callback
          </button>
        </div>
      </section>

      <ContactModal
        isOpen={showCallbackModal}
        onClose={() => setShowCallbackModal(false)}
        type="callback"
      />
    </>
  );
};

export default CTASection;
