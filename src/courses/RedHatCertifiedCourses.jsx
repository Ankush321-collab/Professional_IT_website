import React from 'react';
import redhatImg from '../assets/redhat.jpg';
import { Link } from 'react-router-dom';

const RedHatCertifiedCourses = () => {
  // Enhanced SVG Icons with hover effects
  const LinuxIcon = ({ className = '' }) => (
    <svg className={`w-6 h-6 transition-transform ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

  const CertificateIcon = ({ className = '' }) => (
    <svg className={`w-6 h-6 transition-transform ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const ServerIcon = ({ className = '' }) => (
    <svg className={`w-6 h-6 transition-transform ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  );

  const CheckIcon = ({ className = '' }) => (
    <svg className={`w-5 h-5 transition-transform ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  // Course features data
  const courseFeatures = [
    {
      icon: <LinuxIcon className="group-hover:rotate-12" />,
      title: "RHCSA Certification",
      description: "Master essential Linux system administration skills",
      bg: "from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30"
    },
    {
      icon: <CertificateIcon className="group-hover:rotate-12" />,
      title: "RHCE Certification",
      description: "Advanced automation and configuration management",
      bg: "from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30"
    },
    {
      icon: <ServerIcon className="group-hover:rotate-12" />,
      title: "Ansible Automation",
      description: "Infrastructure as code and DevOps practices",
      bg: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30"
    }
  ];

  // Why choose data
  const benefits = [
    "Industry-recognized credentials for Linux professionals",
    "Access to Red Hat's global community and resources",
    "Hands-on, performance-based exams",
    "Career advancement in system administration, DevOps, and cloud roles",
    "Enterprise-level Linux and open-source skills"
  ];

  // Course modules data
  const courseModules = [
    "Linux Essentials & Command Line",
    "System Administration & Networking",
    "Shell Scripting & Automation",
    "Security, SELinux, and Firewalls",
    "Ansible Automation & DevOps Basics",
    "Container Management with Podman",
    "Advanced Storage Management",
    "Troubleshooting & System Maintenance"
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Hero Header with 3D effect */}
      <div className="relative overflow-hidden rounded-2xl mb-10 group mt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 dark:from-red-800 dark:to-red-900 opacity-90"></div>
        <div className="relative z-10 p-8 md:p-12 text-white">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-white/20 rounded-lg mr-4 transform group-hover:rotate-6 transition-transform">
              <LinuxIcon className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                Red Hat Certified Courses
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-red-100 dark:text-red-200 max-w-2xl">
            Validate your skills in Linux system administration, automation, and cloud technologies
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg hover:shadow-xl">
              <CertificateIcon />
              <span className="ml-2">View Certifications</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Course Schedule
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('../assets/redhat.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left Column - Image with 3D effect */}
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-500 h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-800/10 dark:from-red-700/20 dark:to-red-900/20 z-10"></div>
          <img 
            src={redhatImg} 
            alt="Red Hat Certified professional working on Linux server" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 z-20 flex flex-col justify-end p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <div className="p-2 bg-red-600 rounded-lg mr-3 group-hover:rotate-12 transition-transform">
                <ServerIcon className="text-white" />
              </div>
              Enterprise Linux Skills
            </h2>
            <p className="mb-6 text-lg">
              Our training includes real-world projects, exam preparation, and post-certification support.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center group-hover/item:translate-x-2 transition-transform">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                  <CheckIcon className="text-white text-sm" />
                </div>
                <span>Performance-based exams</span>
              </li>
              <li className="flex items-center group-hover/item:translate-x-2 transition-transform delay-75">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                  <CheckIcon className="text-white text-sm" />
                </div>
                <span>Hands-on labs</span>
              </li>
              <li className="flex items-center group-hover/item:translate-x-2 transition-transform delay-100">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <CheckIcon className="text-white text-sm" />
                </div>
                <span>Industry-recognized credentials</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Course Features */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mr-3">
              <CertificateIcon />
            </div>
            Red Hat Certifications
          </h2>
          
          {courseFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${feature.bg} p-6 rounded-xl border border-transparent hover:border-red-300 dark:hover:border-red-500/50 transition-all duration-300 group hover:shadow-lg transform hover:-translate-y-1`}
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

      {/* Why Choose Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          <span className="inline-block pb-2 border-b-4 border-red-500">
            Why Choose Red Hat Certification?
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500/50 transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <CheckIcon className="text-red-600 dark:text-red-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Modules Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          <span className="inline-block pb-2 border-b-4 border-red-500">
            Course Modules
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courseModules.map((module, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500/50 transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mr-4 text-red-600 dark:text-red-400 font-medium">
                  {index + 1}
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-lg">{module}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-r from-red-600 to-red-800 dark:from-red-700 dark:to-red-900 text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Advance Your Linux Career?</h2>
          <p className="text-xl text-red-100 mb-8">
            Contact us for the latest schedule, fees, and enrollment process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30">
              <Link to="/contact#contact-form" className="flex items-center">
                <span className="ml-2">Enroll Now</span>
              </Link>
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ServerIcon />
              <span className="ml-2">Course Details</span>
            </button>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white rounded-full opacity-10"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-300 rounded-full opacity-10"></div>
      </div>
    </div>
  );
};

export default RedHatCertifiedCourses;