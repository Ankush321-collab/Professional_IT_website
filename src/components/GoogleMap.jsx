import { useRef, useState, useCallback } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { motion } from 'framer-motion';
import { MapPinIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Map component that renders the actual Google Map
const MapComponent = ({ center, zoom }) => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const initMap = useCallback(() => {
    if (!mapRef.current || !window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
      mapTypeId: 'roadmap',
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'on' }]
        }
      ],
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      zoomControl: true,
    });

    // Add marker
    const marker = new window.google.maps.Marker({
      position: center,
      map: map,
      title: center.name,
      animation: window.google.maps.Animation.DROP,
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="#2563eb" stroke="white" stroke-width="4"/>
            <path d="M20 10C16.6863 10 14 12.6863 14 16C14 20.5 20 30 20 30S26 20.5 26 16C26 12.6863 23.3137 10 20 10ZM20 18.5C18.6193 18.5 17.5 17.3807 17.5 16C17.5 14.6193 18.6193 13.5 20 13.5C21.3807 13.5 22.5 14.6193 22.5 16C22.5 17.3807 21.3807 18.5 20 18.5Z" fill="white"/>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(40, 40),
        anchor: new window.google.maps.Point(20, 40)
      }
    });

    // Add info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 12px; font-family: 'Inter', sans-serif; max-width: 300px;">
          <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">${center.name}</h3>
          <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 13px; line-height: 1.4;">${center.address}</p>
          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.searchQuery)}" target="_blank" 
               style="background: #2563eb; color: white; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: 500; text-align: center; display: block;">
              📍 Open in Google Maps
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(center.searchQuery)}" target="_blank"
               style="background: #059669; color: white; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: 500; text-align: center; display: block;">
              🧭 Get Directions
            </a>
          </div>
        </div>
      `
    });

    // Show info window on marker click
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    // Auto-open info window after a delay
    setTimeout(() => {
      infoWindow.open(map, marker);
    }, 1000);

    setMapLoaded(true);
  }, [center, zoom]);

  // Initialize map when component mounts
  React.useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <>
      <div 
        ref={mapRef} 
        className="h-96 w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-600"
        style={{ minHeight: '384px' }}
      />
      
      {!mapLoaded && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Loading interactive map...</p>
          </div>
        </div>
      )}
    </>
  );
};

const GoogleMap = () => {
  const [mapError, setMapError] = useState(false);

  // Computer Point Nepal exact location
  const location = {
    lat: 27.7172, // Coordinates for Durbar Marg area, Kathmandu
    lng: 85.3240,
    name: "Computer Point Nepal",
    address: "Computer Point Nepal, Jame Masjid Building, Jame Market, Chowk Durbar Marg, Kathmandu 44600",
    searchQuery: "Computer Point Nepal, Jame Masjid Building, Jame Market, Chowk Durbar Marg, Kathmandu 44600"
  };

  // Note: Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
  // You can get one from: https://console.cloud.google.com/google/maps-apis/
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.searchQuery)}`, '_blank');
  };

  const getDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.searchQuery)}`, '_blank');
  };

  const render = (status) => {
    switch (status) {
      case 'LOADING':
        return (
          <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-600">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">Loading Google Maps...</p>
            </div>
          </div>
        );
      case 'FAILURE':
        setMapError(true);
        return (
          <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-2xl flex flex-col items-center justify-center border border-gray-200 dark:border-gray-600">
            <MapPinIcon className="w-16 h-16 text-gray-400 dark:text-gray-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Map Unavailable</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-6 max-w-sm">
              Unable to load the interactive map. Please check your API key configuration or view our location using the links below.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={openInGoogleMaps}
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                Open in Google Maps
              </button>
              <button
                onClick={getDirections}
                className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <MapPinIcon className="w-4 h-4 mr-2" />
                Get Directions
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 px-4">{location.address}</p>
            </div>
          </div>
        );
      case 'SUCCESS':
        return (
          <div className="relative">
            <MapComponent center={location} zoom={17} />
            
            {/* Map Controls Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-2 justify-center"
            >
              <button
                onClick={openInGoogleMaps}
                className="flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 transition-colors text-sm font-medium"
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                Open in Google Maps
              </button>
              <button
                onClick={getDirections}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors text-sm font-medium"
              >
                <MapPinIcon className="w-4 h-4 mr-2" />
                Get Directions
              </button>
            </motion.div>
          </div>
        );
      default:
        return null;
    }
  };

  // Show static map image as fallback if API key is not configured
  if (apiKey === 'YOUR_GOOGLE_MAPS_API_KEY') {
    return (
      <motion.div 
        className="relative h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-600 cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          duration: 0.3 
        }}
        onClick={openInGoogleMaps}
      >
        {/* Static Map Image with hover effects */}
        <motion.img
          src="/image.png"
          alt="Computer Point Nepal Location Map"
          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
          whileHover={{ 
            filter: "brightness(1.1) contrast(1.05)",
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Animated overlay that appears on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Overlay with location info and buttons */}
        <motion.div 
          className="absolute inset-0 flex flex-col justify-end"
          initial={{ y: 10, opacity: 0.9 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-sm p-4 m-4 rounded-lg shadow-lg border border-white/20 dark:border-gray-700/50"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.h3 
              className="text-lg font-semibold text-gray-900 dark:text-white mb-2"
              initial={{ x: -5 }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.2 }}
            >
              Computer Point Nepal
            </motion.h3>
            <motion.p 
              className="text-sm text-gray-600 dark:text-gray-300 mb-4"
              initial={{ x: -5 }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              Jame Masjid Building, Jame Market, Chowk Durbar Marg, Kathmandu 44600
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-2"
              initial={{ y: 5 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  openInGoogleMaps();
                }}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-md"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                Open in Google Maps
              </motion.button>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  getDirections();
                }}
                className="flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-md"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(5, 150, 105, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                <MapPinIcon className="w-4 h-4 mr-2" />
                Get Directions
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Subtle pulse animation on the map marker area */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-60"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    );
  }

  return (
    <Wrapper
      apiKey={apiKey}
      libraries={['places']}
      render={render}
    />
  );
};

export default GoogleMap;