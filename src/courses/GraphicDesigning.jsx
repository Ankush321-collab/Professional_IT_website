import React from 'react';
import graphicImg from '../assets/graphic.jpg';
import { Link } from 'react-router-dom';

const GraphicDesigning = () => {
  // Enhanced SVG Icons with hover effects
  const PaletteIcon = ({ className = '' }) => (
    <svg className={`text-pink-500 dark:text-pink-400 transition-transform ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="1"></circle>
      <circle cx="17.5" cy="10.5" r="1"></circle>
      <circle cx="8.5" cy="7.5" r="1"></circle>
      <circle cx="6.5" cy="12.5" r="1"></circle>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.057a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
    </svg>
  );

  const LayersIcon = ({ className = '' }) => (
    <svg className={`text-pink-500 dark:text-pink-400 transition-transform ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  );

  const ImageIcon = ({ className = '' }) => (
    <svg className={`text-pink-500 dark:text-pink-400 transition-transform ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  );

  const AwardIcon = ({ className = '' }) => (
    <svg className={`text-pink-500 dark:text-pink-400 transition-transform ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );

  const BriefcaseIcon = ({ className = '' }) => (
    <svg className={`text-pink-500 dark:text-pink-400 transition-transform ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  );

  const TypeIcon = ({ className = '' }) => (
    <svg className={`text-pink-500 transition-transform ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7"></polyline>
      <line x1="9" y1="20" x2="15" y2="20"></line>
      <line x1="12" y1="4" x2="12" y2="20"></line>
    </svg>
  );

  const BoxIcon = ({ className = '' }) => (
    <svg className={`text-pink-500 transition-transform ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  );

  const CpuIcon = ({ className = '' }) => (
    <svg className={`text-pink-500 transition-transform ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
  );

  const GridIcon = ({ className = '' }) => (
    <svg className={`text-pink-500 transition-transform ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  );

  // Feature cards data with enhanced styling
  const featureCards = [
    {
      icon: <PaletteIcon className="group-hover:rotate-12" />,
      title: "Creative & Technical Skills",
      description: "Develop both artistic vision and professional software expertise",
      bg: "bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30"
    },
    {
      icon: <BriefcaseIcon className="group-hover:rotate-12" />,
      title: "Diverse Career Paths",
      description: "Work in advertising, branding, UI/UX, and digital art industries",
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30"
    },
    {
      icon: <AwardIcon className="group-hover:rotate-12" />,
      title: "Professional Portfolio",
      description: "Build a showcase of your work to impress clients and employers",
      bg: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30"
    }
  ];

  // Course modules data with enhanced styling
  const courseModules = [
    { 
      title: "Foundations", 
      icon: <TypeIcon className="group-hover:scale-110" />,
      items: ["Design Principles", "Color Theory", "Typography", "Composition"],
      color: "from-pink-500 to-pink-600"
    },
    { 
      title: "Adobe Suite", 
      icon: <GridIcon className="group-hover:scale-110" />,
      items: ["Photoshop", "Illustrator", "InDesign", "XD"],
      color: "from-purple-500 to-purple-600"
    },
    { 
      title: "Branding", 
      icon: <BoxIcon className="group-hover:scale-110" />,
      items: ["Logo Design", "Identity Systems", "Print Media", "Packaging"],
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "Digital Art", 
      icon: <CpuIcon className="group-hover:scale-110" />,
      items: ["UI/UX Basics", "Digital Illustration", "Photo Manipulation", "Portfolio"],
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Hero Header with 3D effect */}
      <div className="relative overflow-hidden rounded-2xl mb-10 group mt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 dark:from-pink-700 dark:to-orange-700 opacity-90"></div>
        <div className="relative z-10 p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
              Graphic Designing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 dark:text-pink-200 max-w-2xl">
            Master design principles, tools, and techniques to create stunning visual content
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-white text-pink-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg hover:shadow-xl">
              <PaletteIcon />
              <Link to="/contact#contact-form" className="ml-2">Start Learning</Link>
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-600 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              View Curriculum
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('../assets/graphic.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
      </div>

      {/* Main Content Grid with 3D hover effects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left Card - Design Mastery with parallax effect */}
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-500 h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 dark:from-pink-700/20 dark:to-orange-700/20 z-10"></div>
          <img 
            src={graphicImg} 
            alt="Graphic Designing" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 z-20 flex flex-col justify-end p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <div className="p-2 bg-pink-600 rounded-lg mr-3 group-hover:rotate-12 transition-transform">
                <PaletteIcon className="text-white" />
              </div>
              Design Mastery
            </h2>
            <p className="mb-6 text-lg">
              Learn Adobe Photoshop, Illustrator, branding, and digital art to become a versatile designer.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center group-hover/item:translate-x-2 transition-transform">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-3">
                  <PaletteIcon className="text-white text-sm" />
                </div>
                <span>Photoshop, Illustrator, InDesign</span>
              </li>
              <li className="flex items-center group-hover/item:translate-x-2 transition-transform delay-75">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <LayersIcon className="text-white text-sm" />
                </div>
                <span>Branding & Logo Design</span>
              </li>
              <li className="flex items-center group-hover/item:translate-x-2 transition-transform delay-100">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <ImageIcon className="text-white text-sm" />
                </div>
                <span>UI/UX & Digital Art</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Card - Features with animated cards */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/50 rounded-full flex items-center justify-center mr-3">
              <AwardIcon />
            </div>
            Why Study Graphic Design?
          </h2>
          
          {featureCards.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.bg} p-6 rounded-xl border border-transparent hover:border-pink-300 dark:hover:border-pink-500/50 transition-all duration-300 group hover:shadow-lg transform hover:-translate-y-1`}
            >
              <div className="flex items-start">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm mr-4 group-hover:shadow-md transition-shadow">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Modules Section with animated cards */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          <span className="inline-block pb-2 border-b-4 border-pink-500">
            Course Content
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseModules.map((module, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${module.color} rounded-xl p-1 overflow-hidden shadow-lg group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="bg-white dark:bg-gray-800 h-full rounded-lg p-6 flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-4">{module.title}</h3>
                <ul className="space-y-3 flex-grow">
                  {module.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-start group-hover/item:translate-x-1 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section with 3D effect */}
      <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-700 dark:to-purple-700 text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Unleash Your Creativity?</h2>
          <p className="text-xl text-pink-100 mb-8">
            Start your journey as a creative designer and build a professional portfolio that stands out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
              <PaletteIcon />
              <Link to="/contact#contact-form" className="ml-2">Enroll Now</Link>
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <BriefcaseIcon />
              <span className="ml-2">Career Opportunities</span>
            </button>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white rounded-full opacity-10"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-300 rounded-full opacity-10"></div>
      </div>
    </div>
  );
};

export default GraphicDesigning;