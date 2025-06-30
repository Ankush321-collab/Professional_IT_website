import React from 'react';
import { FaChartLine, FaSearch, FaHashtag, FaEnvelope, FaAd, FaLaptop, FaBriefcase, FaUserTie, FaCertificate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r mt-8 from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 rounded-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center ">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Digital Marketing Mastery</h1>
              <p className="text-lg sm:text-xl mb-6">Master the digital landscape with our comprehensive training covering SEO, social media, PPC, content marketing, and analytics.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white dark:bg-yellow-400 hover:bg-blue-50 dark:hover:bg-yellow-500 text-blue-600 dark:text-gray-900 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300">
                  <Link to="/contact#contact-form">Enroll Now</Link>
                </button>
                <button className="bg-transparent hover:bg-blue-700 dark:hover:bg-gray-800 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg border border-white transition duration-300">
                  Download Syllabus
                </button>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Digital Marketing" 
                className="w-full rounded-lg shadow-2xl border-4 border-white"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            { icon: <FaChartLine className="text-blue-500 dark:text-blue-400 text-2xl sm:text-3xl mb-3" />, 
              title: "Industry-Relevant Skills", 
              desc: "Learn the latest tools and strategies used by top agencies",
              border: "border-blue-500"
            },
            { icon: <FaLaptop className="text-purple-500 dark:text-purple-400 text-2xl sm:text-3xl mb-3" />, 
              title: "Hands-On Projects", 
              desc: "Build a professional portfolio with real case studies",
              border: "border-purple-500"
            },
            { icon: <FaCertificate className="text-green-500 dark:text-green-400 text-2xl sm:text-3xl mb-3" />, 
              title: "Certification", 
              desc: "Earn a recognized certification to boost your career",
              border: "border-green-500"
            }
          ].map((feature, index) => (
            <div key={index} className={`p-4 sm:p-6 rounded-xl shadow-md border-t-4 ${feature.border} bg-white dark:bg-gray-800`}>
              {feature.icon}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Course Description */}
            <div className="p-6 sm:p-8 rounded-xl shadow-md mb-6 sm:mb-8 bg-white dark:bg-gray-800">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b flex items-center text-gray-800 dark:text-white border-gray-200 dark:border-gray-700">
                <FaChartLine className="mr-2 text-blue-600 dark:text-blue-400" /> Course Overview
              </h2>
              <p className="mb-4 sm:mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                Our Digital Marketing Mastery program equips you with comprehensive skills across all major digital marketing 
                channels. Whether you're an aspiring marketer, business owner, or career changer, this course provides 
                practical knowledge to create, implement, and measure successful digital campaigns.
              </p>
              
              <img 
                src={'/assets/digital.jpg'} 
                alt="Digital Marketing" 
                className="w-full rounded-lg mb-4 sm:mb-6 shadow-md"
                loading="lazy"
              />
              
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                You'll gain hands-on experience with industry-standard tools like Google Analytics, Ads Manager, SEO platforms, 
                and social media management tools, preparing you for real-world marketing challenges.
              </p>
            </div>

            {/* Detailed Modules */}
            <div className="p-6 sm:p-8 rounded-xl shadow-md bg-white dark:bg-gray-800">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b text-gray-800 dark:text-white border-gray-200 dark:border-gray-700">
                Detailed Curriculum
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: <FaSearch className="mr-2" />, 
                    title: "Search Marketing (SEO & SEM)", 
                    items: ["Keyword research and strategy", "On-page and technical SEO", "Google Ads and PPC campaigns", "Local SEO and Google My Business"],
                    border: "border-blue-500",
                    color: "text-blue-800 dark:text-blue-400"
                  },
                  { icon: <FaHashtag className="mr-2" />, 
                    title: "Social Media Marketing", 
                    items: ["Platform-specific strategies", "Content creation and scheduling", "Community management", "Social media advertising"],
                    border: "border-purple-500",
                    color: "text-purple-800 dark:text-purple-400"
                  },
                  { icon: <FaEnvelope className="mr-2" />, 
                    title: "Email Marketing & Automation", 
                    items: ["List building and segmentation", "Email campaign design", "Automation workflows", "Performance analysis"],
                    border: "border-green-500",
                    color: "text-green-800 dark:text-green-400"
                  },
                  { icon: <FaAd className="mr-2" />, 
                    title: "Paid Advertising", 
                    items: ["Google Ads certification", "Facebook/Instagram ads", "Display and video advertising", "Retargeting strategies"],
                    border: "border-red-500",
                    color: "text-red-800 dark:text-red-400"
                  }
                ].map((module, index) => (
                  <div key={index} className={`border-l-4 ${module.border} pl-4`}>
                    <h3 className={`font-semibold text-lg sm:text-xl mb-2 flex items-center ${module.color}`}>
                      {module.icon} {index + 1}. {module.title}
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                      {module.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Career Opportunities */}
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b text-gray-800 dark:text-white border-gray-200 dark:border-gray-700">
                Career Paths
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { title: "Digital Marketing Specialist", salary: "$45k - $75k/year" },
                  { title: "SEO/SEM Manager", salary: "$55k - $90k/year" },
                  { title: "Social Media Manager", salary: "$40k - $70k/year" },
                  { title: "Content Marketing Strategist", salary: "$50k - $85k/year" }
                ].map((job, index) => (
                  <li key={index} className="flex items-start">
                    <span className="p-1 rounded-full mr-3 mt-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">✓</span>
                    <div>
                      <h3 className="font-semibold dark:text-white">{job.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{job.salary}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose This Course */}
            <div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b text-gray-800 dark:text-white border-gray-200 dark:border-gray-700">
                Why Choose This Course?
              </h2>
              <ul className="space-y-3">
                {[
                  { icon: <FaUserTie className="mt-1 mr-2 text-blue-500 dark:text-blue-400" />, text: "Taught by industry experts with agency experience" },
                  { icon: <FaBriefcase className="mt-1 mr-2 text-purple-500 dark:text-purple-400" />, text: "Practical assignments with real business scenarios" },
                  { icon: <FaLaptop className="mt-1 mr-2 text-green-500 dark:text-green-400" />, text: "Access to premium tools during the course" },
                  { icon: <FaCertificate className="mt-1 mr-2 text-red-500 dark:text-red-400" />, text: "Career support and certification" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start dark:text-white">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Details */}
            <div className="p-6 rounded-xl border bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-300">
                Course Details
              </h2>
              <div className="space-y-3">
                {[
                  { label: "Duration:", value: "8 weeks (part-time) or 4 weeks (intensive)" },
                  { label: "Format:", value: "Online live classes + recorded sessions" },
                  { label: "Prerequisites:", value: "Basic computer skills required" },
                  { label: "Next Start Date:", value: "June 15, 2023" }
                ].map((detail, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-blue-700 dark:text-blue-400">{detail.label}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="p-6 sm:p-8 rounded-xl my-8 sm:my-12 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              { 
                quote: "This course transformed my career. I went from knowing nothing to landing a job at an agency within 3 months.", 
                name: "Sarah Johnson", 
                role: "Digital Marketing Specialist",
                bg: "bg-white dark:bg-gray-700"
              },
              { 
                quote: "The practical approach gave me confidence to start my own freelance business managing social media for 5 local businesses.", 
                name: "Michael Chen", 
                role: "Freelance Marketer",
                bg: "bg-white dark:bg-gray-700"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`p-4 sm:p-6 rounded-lg shadow-sm ${testimonial.bg}`}>
                <p className="italic mb-4 text-gray-600 dark:text-gray-300">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4 ${index === 0 ? 'bg-blue-200 dark:bg-blue-900' : 'bg-purple-200 dark:bg-purple-900'}`}></div>
                  <div>
                    <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="rounded-xl p-6 sm:p-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800 text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Start Your Digital Marketing Career Today</h2>
          <p className="mb-6 max-w-2xl mx-auto">Limited seats available for our next cohort. Apply now to secure your spot.</p>
          <button className="py-2 sm:py-3 px-6 sm:px-8 rounded-lg font-bold transition duration-300 bg-white dark:bg-yellow-400 hover:bg-blue-50 dark:hover:bg-yellow-500 text-blue-600 dark:text-gray-900">
            <Link to="/contact#contact-form">Apply Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;