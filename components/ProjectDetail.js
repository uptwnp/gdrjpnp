import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { 
  MapPin, 
  Download, 
  IndianRupee, 
  Home, 
  Calendar, 
  Star,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  ChevronUp,
  Play,
  Image as ImageIcon,
  Building,
  Car,
  Wifi,
  Shield,
  Trees,
  Dumbbell,
  Users,
  Zap,
  CheckCircle,
  Award,
  TrendingUp,
  Camera,
  Video,
  FileText,
  Calculator,
  Navigation,
  Square,
  ArrowRight,
  X,
  MessageSquare,
  Eye,
  Layout
} from 'lucide-react';

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showVideoLeadModal, setShowVideoLeadModal] = useState(false);
  const [showLayoutModal, setShowLayoutModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!slug) return;
    
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
  }, [slug]);

  // Scroll to top when project loads
  useEffect(() => {
    if (project) {
      window.scrollTo(0, 0);
    }
  }, [project]);

  // Memoize expensive calculations
  const amenityIcons = useMemo(() => ({
    'Swimming Pool': <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center"><div className="h-3 w-3 bg-blue-500 rounded-full"></div></div>,
    'Fitness Center': <Dumbbell className="h-6 w-6 text-red-500" />,
    'Gym': <Dumbbell className="h-6 w-6 text-red-500" />,
    'Club House': <Building className="h-6 w-6 text-purple-500" />,
    'Clubhouse': <Building className="h-6 w-6 text-purple-500" />,
    'Security': <Shield className="h-6 w-6 text-green-500" />,
    '24/7 Security': <Shield className="h-6 w-6 text-green-500" />,
    'Parking': <Car className="h-6 w-6 text-gray-500" />,
    'Landscaped Gardens': <Trees className="h-6 w-6 text-green-500" />,
    'Power Backup': <Zap className="h-6 w-6 text-yellow-500" />,
    'High-Speed Internet': <Wifi className="h-6 w-6 text-blue-500" />,
    'Community Hall': <Users className="h-6 w-6 text-indigo-500" />,
    'Children\'s Play Area': <Users className="h-6 w-6 text-pink-500" />
  }), []);

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
    const message = getWhatsAppMessage(modalType);
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  const getWhatsAppMessage = (type) => {
    const baseMessage = `Hi! I'm interested in ${project?.name || 'your project'}.`;
    
    switch (type) {
      case 'pricing':
        return `${baseMessage} Can you please share the complete price list and current offers? My budget is ${formData.budget}. Name: ${formData.name}, Phone: ${formData.phone}`;
      case 'video':
        return `${baseMessage} I would like to watch the project walkthrough video. Name: ${formData.name}, Phone: ${formData.phone}`;
      case 'brochure':
        return `${baseMessage} Please send me the complete brochure and details. Name: ${formData.name}, Phone: ${formData.phone}`;
      case 'layout':
        return `${baseMessage} I would like to see the detailed layout plans. Name: ${formData.name}, Phone: ${formData.phone}`;
      default:
        return `${baseMessage} Name: ${formData.name}, Phone: ${formData.phone}`;
    }
  };

  const resetForm = (modalType) => {
    setFormData({ name: '', phone: '', budget: '' });
    setShowSuccess(false);
    switch(modalType) {
      case 'brochure': setShowBrochureModal(false); break;
      case 'pricing': setShowPricingModal(false); break;
      case 'video': setShowVideoLeadModal(false); break;
      case 'layout': setShowLayoutModal(false); break;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">{error}</div>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Building className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <button 
            onClick={() => router.push('/')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const getStatusColor = (color) => {
    switch (color) {
      case 'blue': return 'text-blue-500 bg-blue-50 border-blue-200';
      case 'orange': return 'text-orange-500 bg-orange-50 border-orange-200';
      case 'green': return 'text-green-500 bg-green-50 border-green-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 transition-colors ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getAmenityIcon = (amenity) => {
    return amenityIcons[amenity] || <CheckCircle className="h-6 w-6 text-blue-500" />;
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        
        {/* Branded Header Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 sm:py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white rounded-lg p-1 sm:p-2 mr-2 sm:mr-3 shadow-lg">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-bold">T</span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-sm sm:text-base">Trident Realty</span>
                  <span className="mx-1 sm:mx-2">•</span>
                  <span className="text-blue-100 text-xs sm:text-sm">Premium Properties</span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <span className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  +91 98765 43210
                </span>
                <span className="text-blue-200">|</span>
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Project Image */}
              <div 
                className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => setShowVideoLeadModal(true)}
              >
                <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl group-hover:rounded-2xl">
                  {project.image ? (
                    <div className="relative w-full h-72 md:h-96">
                      <img
                        src={project.image}
                        alt={`${project.name} - Premium ${project.type} Project Layout and Photos`}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-72 md:h-96 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      <h2 className="text-white text-3xl sm:text-4xl font-bold text-center px-6">
                        {project.name}
                      </h2>
                    </div>
                  )}
                  
                  {/* Video Play Overlay */}
                  <div className="rounded-2xl absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/50">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 md:p-6 shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:shadow-3xl animate-pulse group-hover:animate-none">
                      <Play className="h-6 w-6 md:h-8 md:w-8 text-red-600 ml-1 drop-shadow-lg" />
                    </div>
                  </div>
                  
                  {/* Video Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    EXCLUSIVE VIDEO
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2.5 py-1 sm:px-3 rounded text-xs sm:text-sm font-semibold">
                    5:42
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4 lg:space-y-6 mt-4 lg:mt-0">
                <div className="flex items-center space-x-3">
                  <span className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide border ${getStatusColor(project.statusColor)}`}>
                    {project.status}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">Premium Project</span>
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {project.name}
                </h1>
                
                <div className="flex items-center text-gray-600 group">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  <span className="text-base sm:text-lg">{project.location}</span>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-center mb-2">
                    <IndianRupee className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2" />
                    <span className="text-sm sm:text-base font-semibold text-gray-700">Starting Price</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{project.priceRange}</div>
                  <div className="flex items-center text-gray-600">
                    <Home className="h-5 w-5 mr-2" />
                    <span className="text-sm sm:text-base">{project.bhk} • {project.type}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 bg-gray-50 p-3 sm:p-4 rounded-xl">
                  <Calendar className="h-5 w-5 mr-3 text-blue-500" />
                  <span className="font-medium text-sm sm:text-base">Possession: {project.possession}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button 
                    onClick={() => setShowBrochureModal(true)}
                    className="flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 group text-sm sm:text-base"
                  >
                    <Download className="h-5 w-5 mr-2 sm:mr-3 group-hover:animate-bounce" />
                    Download Brochure
                    <ArrowRight className="h-5 w-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => setShowPricingModal(true)}
                    className="flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-blue-600 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 font-semibold border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-105 group text-sm sm:text-base"
                  >
                    <Calculator className="h-5 w-5 mr-2 sm:mr-3 group-hover:animate-pulse" />
                    Request Pricing
                    <ArrowRight className="h-5 w-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Overview & Features */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  {project.name} Overview
                </h2>
                
                <div className="prose md:prose-lg max-w-none mb-6 md:mb-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{project.overview}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {project.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="bg-blue-50 p-3 sm:p-4 rounded-xl text-center hover:bg-blue-100 transition-colors duration-300 transform hover:scale-105">
                      <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column - Quick Facts */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 h-fit">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Project Type</span>
                    <span className="font-semibold text-gray-900">{project.type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Unit Types</span>
                    <span className="font-semibold text-gray-900">{project.bhk}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status</span>
                    <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold ${getStatusColor(project.statusColor)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Possession</span>
                    <span className="font-semibold text-gray-900">{project.possession}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                      <span className="text-white text-sm font-bold">T</span>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900">Trident Realty</div>
                      <div className="text-xs text-gray-600">Trusted Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Layout Section */}
        <section className="py-8 lg:py-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                {project.name} Layout
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our meticulously designed floor plans with optimal space utilization
              </p>
            </div>
            
            {/* Blurred Layout Image with Lead Magnet */}
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative">
                  <img 
                    src="https://www.m3mindiaproperty.com/img/m3m-golf-estate-sec65-gurgaon-residential-property-location-map.webp" 
                    alt={`${project.name} Layout Plan`}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover filter blur-sm"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                    <div className="text-center text-white">
                      <Eye className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-3 sm:mb-4 text-white" />
                      <h3 className="text-xl md:text-2xl font-bold mb-2">View Complete Layout</h3>
                      <p className="text-base mb-4 sm:mb-6 opacity-90">Get access to detailed floor plans</p>
                      <button 
                        onClick={() => setShowLayoutModal(true)}
                        className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold shadow-lg text-sm sm:text-base"
                      >
                        View Layout Plans
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unit Sizes Section */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                {project.name} Unit Sizes
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our range of thoughtfully designed unit configurations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.unitSizes.map((unit, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>
                  
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 sm:p-4 rounded-xl mr-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-md">
                      <Home className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{unit.type}</h3>
                      <p className="text-blue-600 font-medium text-sm">Premium Layout</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Square className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-600 font-medium text-sm sm:text-base">Carpet Area</span>
                      </div>
                      <span className="font-bold text-gray-900 text-base sm:text-lg">{unit.size}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <IndianRupee className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-gray-600 font-medium text-sm sm:text-base">Starting Price</span>
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-blue-600">{unit.price}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setShowPricingModal(true)}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg group-hover:shadow-xl transform group-hover:scale-105 text-sm sm:text-base"
                  >
                    View Floor Plan & Pricing
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities & Facilities Section */}
        <section className="py-8 lg:py-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                {project.name} Amenities & Facilities
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Experience luxury living with our comprehensive range of premium amenities
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {project.amenities.map((amenity, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full"></div>
                  
                  <div className="mb-2 sm:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {getAmenityIcon(amenity)}
                  </div>
                  <span className="text-gray-700 font-semibold text-xs sm:text-sm leading-tight">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                {project.name} Location
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Strategically positioned with unmatched connectivity and convenience
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl border border-blue-100">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Project Location</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{project.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Located in the heart of {project.location.split(',')[0]}, this premium project offers excellent connectivity to major business districts, educational institutions, and entertainment hubs.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {project.locationHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105 group shadow-md hover:shadow-lg">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Navigation className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-semibold text-sm sm:text-base">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

     {/* Photos Section */}
    {project.gallery.images.length > 0 && (
      <section className="py-8 lg:py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              {project.name} Photos
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Take a visual journey through our premium spaces and world-class amenities
            </p>
          </div>

          <div
            className={`grid gap-4 sm:gap-6 ${
              project.gallery.images.length === 1
                ? 'grid-cols-1'
                : project.gallery.images.length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {project.gallery.images.map((image, index) => (
              <div
                key={index}
                className="w-full relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => handleImageClick(image)}
              >
                <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src={image}
                    alt={`${project.name} Gallery Image ${index + 1}`}
                    className="w-full h-56 sm:h-64 object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-full transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                      <ImageIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {index + 1} / {project.gallery.images.length}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}


        {/* Videos Section */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                {project.name} Videos
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Watch exclusive project walkthrough and virtual tour videos
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div 
                className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => setShowVideoLeadModal(true)}
              >
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={`${project.name} Video Thumbnail`}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                    />
                    
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/50">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 md:p-6 shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-3xl animate-pulse group-hover:animate-none">
                        <Play className="h-8 w-8 md:h-12 md:w-12 text-red-600 ml-1 drop-shadow-lg" />
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      EXCLUSIVE VIDEO
                    </div>
                    
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/70 text-white px-2.5 py-1 sm:px-3 rounded text-xs sm:text-sm font-semibold">
                      5:42
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment & Payment Plans */}
        <section className="py-8 lg:py-12 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              {project.name} Investment & Payment Plans
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Attractive pricing with flexible payment options and exclusive launch offers
            </p>
            
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl border border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <IndianRupee className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Starting Price</h3>
                  <p className="text-xl md:text-2xl font-bold text-blue-600">{project.priceRange.split(' - ')[0]}</p>
                  <p className="text-sm text-gray-500 mt-1">All inclusive</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Calculator className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">EMI Options</h3>
                  <p className="text-xl md:text-2xl font-bold text-green-600">₹45,000/month</p>
                  <p className="text-sm text-gray-500 mt-1">Starting from</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Award className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Launch Offers</h3>
                  <p className="text-xl md:text-2xl font-bold text-purple-600">Up to 15% Off</p>
                  <p className="text-sm text-gray-500 mt-1">Limited period</p>
                </div>
              </div>
              
              <button 
                onClick={() => setShowPricingModal(true)}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 text-base md:text-lg"
              >
                Get Complete Price List & Offers
              </button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {project.faqs.length > 0 && (
          <section className="py-8 lg:py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {project.name} FAQs
                </h2>
                <p className="text-base md:text-lg text-gray-600">Frequently asked questions about this project</p>
              </div>
              <div className="space-y-4">
                {project.faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.question}</span>
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
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Reviews */}
        {project.reviews.length > 0 && (
          <section className="py-8 lg:py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {project.name} Reviews
                </h2>
                <p className="text-base md:text-lg text-gray-600">What our customers say about us</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed italic">"{review.comment}"</p>
                    <div className="flex items-center">
                      <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-600 font-semibold">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{review.name}</p>
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
              <p className="text-base md:text-lg text-gray-600">Get in touch with our expert team</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg border border-blue-100 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center shadow-md">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Call Now</h3>
                  <p className="text-base font-semibold text-gray-900 mb-3">{project.contactInfo.phone}</p>
                  <button 
                    onClick={() => handleCall()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                  >
                    Call Now
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center shadow-md">
                    <MessageSquare className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-base font-semibold text-gray-900 mb-3">Quick Response</p>
                  <button 
                    onClick={() => handleWhatsApp('pricing')}
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
                  <p className="text-base font-semibold text-gray-900 mb-3 break-words">{project.contactInfo.email}</p>
                  <button 
                    onClick={() => window.location.href = `mailto:${project.contactInfo.email}`}
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
              <p className="text-base md:text-lg text-gray-600">Visit our office for personalized consultation</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">{project.contactInfo.address}</p>
                <div className="flex items-center justify-center text-gray-600 mb-4 sm:mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-medium text-sm sm:text-base">{project.contactInfo.officeHours}</span>
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
              Don't miss out on this premium opportunity. Contact our experts today.
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
      </div>


      {/* Modals */}
      {showBrochureModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => resetForm('brochure')}></div>
            <div className="inline-block w-full max-w-md p-4 sm:p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {showSuccess ? (
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className="bg-green-100 p-4 rounded-full">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">✓</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Your request has been sent. You'll receive the brochure shortly.</p>
                  <div className="space-y-3 mb-6">
                    <button
                      onClick={() => handleWhatsApp('brochure')}
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
                  <button onClick={() => resetForm('brochure')} className="text-gray-500 hover:text-gray-700 transition-colors text-sm">Close</button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Download className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Download Brochure</h3>
                    </div>
                    <button onClick={() => resetForm('brochure')} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  <form onSubmit={(e) => handleFormSubmit(e, 'brochure')} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range *</label>
                      <select
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
                    <button type="submit" className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      Download Brochure
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      
      {showPricingModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => resetForm('pricing')}></div>
            <div className="inline-block w-full max-w-md p-4 sm:p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {showSuccess ? (
                 <div className="text-center">
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className="bg-green-100 p-4 rounded-full">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">✓</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Our team will contact you with detailed pricing information.</p>
                  <div className="space-y-3 mb-6">
                    <button
                      onClick={() => handleWhatsApp('pricing')}
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
                  <button onClick={() => resetForm('pricing')} className="text-gray-500 hover:text-gray-700 transition-colors text-sm">Close</button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <IndianRupee className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Get Pricing - {project?.name}</h3>
                    </div>
                    <button onClick={() => resetForm('pricing')} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  <form onSubmit={(e) => handleFormSubmit(e, 'pricing')} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range *</label>
                      <select
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
                    <button type="submit" className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      Submit Request
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      
      {showVideoLeadModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => resetForm('video')}></div>
            <div className="inline-block w-full max-w-md p-4 sm:p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {showSuccess ? (
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className="bg-green-100 p-4 rounded-full">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">✓</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Video access will be provided shortly via WhatsApp or call.</p>
                  <div className="space-y-3 mb-6">
                    <button
                      onClick={() => handleWhatsApp('video')}
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
                  <button onClick={() => resetForm('video')} className="text-gray-500 hover:text-gray-700 transition-colors text-sm">Close</button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center">
                        <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center shadow-md mr-3">
                           <span className="text-white text-xs font-bold ml-0.5">▶</span>
                         </div>
                         <h3 className="text-lg font-semibold text-gray-900">Watch {project?.name} Video</h3>
                       </div>
                    <button onClick={() => resetForm('video')} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  <form onSubmit={(e) => handleFormSubmit(e, 'video')} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range *</label>
                      <select
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
                    <button type="submit" className="w-full px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold">
                      Watch Video Now
                    </button>
                  </form>
                  <p className="mt-4 text-xs text-gray-500">Your information is secure. Video access will be provided instantly after submission.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      
      {showLayoutModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => resetForm('layout')}></div>
            <div className="inline-block w-full max-w-md p-4 sm:p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {showSuccess ? (
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className="bg-green-100 p-4 rounded-full">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">✓</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Detailed layout plans will be shared with you shortly.</p>
                  <div className="space-y-3 mb-6">
                    <button
                      onClick={() => handleWhatsApp('layout')}
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
                  <button onClick={() => resetForm('layout')} className="text-gray-500 hover:text-gray-700 transition-colors text-sm">Close</button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Layout className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">View Layout Plans</h3>
                    </div>
                    <button onClick={() => resetForm('layout')} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  <form onSubmit={(e) => handleFormSubmit(e, 'layout')} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range *</label>
                      <select
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
                    <button type="submit" className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      View Layout Plans
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setShowImageModal(false)}>
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
                <span className="text-xs font-semibold text-gray-800">Trident Realty</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;