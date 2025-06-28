
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import img from '../../public/logo.jpg';
// import RequestCallback from './RequestCallback'; // Uncomment if you have this component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Framer Motion variants
  const linkVariants = {
    hover: { scale: 1.05, color: "#2dd4bf" },
    tap: { scale: 0.95 }
  };
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };
  const mobileLinkVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses', dropdown: true },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const coursesDropdown = [
    'Red Hat Certified Courses',
    'Network and Security',
    'Oracle Database Certification',
    'Certified Ethical Hacker (CEH)',
    'Microsoft Server Certification',
    'Oracle JAVA Certification',
    'Mobile App Development',
    'Front End & Back End Web Development',
    'Digital Marketing',
    'Programming And Frameworks',
    'Graphic Designing',
  ];

  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      setIsLoggedIn(true);
      try {
        const userData = JSON.parse(user);
        setUserName(userData.name || userData.email?.split('@')[0] || 'User');
        setIsAdminUser(userData.role === 'admin');
      } catch {
        setUserName('User');
        setIsAdminUser(false);
      }
    } else {
      setIsLoggedIn(false);
      setUserName('');
      setIsAdminUser(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
    setIsAdminUser(false);
    navigate('/login');
    setShowProfileDropdown(false);
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg backdrop-blur-md bg-white/90 dark:bg-gray-900/90' : 'bg-transparent'} text-gray-900 dark:text-white`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Site Title */}
          <Link to="/" className="flex items-center space-x-2">
            <img className="h-10 w-10 rounded-2xl shadow-md" src={img} alt="Logo" />
           <span className="text-lg font-bold tracking-wide drop-shadow-md hidden sm:block 
  bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 
  dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-600 
  bg-clip-text text-transparent transition-all duration-500 ease-in-out">
  Computer Point Nepal
</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6 xl:gap-10">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onMouseEnter={() => setShowCoursesDropdown(true)}
                    onMouseLeave={() => setShowCoursesDropdown(false)}
                    onClick={() => setShowCoursesDropdown((v) => !v)}
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-teal-400 ${
                      location.pathname === item.path
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                    style={{ minWidth: 120 }}
                  >
                    <span className="mr-1">{item.name}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <AnimatePresence>
                    {showCoursesDropdown && (
                      <motion.div
                        onMouseEnter={() => setShowCoursesDropdown(true)}
                        onMouseLeave={() => setShowCoursesDropdown(false)}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 mt-2 w-72 bg-gray-50 border border-gray-200 shadow-xl rounded-b-lg z-50"
                      >
                        <ul className="py-2">
                          {coursesDropdown.map((course, idx) => (
                            <li key={course}>
                              <Link
                                to={
                                  idx === 0 ? '/courses/red-hat-certified-courses'
                                  : idx === 1 ? '/courses/network-and-security'
                                  : idx === 2 ? '/courses/oracle-database-certification'
                                  : idx === 3 ? '/courses/certified-ethical-hacker'
                                  : idx === 4 ? '/courses/microsoft-server-certification'
                                  : idx === 5 ? '/courses/oracle-java-certification'
                                  : idx === 6 ? '/courses/mobile-app-development'
                                  : idx === 7 ? '/courses/front-end-back-end-web-development'
                                  : idx === 8 ? '/courses/digital-marketing'
                                  : idx === 9 ? '/courses/programming-and-frameworks'
                                  : idx === 10 ? '/courses/graphic-designing'
                                  : '#'
                                }
                                className={`block px-4 py-2 text-[15px] ${idx === 0 ? 'font-semibold text-gray-700' : 'text-red-700'} hover:bg-blue-50 hover:text-blue-700 transition-colors`}
                                onClick={() => setShowCoursesDropdown(false)}
                              >
                                {course}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-teal-400 ${
                    location.pathname === item.path
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={() => setShowCoursesDropdown(false)}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400"
                      layoutId="navbar-indicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              )
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden bg-gray-100 dark:bg-gray-900/95 py-4 absolute top-full left-0 w-full shadow-lg border-b border-gray-200 dark:border-gray-700"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, height: 0 },
                visible: { 
                  opacity: 1, 
                  height: "auto", 
                  transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.1
                  }
                },
                exit: {
                  opacity: 0, 
                  height: 0, 
                  transition: {
                    when: "afterChildren",
                    staggerChildren: 0.05,
                    staggerDirection: -1
                  }
                }
              }}
            >
              <div className="flex flex-col items-start space-y-4 px-6 py-2">
                {navItems.map((item) => (
                  item.dropdown ? (
                    <div key={item.name} className="w-full">
                      <span className="block py-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Courses</span>
                      <ul className="pl-2">
                        {coursesDropdown.map((course, idx) => (
                          <li key={course}>
                            <Link
                              to={
                                idx === 0 ? '/courses/red-hat-certified-courses'
                                : idx === 1 ? '/courses/network-and-security'
                                : idx === 2 ? '/courses/oracle-database-certification'
                                : idx === 3 ? '/courses/certified-ethical-hacker'
                                : idx === 4 ? '/courses/microsoft-server-certification'
                                : idx === 5 ? '/courses/oracle-java-certification'
                                : idx === 6 ? '/courses/mobile-app-development'
                                : idx === 7 ? '/courses/front-end-back-end-web-development'
                                : idx === 8 ? '/courses/digital-marketing'
                                : idx === 9 ? '/courses/programming-and-frameworks'
                                : idx === 10 ? '/courses/graphic-designing'
                                : '#'
                              }
                              className={`block px-4 py-2 text-[15px] ${idx === 0 ? 'font-semibold text-gray-700 dark:text-gray-100' : 'text-red-700 dark:text-red-400'} hover:bg-blue-50 hover:text-blue-700 transition-colors`}
                              onClick={() => setIsOpen(false)}
                            >
                              {course}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <motion.div
                      key={item.name}
                      variants={mobileLinkVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full text-left"
                    >
                      <Link
                        to={item.path}
                        className="block hover:text-teal-400 transition-colors py-2 text-lg font-semibold"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                ))}
                <div className="w-full flex justify-center pt-2">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Render Callback Modal */}
        {/* {showCallbackModal && (
          <RequestCallback 
            isOpen={showCallbackModal}
            onClose={() => setShowCallbackModal(false)}
          />
        )} */}
      </div>
    </motion.nav>
  );
};

export default Navbar;