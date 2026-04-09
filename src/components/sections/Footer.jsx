import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export function Footer() {
  const navigate = useNavigate();
  
  const onNavigate = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-[#0a0505] border-t border-white/10 pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Company Info */}
          <div>
            <div 
              className="flex items-center gap-2 mb-3 cursor-pointer"
              onClick={() => onNavigate("/")}
            >
              <motion.div
                className="flex items-center gap-2 cursor-pointer bg-white rounded-lg p-2 border-b" 
                onClick={() => onNavigate("/")}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <img
                  src="/assets/logo.png"
                  alt="CoreSec Logo"
                  className="h-12 w-auto rounded-xl"
                />
              </motion.div>
            </div>
            <p className="text-slate-400 text-xs mb-3">
              Innovating Technology. Securing the Future.
            </p>
            <div className="flex gap-2">
              <motion.a
                href="#"
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#e60a11] transition-colors"
              >
                <Facebook size={16} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#e60a11] transition-colors"
              >
                <Twitter size={16} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#e60a11] transition-colors"
              >
                <Linkedin size={16} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#e60a11] transition-colors"
              >
                <Instagram size={16} className="text-white" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-3 font-bold text-sm">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Web Development", path: "/services" },
                { label: "API Development", path: "/services" },
                { label: "Mobile App Development", path: "/services" },
                { label: "Cloud Development & DevOps", path: "/services" },
                { label: "AI & ML", path: "/services"},
                { label: "Data Analytics", path: "/services"},
                { label: "Blockchain & IoT", path: "/services"}
              ].map((item) => (
                <li key={item.label}>
                  <motion.button 
                    whileTap={{ scale: 0.95, x: -2 }}
                    className="text-slate-400 hover:text-white transition-colors text-xs cursor-pointer"
                    onClick={() => onNavigate(item.path)}
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-3 font-bold text-sm">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Services", path: "/services" },
                { label: "AI OS", path: "/ai-business-os" },
                { label: "AI Marketing", path: "/ai-marketing" },
                { label: "Contact ", path: "/contact" }
              ].map((item) => (
                <li key={item.label}>
                  <motion.button 
                    whileTap={{ scale: 0.95, x: -2 }}
                    className="text-slate-400 hover:text-white transition-colors text-xs cursor-pointer"
                    onClick={() => onNavigate(item.path)}
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-3 font-bold text-sm">Contact Us</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2 text-slate-400">
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                <span>info@coresec.tech</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                <span>+91 84368 98284</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-slate-400 text-xs">
              © 2024 CoreSec Digital Systems. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                onClick={() => onNavigate("/")}
              >
                Terms of Service
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                onClick={() => onNavigate("/")}
              >
                Privacy Policy
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
