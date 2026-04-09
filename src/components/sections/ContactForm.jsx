import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function ContactForm({ formData, handleChange, handleSubmit: externalHandleSubmit, setFormData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual Google Apps Script URL
      const GOOGLE_SCRIPT_URL = "Google_Apps_Script_URL";
      // With no-cors, we can't read the response, so we assume success if no error is thrown
      setSubmitStatus('success');
      
      // Clear form after successful submission
      if (setFormData) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      }

    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };
  return (
    <section id="contact-form" className="w-full py-2 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                  Company / Business Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="ai-automation">AI Business Automation</option>
                  <option value="social-media">Social Media AI Automation</option>
                  <option value="software">API & Backend Development</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="cloud">Cloud & DevOps</option>
                  <option value="ai">AI & ML</option>
                  <option value="data">Data Analytics</option>
                  <option value="optimize">Blockchain & IoT</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-800 hover:bg-red-900'
                    : 'bg-red-600 hover:bg-red-700'
                } text-white disabled:transform-none disabled:opacity-70`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending Message...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent Successfully!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <ArrowRight size={20} />
                    Failed - Try Again
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-center text-sm text-green-600 font-semibold">
                  ✓ Thank you! We'll respond within 24 hours.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-center text-sm text-red-600 font-semibold">
                  ✗ Something went wrong. Please try again.
                </p>
              )}

              {!submitStatus && (
                <p className="text-center text-sm text-slate-600">
                  ✓ Our team usually responds within 24 hours.
                </p>
              )}
            </form>
          </motion.div>

          {/* Right - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img
              src="/dist/social_ai.png"
              alt="AI Assistant Helping"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}