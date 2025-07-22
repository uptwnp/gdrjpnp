import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ContactModal from './ContactModal';
import { useProjects } from '../hooks/useProjects';
import LoadingSpinner from './ui/LoadingSpinner';
import ErrorMessage from './ui/ErrorMessage';

const ProjectsSection = () => {
  const { projects, loading, error } = useProjects();
  const [showPreLaunchModal, setShowPreLaunchModal] = useState(false);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <>
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our portfolio of world-class properties.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={project.id}>
                <div style={{ width: '90%' }} className="mx-auto">
                  <ProjectCard project={project} />
                </div>
                
                {/* Ad Section between projects */}
                {index === 1 && (
                  <div className="my-12">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-6 rounded-2xl text-center mx-auto max-w-4xl">
                      <h3 className="text-2xl font-bold mb-4">Interested in Pre-Launch Projects?</h3>
                      <p className="text-lg mb-6 opacity-90">
                        Call Us to Get Private & Up-to-Date Details on Exclusive Properties
                      </p>
                      <button 
                        onClick={() => setShowPreLaunchModal(true)}
                        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Get Exclusive Details
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={showPreLaunchModal}
        onClose={() => setShowPreLaunchModal(false)}
        type="callback"
      />
    </>
  );
};

export default ProjectsSection;