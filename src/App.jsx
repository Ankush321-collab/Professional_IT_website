import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
// Course pages
import RedHatCertifiedCourses from './courses/RedHatCertifiedCourses';
import NetworkAndSecurity from './courses/NetworkAndSecurity';
import OracleDatabaseCertification from './courses/OracleDatabaseCertification';
import CertifiedEthicalHacker from './courses/CertifiedEthicalHacker';
import MicrosoftServerCertification from './courses/MicrosoftServerCertification';
import OracleJavaCertification from './courses/OracleJavaCertification';
import MobileAppDevelopment from './courses/MobileAppDevelopment';
import FrontEndBackEndWebDevelopment from './courses/FrontEndBackEndWebDevelopment';
import DigitalMarketing from './courses/DigitalMarketing';
import ProgrammingAndFrameworks from './courses/ProgrammingAndFrameworks';
import GraphicDesigning from './courses/GraphicDesigning';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            } />
            <Route path="/about" element={
              <PageWrapper>
                <About />
              </PageWrapper>
            } />
            <Route path="/services" element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            } />
            <Route path="/gallery" element={
              <PageWrapper>
                <Gallery />
              </PageWrapper>
            } />
            <Route path="/contact" element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            } />
            {/* Course routes */}
            <Route path="/courses/red-hat-certified-courses" element={<PageWrapper><RedHatCertifiedCourses /></PageWrapper>} />
            <Route path="/courses/network-and-security" element={<PageWrapper><NetworkAndSecurity /></PageWrapper>} />
            <Route path="/courses/oracle-database-certification" element={<PageWrapper><OracleDatabaseCertification /></PageWrapper>} />
            <Route path="/courses/certified-ethical-hacker" element={<PageWrapper><CertifiedEthicalHacker /></PageWrapper>} />
            <Route path="/courses/microsoft-server-certification" element={<PageWrapper><MicrosoftServerCertification /></PageWrapper>} />
            <Route path="/courses/oracle-java-certification" element={<PageWrapper><OracleJavaCertification /></PageWrapper>} />
            <Route path="/courses/mobile-app-development" element={<PageWrapper><MobileAppDevelopment /></PageWrapper>} />
            <Route path="/courses/front-end-back-end-web-development" element={<PageWrapper><FrontEndBackEndWebDevelopment /></PageWrapper>} />
            <Route path="/courses/digital-marketing" element={<PageWrapper><DigitalMarketing /></PageWrapper>} />
            <Route path="/courses/programming-and-frameworks" element={<PageWrapper><ProgrammingAndFrameworks /></PageWrapper>} />
            <Route path="/courses/graphic-designing" element={<PageWrapper><GraphicDesigning /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <FloatingContactButton />
      </div>
    </Router>
  );
}

export default App;