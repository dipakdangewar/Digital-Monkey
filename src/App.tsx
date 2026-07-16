import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import HomeView from './components/HomeView';
import CurriculumView from './components/CurriculumView';
import LeadFormView from './components/LeadFormView';
import ContactView from './components/ContactView';
import LucideIcon from './components/LucideIcon';
import SeatsCounter from './components/SeatsCounter';
import { DigitalMonkeyLogoFull } from './components/DigitalMonkeyLogo';

type PageType = 'home' | 'curriculum' | 'lead' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState('Student');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Progress bar representing curriculum weeks
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize theme from local storage or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('digital_monkey_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle scroll progress and "back to top" visibility
  useEffect(() => {
    const handleScroll = () => {
      // Back to top threshold
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Calculate scroll progress %
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle action
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('digital_monkey_theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('digital_monkey_theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const handlePageNavigation = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppTrigger = () => {
    const message = encodeURIComponent("Hello! I want to know more about the 4-Month Digital Marketing & AI Expert Course at Digital Monkey.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Scroll indicator header progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 z-[100] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-850/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo brand click to home */}
          <button 
            onClick={() => handlePageNavigation('home')}
            className="flex items-center gap-2 cursor-pointer focus:outline-none text-left"
          >
            <DigitalMonkeyLogoFull size={44} />
          </button>

          {/* Desktop Navigation Link row */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { id: 'home', label: 'Home' },
              { id: 'curriculum', label: 'Curriculum' },
              { id: 'lead', label: 'Book Demo Class' },
              { id: 'contact', label: 'Contact' }
            ].map(link => (
              <button
                key={link.id}
                onClick={() => handlePageNavigation(link.id as PageType)}
                className={`text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  currentPage === link.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action links right side */}
          <div className="flex items-center gap-3">
            {/* Dynamic Seats Remaining Counter */}
            <SeatsCounter />

            {/* Theme selector */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors cursor-pointer"
              title="Toggle Theme"
            >
              <LucideIcon name={isDarkMode ? 'Sun' : 'Moon'} size={16} />
            </button>

            {/* Book Free Demo Quick Action */}
            <button
              onClick={() => handlePageNavigation('lead')}
              className="hidden sm:flex gradient-bg hover:opacity-95 text-white font-bold py-2.5 px-5 rounded-xl shadow-md text-xs font-display flex items-center gap-1.5 cursor-pointer select-none"
            >
              <LucideIcon name="Sparkles" size={14} />
              Book Free Demo
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 md:hidden hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors cursor-pointer"
            >
              <LucideIcon name={mobileMenuOpen ? 'X' : 'Menu'} size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Expandable navigation list */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-slate-100 dark:border-slate-850 bg-white dark:bg-slate-900 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-2 flex flex-col">
                {[
                  { id: 'home', label: 'Home Dashboard' },
                  { id: 'curriculum', label: '16-Week Curriculum' },
                  { id: 'lead', label: 'Book Demo Class' },
                  { id: 'contact', label: 'Campus Support' }
                ].map(link => (
                  <button
                    key={link.id}
                    onClick={() => handlePageNavigation(link.id as PageType)}
                    className={`text-left text-sm font-bold py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                      currentPage === link.id
                        ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                
                {/* Mobile demo button */}
                <button
                  onClick={() => handlePageNavigation('lead')}
                  className="w-full text-center gradient-bg text-white font-bold py-2.5 px-4 rounded-xl shadow-md text-xs font-display flex items-center justify-center gap-1.5 pt-3"
                >
                  <LucideIcon name="Sparkles" size={14} />
                  Book Free Demo Class
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Container Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 min-h-[calc(100vh-320px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {currentPage === 'home' && (
              <HomeView 
                onPageChange={handlePageNavigation} 
                onSelectProfession={(p) => setSelectedProfession(p)}
              />
            )}
            
            {currentPage === 'curriculum' && (
              <CurriculumView 
                onEnrollClick={() => handlePageNavigation('lead')}
              />
            )}
            
            {currentPage === 'lead' && (
              <LeadFormView 
                initialProfession={selectedProfession}
              />
            )}
            
            {currentPage === 'contact' && (
              <ContactView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Sticky Footer */}
      <footer className="border-t border-slate-200/80 dark:border-slate-850/80 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            
            {/* Branding widget */}
            <div className="col-span-2 space-y-4">
              <button 
                onClick={() => handlePageNavigation('home')}
                className="flex items-center gap-2 cursor-pointer focus:outline-none text-left"
              >
                <DigitalMonkeyLogoFull size={36} isFooter />
              </button>
              <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed max-w-sm">
                Master Digital Marketing with AI. Learn by Doing. Build a career in just 4 months with our cohort-driven practical training system.
              </p>
              {/* Trust certification */}
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold font-mono">
                <LucideIcon name="Shield" size={12} className="text-green-500" />
                ISO 9001:2015 ACCREDITED ACADEMY
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Our Programs
              </h4>
              <ul className="space-y-1.5 font-medium">
                <li>
                  <button onClick={() => handlePageNavigation('curriculum')} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    4-Month Master Cohort
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNavigation('curriculum')} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    AI Prompt Engineering
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNavigation('curriculum')} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    SEO & GEO Search Course
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNavigation('curriculum')} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Meta Paid Ads Masterclass
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-1.5 font-medium">
                <li>
                  <button onClick={() => handlePageNavigation('curriculum')} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Syllabus PDF
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNavigation('home')} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Student Testimonials
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNavigation('contact')} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Campus Directions
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNavigation('lead')} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Batch Placement Registry
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal and Support */}
            <div className="space-y-3 col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Support & Legal
              </h4>
              <ul className="space-y-1.5 font-medium">
                <li>
                  <button onClick={() => handlePageNavigation('contact')} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Help Desk & FAQ
                  </button>
                </li>
                <li>
                  <button onClick={() => alert("Privacy Policy:\nDigital Monkey complies with standard Indian data laws. All leads collected are used solely for admission enrollment reviews.")} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => alert("Terms of Service:\nAll curriculum copyrights reside with Digital Monkey Academy © 2026.")} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePageNavigation('contact')} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Corporate Partners
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Social icons row & copyright */}
          <div className="pt-8 border-t border-slate-150 dark:border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 dark:text-slate-500 font-medium">
              © 2026 Digital Monkey Institute. Built by Dipak Dangewar. All rights reserved.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Instagram', icon: 'Video', url: 'https://instagram.com' },
                { name: 'YouTube', icon: 'FileVideo', url: 'https://youtube.com' },
                { name: 'LinkedIn', icon: 'Users', url: 'https://linkedin.com' },
                { name: 'WhatsApp', icon: 'MessageCircle', url: 'https://wa.me/919876543210' }
              ].map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 rounded-xl text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title={social.name}
                >
                  <LucideIcon name={social.icon} size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Interactive Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        
        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full bg-slate-900/90 dark:bg-slate-800/95 text-white shadow-xl hover:bg-slate-800 border border-slate-700/50 cursor-pointer transition-colors"
              title="Back to Top"
            >
              <LucideIcon name="ChevronUp" size={18} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Chat Button */}
        <button
          onClick={handleWhatsAppTrigger}
          className="p-4 rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 cursor-pointer flex items-center justify-center relative group transition-all"
          title="Chat on WhatsApp"
        >
          <LucideIcon name="MessageCircle" size={20} />
          {/* Tooltip */}
          <span className="absolute right-14 bg-slate-950 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-slate-800 uppercase tracking-wide">
            Chat Live with Advisor
          </span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border border-white animate-ping" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border border-white" />
        </button>
      </div>

      {/* Mobile Sticky CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/90 dark:bg-slate-900/95 border-t border-slate-250 dark:border-slate-800 p-3.5 backdrop-blur flex gap-3 shadow-2xl">
        <button
          onClick={handleWhatsAppTrigger}
          className="flex-1 bg-green-600 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <LucideIcon name="MessageCircle" size={14} />
          WhatsApp Chat
        </button>
        <button
          onClick={() => handlePageNavigation('lead')}
          className="flex-1 gradient-bg text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <LucideIcon name="Sparkles" size={14} />
          Book Free Demo
        </button>
      </div>

    </div>
  );
}
