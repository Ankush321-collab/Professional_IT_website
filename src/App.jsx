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
          </Routes>
        </AnimatePresence>
        <Footer />
        <FloatingContactButton />
      </div>
    </Router>
  );
}

export default App;