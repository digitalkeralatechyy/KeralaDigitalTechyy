import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Cpu, Send } from "lucide-react";
import { BRAND_NAME } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-opacity-70 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-white/5 backdrop-blur-md"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo Brand */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-blue p-[1px]">
              <div className="flex items-center justify-center w-full h-full bg-[#050508] rounded-[11px] group-hover:bg-transparent transition-all duration-300">
                <Cpu className="w-5 h-5 text-brand-purple group-hover:text-white transition-colors duration-300 animate-pulse-slow" />
              </div>
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-blue blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold tracking-wider text-white text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-purple transition-all duration-300">
                {BRAND_NAME}
              </span>
              <span className="text-[9px] font-mono tracking-widest text-brand-purple uppercase">
                AI Powered Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-brand-purple to-brand-blue group-hover:w-1/2 transition-all duration-300" />
              </a>
            ))}
            
            {/* Call to Action button */}
            <a
              href="#contact"
              className="ml-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-semibold text-white rounded-full group bg-gradient-to-br from-brand-purple to-brand-blue group-hover:from-brand-purple group-hover:to-brand-blue hover:text-white focus:ring-2 focus:outline-none focus:ring-brand-purple/50 shadow-[0_4px_15px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.5)] transition-all duration-300"
              style={{ marginBottom: 0, marginRight: 0 }}
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-[#030305] rounded-full group-hover:bg-opacity-0">
                Get a Quote
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-btn"
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-panel-heavy border-t border-white/5 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-brand-purple/10 border border-transparent hover:border-brand-purple/20 transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-3 px-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/40 hover:scale-[1.02] transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
