import React from 'react';
import { Link } from 'react-router-dom';

// Enhanced SVG Icon Components with consistent sizing
const JavaIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.37 17.51c-3.09.86 1.87 2.64 5.8 1 7.11-3.05 2.73-7.8.71-7.17-3.25 1.08-3.35 4.32-6.51 6.17zM11.77 15c-1.27-1.23-.35-2.27.73-2.15 1.4.15 2.17 1.69 1.5 2.75-.91 1.41-2.23 1.16-2.23-.6zM18.5 21.28c-5.86 2.51-12.72-.45-12.19-5.07.31-2.72 3.54-4.15 4.35-6.6-1.58-3.59-7.45-1.23-5.75 3.37 2.42 6.49 15.29 6.58 13.59 8.3zM7.63 8.8c-2.1-3.17.15-6.8 3.17-7.5 1.12-.22 1.71.56 1.22 1.58-.7 1.42-2.54 2.2-3.72 1.65-.81-.37-.6-1.3 0-1.73 2.17-1.57 5.2.36 4.7 4.4-.6 4.98-6.48 5.57-5.37 1.6zM19.13 16c.76-2.56-2.6-3.74-4.46-2.23-.44.36-.43.93.1.93 1.24 0 2.4-.98 2.85-1.73.25-.4.44-.58.23-.84-.69-.85-4.02-1.45-5.91-.12-2.25 1.57-1.43 4.7.58 5.93 3.1 1.84 6.74 1.27 6.61-1.94zM14 9.93c.18-.22-.18-.46-.58-.55-2-.5-4.2.35-4.04 1.37 0 .45.37.72.9.55 1.6-.55 3.2-.9 3.72-1.37zM13.45 12.6c.88-.3 1.24-.82 1.06-1.15-.23-.45-1.42-.25-2.17.23-.4.26-.56.64-.24.84.5.3 1.02.4 1.35.08z"></path>
  </svg>
);

const CodeIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const WebIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const DatabaseIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const OracleJavaCertification = () => (
  <div className="max-w-4xl mx-auto p-6 dark:bg-gray-900 dark:text-gray-100">
    {/* Header with 3D effect and gradient */}
    <div className="flex items-center mb-10 mt-8">
      <div className="p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-xl shadow-lg transform transition-all duration-300 hover:rotate-3 hover:scale-105">
        <JavaIcon className="text-white" />
      </div>
      <h1 className="text-3xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
        Oracle Java Certification
      </h1>
    </div>
    
    {/* Main card with 3D hover effect */}
    <div className="relative group mb-12">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
        <img 
          src={'/assets/java.jpg'} 
          alt="Oracle Java" 
          className="w-full h-56 object-cover transform transition duration-500 group-hover:scale-105" 
        />
        <div className="p-8">
          <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Validate your expertise in Java programming, object-oriented design, and application development with Oracle's industry-recognized certification.
          </p>
          
          <ul className="space-y-6">
            <li className="flex items-start group">
              <div className="p-3 bg-red-100 dark:bg-red-900/40 rounded-lg mr-5 transition-all duration-300 group-hover:bg-red-200 dark:group-hover:bg-red-800/60">
                <JavaIcon className="text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Java SE Programming</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Master core Java syntax and features</p>
              </div>
            </li>
            <li className="flex items-start group">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg mr-5 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60">
                <CodeIcon className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">OOP Concepts & Design Patterns</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Implement SOLID principles and patterns</p>
              </div>
            </li>
            <li className="flex items-start group">
              <div className="p-3 bg-green-100 dark:bg-green-900/40 rounded-lg mr-5 transition-all duration-300 group-hover:bg-green-200 dark:group-hover:bg-green-800/60">
                <WebIcon className="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Building Desktop & Web Applications</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Develop real-world Java applications</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p className="mb-12 text-center text-xl text-gray-700 dark:text-gray-300 leading-relaxed px-4">
      Gain recognition as a <span className="font-semibold text-red-600 dark:text-red-400">Java developer</span> and boost your career in <span className="font-semibold text-blue-600 dark:text-blue-400">software engineering</span> and <span className="font-semibold text-green-600 dark:text-green-400">development</span>.
    </p>

    <hr className="my-12 border-t-2 border-gray-200 dark:border-gray-700 w-3/4 mx-auto" />

    {/* Why Java Section */}
    <div className="mb-14">
      <div className="flex items-center justify-center mb-10">
        <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full shadow-lg mr-4 transform transition-all duration-300 hover:rotate-6">
          <JavaIcon className="text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
          Why Java Certification?
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <JavaIcon className="text-red-600 dark:text-red-400" />,
            title: "Industry Standard",
            desc: "Globally recognized Java credential",
            bg: "bg-red-50 dark:bg-red-900/20"
          },
          {
            icon: <CodeIcon className="text-blue-600 dark:text-blue-400" />,
            title: "Comprehensive Coverage",
            desc: "Java SE and EE concepts",
            bg: "bg-blue-50 dark:bg-blue-900/20"
          },
          {
            icon: <WebIcon className="text-green-600 dark:text-green-400" />,
            title: "Career Growth",
            desc: "Software engineering roles",
            bg: "bg-green-50 dark:bg-green-900/20"
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className={`${item.bg} p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-${item.icon.props.className.includes('red') ? 'red' : item.icon.props.className.includes('blue') ? 'blue' : 'green'}-200 dark:hover:border-${item.icon.props.className.includes('red') ? 'red' : item.icon.props.className.includes('blue') ? 'blue' : 'green'}-700`}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm mr-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Course Syllabus Section */}
    <div className="mb-14">
      <div className="flex items-center justify-center mb-10">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg mr-4 transform transition-all duration-300 hover:rotate-6">
          <CodeIcon className="text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
          Course Syllabus
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "Java Basics and OOP Principles",
          "Exception Handling and Collections",
          "Multithreading and Concurrency",
          "GUI and Web Application Development",
          "Database Connectivity (JDBC)",
          "Project Work and Exam Preparation"
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-l-4 border-blue-500 dark:border-blue-600 transition-all duration-300 hover:shadow-lg hover:border-l-8 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            <div className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA with animation */}
    <div className="mt-12 p-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
      <p className="text-center font-semibold text-white text-xl mb-6">
        Ready to become a certified Java developer? Enroll today!
      </p>
      <div className="flex justify-center">
        <button className="px-8 py-3 bg-white text-red-600 font-bold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-110 flex items-center">
          <Link to="/contact#contact-form">Start Learning</Link>
        </button>
      </div>
    </div>
  </div>
);

export default OracleJavaCertification;