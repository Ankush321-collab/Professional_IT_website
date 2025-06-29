import React from 'react';
import microimg from '../assets/microsoft.jpg';
import { Link } from 'react-router-dom';

// Enhanced SVG Icon Components with consistent sizing
const ServerIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <circle cx="8" cy="6" r="1"></circle>
    <circle cx="8" cy="18" r="1"></circle>
  </svg>
);

const CloudIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const CertificateIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const BookIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const MicrosoftServerCertification = () => (
  <div className="max-w-4xl mx-auto p-6 dark:bg-gray-900 dark:text-gray-100">
    {/* Header with 3D effect and gradient */}
    <div className="flex items-center mb-10 mt-8">
      <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg transform transition-all duration-300 hover:rotate-3 hover:scale-105">
        <ServerIcon className="text-white" />
      </div>
      <h1 className="text-3xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
        Microsoft Server Certification
      </h1>
    </div>
    
    {/* Main card with 3D hover effect */}
    <div className="relative group mb-12">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
        <img 
          src={microimg} 
          alt="Microsoft Server" 
          className="w-full h-56 object-cover transform transition duration-500 group-hover:scale-105" 
        />
        <div className="p-8">
          <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Master Microsoft Windows Server administration, Active Directory, virtualization, and cloud integration with this comprehensive certification program.
          </p>
          
          <ul className="space-y-6">
            <li className="flex items-start group">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg mr-5 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60">
                <ServerIcon className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Windows Server Installation & Configuration</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Deploy and manage Windows Server environments</p>
              </div>
            </li>
            <li className="flex items-start group">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg mr-5 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60">
                <ServerIcon className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Active Directory & Group Policy</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Implement enterprise directory services</p>
              </div>
            </li>
            <li className="flex items-start group">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg mr-5 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60">
                <CloudIcon className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Server Virtualization & Cloud Services</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Integrate with Azure and hybrid cloud solutions</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p className="mb-12 text-center text-xl text-gray-700 dark:text-gray-300 leading-relaxed px-4">
      Prepare for <span className="font-semibold text-blue-600 dark:text-blue-400">Microsoft certifications</span> and real-world server management roles in enterprise environments.
    </p>

    <hr className="my-12 border-t-2 border-gray-200 dark:border-gray-700 w-3/4 mx-auto" />

    {/* Key Benefits Section */}
    <div className="mb-14">
      <div className="flex items-center justify-center mb-10">
        <div className="p-3 bg-gradient-to-br from-green-500 to-green-700 rounded-full shadow-lg mr-4 transform transition-all duration-300 hover:rotate-6">
          <CertificateIcon className="text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">
          Key Benefits
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: <CertificateIcon className="text-green-600 dark:text-green-400" />,
            title: "Expert Instruction",
            desc: "Learn from certified Microsoft professionals",
            bg: "bg-green-50 dark:bg-green-900/20"
          },
          {
            icon: <CertificateIcon className="text-blue-600 dark:text-blue-400" />,
            title: "Practical Learning",
            desc: "Hands-on labs and real-world scenarios",
            bg: "bg-blue-50 dark:bg-blue-900/20"
          },
          {
            icon: <CertificateIcon className="text-purple-600 dark:text-purple-400" />,
            title: "Exam Preparation",
            desc: "Focused training for Microsoft certification exams",
            bg: "bg-purple-50 dark:bg-purple-900/20"
          },
          {
            icon: <CertificateIcon className="text-indigo-600 dark:text-indigo-400" />,
            title: "Career Advancement",
            desc: "Opportunities in IT administration and cloud services",
            bg: "bg-indigo-50 dark:bg-indigo-900/20"
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className={`${item.bg} p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-${item.icon.props.className.includes('green') ? 'green' : item.icon.props.className.includes('blue') ? 'blue' : item.icon.props.className.includes('purple') ? 'purple' : 'indigo'}-200 dark:hover:border-${item.icon.props.className.includes('green') ? 'green' : item.icon.props.className.includes('blue') ? 'blue' : item.icon.props.className.includes('purple') ? 'purple' : 'indigo'}-700`}
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

    {/* Course Content Section */}
    <div className="mb-14">
      <div className="flex items-center justify-center mb-10">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full shadow-lg mr-4 transform transition-all duration-300 hover:rotate-6">
          <BookIcon className="text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
          Course Content
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "Windows Server Fundamentals",
          "Active Directory and Group Policy",
          "Server Virtualization and Cloud Integration",
          "Security, Backup, and Disaster Recovery",
          "Azure Hybrid Cloud Services",
          "Exam Preparation and Practice Labs"
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-l-4 border-purple-500 dark:border-purple-600 transition-all duration-300 hover:shadow-lg hover:border-l-8 hover:bg-purple-50 dark:hover:bg-purple-900/20"
          >
            <div className="flex items-start">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA with animation */}
    <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
      <p className="text-center font-semibold text-white text-xl mb-6">
        Ready to become a Microsoft Server expert? Contact us for enrollment details!
      </p>
      <div className="flex justify-center">
        <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-110 flex items-center">
          <Link to="/contact#contact-form">Enroll Now</Link>
        </button>
      </div>
    </div>
  </div>
);

export default MicrosoftServerCertification;