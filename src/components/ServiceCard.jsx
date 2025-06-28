import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="service-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group border border-gray-200 dark:border-gray-700"
    >
      <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{service.icon}</div>
          <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0`}>
            <ArrowRightIcon className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
        
        <div className="space-y-2">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mr-3"></div>
              {feature}
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
          <button className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center group">
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;