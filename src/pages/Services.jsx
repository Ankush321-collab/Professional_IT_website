import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const customServices = [
  {
    id: 1,
    title: 'CISCO CERTIFIED CCNA',
    description: 'Comprehensive training for Cisco Certified Network Associate. Learn networking fundamentals, configuration, and troubleshooting.',
    features: ['Network Fundamentals', 'Routing & Switching', 'Security Basics', 'Hands-on Labs'],
    image: 'network.jpg',
    color: 'from-blue-500 to-blue-600',
    icon: '🔌'
  },
  {
    id: 2,
    title: 'CCNA DATA CENTER',
    description: 'Specialized training for Cisco Data Center certification. Covers data center networking, storage, and automation.',
    features: ['Data Center Networking', 'Storage Networking', 'Unified Computing', 'Automation'],
    image: 'network.jpg',
    color: 'from-green-500 to-green-600',
    icon: '📊'
  },
  {
    id: 3,
    title: 'CISCO CERTIFIED CCNP',
    description: 'Advanced Cisco Certified Network Professional training. Focus on enterprise networking and security.',
    features: ['Advanced Routing', 'Enterprise Networking', 'Security', 'Troubleshooting'],
    image: 'network.jpg',
    color: 'from-purple-500 to-purple-600',
    icon: '🛡️'
  },
  {
    id: 4,
    title: 'RHCSA ON RHEL 9',
    description: 'Red Hat Certified System Administrator on RHEL 9. Learn Linux administration, scripting, and system management.',
    features: ['Linux Basics', 'System Administration', 'Shell Scripting', 'User & Permission Management'],
    image: 'redhat.jpg',
    color: 'from-red-500 to-red-600',
    icon: '🐧'
  },
  {
    id: 5,
    title: 'CERTIFIED ENGINEER',
    description: 'Become a certified engineer with hands-on training in system, network, and cloud technologies.',
    features: ['Systems Engineering', 'Cloud Basics', 'Network Design', 'Project Work'],
    image: 'redhat.jpg',
    color: 'from-yellow-500 to-yellow-600',
    icon: '👨‍💻'
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 dark:opacity-5"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-200"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-400"></div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Our Services
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Comprehensive technology solutions designed to meet your personal and business needs. 
              From computer training to advanced IT support, we've got you covered.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10"
            >
              <a 
                href="#services" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Services
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-12 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-15 dark:opacity-20 rounded-full -bottom-1 -left-2 -right-2 -top-1"></span>
                <span className="relative">Our Training Programs</span>
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications to boost your IT career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {customServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden h-full flex flex-col border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 cursor-pointer max-w-xs w-full mx-auto">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl sm:text-3xl mr-2 sm:mr-4">{service.icon}</div>
                      <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                    <ul className="mb-4 sm:mb-6 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          <svg className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-700">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* The rest of the services as simple cards */}
            {services.slice(5).map((service, index) => (
              <div className="max-w-xs w-full mx-auto">
                <ServiceCard key={service.id} service={service} index={index + 5} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Process</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A streamlined approach to ensure your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your needs and goals to understand how we can best help you.",
                icon: "💬",
                color: "from-blue-400 to-blue-600"
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a customized plan tailored to your specific requirements.",
                icon: "📋",
                color: "from-purple-400 to-purple-600"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our experts execute the plan with precision and attention to detail.",
                icon: "⚙️",
                color: "from-pink-400 to-pink-600"
              },
              {
                step: "04",
                title: "Support",
                description: "We provide ongoing support to ensure your continued success.",
                icon: "🛠️",
                color: "from-indigo-400 to-indigo-600"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg p-8 h-full hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-20 h-20 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6`}>
                      {process.step}
                    </div>
                    <div className="text-4xl mb-6">{process.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{process.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What computer training courses do you offer?",
                answer: "We offer a comprehensive range of courses including Basic Computer Skills, Microsoft Office Suite, Internet & Email, Digital Literacy, and Advanced Computer Applications. All courses are designed for different skill levels from beginner to advanced."
              },
              {
                question: "Do you provide technical support for businesses?",
                answer: "Yes, we provide comprehensive IT support services for businesses including system maintenance, network setup, hardware repair, software installation, and 24/7 technical assistance."
              },
              {
                question: "Are your software products genuine and licensed?",
                answer: "Absolutely. We only sell genuine, licensed software products with full manufacturer support and regular updates. All our software comes with proper documentation and warranty."
              },
              {
                question: "Do you offer online training sessions?",
                answer: "Yes, we provide both in-person and online training sessions to accommodate different learning preferences and schedules. Our online sessions are interactive and include hands-on practice."
              },
              {
                question: "What is your data recovery success rate?",
                answer: "We have a high success rate of over 90% for data recovery services. However, the success depends on the extent of damage and the type of storage device. We provide a free assessment before starting any recovery work."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-blue-500 dark:group-hover:border-purple-500 group-hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <span className="w-4 h-4 bg-blue-500 dark:bg-purple-500 rounded-full mr-3 inline-block flex-shrink-0"></span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-7">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Skills?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to enroll in our certification programs and take your career to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300"
              >
                <span className="mr-2">Contact Us Today</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </motion.a>
              <motion.a
                href="tel:+977-1-4784560"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Now: +977-1-4784560
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;