import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';
import { team } from '../data/team';

const About = () => {
  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Computer Poin Nepal was established with a vision to bridge the digital divide in Nepal."
    },
    {
      year: "2016",
      title: "First Training Center",
      description: "Opened our first computer training center in Kathmandu with modern facilities."
    },
    {
      year: "2018",
      title: "100+ Students",
      description: "Reached the milestone of training over 100 students in various computer courses."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adapted to online training during pandemic, helping more people learn remotely."
    },
    {
      year: "2022",
      title: "Expanded Services",
      description: "Added web development, digital marketing, and advanced IT support services."
    },
    {
      year: "2024",
      title: "500+ Success Stories",
      description: "Celebrated training over 500 students and serving 100+ business clients."
    }
  ];

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
              About Computer Poin Nepal
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are passionate about empowering Nepal with digital literacy and cutting-edge technology solutions. 
              Our journey began in 2014 with a simple mission: to make technology accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Mission"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower individuals and businesses in Nepal with comprehensive digital literacy, 
                  professional IT support, and innovative technology solutions that drive growth 
                  and success in the digital age.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be Nepal's leading provider of computer training and IT services, 
                  contributing to the country's digital transformation by creating a 
                  technology-literate society where everyone can participate in the digital economy.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-100 dark:border-primary-800">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg border border-accent-100 dark:border-accent-800">
                  <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Students Trained</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A decade of growth, innovation, and impact in Nepal's digital landscape
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-700"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="w-1/2 px-8">
                    <div className={`${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our dedicated team of professionals brings years of experience and passion for technology education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                description: "We strive for the highest standards in everything we do, from training programs to customer service."
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "We believe in honest, transparent relationships with our students, clients, and partners."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "We continuously adapt and evolve our services to meet the changing needs of the digital world."
              },
              {
                icon: "🌟",
                title: "Empowerment",
                description: "We are committed to empowering individuals and businesses with the skills they need to succeed."
              },
              {
                icon: "🏆",
                title: "Quality",
                description: "We deliver high-quality training and services that exceed expectations and drive real results."
              },
              {
                icon: "❤️",
                title: "Community",
                description: "We are dedicated to giving back to our community and supporting Nepal's digital growth."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-600"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;