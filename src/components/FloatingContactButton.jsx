import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Contact information
  const phoneNumber = '+977-1-4784560';
  const email = 'info@computerpoinnepal.com';
  const whatsappNumber = '+9779812345678'; // Replace with actual WhatsApp number

  const contactOptions = [
    {
      id: 'phone',
      icon: PhoneIcon,
      label: 'Call',
      color: 'bg-green-500 hover:bg-green-600',
      action: () => window.location.href = `tel:${phoneNumber}`,
      ariaLabel: `Call us at ${phoneNumber}`
    },
    {
      id: 'email',
      icon: EnvelopeIcon,
      label: 'Gmail',
      color: 'bg-red-500 hover:bg-red-600',
      action: () => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Inquiry from Computer Poin Nepal Website`, '_blank'),
      ariaLabel: `Send email to ${email}`
    },
    {
      id: 'whatsapp',
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      label: 'WhatsApp',
      color: 'bg-green-600 hover:bg-green-700',
      action: () => window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello! I'm interested in your services.`, '_blank'),
      ariaLabel: `Message us on WhatsApp at ${whatsappNumber}`
    }
  ];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOptionClick = (option) => {
    option.action();
    setIsExpanded(false);
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50">
        {/* Contact Options */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 flex flex-col space-y-3"
            >
              {contactOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      scale: 1,
                      transition: { delay: index * 0.1 }
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: 20, 
                      scale: 0.8,
                      transition: { delay: (contactOptions.length - 1 - index) * 0.05 }
                    }}
                    onClick={() => handleOptionClick(option)}
                    className={`
                      group relative flex items-center justify-center
                      w-12 h-12 rounded-full shadow-lg text-white
                      transform hover:scale-110 transition-all duration-200
                      focus:outline-none focus:ring-4 focus:ring-opacity-50
                      ${option.color}
                    `}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={option.ariaLabel}
                    aria-label={option.ariaLabel}
                  >
                    <IconComponent className="w-6 h-6" />
                    
                    {/* Label tooltip */}
                    <div className="
                      absolute right-14 top-1/2 transform -translate-y-1/2
                      bg-gray-900 dark:bg-gray-700 text-white text-sm px-3 py-1 rounded-lg
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      whitespace-nowrap pointer-events-none
                      before:content-[''] before:absolute before:left-full before:top-1/2 
                      before:transform before:-translate-y-1/2 before:border-4 
                      before:border-transparent before:border-l-gray-900 dark:before:border-l-gray-700
                    ">
                      {option.label}
                    </div>

                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 0, opacity: 0 }}
                      whileTap={{ scale: 1.5, opacity: [0, 0.3, 0] }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={toggleExpanded}
          className={`
            relative w-14 h-14 rounded-full shadow-lg text-white
            transform hover:scale-110 transition-all duration-200
            focus:outline-none focus:ring-4 focus:ring-opacity-50
            flex items-center justify-center
            ${isExpanded 
              ? 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-300 dark:focus:ring-gray-600' 
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:focus:ring-blue-800'
            }
          `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={isExpanded ? 'Close contact menu' : 'Open contact menu'}
          aria-label={isExpanded ? 'Close contact menu' : 'Open contact menu'}
          aria-expanded={isExpanded}
        >
          {/* Icon with rotation animation */}
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <PhoneIcon className="w-6 h-6" />
            )}
          </motion.div>

          {/* Pulse animation (only when closed) */}
          {!isExpanded && (
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-600"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Ripple effect on click */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 1.5, opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </>
  );
};

export default FloatingContactButton;