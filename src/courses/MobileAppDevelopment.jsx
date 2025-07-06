import React from 'react';
import { Link } from 'react-router-dom';

// Custom SVG Icon Components with enhanced styling
const MobileIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12" y2="18"></line>
  </svg>
);

const AndroidIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.3-.15-.68-.04-.85.26l-1.85 3.2c-1.69-1-3.62-1.57-5.62-1.75L9.2 4.2c-.11-.4-.49-.66-.9-.55-.4.11-.65.51-.54.91l.45 1.78C4.78 6.65 3 8.96 3 11.71 3 16.15 7.03 19 12 19s9-2.85 9-7.29c0-2.26-1.34-4.22-3.4-5.23zm-5.6 8.07c-3.09 0-5.58-1.47-5.58-3.35 0-1.88 2.49-3.36 5.58-3.36s5.58 1.48 5.58 3.36c0 1.88-2.49 3.35-5.58 3.35zM5.49 11c.16 0 .29-.13.29-.29 0-.16-.13-.29-.29-.29-.16 0-.29.13-.29.29 0 .16.13.29.29.29zm3.91 0c.16 0 .29-.13.29-.29 0-.16-.13-.29-.29-.29-.16 0-.29.13-.29.29 0 .16.13.29.29.29z"></path>
  </svg>
);

const AppleIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
  </svg>
);

const CodeIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const DesignIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
  </svg>
);

const MobileAppDevelopment = () => (
  <div className="max-w-6xl mx-auto px-6 py-10 dark:bg-gray-900 dark:text-gray-100 ">
    {/* Hero Section with 3D effect */}
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      <div className="md:w-1/2 space-y-6 mt-10">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-lg">
          <MobileIcon className="text-white mr-2" />
          <span className="text-white font-medium">Mobile Development</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 leading-tight">
          Build Stunning Mobile Apps
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Master Android, iOS, and cross-platform development with modern frameworks. Create beautiful, performant apps that users love.
        </p>
        
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Link to="/contact#contact-form">Start Learning</Link>
          </button>
          <button className="px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 transition-all duration-300">
            View Curriculum
          </button>
        </div>
      </div>
      
      <div className="md:w-1/2 relative">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-tilt"></div>
          <img 
            src={'/assets/mobile.jpg'} 
            alt="Mobile App Development" 
            className="relative w-full h-auto rounded-xl shadow-2xl transform transition duration-500 group-hover:scale-105" 
          />
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-purple-500 group  ">
        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
          <AndroidIcon className="text-purple-600 group-hover:text-white transition-colors duration-300" />
          <AppleIcon className="text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Native Development</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Build high-performance apps for Android and iOS using native technologies.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-blue-500 group">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
          <CodeIcon className="text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Cross-Platform</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Develop for both platforms simultaneously with React Native and Flutter.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-pink-500 group">
        <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-600 transition-colors duration-300">
          <DesignIcon className="text-pink-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">UI/UX Design</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Create beautiful, intuitive interfaces that provide exceptional user experience.
        </p>
      </div>
    </div>

    {/* Why Learn Section */}
    <div className="mb-16 bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900 p-8 rounded-2xl">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-purple-100 dark:bg-purple-800 rounded-lg mr-4">
          <MobileIcon className="text-purple-600 dark:text-purple-300" />
        </div>
        <h2 className="text-3xl font-bold">Why Learn Mobile Development?</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Explosive Market Growth",
            desc: "Mobile apps account for over 70% of digital media time, creating massive demand for skilled developers.",
            icon: "📈"
          },
          {
            title: "High Salary Potential",
            desc: "Mobile developers command premium salaries with average pay 20% higher than web developers.",
            icon: "💰"
          },
          {
            title: "Creative Freedom",
            desc: "Bring your ideas to life and publish them to millions of users worldwide.",
            icon: "🎨"
          },
          {
            title: "Future-Proof Skills",
            desc: "Mobile technology continues to evolve with AR, AI, and IoT integration.",
            icon: "🔮"
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 hover:border-l-4 hover:border-purple-500"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Course Modules */}
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg mr-4">
          <CodeIcon className="text-blue-600 dark:text-blue-300" />
        </div>
        <h2 className="text-3xl font-bold">Course Modules</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Mobile Fundamentals",
            items: ["Platform differences", "Development environments", "App architecture"]
          },
          {
            title: "UI/UX Design",
            items: ["Material Design", "Human Interface Guidelines", "Responsive layouts"]
          },
          {
            title: "Native Development",
            items: ["Kotlin/Android", "Swift/iOS", "Platform APIs"]
          },
          {
            title: "Cross-Platform",
            items: ["React Native", "Flutter", "Performance optimization"]
          },
          {
            title: "Backend Integration",
            items: ["REST APIs", "Firebase", "Authentication"]
          },
          {
            title: "Publishing & Monetization",
            items: ["App Store submission", "Google Play", "In-app purchases"]
          }
        ].map((module, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                {index + 1}
              </span>
              <h3 className="text-xl font-bold">{module.title}</h3>
            </div>
            <ul className="space-y-2">
              {module.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Section */}
    <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-center">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500 rounded-full opacity-20"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
      
      <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to Build Amazing Mobile Apps?</h2>
      <p className="text-purple-100 mb-6 max-w-2xl mx-auto relative z-10">
        Join thousands of students who've launched successful mobile careers with our comprehensive program.
      </p>
      <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative z-10">
        <Link to="/contact#contact-form">Enroll Now - Start Today</Link>
      </button>
    </div>
  </div>
);

export default MobileAppDevelopment;