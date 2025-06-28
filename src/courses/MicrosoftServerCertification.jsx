import React from 'react';

// Custom SVG Icon Components
const ServerIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <circle cx="8" cy="6" r="1"></circle>
    <circle cx="8" cy="18" r="1"></circle>
  </svg>
);

const CloudIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const CertificateIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const BookIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const MicrosoftServerCertification = () => (
  <div className="max-w-2xl mx-auto p-6 dark:bg-gray-800 dark:text-gray-100 ">
    <div className="flex items-center mb-6 mt-8">
      <ServerIcon className="text-blue-600 mr-2" />
      <h1 className="text-2xl font-bold">Microsoft Server Certification</h1>
    </div>
    
    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
      <p className="mb-4">This comprehensive course covers Microsoft Windows Server administration, Active Directory, virtualization, and cloud integration.</p>
      
      <ul className="space-y-2">
        <li className="flex items-start">
          <ServerIcon className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Windows Server Installation & Configuration</span>
        </li>
        <li className="flex items-start">
          <ServerIcon className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Active Directory & Group Policy</span>
        </li>
        <li className="flex items-start">
          <CloudIcon className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Server Virtualization & Cloud Services</span>
        </li>
      </ul>
    </div>

    <p className="mb-6">Prepare for Microsoft certifications and real-world server management roles in enterprise environments.</p>

    <hr className="my-6 border-gray-200 dark:border-gray-700" />

    <div className="mb-8">
      <div className="flex items-center mb-4">
        <CertificateIcon className="text-green-600 mr-2" />
        <h2 className="text-xl font-semibold">Key Benefits</h2>
      </div>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <CertificateIcon className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Learn from certified Microsoft professionals</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <CertificateIcon className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Hands-on labs and real-world scenarios</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <CertificateIcon className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Preparation for Microsoft certification exams</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <CertificateIcon className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Career opportunities in IT administration and cloud services</span>
        </li>
      </ul>
    </div>

    <div>
      <div className="flex items-center mb-4">
        <BookIcon className="text-purple-600 mr-2" />
        <h2 className="text-xl font-semibold">Course Content</h2>
      </div>
      
      <ol className="space-y-3">
        {[
          "Windows Server Fundamentals",
          "Active Directory and Group Policy",
          "Server Virtualization and Cloud Integration",
          "Security, Backup, and Disaster Recovery",
          "Exam Preparation and Practice Labs"
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>

    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
      <p className="text-center">Contact us for enrollment details and upcoming batch schedules.</p>
    </div>
  </div>
);

export default MicrosoftServerCertification;