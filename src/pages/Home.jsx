import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { useState, useEffect } from 'react';

const SLIDE_SIZE = 3;

const getSlides = (services) => {
  const slides = [];
  for (let i = 0; i < services.length; i += SLIDE_SIZE) {
    slides.push(services.slice(i, i + SLIDE_SIZE));
  }
  return slides;
};

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

const Home = () => {
  const slides = getSlides(services);
  const [current, setCurrent] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <HeroSection />
      
      {/* Welcome Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to Computer Poin Nepal
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              For over a decade, we have been at the forefront of Nepal's digital transformation, 
              providing comprehensive computer training, reliable IT support, and innovative digital solutions. 
              Our mission is to empower individuals and businesses with the technology skills and tools 
              they need to succeed in today's digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
              >
                Learn About Us
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Slider */}
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
              Our Featured Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of services designed to meet all your technology needs
            </p>
          </motion.div>
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-700">
              {slides[current].map((service, index) => (
                <ServiceCard key={service.id} service={{...service, image: `/src/assets/${service.image}`}} index={index} />
              ))}
            </div>
            {/* Optionally, add dots or arrows here for manual navigation */}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">What Our Students Say</h2>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">Hear from some of our successful students and clients</p>
          </div>
          <div className="flex flex-col items-center">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className={`relative bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl shadow-lg px-4 sm:px-8 py-8 sm:py-10 w-full max-w-xs sm:max-w-xl mx-auto text-center border-4 transition-all duration-300 ${testimonials[testimonialIndex].highlight ? 'border-yellow-400' : 'border-transparent'} hover:border-yellow-400`}
              style={{ minHeight: 320 }}
            >
              <img
                src={testimonials[testimonialIndex].image}
                alt={testimonials[testimonialIndex].name}
                className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-full mx-auto mb-4 sm:mb-6 border-4 border-white shadow-lg"
                style={{ marginTop: '-60px' }}
              />
              <p className="text-white text-base sm:text-lg font-medium mb-4 sm:mb-6">"{testimonials[testimonialIndex].testimonial}"</p>
              <div className="flex justify-center mb-2 sm:mb-4">
                {[...Array(testimonials[testimonialIndex].stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl sm:text-2xl">★</span>
                ))}
              </div>
              <div className="text-white text-lg sm:text-xl font-bold mb-1">{testimonials[testimonialIndex].name}</div>
              {testimonials[testimonialIndex].role && <div className="text-yellow-300 text-base sm:text-lg font-semibold">{testimonials[testimonialIndex].role}</div>}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We stand out with our commitment to excellence and customer satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Expert Training",
                description: "Certified instructors with years of industry experience"
              },
              {
                icon: "🔧",
                title: "Reliable Support",
                description: "24/7 technical support for all your IT needs"
              },
              {
                icon: "💎",
                title: "Quality Service",
                description: "Premium quality services at competitive prices"
              },
              {
                icon: "🌟",
                title: "Proven Results",
                description: "Over 500 satisfied students and clients"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;