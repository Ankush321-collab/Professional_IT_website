import React from 'react';
import javaImg from '../assets/java.jpg';

// Custom SVG Icon Components
const JavaIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.37 17.51c-3.09.86 1.87 2.64 5.8 1 7.11-3.05 2.73-7.8.71-7.17-3.25 1.08-3.35 4.32-6.51 6.17zM11.77 15c-1.27-1.23-.35-2.27.73-2.15 1.4.15 2.17 1.69 1.5 2.75-.91 1.41-2.23 1.16-2.23-.6zM18.5 21.28c-5.86 2.51-12.72-.45-12.19-5.07.31-2.72 3.54-4.15 4.35-6.6-1.58-3.59-7.45-1.23-5.75 3.37 2.42 6.49 15.29 6.58 13.59 8.3zM7.63 8.8c-2.1-3.17.15-6.8 3.17-7.5 1.12-.22 1.71.56 1.22 1.58-.7 1.42-2.54 2.2-3.72 1.65-.81-.37-.6-1.3 0-1.73 2.17-1.57 5.2.36 4.7 4.4-.6 4.98-6.48 5.57-5.37 1.6zM19.13 16c.76-2.56-2.6-3.74-4.46-2.23-.44.36-.43.93.1.93 1.24 0 2.4-.98 2.85-1.73.25-.4.44-.58.23-.84-.69-.85-4.02-1.45-5.91-.12-2.25 1.57-1.43 4.7.58 5.93 3.1 1.84 6.74 1.27 6.61-1.94zM14 9.93c.18-.22-.18-.46-.58-.55-2-.5-4.2.35-4.04 1.37 0 .45.37.72.9.55 1.6-.55 3.2-.9 3.72-1.37zM13.45 12.6c.88-.3 1.24-.82 1.06-1.15-.23-.45-1.42-.25-2.17.23-.4.26-.56.64-.24.84.5.3 1.02.4 1.35.08z"></path>
  </svg>
);

const CodeIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const WebIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const DatabaseIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const OracleJavaCertification = () => (
  <div className="max-w-2xl mx-auto p-6 dark:bg-gray-800 dark:text-gray-100">
    <div className="flex items-center mb-6 mt-8">
      <JavaIcon className="text-red-600 mr-2" />
      <h1 className="text-2xl font-bold">Oracle Java Certification</h1>
    </div>
    
    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-6">
      <img src={javaImg} alt="Oracle Java" className="w-full" />
      <div className="p-4">
        <p className="mb-4">Oracle Java Certification validates your skills in Java programming, object-oriented design, and application development.</p>
        
        <ul className="space-y-2">
          <li className="flex items-start">
            <JavaIcon className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>Java SE Programming</span>
          </li>
          <li className="flex items-start">
            <CodeIcon className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>OOP Concepts & Design Patterns</span>
          </li>
          <li className="flex items-start">
            <WebIcon className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>Building Desktop & Web Applications</span>
          </li>
        </ul>
      </div>
    </div>

    <p className="mb-6">Gain recognition as a Java developer and boost your career in software engineering and development.</p>

    <hr className="my-6 border-gray-200 dark:border-gray-700" />

    <div className="mb-8">
      <div className="flex items-center mb-4">
        <JavaIcon className="text-red-600 mr-2" />
        <h2 className="text-xl font-semibold">Why Java Certification?</h2>
      </div>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <JavaIcon className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Industry-standard credential for Java developers</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <CodeIcon className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Comprehensive coverage of Java SE and EE</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <WebIcon className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Opens doors to software engineering and development roles</span>
        </li>
      </ul>
    </div>

    <div>
      <div className="flex items-center mb-4">
        <CodeIcon className="text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold">Course Syllabus</h2>
      </div>
      
      <ol className="space-y-3">
        {[
          "Java Basics and OOP Principles",
          "Exception Handling and Collections",
          "GUI and Web Application Development",
          "Database Connectivity (JDBC)",
          "Project Work and Exam Preparation"
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>

    <div className="mt-8 p-4 bg-red-50 dark:bg-red-900 rounded-lg">
      <p className="text-center font-medium">Join our Java certification program to become a proficient and certified Java developer.</p>
    </div>
  </div>
);

export default OracleJavaCertification;