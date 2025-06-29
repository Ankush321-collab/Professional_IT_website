import React from 'react';
import cehImg from '../assets/ceh.jpg';
import { FaShieldAlt, FaUserSecret, FaLaptopCode, FaClock, FaCertificate, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CertifiedEthicalHacker = () => (
  <div className="max-w-7xl mx-auto px-4 py-8 ">
    {/* Hero Section with 3D effect */}
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 text-white shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-1 mt-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Certified Ethical Hacker <span className="text-red-400">(CEH v12)</span>
          </h1>
          <p className="text-xl mb-6 opacity-90">
            Master cutting-edge ethical hacking techniques to defend organizations against evolving cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/30">
              <Link to="/contact#contact-form" className="flex items-center">
                Enroll Now <FaArrowRight className="text-sm" />
              </Link>
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg border border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Free Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/3 relative">
          <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-white/20 transform transition-all duration-700 hover:rotate-1 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Ethical Hacker" 
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg font-bold">
            NEW v12
          </div>
        </div>
      </div>
    </div>

    {/* Course Overview Cards with Hover Effects */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-0 border-t-4 border-red-600 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
          <FaShieldAlt className="text-red-600 text-2xl group-hover:text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-red-600 transition-colors duration-300">Certification</h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          Globally recognized EC-Council certification with industry-wide credibility
        </p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-0 border-t-4 border-blue-600 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <FaLaptopCode className="text-blue-600 text-2xl group-hover:text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Hands-on Labs</h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          120+ real-world labs in our advanced cyber range environment
        </p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-0 border-t-4 border-green-600 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
          <FaClock className="text-green-600 text-2xl group-hover:text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors duration-300">Flexible Learning</h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          5-day intensive or self-paced online options with exam prep
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Course Description with Floating Image */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-8 transform transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 flex items-center">
            <FaUserSecret className="mr-3 text-red-600 animate-pulse" /> 
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Course Description
            </span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-2/3">
              <p className="text-gray-700 leading-relaxed mb-4">
                The <span className="font-semibold text-blue-600">Certified Ethical Hacker (CEH v12)</span> program is the most comprehensive ethical hacking course that teaches you 
                to think and act like a hacker (an ethical one). This cybersecurity certification covers penetration testing, 
                vulnerability assessment, and security controls using the latest tools and techniques.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our <span className="font-semibold text-red-600">hands-on training</span> in advanced hacking tools and methodologies is used by cybersecurity professionals 
                worldwide. You'll learn to identify vulnerabilities before malicious hackers can exploit them.
              </p>
            </div>
            <div className="md:w-1/3 relative group">
              <img 
                src={cehImg} 
                alt="Certified Ethical Hacker" 
                className="w-full rounded-lg shadow-md transform transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 transform transition-all duration-300 hover:scale-[1.01]">
            <h3 className="font-bold text-blue-800 mb-3 flex items-center">
              <FaShieldAlt className="mr-2" /> What's New in v12?
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 text-xs mt-1">✓</span>
                <span>Updated modules on AI and machine learning in cybersecurity</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 text-xs mt-1">✓</span>
                <span>Expanded cloud security and IoT hacking techniques</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 text-xs mt-1">✓</span>
                <span>New tools like Burp Suite and Metasploit updates</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-2 text-xs mt-1">✓</span>
                <span>Enhanced malware analysis and reverse engineering</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Course Modules with Animated Cards */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Course Modules
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Introduction to Ethical Hacking",
                desc: "Fundamentals of information security and ethical hacking concepts",
                icon: "👨‍💻"
              },
              {
                title: "Footprinting and Reconnaissance",
                desc: "Information gathering techniques and tools",
                icon: "🔍"
              },
              {
                title: "System Hacking",
                desc: "Password cracking, privilege escalation, and malware threats",
                icon: "💻"
              },
              {
                title: "Web Application Security",
                desc: "OWASP Top 10 vulnerabilities and countermeasures",
                icon: "🌐"
              },
              {
                title: "Wireless Network Security",
                desc: "Wireless encryption flaws and penetration testing",
                icon: "📶"
              },
              {
                title: "Cloud Security",
                desc: "Cloud computing vulnerabilities and security controls",
                icon: "☁️"
              },
              {
                title: "Cryptography",
                desc: "Encryption algorithms and cryptanalysis techniques",
                icon: "🔐"
              },
              {
                title: "SOC Operations",
                desc: "Security operations center monitoring and incident response",
                icon: "🚨"
              }
            ].map((module, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl bg-blue-100 group-hover:bg-blue-600 group-hover:text-white p-3 rounded-lg transition-colors duration-300">
                    {module.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {index + 1}. {module.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{module.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar with Sticky Positioning */}
      <div className="lg:col-span-1">
        <div className="sticky top-8 space-y-6">
          {/* Who Should Attend */}
          <div className="bg-white p-6 rounded-2xl shadow-md transform transition-all duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Who Should Attend?
              </span>
            </h2>
            <ul className="space-y-3">
              {[
                "IT professionals seeking cybersecurity careers",
                "Network administrators and security analysts",
                "Security officers and auditors",
                "Risk assessment professionals",
                "Anyone interested in penetration testing"
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3 mt-1 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    ✓
                  </span>
                  <span className="group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 rounded-2xl shadow-lg text-white transform transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-xl font-bold mb-4 border-b pb-2 border-white/20">
              Key Benefits
            </h2>
            <ul className="space-y-4">
              {[
                {
                  icon: <FaCertificate className="text-yellow-400 text-xl" />,
                  text: "Official EC-Council certification exam voucher"
                },
                {
                  icon: <FaLaptopCode className="text-blue-300 text-xl" />,
                  text: "Access to virtual lab environment for 6 months"
                },
                {
                  icon: <FaChalkboardTeacher className="text-green-300 text-xl" />,
                  text: "Instruction from certified cybersecurity experts"
                },
                {
                  icon: <FaShieldAlt className="text-red-300 text-xl" />,
                  text: "Preparation for real-world security challenges"
                },
                {
                  icon: <FaUserSecret className="text-purple-300 text-xl" />,
                  text: "Legal agreement for penetration testing tools"
                }
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </span>
                  <span className="group-hover:text-yellow-200 transition-colors duration-300">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exam Information */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transform transition-all duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Exam Information
              </span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-sm text-blue-700">Format:</h3>
                <p className="font-medium">125 multiple-choice</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-sm text-blue-700">Duration:</h3>
                <p className="font-medium">4 hours</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-sm text-blue-700">Passing Score:</h3>
                <p className="font-medium">70%</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-sm text-blue-700">Validity:</h3>
                <p className="font-medium">3 years</p>
              </div>
            </div>
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
              <p className="text-sm text-yellow-800 font-medium">
                <span className="font-bold">Pro Tip:</span> Our course includes a free exam retake if needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section with Parallax Effect */}
    <div className="relative bg-gray-900 text-white p-12 rounded-2xl mt-16 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Ethical Hacking Journey?</h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg opacity-90">
          Join thousands of cybersecurity professionals who have advanced their careers with CEH certification.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="relative overflow-hidden bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/40 group">
            <span className="relative z-10">Download Syllabus</span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </button>
          <button className="relative overflow-hidden bg-transparent hover:bg-white/10 text-white font-bold py-4 px-10 rounded-lg border-2 border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
            <span className="relative z-10">Speak to Advisor</span>
            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm opacity-80">
          <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>
          <span>Next cohort starts June 15th - Limited seats available</span>
        </div>
      </div>
    </div>
  </div>
);

export default CertifiedEthicalHacker;