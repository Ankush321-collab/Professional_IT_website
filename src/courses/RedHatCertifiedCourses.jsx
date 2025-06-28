import React from 'react';
import redhatImg from '../assets/redhat.jpg';

// SVG Icon Components
const LinuxIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CertificateIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const RedHatCertifiedCourses = () => (
  <div className="max-w-2xl mx-auto p-6">
    <div className="flex items-center mb-4 mt-8">
      <LinuxIcon />
      <h1 className="text-2xl font-bold ml-2">Red Hat Certified Courses</h1>
    </div>
    
    {/* Image Section */}
    <div className="mb-6 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
      <img 
        src={redhatImg} 
        alt="Red Hat Certified professional working on Linux server" 
        className="w-full h-auto object-cover"
      />
    </div>
    
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 flex items-start">
      <CertificateIcon className="flex-shrink-0 mr-2" />
      <p>Red Hat certifications validate your skills in Linux system administration, automation, and cloud technologies. These courses are globally recognized and highly valued in the IT industry.</p>
    </div>
    
    <ul className="list-disc pl-6 mb-4 space-y-1">
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Red Hat Certified System Administrator (RHCSA)</span>
      </li>
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Red Hat Certified Engineer (RHCE)</span>
      </li>
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Red Hat Certified Specialist in Ansible Automation</span>
      </li>
    </ul>
    
    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-6">
      <p>Red Hat courses focus on hands-on labs, real-world scenarios, and prepare you for enterprise-level Linux and open-source environments.</p>
    </div>
    
    <hr className="my-6 border-gray-200 dark:border-gray-700" />
    
    <h2 className="text-xl font-semibold mb-3 flex items-center">
      <ServerIcon />
      <span className="ml-2">Why Choose Red Hat Certification?</span>
    </h2>
    
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Industry-recognized credentials for Linux professionals</span>
      </li>
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Access to Red Hat's global community and resources</span>
      </li>
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Hands-on, performance-based exams</span>
      </li>
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Career advancement in system administration, DevOps, and cloud roles</span>
      </li>
    </ul>
    
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
      <p>Our training includes real-world projects, exam preparation, and post-certification support. Whether you are a beginner or an experienced professional, Red Hat certifications open doors to new opportunities in IT infrastructure and cloud computing.</p>
    </div>
    
    <h2 className="text-xl font-semibold mt-6 mb-3 flex items-center">
      <CertificateIcon />
      <span className="ml-2">Course Modules</span>
    </h2>
    
    <ol className="list-decimal pl-6 mb-6 space-y-1">
      <li className="flex items-start">
        <span className="mr-2">1.</span>
        <span>Linux Essentials & Command Line</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">2.</span>
        <span>System Administration & Networking</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">3.</span>
        <span>Shell Scripting & Automation</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">4.</span>
        <span>Security, SELinux, and Firewalls</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">5.</span>
        <span>Ansible Automation & DevOps Basics</span>
      </li>
    </ol>
    
    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
      <p>Contact us for the latest schedule, fees, and enrollment process.</p>
    </div>
  </div>
);

export default RedHatCertifiedCourses;