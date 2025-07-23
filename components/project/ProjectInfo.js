import React, { useMemo } from 'react';
import {
  MapPin,
  IndianRupee,
  Home,
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
  Calculator,
  Navigation,
  Square,
  MessageSquare,
  Eye,
  Layout,
} from 'lucide-react';

const ProjectInfo = ({
  project,
  setShowBrochureModal,
  setShowPricingModal,
  setShowVideoLeadModal,
  setShowLayoutModal,
  handleImageClick,
  handleCall,
  handleWhatsApp,
}) => {
  const amenityIcons = useMemo(
    () => ({
      'Swimming Pool': (
        <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
        </div>
      ),
      'Fitness Center': <Dumbbell className="h-6 w-6 text-red-500" />,
      Gym: <Dumbbell className="h-6 w-6 text-red-500" />,
      'Club House': <Building className="h-6 w-6 text-purple-500" />,
      Clubhouse: <Building className="h-6 w-6 text-purple-500" />,
      Security: <Shield className="h-6 w-6 text-green-500" />,
      '24/7 Security': <Shield className="h-6 w-6 text-green-500" />,
      Parking: <Car className="h-6 w-6 text-gray-500" />,
      'Landscaped Gardens': <Trees className="h-6 w-6 text-green-500" />,
      'Power Backup': <Zap className="h-6 w-6 text-yellow-500" />,
      'High-Speed Internet': <Wifi className="h-6 w-6 text-blue-500" />,
      'Community Hall': <Users className="h-6 w-6 text-indigo-500" />,
      "Children's Play Area": <Users className="h-6 w-6 text-pink-500" />,
    }),
    []
  );

  const getAmenityIcon = (amenity) => {
    return (
      amenityIcons[amenity] || <CheckCircle className="h-6 w-6 text-blue-500" />
    );
  };

  return (
    <>
      {/* Project Layout Section */}
      <section className="py-8 lg:py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              {project.name} Layout
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our meticulously designed floor plans with optimal space
              utilization
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
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      View Complete Layout
                    </h3>
                    <p className="text-base mb-4 sm:mb-6 opacity-90">
                      Get access to detailed floor plans
                    </p>
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
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>

                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 sm:p-4 rounded-xl mr-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-md">
                    <Home className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {unit.type}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm">
                      Premium Layout
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Square className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600 font-medium text-sm sm:text-base">
                        Carpet Area
                      </span>
                    </div>
                    <span className="font-bold text-gray-900 text-base sm:text-lg">
                      {unit.size}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <IndianRupee className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-gray-600 font-medium text-sm sm:text-base">
                        Starting Price
                      </span>
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-blue-600">
                      {unit.price}
                    </span>
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
              Experience luxury living with our comprehensive range of premium
              amenities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {project.amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full"></div>

                <div className="mb-2 sm:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {getAmenityIcon(amenity)}
                </div>
                <span className="text-gray-700 font-semibold text-xs sm:text-sm leading-tight">
                  {amenity}
                </span>
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
              Strategically positioned with unmatched connectivity and
              convenience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl border border-blue-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      Project Location
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {project.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Located in the heart of {project.location.split(',')[0]}, this
                  premium project offers excellent connectivity to major
                  business districts, educational institutions, and
                  entertainment hubs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {project.locationHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105 group shadow-md hover:shadow-lg"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Navigation className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">
                    {highlight}
                  </span>
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
                Take a visual journey through our premium spaces and world-class
                amenities
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
            Attractive pricing with flexible payment options and exclusive
            launch offers
          </p>

          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl border border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <IndianRupee className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                  Starting Price
                </h3>
                <p className="text-xl md:text-2xl font-bold text-blue-600">
                  {project.priceRange.split(' - ')[0]}
                </p>
                <p className="text-sm text-gray-500 mt-1">All inclusive</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Calculator className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                  EMI Options
                </h3>
                <p className="text-xl md:text-2xl font-bold text-green-600">
                  ₹45,000/month
                </p>
                <p className="text-sm text-gray-500 mt-1">Starting from</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Award className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                  Launch Offers
                </h3>
                <p className="text-xl md:text-2xl font-bold text-purple-600">
                  Up to 15% Off
                </p>
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
    </>
  );
};

export default ProjectInfo;