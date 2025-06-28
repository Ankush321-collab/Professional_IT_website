import React from 'react';
import networkImg from '../assets/network.jpg';

// Custom SVG Icon Components
const NetworkIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="9" r="3"></circle>
    <path d="M19 17v-2a7 7 0 0 0-14 0v2"></path>
    <path d="M12 21h7v-2a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v2h7z"></path>
  </svg>
);

const ShieldIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const FirewallIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const VpnIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
    <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
  </svg>
);

const NetworkAndSecurity = () => (
  <div className="max-w-2xl mx-auto p-6 dark:bg-gray-800 dark:text-gray-100">
    <div className="flex items-center mb-6 mt-8">
      <NetworkIcon className="text-blue-600 mr-2" />
      <h1 className="text-2xl font-bold">Network and Security</h1>
    </div>
    
    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-6">
      <img src={networkImg} alt="Network and Security" className="w-full" />
      <div className="p-4">
        <p className="mb-4">This course covers the fundamentals of computer networking and cybersecurity, including protocols, firewalls, VPNs, and best practices for securing networks.</p>
        
        <ul className="space-y-2">
          <li className="flex items-start">
            <NetworkIcon className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>OSI & TCP/IP Models</span>
          </li>
          <li className="flex items-start">
            <NetworkIcon className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>Network Devices & Topologies</span>
          </li>
          <li className="flex items-start">
            <FirewallIcon className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>Firewalls, IDS/IPS, VPNs</span>
          </li>
          <li className="flex items-start">
            <ShieldIcon className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>Network Security Best Practices</span>
          </li>
        </ul>
      </div>
    </div>

    <p className="mb-6">Gain practical skills to design, implement, and secure modern networks for businesses and organizations.</p>

    <hr className="my-6 border-gray-200 dark:border-gray-700" />

    <div className="mb-8">
      <div className="flex items-center mb-4">
        <ShieldIcon className="text-green-600 mr-2" />
        <h2 className="text-xl font-semibold">What You'll Learn</h2>
      </div>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <NetworkIcon className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Network protocols, addressing, and routing</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <NetworkIcon className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Wireless and wired network security</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <ShieldIcon className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Threat detection and mitigation</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <ShieldIcon className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Incident response and disaster recovery</span>
        </li>
        <li className="flex items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <VpnIcon className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
          <span>Security policies and compliance</span>
        </li>
      </ul>
    </div>

    <div>
      <div className="flex items-center mb-4">
        <FirewallIcon className="text-red-600 mr-2" />
        <h2 className="text-xl font-semibold">Course Structure</h2>
      </div>
      
      <ol className="space-y-3">
        {[
          "Introduction to Networking",
          "Network Devices and Configuration",
          "Cybersecurity Fundamentals",
          "Firewalls, VPNs, and IDS/IPS",
          "Practical Labs and Case Studies"
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>

    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
      <p className="text-center font-medium">By the end of this course, you'll be able to design, secure, and troubleshoot modern networks for any organization.</p>
    </div>
  </div>
);

export default NetworkAndSecurity;