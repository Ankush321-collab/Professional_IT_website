import React from 'react';
import oracleImg from '../assets/oracle.jpg';
import { Link } from 'react-router-dom';

// Custom SVG Icon Components with improved styling
const DatabaseIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const SqlIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path>
    <path d="M4 9h16"></path>
    <path d="M9 4v16"></path>
  </svg>
);

const ShieldIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const BackupIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

const OracleDatabaseCertification = () => (
  <div className="max-w-4xl mx-auto p-6 dark:bg-gray-900 dark:text-gray-100">
    {/* Header with 3D effect */}
    <div className="flex items-center mb-8 mt-8">
      <div className="p-2 bg-gradient-to-br from-red-500 to-red-700 rounded-lg shadow-lg transform transition-all duration-300 hover:rotate-3 hover:scale-105">
        <DatabaseIcon className="text-white" />
      </div>
      <h1 className="text-3xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
        Oracle Database Certification
      </h1>
    </div>
    
    {/* Main card with 3D hover effect */}
    <div className="relative group mb-10">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
        <img 
          src={oracleImg} 
          alt="Oracle Database" 
          className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-105" 
        />
        <div className="p-6">
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Oracle Database Certification demonstrates your expertise in managing Oracle databases, SQL, PL/SQL, and database security with industry-recognized credentials.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start group">
              <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg mr-4 transition-all duration-300 group-hover:bg-red-200 dark:group-hover:bg-red-800">
                <DatabaseIcon className="text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Oracle Database Administration</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Master installation, configuration, and maintenance</p>
              </div>
            </li>
            <li className="flex items-start group">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-4 transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800">
                <SqlIcon className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">SQL & PL/SQL Programming</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Write efficient queries and stored procedures</p>
              </div>
            </li>
            <li className="flex items-start group">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg mr-4 transition-all duration-300 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800">
                <BackupIcon className="text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Backup, Recovery, and Security</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Implement robust data protection strategies</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p className="mb-10 text-center text-xl text-gray-700 dark:text-gray-300 leading-relaxed px-4">
      Prepare for roles such as <span className="font-semibold text-red-600 dark:text-red-400">Database Administrator</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">Developer</span>, and <span className="font-semibold text-purple-600 dark:text-purple-400">Data Analyst</span> with hands-on labs and real-world projects.
    </p>

    <hr className="my-10 border-t-2 border-gray-200 dark:border-gray-700 w-3/4 mx-auto" />

    {/* Why Oracle Section */}
    <div className="mb-12">
      <div className="flex items-center justify-center mb-8">
        <div className="p-3 bg-gradient-to-br from-green-500 to-green-700 rounded-full shadow-lg mr-4 transform transition-all duration-300 hover:rotate-6">
          <ShieldIcon className="text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">
          Why Oracle Certification?
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <ShieldIcon className="text-green-600 dark:text-green-400" />,
            title: "Global Recognition",
            desc: "Industry-standard credential valued worldwide",
            bg: "bg-green-50 dark:bg-green-900/20"
          },
          {
            icon: <DatabaseIcon className="text-red-600 dark:text-red-400" />,
            title: "Hands-on Experience",
            desc: "Practical skills with Oracle technologies",
            bg: "bg-red-50 dark:bg-red-900/20"
          },
          {
            icon: <DatabaseIcon className="text-blue-600 dark:text-blue-400" />,
            title: "Career Growth",
            desc: "Opportunities in enterprise IT and data",
            bg: "bg-blue-50 dark:bg-blue-900/20"
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className={`${item.bg} p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-${item.icon.props.className.includes('green') ? 'green' : item.icon.props.className.includes('red') ? 'red' : 'blue'}-200 dark:hover:border-${item.icon.props.className.includes('green') ? 'green' : item.icon.props.className.includes('red') ? 'red' : 'blue'}-700`}
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

    {/* Course Outline */}
    <div className="mb-12">
      <div className="flex items-center justify-center mb-8">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg mr-4 transform transition-all duration-300 hover:rotate-6">
          <SqlIcon className="text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
          Course Outline
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "Database Architecture & Installation",
          "SQL, PL/SQL, and Data Modeling",
          "Backup, Recovery, and Performance Tuning",
          "Security, Auditing, and Compliance",
          "Cloud Database Services",
          "Real-world Projects and Case Studies"
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-600 transition-all duration-300 hover:shadow-lg hover:border-l-8 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            <div className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA with animation */}
    <div className="mt-12 p-6 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105">
      <p className="text-center font-semibold text-white text-lg">
        Ready to boost your career? Contact us for course details, schedules, and certification paths!
      </p>
      <div className="flex justify-center mt-4">
        <button className="px-6 py-2 bg-white text-red-600 font-bold rounded-full shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-110">
          <Link to="/contact#contact-form">Get Started</Link>
        </button>
      </div>
    </div>
  </div>
);

export default OracleDatabaseCertification;