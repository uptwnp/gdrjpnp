import React from 'react';
import {
  MapPin,
  Download,
  IndianRupee,
  Home,
  Calendar,
  Phone,
  Play,
  Award,
  TrendingUp,
  Calculator,
  ArrowRight,
  Waves,
  Dumbbell,
  Building,
  Shield,
} from 'lucide-react';

const ProjectHero = ({
  project,
  setShowBrochureModal,
  setShowPricingModal,
  setShowVideoLeadModal,
}) => {
  const getStatusColor = (color) => {
    switch (color) {
      case 'blue':
        return 'text-blue-500 bg-blue-50 border-blue-200';
      case 'orange':
        return 'text-orange-500 bg-orange-50 border-orange-200';
      case 'green':
        return 'text-green-500 bg-green-50 border-green-200';
      default:
        return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

  return (
    <>
      {/* Branded Header Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 sm:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white rounded-lg p-1 sm:p-2 mr-2 sm:mr-3 shadow-lg">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">
                    T
                  </span>
                </div>
              </div>
              <div>
                <span className="font-semibold text-sm sm:text-base">
                  Trident Realty
                </span>
                <span className="mx-1 sm:mx-2">•</span>
                <span className="text-blue-100 text-xs sm:text-sm">
                  Premium Properties
                </span>
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
                <span
                  className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide border ${getStatusColor(
                    project.statusColor
                  )}`}
                >
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
                  <span className="text-sm sm:text-base font-semibold text-gray-700">
                    Starting Price
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {project.priceRange}
                </div>
                <div className="flex items-center text-gray-600">
                  <Home className="h-5 w-5 mr-2" />
                  <span className="text-sm sm:text-base">
                    {project.bhk} • {project.type}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 bg-gray-50 p-3 sm:p-4 rounded-xl">
                <Calendar className="h-5 w-5 mr-3 text-blue-500" />
                <span className="font-medium text-sm sm:text-base">
                  Possession: {project.possession}
                </span>
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
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {project.features.slice(0, 4).map((feature, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 p-3 sm:p-4 rounded-xl text-center hover:bg-blue-100 transition-colors duration-300 transform hover:scale-105"
                  >
                    <div className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2 flex items-center justify-center">
                      {feature.toLowerCase().includes('pool') && <Waves className="h-5 w-5 md:h-6 md:w-6" />}
                      {feature.toLowerCase().includes('gym') && <Dumbbell className="h-5 w-5 md:h-6 md:w-6" />}
                      {feature.toLowerCase().includes('club') && <Building className="h-5 w-5 md:h-6 md:w-6" />}
                      {feature.toLowerCase().includes('security') && <Shield className="h-5 w-5 md:h-6 md:w-6" />}
                      {feature.toLowerCase().includes('location') && <MapPin className="h-5 w-5 md:h-6 md:w-6" />}
                      {feature.toLowerCase().includes('amenities') && <Award className="h-5 w-5 md:h-6 md:w-6" />}
                      {feature.toLowerCase().includes('connectivity') && <TrendingUp className="h-5 w-5 md:h-6 md:w-6" />}
                      {!feature.toLowerCase().includes('pool') && 
                       !feature.toLowerCase().includes('gym') && 
                       !feature.toLowerCase().includes('club') && 
                       !feature.toLowerCase().includes('security') && 
                       !feature.toLowerCase().includes('location') && 
                       !feature.toLowerCase().includes('amenities') && 
                       !feature.toLowerCase().includes('connectivity') && 
                       <Home className="h-5 w-5 md:h-6 md:w-6" />}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      {feature}
                    </span>
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
                  <span className="font-semibold text-gray-900">
                    {project.type}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Unit Types</span>
                  <span className="font-semibold text-gray-900">
                    {project.bhk}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status</span>
                  <span
                    className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold ${getStatusColor(
                      project.statusColor
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Possession</span>
                  <span className="font-semibold text-gray-900">
                    {project.possession}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-200">
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <span className="text-white text-sm font-bold">T</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-900">
                      Trident Realty
                    </div>
                    <div className="text-xs text-gray-600">Trusted Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectHero;