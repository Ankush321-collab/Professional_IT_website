import React from 'react';
import oracleImg from '../assets/oracle.jpg';

// Custom SVG Icon Components
const DatabaseIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const SqlIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path>
    <path d="M4 9h16"></path>
    <path d="M9 4v16"></path>
  </svg>
);

const ShieldIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const BackupIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

const OracleDatabaseCertification = () => (
  <div className="max-w-2xl mx-auto p-6 dark:bg-gray-800 dark:text-gray-100">
    <div className="flex items-center mb-6 mt-8">
      <DatabaseIcon className="text-red-600 mr-2" />
      <h1 className="text-2xl font-bold">Oracle Database Certification</h1>
    </div>
    
    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-6">
      <img src={oracleImg} alt="Oracle Database" className="w-full" />
      <div className="p-4">
        <p className="mb-4">Oracle Database Certification demonstrates your expertise in managing Oracle databases, SQL, PL/SQL, and database security.</p>
        
        <ul className="space-y-2">
          <li className="flex items-start">
            <DatabaseIcon className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>Oracle Database Administration</span>
          </li>
          <li className="flex items-start">
            <SqlIcon className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>SQL & PL/SQL Programming</span>
          </li>
          <li className="flex items-start">
            <BackupIcon className="text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>Backup, Recovery, and Security</span>
          </li>
        </ul>
      </div>
    </div>

    <p className="mb-6">Prepare for roles such as Database Administrator, Developer, and Data Analyst with hands-on labs and real-world projects.</p>

    <hr className="my-6 border-gray-200 dark:border-gray-700" />

    <div className="mb-8">
      <div className="flex items-center mb-4">
        <ShieldIcon className="text-green-600 mr-2" />
        <h2 className="text-xl font-semibold">Why Oracle Certification?</h2>
      </div>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <ShieldIcon className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Globally recognized credential for database professionals</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <DatabaseIcon className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Hands-on experience with Oracle technologies</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <DatabaseIcon className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Career opportunities in enterprise IT and data management</span>
        </li>
      </ul>
    </div>

    <div>
      <div className="flex items-center mb-4">
        <SqlIcon className="text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold">Course Outline</h2>
      </div>
      
      <ol className="space-y-3">
        {[
          "Database Architecture & Installation",
          "SQL, PL/SQL, and Data Modeling",
          "Backup, Recovery, and Performance Tuning",
          "Security, Auditing, and Compliance",
          "Real-world Projects and Case Studies"
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
      <p className="text-center font-medium">Contact us for more details on course duration, fees, and certification exams.</p>
    </div>
  </div>
);

export default OracleDatabaseCertification;