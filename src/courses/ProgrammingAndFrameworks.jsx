import React from 'react';
import progImg from '../assets/programming.jpg';

// SVG Icon Components
const BookIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ProjectIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ProgrammingAndFrameworks = () => (
  <div className="max-w-2xl mx-auto p-6">
    <div className="flex items-center mb-4 mt-8">
      <CodeIcon />
      <h1 className="text-2xl font-bold ml-2">Programming And Frameworks</h1>
    </div>
    
    {/* Image Section */}
    <div className="mb-6 rounded-lg overflow-hidden shadow-md">
      <img 
        src={progImg} 
        alt="Programming and frameworks concepts" 
        className="w-full h-auto object-cover"
      />
    </div>
    
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 flex items-start">
      <BookIcon className="flex-shrink-0 mr-2" />
      <p className="mb-2">Explore programming languages and frameworks such as Python, JavaScript, Django, and React. Build scalable and maintainable applications.</p>
    </div>
    
    <ul className="list-disc pl-6 mb-4 space-y-1">
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Python, JavaScript, Java</span>
      </li>
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Django, React, Angular</span>
      </li>
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Project-based Learning</span>
      </li>
    </ul>
    
    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-6">
      <p>Enhance your coding skills and become proficient in modern development frameworks.</p>
    </div>
    
    <hr className="my-6 border-gray-200 dark:border-gray-700" />
    
    <h2 className="text-xl font-semibold mb-3 flex items-center">
      <ProjectIcon />
      <span className="ml-2">Why Learn Programming & Frameworks?</span>
    </h2>
    
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Foundation for all software development roles</span>
      </li>
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Ability to build scalable, maintainable apps</span>
      </li>
      <li className="flex items-start">
        <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
        <span>Exposure to industry-standard tools and practices</span>
      </li>
    </ul>
    
    <h2 className="text-xl font-semibold mt-6 mb-3 flex items-center">
      <BookIcon />
      <span className="ml-2">Course Modules</span>
    </h2>
    
    <ol className="list-decimal pl-6 mb-6 space-y-1">
      <li className="flex items-start">
        <span className="mr-2">1.</span>
        <span>Programming Fundamentals (Python, JavaScript, Java)</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">2.</span>
        <span>Web Frameworks: Django, React, Angular</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">3.</span>
        <span>Version Control and Collaboration (Git, GitHub)</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">4.</span>
        <span>Project Work and Best Practices</span>
      </li>
    </ol>
    
    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
      <p>Take your programming skills to the next level with hands-on projects and expert guidance.</p>
    </div>
  </div>
);

export default ProgrammingAndFrameworks;