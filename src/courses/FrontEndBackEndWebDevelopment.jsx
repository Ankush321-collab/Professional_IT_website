import React from 'react';
import { FiCode, FiServer, FiCpu, FiCloud, FiAward, FiLayers, FiDatabase, FiCpu as FiPerformance } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FrontEndBackEndWebDevelopment = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
    {/* Hero Section with 3D Effect */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-900 p-8 md:p-12 mb-12 text-white">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500 rounded-full opacity-20"></div>
      
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Full Stack Web <span className="text-yellow-300">Development</span>
        </h1>
        <p className="text-xl text-blue-100 dark:text-blue-200 max-w-2xl">
          Master both client and server-side technologies to build complete, production-ready web applications
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Link to="/contact#contact-form">Start Learning Now</Link>
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
            Explore Curriculum
          </button>
        </div>
      </div>
    </div>

    {/* Features Grid with Hover Effects */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {/* Image Card with Glow Effect */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
        <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-all duration-300">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Web Development" 
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
            loading="lazy"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Full Stack Journey</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              From frontend aesthetics to backend logic - become a versatile developer who can build complete solutions.
            </p>
            <ul className="space-y-4">
              {[
                { icon: <FiCode className="text-blue-500" size={20} />, text: "HTML, CSS, JavaScript, React" },
                { icon: <FiServer className="text-purple-500" size={20} />, text: "Node.js, Express, MongoDB" },
                { icon: <FiDatabase className="text-green-500" size={20} />, text: "API Development & Deployment" }
              ].map((item, index) => (
                <li key={index} className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mt-0.5 mr-3">{item.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Card */}
      <div className="space-y-6">
        {[
          {
            title: "End-to-End Understanding",
            description: "Gain complete knowledge of web technologies from UI to database and everything in between",
            icon: <FiLayers className="text-blue-500" size={24} />,
            bg: "bg-blue-50 dark:bg-blue-900/30"
          },
          {
            title: "Build Complete Apps",
            description: "Ability to architect, build, deploy, and maintain production-ready applications independently",
            icon: <FiCloud className="text-purple-500" size={24} />,
            bg: "bg-purple-50 dark:bg-purple-900/30"
          },
          {
            title: "High Market Demand",
            description: "Full stack developers command premium salaries and are among the most sought-after professionals",
            icon: <FiAward className="text-green-500" size={24} />,
            bg: "bg-green-50 dark:bg-green-900/30"
          }
        ].map((item, index) => (
          <div 
            key={index}
            className={`${item.bg} p-5 rounded-xl border border-transparent hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group hover:shadow-lg`}
          >
            <div className="flex items-start">
              <div className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm mr-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Course Topics with Animated Cards */}
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white">Comprehensive Curriculum</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Everything you need to go from beginner to job-ready full stack developer
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            title: "Front End Mastery", 
            items: ["HTML5 & Semantic Markup", "CSS3/SASS/PostCSS", "JavaScript ES6+", "React.js & State Management", "Responsive Design", "Web Accessibility"],
            icon: <FiCode className="text-blue-500" size={24} />,
            color: "from-blue-400 to-blue-600"
          },
          { 
            title: "Back End Development", 
            items: ["Node.js & Express", "RESTful API Design", "MongoDB & Mongoose", "Authentication (JWT/OAuth)", "WebSockets & Real-time", "Server-side Security"],
            icon: <FiServer className="text-purple-500" size={24} />,
            color: "from-purple-400 to-purple-600"
          },
          { 
            title: "DevOps & Deployment", 
            items: ["Docker Basics", "CI/CD Pipelines", "AWS/Heroku Deployment", "Performance Optimization", "Testing (Jest/Mocha)", "Monitoring & Debugging"],
            icon: <FiPerformance className="text-green-500" size={24} />,
            color: "from-green-400 to-green-600"
          }
        ].map((section, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
              <div className="flex items-center">
                <div className="p-3 bg-white bg-opacity-20 rounded-lg mr-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`bg-gradient-to-r ${section.color} w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Section with Floating Elements */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 p-8 md:p-12 text-center">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white bg-opacity-10 rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white bg-opacity-10 rounded-full"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Career?</h2>
        <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
          Join thousands of students who've launched successful tech careers with our full stack program.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/contact#contact-form">Enroll Now - Start Today</Link>
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
            Speak with an Advisor
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default FrontEndBackEndWebDevelopment;