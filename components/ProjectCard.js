import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MapPin } from 'lucide-react';
import ContactModal from './ContactModal';

const ProjectCard = ({ project }) => {
  const [showPricingModal, setShowPricingModal] = useState(false);
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/${project.slug || project.id}`);
  };

  const getStatusColor = (color) => {
    switch (color) {
      case 'blue': return 'text-blue-500 bg-blue-50';
      case 'orange': return 'text-orange-500 bg-orange-50';
      case 'green': return 'text-green-500 bg-green-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <>
      <div 
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1"
        onClick={handleCardClick}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Image Section */}
          <div className="md:w-2/5 h-64 md:h-80 relative overflow-hidden">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center px-6">
                  {project.name}
                </h3>
              </div>
            )}
          </div>

          {/* Right Content Section */}
          <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Status Badge */}
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide ${getStatusColor(project.statusColor)}`}>
                  {project.status}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{project.name}</h3>
              
              {/* Location */}
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-lg">{project.location}</span>
              </div>
              
              {/* Price Range */}
              <div>
                <span className="text-2xl md:text-3xl font-bold text-gray-900">{project.priceRange}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
              >
                View Details
              </button>
              <button 
                className="px-6 py-3 bg-gray-100 text-blue-600 rounded-lg hover:bg-gray-200 transition-colors font-semibold border border-gray-200 shadow-md hover:shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPricingModal(true);
                }}
              >
                Get Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={showPricingModal}
        onClose={() => setShowPricingModal(false)}
        type="pricing"
        projectName={project.name}
      />
    </>
  );
};

export default ProjectCard;