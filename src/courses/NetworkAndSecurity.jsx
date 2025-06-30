import React from 'react';
import { Link } from 'react-router-dom';

// Enhanced Custom SVG Icon Components with hover effects
const NetworkIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="9" r="3"></circle>
    <path d="M19 17v-2a7 7 0 0 0-14 0v2"></path>
    <path d="M12 21h7v-2a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v2h7z"></path>
  </svg>
);

const ShieldIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const FirewallIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const VpnIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
  <div className="max-w-4xl mx-auto px-4 py-8 dark:bg-gray-900 dark:text-gray-100">
    {/* Hero Section */}
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white overflow-hidden shadow-2xl mt-8">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 "></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500/20 p-2 rounded-lg backdrop-blur-sm">
              <NetworkIcon className="text-blue-300" />
            </div>
            <h1 className="text-3xl font-bold ml-3 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Network and Security
            </h1>
          </div>
          <p className="text-lg opacity-90 mb-6">
            Master modern network infrastructure and cybersecurity defenses with hands-on labs and real-world scenarios.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm backdrop-blur-sm">Cisco</span>
            <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm backdrop-blur-sm">Firewalls</span>
            <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm backdrop-blur-sm">VPNs</span>
            <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm backdrop-blur-sm">IDS/IPS</span>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="relative group">
            <img 
              src={'/assets/network.jpg'} 
              alt="Network and Security" 
              className="w-full rounded-xl shadow-2xl border-4 border-white/20 transform transition-all duration-500 group-hover:rotate-1 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              Hands-on Labs
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Course Overview */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mr-4">
            <NetworkIcon className="text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Network Fundamentals</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Understand core networking concepts including protocols, topologies, and infrastructure components.
        </p>
        <ul className="space-y-2">
          {['OSI & TCP/IP Models', 'IP Addressing & Subnetting', 'Routing & Switching', 'Wireless Networks'].map((item, i) => (
            <li key={i} className="flex items-center group">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:animate-pulse"></span>
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center mb-4">
          <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-full mr-4">
            <ShieldIcon className="text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Security Essentials</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Implement robust security measures to protect network infrastructure from modern threats.
        </p>
        <ul className="space-y-2">
          {['Firewalls & VPNs', 'Intrusion Detection', 'Access Control', 'Threat Mitigation'].map((item, i) => (
            <li key={i} className="flex items-center group">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 group-hover:animate-pulse"></span>
              <span className="group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* What You'll Learn */}
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-4">
          <ShieldIcon className="text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
            What You'll Master
          </span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: <NetworkIcon className="text-blue-500" />, text: "Network protocols and architecture" },
          { icon: <FirewallIcon className="text-red-500" />, text: "Firewall configuration and management" },
          { icon: <VpnIcon className="text-purple-500" />, text: "Secure VPN implementation" },
          { icon: <ShieldIcon className="text-green-500" />, text: "Threat detection and response" },
          { icon: <NetworkIcon className="text-blue-500" />, text: "Wireless security best practices" },
          { icon: <ShieldIcon className="text-green-500" />, text: "Security policies and compliance" }
        ].map((item, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 group"
          >
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
                {item.icon}
              </div>
              <span className="mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Course Structure */}
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg mr-4">
          <FirewallIcon className="text-red-600 dark:text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          <span className="bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
            Course Structure
          </span>
        </h2>
      </div>
      
      <div className="space-y-4">
        {[
          { week: 1, title: "Networking Fundamentals", desc: "OSI model, TCP/IP, network devices" },
          { week: 2, title: "Infrastructure Security", desc: "Firewalls, VPNs, secure architecture" },
          { week: 3, title: "Threat Protection", desc: "IDS/IPS, malware defense, access control" },
          { week: 4, title: "Wireless Security", desc: "WPA3, rogue AP detection, secure config" },
          { week: 5, title: "Practical Implementation", desc: "Hands-on labs and case studies" }
        ].map((item, index) => (
          <div 
            key={index}
            className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white p-4 md:p-6 flex items-center justify-center md:w-24 flex-shrink-0">
              <span className="text-2xl font-bold">W{item.week}</span>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
            <div className="p-4 md:p-6 flex items-center justify-end flex-shrink-0">
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center">
                Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Final CTA */}
    <div className="relative bg-gradient-to-r from-indigo-700 to-blue-800 rounded-2xl p-8 text-white overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Secure Networks Like a Pro?</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Join our next cohort and gain the skills to design, implement, and secure enterprise networks.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/20">
            <Link to="/contact#contact-form">Enroll Now</Link>
          </button>
          <button className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg border border-white transition-all duration-300 transform hover:scale-105">
            Download Syllabus
          </button>
        </div>
        <div className="mt-4 text-sm opacity-80 flex items-center justify-center">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          Next session starts June 10th - Limited seats
        </div>
      </div>
    </div>
  </div>
);

export default NetworkAndSecurity;