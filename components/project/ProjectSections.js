import React from 'react';
import ProjectHero from './ProjectHero';
import ProjectDetails from './ProjectDetails';

const ProjectSections = ({
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
      <ProjectHero
        project={project}
        setShowBrochureModal={setShowBrochureModal}
        setShowPricingModal={setShowPricingModal}
        setShowVideoLeadModal={setShowVideoLeadModal}
      />
      
      <ProjectDetails
        project={project}
        setShowBrochureModal={setShowBrochureModal}
        setShowPricingModal={setShowPricingModal}
        setShowVideoLeadModal={setShowVideoLeadModal}
        setShowLayoutModal={setShowLayoutModal}
        handleImageClick={handleImageClick}
        expandedFaq={expandedFaq}
        setExpandedFaq={setExpandedFaq}
        handleCall={handleCall}
        handleWhatsApp={handleWhatsApp}
      />
    </div>
  );
};

export default ProjectSections;