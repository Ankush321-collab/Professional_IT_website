import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';
import { team } from '../data/team';

const milestones = [
  {
    year: "1995",
    title: "IT Training Center Established",
    description: "Computer Point Nepal (CPN) is the pioneer in Hi-end Training and the first choice for Vendor Certification training in Nepal."
  },
  {
    year: "1996",
    title: "First Certified Instructor",
    description: "CPN started with certified trainers, setting the benchmark for quality IT education in Nepal."
  },
  {
    year: "2000+",
    title: "Corporate Training Expansion",
    description: "CPN became the go-to solution for corporate training, offering tailored programs for companies across Nepal."
  },
  {
    year: "2010+",
    title: "Global Recognition",
    description: "Accredited by many global bodies, CPN's instructor-led courses gained worldwide recognition."
  },
  {
    year: "2024",
    title: "60,000+ Students Trained",
    description: "CPN has trained over 60,000 students and continues to deliver world-class IT education."
  }
];

const About = () => {
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
                Leader IT Training CENTER In Nepal
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Since 1995 - The pioneer in Hi-end Training and First choice for Vendor Certification training in Nepal.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10"
            >
              <a 
                href="#journey" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Our Journey
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction & Vision */}
      <section className="py-12 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Mission"
                className="relative rounded-2xl shadow-xl w-full h-96 object-cover transform group-hover:-rotate-1 transition duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Computer Point Nepal (CPN) is a premier Information Technology (IT) training solution provider offering globally certified training courses catering to various disciplines in IT. We believe the best way to combat market challenges and obsolescence is to offer quality training confirming to global education standards at the most affordable rates.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Corporate Training</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We aim to provide your company with a 'one stop shop solution' for your corporate training requirements. At CPN we try where possible to use real examples from the delegates' own working environments to ensure they can relate to the information provided.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/30 rounded-xl border border-primary-200 dark:border-primary-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-500 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">60,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Students Trained</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/30 rounded-xl border border-accent-200 dark:border-accent-700 hover:shadow-lg hover:border-accent-300 dark:hover:border-accent-500 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">175+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Courses Offered</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The foundation of our success and your satisfaction
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "🎓",
                title: "Certified Trainers",
                description: "1000+ persons Trainings conducted in a year. Worldwide recognized instructor-led courses. Accredited by many global accreditation bodies."
              },
              {
                icon: "🔍",
                title: "Transparency & Accountability",
                description: "Transparency and Accountability for all our Commitments. High quality and value for money."
              },
              {
                icon: "🏢",
                title: "On-Site Training",
                description: "On-Site Training Programs for Corporate. One stop shop for all your corporate training requirements."
              },
              {
                icon: "🌐",
                title: "Global Recognition",
                description: "Worldwide recognized instructor-led courses. Accredited by many global accreditation bodies."
              },
              {
                icon: "💼",
                title: "Accredited & Trusted",
                description: "Accredited by many global accreditation bodies. Trusted by 4000+ offices."
              },
              {
                icon: "🤝",
                title: "Satisfaction Guarantee",
                description: "To deliver world-class training with 100% satisfaction Guarantee."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 h-full flex flex-col">
                  <div className="text-5xl mb-6 text-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="journey" className="py-12 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A legacy of leadership, innovation, and impact in Nepal's digital landscape
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600"></div>
            <div className="space-y-8 sm:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="w-1/2 px-8">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className={`${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      } bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </motion.div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg transform hover:scale-125 transition duration-300"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Team</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate professionals behind our success
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-8"
            >
              {/* CEO Card */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xs sm:max-w-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-6 lg:mb-0">
                <img
                  src="/src/assets/HemantUncle.png"
                  alt="Anand Chaurasiya"
                  className="w-32 h-32 object-cover rounded-full shadow-lg mx-auto mb-4 border-4 border-white dark:border-gray-800"
                />
                <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-2">Anand Chaurasiya</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-lg">Chief Executive Officer (CEO)</p>
                <p className="text-gray-500 dark:text-gray-400">30+ years of experience, expertise in IT field</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* MD Card */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xs sm:max-w-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="/src/assets/HemantUncle.png"
                  alt="Hemant Chaurasiya"
                  className="w-32 h-32 object-cover rounded-full shadow-lg mx-auto mb-4 border-4 border-white dark:border-gray-800"
                />
                <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-2">Hemant Chaurasiya</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 text-lg">Managing Director</p>
                <p className="text-gray-500 dark:text-gray-400">Since 1996</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
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
              Ready to Start Your IT Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of successful students who launched their careers with our training programs.
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

export default About;