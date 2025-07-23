import React from 'react';
import ProjectInfo from './ProjectInfo';
import ProjectContact from './ProjectContact';

const ProjectDetails = ({
  project,
  setShowBrochureModal,
  setShowPricingModal,
  setShowVideoLeadModal,
  setShowLayoutModal,
  handleImageClick,
  expandedFaq,
  setExpandedFaq,
  handleCall,
  handleWhatsApp,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <ProjectInfo
        project={project}
        setShowBrochureModal={setShowBrochureModal}
        setShowPricingModal={setShowPricingModal}
        setShowVideoLeadModal={setShowVideoLeadModal}
        setShowLayoutModal={setShowLayoutModal}
        handleImageClick={handleImageClick}
        handleCall={handleCall}
        handleWhatsApp={handleWhatsApp}
      />
      
      <ProjectContact
        project={project}
        setShowBrochureModal={setShowBrochureModal}
        setShowPricingModal={setShowPricingModal}
        expandedFaq={expandedFaq}
        setExpandedFaq={setExpandedFaq}
        handleCall={handleCall}
        handleWhatsApp={handleWhatsApp}
      />
    </div>
  );
};

export default ProjectDetails;