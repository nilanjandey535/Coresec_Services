import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const onNavigate = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  // Check if current path matches
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 px-4 md:px-6 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate("/")}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <img
            src="/dist/logo.png"
            alt="CoreSec Logo"
            className="h-8 md:h-10 w-auto"
          />
        </motion.div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-slate-700" />
          ) : (
            <Menu size={24} className="text-slate-700" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => onNavigate("/")}
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-[#e60a11]" : "text-slate-700 hover:text-[#e60a11]"
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate("/about")}
            className={`text-sm font-medium transition-colors ${
              isActive("/about") ? "text-[#e60a11]" : "text-slate-700 hover:text-[#e60a11]"
            }`}
          >
            About Us
          </button>
          <button 
            onClick={() => onNavigate("/portfolio")}
            className={`text-sm font-medium transition-colors ${
              isActive("/portfolio") ? "text-[#e60a11]" : "text-slate-700 hover:text-[#e60a11]"
            }`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => onNavigate("/services")}
            className={`text-sm font-medium transition-colors ${
              isActive("/services") ? "text-[#e60a11]" : "text-slate-700 hover:text-[#e60a11]"
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => onNavigate("/ai-business-os")}
            className={`text-sm font-medium transition-colors ${
              isActive("/ai-business-os") ? "text-[#e60a11]" : "text-slate-700 hover:text-[#e60a11]"
            }`}
          >
            AI Business OS
          </button>
          <button 
            onClick={() => onNavigate("/ai-marketing")}
            className={`text-sm font-medium transition-colors ${
              isActive("/ai-marketing") ? "text-[#e60a11]" : "text-slate-700 hover:text-[#e60a11]"
            }`}
          >
            AI Marketing
          </button>
          <button 
            onClick={() => onNavigate("/contact")}
            className={`text-sm font-medium transition-colors ${
              isActive("/contact") ? "text-[#e60a11]" : "text-slate-700 hover:text-[#e60a11]"
            }`}
          >
            Contact
          </button>
        </div>

        {/* CTA Button - Desktop Only */}
        <motion.button 
          onClick={() => onNavigate("/contact?consultation=true")}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#e60a11] hover:bg-[#e60a11]/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg"
        >
          Get Free Consultation
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-slate-200 mt-3 pt-3"
          >
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Services", path: "/services" },
                { label: "AI Business OS", path: "/ai-business-os" },
                { label: "AI Marketing", path: "/ai-marketing" },
                { label: "Contact", path: "/contact" }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.path)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all active:scale-95 ${
                    isActive(item.path)
                      ? "bg-red-50 text-[#e60a11]"
                      : "text-slate-700 hover:bg-slate-50 active:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => onNavigate("/contact?consultation=true")}
                className="mt-2 bg-[#e60a11] hover:bg-[#e60a11]/90 active:bg-[#e60a11]/80 text-white px-6 py-3 rounded-full text-base font-bold transition-all shadow-lg active:scale-95"
              >
                Get Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
