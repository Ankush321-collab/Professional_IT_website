import React from 'react';
import progImg from '../assets/programming.jpg';
import { Link } from 'react-router-dom';

// SVG Icon Components with hover effects
const BookIcon = ({ className = '' }) => (
  <svg className={`w-5 h-5 transition-transform ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CodeIcon = ({ className = '' }) => (
  <svg className={`w-5 h-5 transition-transform ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ProjectIcon = ({ className = '' }) => (
  <svg className={`w-5 h-5 transition-transform ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const CheckIcon = ({ className = '' }) => (
  <svg className={`w-5 h-5 transition-transform ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ProgrammingAndFrameworks = () => (
  <div className="max-w-4xl mx-auto p-6">
    {/* Header with animated icon */}
    <div className="flex items-center mb-8 mt-8 group">
      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg group-hover:rotate-6 transition-transform duration-300">
        <CodeIcon className="text-white group-hover:scale-110" />
      </div>
      <h1 className="text-3xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Programming And Frameworks
      </h1>
    </div>
    
    {/* 3D Image Section with hover effect */}
    <div className="mb-8 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <img 
        src={progImg} 
        alt="Programming and frameworks concepts" 
        className="w-full h-64 md:h-80 object-cover transform transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <p className="text-white text-lg font-medium">Master Modern Development Stacks</p>
      </div>
    </div>
    
    {/* Highlight Card with glow effect */}
    <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 mb-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-l-4 hover:border-blue-500">
      <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="flex items-start">
        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4 transform transition-transform hover:rotate-12">
          <BookIcon className="text-blue-600 dark:text-blue-300" />
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Explore programming languages and frameworks such as Python, JavaScript, Django, and React. Build scalable and maintainable applications with industry best practices.
        </p>
      </div>
    </div>
    
    {/* Features List with animated checkmarks */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {[
        "Python, JavaScript, Java",
        "Django, React, Angular",
        "Project-based Learning",
        "REST APIs & Microservices",
        "Testing & Debugging",
        "Performance Optimization"
      ].map((item, index) => (
        <div 
          key={index} 
          className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-gray-50 dark:hover:bg-gray-750 border-l-4 border-transparent hover:border-blue-500"
        >
          <div className="p-1 bg-green-100 dark:bg-green-900/50 rounded-full mr-3 transform transition-transform hover:scale-125">
            <CheckIcon className="text-green-600 dark:text-green-400" />
          </div>
          <span className="text-gray-700 dark:text-gray-300">{item}</span>
        </div>
      ))}
    </div>
    
    {/* Glowing Info Card */}
    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-6 mb-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-400 rounded-full opacity-10"></div>
      <div className="absolute -left-5 -bottom-5 w-24 h-24 bg-purple-400 rounded-full opacity-10"></div>
      <p className="relative text-blue-800 dark:text-blue-200 text-lg font-medium z-10">
        Enhance your coding skills and become proficient in modern development frameworks.
      </p>
    </div>
    
    <hr className="my-8 border-gray-200 dark:border-gray-700" />
    
    {/* Why Learn Section */}
    <div className="group mb-10">
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-4 transform transition-transform group-hover:rotate-6">
          <ProjectIcon className="text-purple-600 dark:text-purple-400" />
        </div>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Why Learn Programming & Frameworks?
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Career Foundation",
            desc: "Essential for all software development roles across industries",
            icon: <BookIcon className="text-blue-500 group-hover:text-blue-600 transition-colors" />
          },
          {
            title: "Build Scalable Apps",
            desc: "Create maintainable, efficient applications that grow with your users",
            icon: <CodeIcon className="text-green-500 group-hover:text-green-600 transition-colors" />
          },
          {
            title: "Industry Standards",
            desc: "Learn tools and practices used by top tech companies worldwide",
            icon: <ProjectIcon className="text-purple-500 group-hover:text-purple-600 transition-colors" />
          }
        ].map((item, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500/50 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-xl flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    
    {/* Course Modules */}
    <div className="group">
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-4 transform transition-transform group-hover:rotate-6">
          <BookIcon className="text-blue-600 dark:text-blue-400" />
        </div>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          Course Modules
        </span>
      </h2>
      
      <div className="space-y-4">
        {[
          "Programming Fundamentals (Python, JavaScript, Java)",
          "Web Frameworks: Django, React, Angular",
          "Version Control and Collaboration (Git, GitHub)",
          "Database Design & ORMs",
          "REST APIs & Microservices Architecture",
          "Testing, Debugging & Deployment",
          "Performance Optimization Techniques",
          "Final Capstone Project"
        ].map((item, index) => (
          <div 
            key={index}
            className="flex items-start p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300 border-l-4 border-blue-500/0 hover:border-blue-500 group/module"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500/10 dark:bg-blue-500/20 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover/module:bg-blue-500/20 transition-colors">
              <span className="text-blue-600 dark:text-blue-400 font-medium">{index + 1}</span>
            </div>
            <span className="text-gray-700 dark:text-gray-300 group-hover/module:text-gray-900 dark:group-hover/module:text-white transition-colors">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
    
    {/* Final CTA Card */}
    <div className="mt-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-white transform transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-1">
      <h3 className="text-2xl font-bold mb-3">Ready to Level Up Your Skills?</h3>
      <p className="mb-6 text-green-100">Take your programming skills to the next level with hands-on projects and expert guidance.</p>
      <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
        <Link to="/contact#contact-form">Enroll Now</Link>
      </button>
    </div>
  </div>
);

export default ProgrammingAndFrameworks;