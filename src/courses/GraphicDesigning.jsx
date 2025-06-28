import React from 'react';
import graphicImg from '../assets/graphic.jpg';

const GraphicDesigning = () => {
  // SVG Icons
  const PaletteIcon = () => (
    <svg className="text-pink-500 dark:text-pink-400 mt-0.5 mr-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="1"></circle>
      <circle cx="17.5" cy="10.5" r="1"></circle>
      <circle cx="8.5" cy="7.5" r="1"></circle>
      <circle cx="6.5" cy="12.5" r="1"></circle>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.057a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
    </svg>
  );

  const LayersIcon = () => (
    <svg className="text-pink-500 dark:text-pink-400 mt-0.5 mr-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  );

  const ImageIcon = () => (
    <svg className="text-pink-500 dark:text-pink-400 mt-0.5 mr-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  );

  const AwardIcon = () => (
    <svg className="text-pink-500 dark:text-pink-400 mt-0.5 mr-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );

  const BriefcaseIcon = () => (
    <svg className="text-pink-500 dark:text-pink-400 mt-0.5 mr-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  );

  const TypeIcon = () => (
    <svg className="text-pink-500 mb-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7"></polyline>
      <line x1="9" y1="20" x2="15" y2="20"></line>
      <line x1="12" y1="4" x2="12" y2="20"></line>
    </svg>
  );

  const BoxIcon = () => (
    <svg className="text-pink-500 mb-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  );

  const CpuIcon = () => (
    <svg className="text-pink-500 mb-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

  const GridIcon = () => (
    <svg className="text-pink-500 mb-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  );

  // Feature cards data
  const featureCards = [
    {
      icon: <PaletteIcon />,
      title: "Creative & Technical Skills",
      description: "Develop both artistic vision and professional software expertise"
    },
    {
      icon: <BriefcaseIcon />,
      title: "Diverse Career Paths",
      description: "Work in advertising, branding, UI/UX, and digital art industries"
    },
    {
      icon: <AwardIcon />,
      title: "Professional Portfolio",
      description: "Build a showcase of your work to impress clients and employers"
    }
  ];

  // Course modules data
  const courseModules = [
    { 
      title: "Foundations", 
      icon: <TypeIcon />,
      items: ["Design Principles", "Color Theory", "Typography", "Composition"] 
    },
    { 
      title: "Adobe Suite", 
      icon: <GridIcon />,
      items: ["Photoshop", "Illustrator", "InDesign", "XD"] 
    },
    { 
      title: "Branding", 
      icon: <BoxIcon />,
      items: ["Logo Design", "Identity Systems", "Print Media", "Packaging"] 
    },
    { 
      title: "Digital Art", 
      icon: <CpuIcon />,
      items: ["UI/UX Basics", "Digital Illustration", "Photo Manipulation", "Portfolio"] 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 dark:from-pink-700 dark:to-orange-700 rounded-xl p-6 mb-8 text-white mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Graphic Designing</h1>
        <p className="text-pink-100 dark:text-pink-200 text-lg">
          Master design principles, tools, and techniques to create stunning visual content
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Left Card - Design Mastery */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
          <img 
            src={graphicImg} 
            alt="Graphic Designing" 
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
            loading="lazy"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
              <PaletteIcon />
              Design Mastery
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Learn Adobe Photoshop, Illustrator, branding, and digital art to become a versatile designer.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <PaletteIcon />
                <span className="text-gray-700 dark:text-gray-300">Photoshop, Illustrator, InDesign</span>
              </li>
              <li className="flex items-start">
                <LayersIcon />
                <span className="text-gray-700 dark:text-gray-300">Branding & Logo Design</span>
              </li>
              <li className="flex items-start">
                <ImageIcon />
                <span className="text-gray-700 dark:text-gray-300">UI/UX & Digital Art</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Card - Features */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Why Study Graphic Design?</h2>
          <ul className="space-y-4">
            {featureCards.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-pink-100 dark:bg-pink-900 p-2 rounded-full mr-3">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Course Modules Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Course Content</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courseModules.map((module, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center mb-3">
                {module.icon}
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{module.title}</h3>
              </div>
              <ul className="space-y-2">
                {module.items.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="bg-pink-500 dark:bg-pink-600 w-2 h-2 rounded-full mt-2 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-pink-50 dark:bg-gray-700 rounded-xl p-6 border border-pink-200 dark:border-gray-600 transition-all hover:shadow-md">
        <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Unleash Your Creativity</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
          Start your journey as a creative designer and build a professional portfolio that stands out.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center justify-center mx-auto">
          <PaletteIcon />
          <span className="ml-2">Start Learning</span>
        </button>
      </div>
    </div>
  );
};

export default GraphicDesigning;