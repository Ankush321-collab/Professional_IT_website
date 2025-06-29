import { motion } from 'framer-motion';
import { useState } from 'react';

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden h-full flex flex-col border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 cursor-pointer p-6 max-w-md mx-auto">
        <img
          src={service.image}
          alt={service.title}
          className="object-contain w-2/3 mx-auto h-32 mb-6 mt-2 bg-white dark:bg-gray-900 rounded"
          style={{ maxHeight: 120 }}
        />
        <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-3 text-center uppercase tracking-wide">
          {service.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-center text-base">
          {service.description}
        </p>
        <ul className="mb-6 space-y-2">
          {service.features && service.features.map((feature, idx) => (
            <li
              key={idx}
              className={`flex items-center text-base text-gray-700 dark:text-gray-300 transition-colors duration-200 ${hovered ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''}`}
            >
              <span className={`w-2 h-2 rounded-full mr-3 ${hovered ? 'bg-primary-600 dark:bg-primary-400' : 'bg-blue-500 dark:bg-blue-400'}`}></span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 text-center">
          <button
            className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-xl shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            tabIndex={0}
          >
            Learn More
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;