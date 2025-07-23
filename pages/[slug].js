import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { generateProjectSEO, getProjectsData, getProjectBySlug } from '../lib/data';
import ProjectSections from '../components/project/ProjectSections';
import ProjectModals from '../components/project/ProjectModals';
import { Building, Home } from 'lucide-react';

const ProjectDetail = ({ project: serverProject, notFound }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState(serverProject);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(notFound ? 'Project not found' : null);

  // State for Modals
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showVideoLeadModal, setShowVideoLeadModal] = useState(false);
  const [showLayoutModal, setShowLayoutModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // State for Forms within Modals
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: '',
  });

  // Data Fetching
  useEffect(() => {
    // Only fetch client-side if we don't have server data
    if (!serverProject && slug && !notFound) {
      async function fetchProject() {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch('/api/data');
          if (!response.ok) {
            throw new Error('Failed to fetch project data');
          }
          const data = await response.json();
          const foundProject = data.projects.find((p) => p.slug === slug);
          if (!foundProject) {
            setError('Project not found');
          } else {
            setProject(foundProject);
          }
        } catch (err) {
          setError(err.message);
          console.error('Error loading project:', err);
        } finally {
          setLoading(false);
        }
      }

      fetchProject();
    }
  }, [slug, serverProject, notFound]);

  // Scroll to top on project load
  useEffect(() => {
    if (project) {
      window.scrollTo(0, 0);
    }
  }, [project]);

  // Modal and Form Handlers
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  const handleFormSubmit = (e, modalType) => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'Type:', modalType);
    setShowSuccess(true);
  };

  const handleWhatsApp = (modalType) => {
    const baseMessage = `Hi! I'm interested in ${
      project?.name || 'your project'
    }.`;
    let message = baseMessage;
    switch (modalType) {
      case 'pricing':
        message = `${baseMessage} Can you please share the complete price list and current offers? My budget is ${formData.budget}. Name: ${formData.name}, Phone: ${formData.phone}`;
        break;
      case 'video':
        message = `${baseMessage} I would like to watch the project walkthrough video. Name: ${formData.name}, Phone: ${formData.phone}`;
        break;
      case 'brochure':
        message = `${baseMessage} Please send me the complete brochure and details. Name: ${formData.name}, Phone: ${formData.phone}`;
        break;
      case 'layout':
        message = `${baseMessage} I would like to see the detailed layout plans. Name: ${formData.name}, Phone: ${formData.phone}`;
        break;
      default:
        message = `${baseMessage} Name: ${formData.name}, Phone: ${formData.phone}`;
    }
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  const resetForm = (modalType) => {
    setFormData({ name: '', phone: '', budget: '' });
    setShowSuccess(false);
    switch (modalType) {
      case 'brochure':
        setShowBrochureModal(false);
        break;
      case 'pricing':
        setShowPricingModal(false);
        break;
      case 'video':
        setShowVideoLeadModal(false);
        break;
      case 'layout':
        setShowLayoutModal(false);
        break;
    }
  };

  // Loading and Error States
  if (loading) {
    return (
      <>
        <SEO title="Loading Project Details..." description="Loading project information. Please wait." />
        <div className="min-h-screen bg-white">
          <Header />
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading project details...</p>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  if (error || !project) {
    return (
      <>
        <SEO title="Project Not Found - Trident Realty" description="The project you're looking for could not be found. Browse our other premium properties." />
        <div className="min-h-screen bg-white">
          <Header />
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <Building className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Project Not Found
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The project you're looking for doesn't exist or may have been moved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => router.push('/')}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Home className="h-5 w-5 mr-2" />
                  Back to Home
                </button>
                <button
                  onClick={() => router.push('/#projects')}
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Building className="h-5 w-5 mr-2" />
                  View All Projects
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  // Generate SEO data for the project
  const seoData = generateProjectSEO(project);

  return (
    <>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <ProjectSections
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
        </main>
        <Footer />
        
        <ProjectModals
          project={project}
          showBrochureModal={showBrochureModal}
          showPricingModal={showPricingModal}
          showVideoLeadModal={showVideoLeadModal}
          showLayoutModal={showLayoutModal}
          showImageModal={showImageModal}
          setShowImageModal={setShowImageModal}
          selectedImage={selectedImage}
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
          showSuccess={showSuccess}
          resetForm={resetForm}
          handleWhatsApp={handleWhatsApp}
          handleCall={handleCall}
        />
      </div>
    </>
  );
};

export default ProjectDetail;

export async function getServerSideProps({ params }) {
  const { slug } = params;
  
  try {
    // Fetch projects data on the server
    const data = await getProjectsData();
    const project = getProjectBySlug(data.projects, slug);
    
    if (!project) {
      return {
        props: {
          project: null,
          notFound: true,
        },
      };
    }
    
    return {
      props: {
        project,
        notFound: false,
      },
    };
  } catch (error) {
    console.error('Error fetching project for SSR:', error);
    return {
      props: {
        project: null,
        notFound: true,
      },
    };
  }
}