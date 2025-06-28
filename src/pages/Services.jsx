import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to meet your personal and business needs. 
              From computer training to advanced IT support, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our streamlined process ensures you get the best service experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your needs and goals to understand how we can best help you.",
                icon: "💬"
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a customized plan tailored to your specific requirements.",
                icon: "📋"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our experts execute the plan with precision and attention to detail.",
                icon: "⚙️"
              },
              {
                step: "04",
                title: "Support",
                description: "We provide ongoing support to ensure your continued success.",
                icon: "🛠️"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {process.step}
                  </div>
                  <div className="text-4xl">{process.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find answers to common questions about our services
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
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 dark:text-primary-200 mb-8">
              Contact us today to discuss your needs and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-600 dark:text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+977-1-4784560"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 dark:hover:text-primary-700 transition-colors"
              >
                Call Now: +977-1-4784560
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;