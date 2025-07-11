// Tailwind CSS: Add this to your global CSS (e.g., index.css) if not already present
// .animate-float-img {
//   animation: floatImg 4s ease-in-out infinite;
// }
// @keyframes floatImg {
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-24px); }
// }
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

const welcomeVariants = {
  initial: { opacity: 1, y: 0, scale: 1 },
  animate: { opacity: 0, y: -80, scale: 1.1, transition: { duration: 2.2, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -120, scale: 1.2, transition: { duration: 1.5, ease: 'easeIn' } },
};

const HeroSection = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Welcome Overlay Animation */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            key="welcome"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={welcomeVariants}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary-700/90 to-accent-700/90 dark:from-gray-900/95 dark:to-primary-900/95 text-white text-center"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7, type: 'spring', stiffness: 120 }}
              className="mb-6"
            >
              <img src={'/assets/cpn.png'} alt="Logo" className="mx-auto w-24 h-24 rounded-full shadow-lg border-4 border-yellow-400 bg-white/80" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-3xl sm:text-4xl font-bold mb-2 drop-shadow-lg"
            >
              Welcome to Computer Point Nepal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-lg sm:text-xl font-medium text-yellow-200/90 mb-2"
            >
              Empowering Nepal with Digital Excellence
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Empowering Nepal with{' '}
              <span className="gradient-text">Digital Excellence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              Your trusted partner for computer training, IT support, and cutting-edge digital solutions. 
              We bridge the digital divide with professional services and expert guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Services
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-semibold rounded-lg border-2 border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <PlayIcon className="mr-2 w-5 h-5" />
                Get Started
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div
              className="relative z-10 rounded-full shadow-3xl w-[320px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[480px] md:h-[320px] lg:w-[600px] lg:h-[420px] max-w-full animate-float-img transition-all duration-700 hover:scale-110 hover:shadow-[0_8px_32px_rgba(0,0,0,0.45)] border-4 border-primary-200 dark:border-primary-700 bg-center bg-cover hover:border-4 hover:border-yellow-400 hover:shadow-yellow-300/60 hover:outline hover:outline-4 hover:outline-yellow-200 mx-auto lg:ml-[120px]"
              style={{
                backgroundImage: `url('/assets/cpn.png')`,
                animationDuration: '3.5s',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
                filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.25))',
                willChange: 'transform',
                perspective: '800px',
                transformStyle: 'preserve-3d',
              }}
              role="img"
              aria-label="Computer Training"
            >
              {/* fallback for accessibility */}
              <span className="sr-only">Computer Training</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;