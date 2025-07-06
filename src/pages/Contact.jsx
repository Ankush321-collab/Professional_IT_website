import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import GoogleMap from '../components/GoogleMap';
import { sendEnquiryEmail } from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorDetails, setErrorDetails] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      const el = document.getElementById('contact-form');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetails('');

    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      const result = await sendEnquiryEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
          setSubmitStatus(null);
        }, 5000);
      } else {
        setErrorDetails(result.error || 'Failed to send enquiry');
        throw new Error(result.error || 'Failed to send enquiry');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      if (!errorDetails) {
        setErrorDetails(error.message);
      }
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorDetails('');
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      id: 'location',
      icon: <MapPinIcon className="w-6 h-6 text-primary-500" />,
      title: "Our Location",
      content: "New Baneshwor, Ward No. 10, Kathmandu, Nepal",
      hoverBg: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
    },
    {
      id: 'phone',
      icon: <PhoneIcon className="w-6 h-6 text-primary-500" />,
      title: "Phone Numbers",
      content: "+977-1-4784560\n+977-98XXXXXXXX (Mobile)",
      hoverBg: "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20"
    },
    {
      id: 'email',
      icon: <EnvelopeIcon className="w-6 h-6 text-primary-500" />,
      title: "Email Addresses",
      content: "info@computerpoinnepal.com\nsupport@computerpoinnepal.com",
      hoverBg: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20"
    },
    {
      id: 'hours',
      icon: <ClockIcon className="w-6 h-6 text-primary-500" />,
      title: "Business Hours",
      content: "Sun-Fri: 9AM-6PM\nSat: 10AM-4PM\n24/7 Emergency Support",
      hoverBg: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section with 3D Parallax Effect */}
      <section className="relative py-32 overflow-hidden hero-gradient">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 dark:from-primary-900/20 dark:to-accent-900/20"
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400">
                Get in Touch
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to start your digital journey? We're here to help you every step of the way. 
              Contact us today for a consultation or to learn more about our services.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10"
            >
              <motion.a
                href="#contact-form"
                className="inline-flex items-center px-8 py-4 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Send us a Message
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                  Send us a Message
                </h2>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                  >
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-6 h-6 text-green-500 dark:text-green-400 mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Message Sent Successfully!</h3>
                        <p className="text-green-700 dark:text-green-300">Thank you for your enquiry. We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                  >
                    <div className="flex items-start">
                      <ExclamationTriangleIcon className="w-6 h-6 text-red-500 dark:text-red-400 mr-3 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">Submission Failed</h3>
                        <p className="text-red-700 dark:text-red-300 mb-2">
                          {errorDetails || 'There was an error sending your message. Please try again or contact us directly.'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 hover:border-primary-400 dark:hover:border-primary-500"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 hover:border-primary-400 dark:hover:border-primary-500"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 hover:border-primary-400 dark:hover:border-primary-500"
                        placeholder="+977-98XXXXXXXX"
                      />
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:border-primary-400 dark:hover:border-primary-500"
                      >
                        <option value="">Select a service</option>
                        <option value="computer-training">Computer Training</option>
                        <option value="software-sales">Software Sales</option>
                        <option value="it-support">IT Support</option>
                        <option value="web-development">Web Development</option>
                        <option value="data-recovery">Data Recovery</option>
                        <option value="digital-marketing">Digital Marketing</option>
                      </select>
                    </motion.div>
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-200 resize-none disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 hover:border-primary-400 dark:hover:border-primary-500"
                      placeholder="Tell us about your needs or questions..."
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-500 dark:to-accent-400 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed group"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRightIcon className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-600 dark:from-primary-600 dark:to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                    />
                  </motion.button>
                </form>

                <div className="mt-8 p-4 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start">
                    <EnvelopeIcon className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-2 mt-0.5" />
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      <p className="font-medium">Instant Email Notification</p>
                      <p>Your enquiry will be sent directly to our team and you'll receive a confirmation email.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Get in touch with us through any of the following methods. We're here to help and 
                  answer any questions you may have about our services.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {contactCards.map((card) => (
                  <motion.div
                    key={card.id}
                    className={`p-6 rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${hoveredCard === card.id ? card.hoverBg : 'bg-white dark:bg-gray-800'}`}
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                    }}
                    onHoverStart={() => setHoveredCard(card.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${hoveredCard === card.id ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-primary-100 dark:bg-primary-900/30'}`}>
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line break-all">
                          {card.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Response Time Promise */}
              <motion.div 
                className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-6 rounded-2xl border border-primary-100 dark:border-primary-800"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Our Response Promise</h3>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <motion.div 
                    className="flex items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircleIcon className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    <span>Email enquiries: Within 2 hours</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircleIcon className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    <span>Phone calls: Immediate response</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircleIcon className="w-4 h-4 text-green-500 dark:text-green-400 mr-2" />
                    <span>Emergency support: 24/7 availability</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { 
                      name: 'Facebook',
                      bg: 'bg-blue-600 dark:bg-blue-500',
                      hoverBg: 'hover:bg-blue-700 dark:hover:bg-blue-600',
                      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    },
                    { 
                      name: 'Twitter',
                      bg: 'bg-blue-400 dark:bg-blue-300',
                      hoverBg: 'hover:bg-blue-500 dark:hover:bg-blue-400',
                      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    },
                    { 
                      name: 'LinkedIn',
                      bg: 'bg-blue-700 dark:bg-blue-600',
                      hoverBg: 'hover:bg-blue-800 dark:hover:bg-blue-700',
                      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      className={`w-12 h-12 ${social.bg} ${social.hoverBg} rounded-xl flex items-center justify-center text-white transition-colors`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.2)"
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section with 3D Perspective */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Located in the heart of Kathmandu, we're easily accessible by public transport
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 perspective-1000"
            whileHover={{
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
          >
            <div className="transform-style-preserve-3d">
              <GoogleMap />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;