import React from 'react';

import { FiCode, FiServer, FiCpu, FiCloud, FiAward } from 'react-icons/fi';

const FrontEndBackEndWebDevelopment = () => (
  <div className="max-w-4xl mx-auto p-4 sm:p-6">
    <div className="bg-gradient-to-r mt-8 from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-xl p-6 mb-8 text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Front End & Back End Web Development</h1>
      <p className="text-blue-100 dark:text-blue-200 text-lg">
        Master both client-side and server-side development to build complete web applications
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
        <img 
          src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg"
          alt="Web Development" 
          className="w-full h-48 object-cover" 
          loading="lazy"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Full Stack Journey</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn HTML, CSS, JavaScript, Node.js, databases, and deployment to become a versatile developer.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <FiCode className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">HTML, CSS, JavaScript, React</span>
            </li>
            <li className="flex items-start">
              <FiServer className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Node.js, Express, MongoDB</span>
            </li>
            <li className="flex items-start">
              <FiCpu className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">API Development & Deployment</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Why Full Stack Development?</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
              <FiAward className="text-blue-500 dark:text-blue-300" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-white">End-to-End Understanding</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gain complete knowledge of web technologies from UI to database
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
              <FiCloud className="text-blue-500 dark:text-blue-300" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-white">Build Complete Apps</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ability to build, deploy, and maintain production-ready applications
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
              <FiAward className="text-blue-500 dark:text-blue-300" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-white">High Demand</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full stack developers are among the most sought-after professionals
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Course Topics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: "Front End", items: ["HTML5", "CSS3/SASS", "JavaScript ES6+", "React.js"] },
          { title: "Back End", items: ["Node.js", "Express", "MongoDB", "Authentication"] },
          { title: "DevOps", items: ["API Development", "Deployment", "CI/CD Basics", "Performance"] }
        ].map((section, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="bg-blue-500 dark:bg-blue-600 w-2 h-2 rounded-full mt-2 mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center bg-blue-50 dark:bg-gray-700 rounded-xl p-6 border border-blue-200 dark:border-gray-600">
      <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Ready to Begin Your Journey?</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
        Join us to become a job-ready full stack web developer with hands-on projects and portfolio building.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
        Enroll Now
      </button>
    </div>
  </div>
);

export default FrontEndBackEndWebDevelopment;