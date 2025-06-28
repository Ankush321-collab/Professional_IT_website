import React from 'react';
import cehImg from '../assets/ceh.jpg';
import { FaShieldAlt, FaUserSecret, FaLaptopCode, FaClock, FaCertificate, FaChalkboardTeacher } from 'react-icons/fa';

const CertifiedEthicalHacker = () => (
  <div className="max-w-6xl mx-auto px-4 py-8 mt">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-8 mb-8 text-white mt-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
          <h1 className="text-4xl font-bold mb-4">Certified Ethical Hacker (CEH v12)</h1>
          <p className="text-xl mb-6">Master the latest ethical hacking techniques and tools to defend organizations against cyber threats.</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Enroll Now
          </button>
        </div>
        <div className="md:w-1/3">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Ethical Hacker" 
            className="w-full rounded-lg shadow-2xl border-4 border-white"
          />
        </div>
      </div>
    </div>

    {/* Course Overview */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-600">
        <FaShieldAlt className="text-red-600 text-3xl mb-3" />
        <h3 className="text-xl font-semibold mb-2">Certification</h3>
        <p>Globally recognized EC-Council certification upon completion</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
        <FaLaptopCode className="text-blue-600 text-3xl mb-3" />
        <h3 className="text-xl font-semibold mb-2">Hands-on Labs</h3>
        <p>120+ hands-on labs in our cyber range environment</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
        <FaClock className="text-green-600 text-3xl mb-3" />
        <h3 className="text-xl font-semibold mb-2">Duration</h3>
        <p>5-day intensive training with exam preparation</p>
      </div>
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white p-8 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 flex items-center">
            <FaUserSecret className="mr-2 text-red-600" /> Course Description
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            The Certified Ethical Hacker (CEH v12) program is the most comprehensive ethical hacking course that teaches you 
            to think and act like a hacker (an ethical one). This cybersecurity certification covers penetration testing, 
            vulnerability assessment, and security controls using the latest tools and techniques.
          </p>
          
          <img 
            src={cehImg} 
            alt="Certified Ethical Hacker" 
            className="w-full rounded-lg mb-6 shadow-md"
          />
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            Our course provides hands-on training in advanced hacking tools and methodologies used by cybersecurity professionals 
            worldwide. You'll learn to identify vulnerabilities before malicious hackers can exploit them.
          </p>
        </div>

        {/* Course Modules */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Course Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-blue-800">1. Introduction to Ethical Hacking</h3>
              <p className="text-gray-600">Fundamentals of information security and ethical hacking concepts</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-blue-800">2. Footprinting and Reconnaissance</h3>
              <p className="text-gray-600">Information gathering techniques and tools</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-blue-800">3. System Hacking</h3>
              <p className="text-gray-600">Password cracking, privilege escalation, and malware threats</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-blue-800">4. Web Application Security</h3>
              <p className="text-gray-600">OWASP Top 10 vulnerabilities and countermeasures</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-blue-800">5. Wireless Network Security</h3>
              <p className="text-gray-600">Wireless encryption flaws and penetration testing</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-blue-800">6. Cloud Security</h3>
              <p className="text-gray-600">Cloud computing vulnerabilities and security controls</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        {/* Who Should Attend */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Who Should Attend?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
              <span>IT professionals seeking cybersecurity careers</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
              <span>Network administrators and security analysts</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
              <span>Security officers and auditors</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2">✓</span>
              <span>Anyone interested in penetration testing</span>
            </li>
          </ul>
        </div>

        {/* Key Benefits */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Key Benefits</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaCertificate className="text-yellow-500 mt-1 mr-2" />
              <span>Official EC-Council certification exam voucher</span>
            </li>
            <li className="flex items-start">
              <FaLaptopCode className="text-blue-500 mt-1 mr-2" />
              <span>Access to virtual lab environment</span>
            </li>
            <li className="flex items-start">
              <FaChalkboardTeacher className="text-green-500 mt-1 mr-2" />
              <span>Instruction from certified cybersecurity experts</span>
            </li>
            <li className="flex items-start">
              <FaShieldAlt className="text-red-500 mt-1 mr-2" />
              <span>Preparation for real-world security challenges</span>
            </li>
          </ul>
        </div>

        {/* Exam Information */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h2 className="text-xl font-bold mb-3 text-blue-800">Exam Information</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-blue-700">Format:</h3>
              <p>125 multiple-choice questions</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700">Duration:</h3>
              <p>4 hours</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700">Passing Score:</h3>
              <p>70%</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700">Validity:</h3>
              <p>3 years</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="bg-gray-900 text-white p-8 rounded-xl mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to Start Your Ethical Hacking Journey?</h2>
      <p className="mb-6 max-w-2xl mx-auto">Join thousands of cybersecurity professionals who have advanced their careers with CEH certification.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
          Download Syllabus
        </button>
        <button className="bg-transparent hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg border border-white transition duration-300">
          Contact Advisor
        </button>
      </div>
    </div>
  </div>
);

export default CertifiedEthicalHacker;