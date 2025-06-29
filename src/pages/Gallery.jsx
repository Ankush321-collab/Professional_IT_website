import { useState } from 'react';
import { motion } from 'framer-motion';
import GalleryItem from '../components/GalleryItem';
import { gallery } from '../data/gallery';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Training', 'Support', 'Services', 'Office'];
  
  const filteredGallery = filter === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === filter);

  const testimonials = [
    {
      name: 'Abhinav Gyawali',
      image: '/src/assets/HemantUncle.png',
      testimonial: 'One of the best place to learn tech. Great support and amazing teachers! I\'d recommend it to others, 10/10.',
      stars: 5,
      role: '',
      highlight: false,
    },
    {
      name: 'Pravesh Shrestha',
      image: '/src/assets/HemantUncle.png',
      testimonial: 'CPN has always been a place of great learning and place to find proper guidance. They have experienced instructor who can provide guidance and suggestion about career and courses which is really helpful for beginners who want to know about career options in IT. CPN is highly recommended in my book as a place to learning and developing skills needed by both beginners and professionals alike.',
      stars: 5,
      role: 'Red Hat Student',
      highlight: true,
    },
    {
      name: 'Avishek Pradhan',
      image: '/src/assets/HemantUncle.png',
      testimonial: 'I completed my RHCSA and RHCE from Computer Point Nepal. The learning environment here is suited for both working professionals as well as students. From my experience tutors and staff members are very helpful. With their proper guidance I was able to complete RHCSA certification.',
      stars: 5,
      role: '',
      highlight: false,
    },
  ];

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
                Our Gallery
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Take a visual journey through our facilities, training sessions, and the success stories we've helped create.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 sm:py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-12 sm:pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <GalleryItem item={item} index={index} />
              </motion.div>
            ))}
          </motion.div>
          
          {filteredGallery.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">No images found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These numbers represent the trust our community has placed in us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                number: "500+",
                label: "Students Trained",
                icon: "🎓",
                color: "from-blue-500 to-blue-600"
              },
              {
                number: "100+",
                label: "Businesses Served",
                icon: "🏢",
                color: "from-purple-500 to-purple-600"
              },
              {
                number: "10+",
                label: "Years of Excellence",
                icon: "⭐",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                number: "24/7",
                label: "Support Available",
                icon: "🛠️",
                color: "from-green-500 to-green-600"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 text-center h-full hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-2xl`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Success</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from some of our successful students and clients
            </p>
          </motion.div>

          <div className="flex flex-col gap-8 sm:gap-12 items-center">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: t.highlight 
                    ? '0 25px 50px -12px rgba(245, 158, 11, 0.3)' 
                    : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                className={`relative rounded-2xl shadow-lg px-4 sm:px-8 py-8 sm:py-10 max-w-xs sm:max-w-2xl w-full mx-auto text-center transition-all duration-300 ${
                  t.highlight 
                    ? 'bg-gradient-to-r from-blue-700 to-purple-700 border-4 border-yellow-400' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-transparent hover:border-yellow-400'
                }`}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-white text-base sm:text-lg font-medium mb-6 mt-8">"{t.testimonial}"</p>
                <div className="flex justify-center mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="text-yellow-400 text-xl sm:text-2xl"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <div className="text-white text-lg sm:text-xl font-bold mb-1">{t.name}</div>
                {t.role && (
                  <div className="text-yellow-300 text-base sm:text-lg font-semibold">
                    {t.role}
                  </div>
                )}
                {t.highlight && (
                  <div className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full text-xs sm:text-sm transform rotate-12 shadow-md">
                    Featured
                  </div>
                )}
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Become part of our growing community of successful IT professionals
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

export default Gallery;