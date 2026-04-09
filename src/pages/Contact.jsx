import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MessageSquare, MapPin, Clock, CheckCircle, Shield, Users, Zap, TrendingUp } from 'lucide-react';
import Header from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import ContactForm from "../components/sections/ContactForm";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [openFAQ, setOpenFAQ] = useState(null);

  // Check if user came from "Get Free Consultation" or "Request Demo" button
  useEffect(() => {
    const isConsultation = searchParams.get('consultation') === 'true';
    const isDemo = searchParams.get('demo') === 'true';
    const isCourse = searchParams.get('course') === 'true';
    const isSocialMedia = searchParams.get('socialmedia') === 'true';
    
    if (isConsultation) {
      setFormData(prev => ({
        ...prev,
        message: 'Need a Free Consultation'
      }));
      
      // Scroll to form after page loads
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (isCourse) {
      setFormData(prev => ({
        ...prev,
        message: 'Request consultation for Course or Training'
      }));
      
      // Scroll to form after page loads
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (isDemo) {
      setFormData(prev => ({
        ...prev,
        message: 'Request a demo of Coresec AI Business OS™'
      }));
      
      // Scroll to form after page loads
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (isSocialMedia) {
      setFormData(prev => ({
        ...prev,
        message: 'Request for AI-Powered Automated Social Media Handling System'
      }));
      
      // Scroll to form after page loads
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="scroll-smooth bg-white text-slate-900 font-display">
      <Header />

      {/* 2️⃣ QUICK CONTACT OPTIONS */}
      <section className="w-full py-12 md:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How You Can Reach Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                icon: Mail,
                title: "Email",
                desc: "For project discussions or partnership inquiries.",
                value: "contact@coresec.tech",
                emoji: "📧"
              },
              {
                icon: Phone,
                title: "Phone",
                desc: "Speak directly with our team.",
                value: "+91 84368 98284",
                emoji: "📞"
              },
              {
                icon: MessageSquare,
                title: "Live Chat",
                desc: "Chat instantly with our support team.",
                value: "Available during business hours",
                emoji: "💬"
              },
              {
                icon: MapPin,
                title: "Location",
                desc: "Based in India, serving businesses worldwide.",
                value: "Kolkata, India",
                emoji: "📍"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:border-red-600 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-black flex items-center justify-center text-2xl mb-3 shadow-lg">
                  {item.emoji}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-700 text-sm mb-3">{item.desc}</p>
                <p className="text-red-600 font-bold text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ CONTACT FORM SECTION */}
      <ContactForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
      />

      <Footer />
    </div>
  );
}
