import React from 'react';
import mobileImg  from '../assets/mobile.jpg'

// Custom SVG Icon Components
const MobileIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12" y2="18"></line>
  </svg>
);

const AndroidIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.3-.15-.68-.04-.85.26l-1.85 3.2c-1.69-1-3.62-1.57-5.62-1.75L9.2 4.2c-.11-.4-.49-.66-.9-.55-.4.11-.65.51-.54.91l.45 1.78C4.78 6.65 3 8.96 3 11.71 3 16.15 7.03 19 12 19s9-2.85 9-7.29c0-2.26-1.34-4.22-3.4-5.23zm-5.6 8.07c-3.09 0-5.58-1.47-5.58-3.35 0-1.88 2.49-3.36 5.58-3.36s5.58 1.48 5.58 3.36c0 1.88-2.49 3.35-5.58 3.35zM5.49 11c.16 0 .29-.13.29-.29 0-.16-.13-.29-.29-.29-.16 0-.29.13-.29.29 0 .16.13.29.29.29zm3.91 0c.16 0 .29-.13.29-.29 0-.16-.13-.29-.29-.29-.16 0-.29.13-.29.29 0 .16.13.29.29.29z"></path>
  </svg>
);

const AppleIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
  </svg>
);

const CodeIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const DesignIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
  </svg>
);

const MobileAppDevelopment = () => (
  <div className="max-w-4xl  mx-auto p-6 dark:bg-gray-800 dark:text-gray-100">
    <div className=" flex items-center mb-6 mt-10">
      <MobileIcon className="text-purple-600 mr-2" />
      <h1 className="text-2xl font-bold">Mobile App Development</h1>
    </div>
    
    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-6">
      <img src={mobileImg} alt="Mobile App Development" className="w-full" />
      <div className="p-4">
        <p className="mb-4">Learn to build mobile applications for Android and iOS using modern frameworks and tools. Covers UI/UX, APIs, and deployment.</p>
        
        <ul className="space-y-2">
          <li className="flex items-start">
            <div className="flex items-center mr-2">
              <AndroidIcon className="text-green-500 mr-1" />
              <AppleIcon className="text-gray-800 dark:text-gray-200" />
            </div>
            <span>Android & iOS Development</span>
          </li>
          <li className="flex items-start">
            <CodeIcon className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>React Native & Flutter</span>
          </li>
          <li className="flex items-start">
            <DesignIcon className="text-pink-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>App Design, Testing & Publishing</span>
          </li>
        </ul>
      </div>
    </div>

    <p className="mb-6">Develop real-world mobile apps and prepare for a career in the fast-growing mobile industry.</p>

    <hr className="my-6 border-gray-200 dark:border-gray-700" />

    <div className="mb-8">
      <div className="flex items-center mb-4">
        <MobileIcon className="text-purple-600 mr-2" />
        <h2 className="text-xl font-semibold">Why Learn Mobile App Development?</h2>
      </div>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <MobileIcon className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>High demand for mobile developers worldwide</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <MobileIcon className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Opportunities in startups, enterprises, and freelance</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <MobileIcon className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Build apps for Android, iOS, and cross-platform</span>
        </li>
      </ul>
    </div>

    <div>
      <div className="flex items-center mb-4">
        <CodeIcon className="text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold">Course Modules</h2>
      </div>
      
      <ol className="space-y-3">
        {[
          "Introduction to Mobile Platforms",
          "UI/UX Design Principles",
          "Native and Cross-Platform Development",
          "APIs, Databases, and Cloud Integration",
          "Testing, Deployment, and App Store Submission"
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

    <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">
      <p className="text-center font-medium">Start building your own mobile apps and launch your career in app development.</p>
    </div>
  </div>
);

export default MobileAppDevelopment;