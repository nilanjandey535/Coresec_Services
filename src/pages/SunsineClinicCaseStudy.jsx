import React, { useState } from 'react';
import Header from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Users, 
  ArrowRight,
  Star,
  Zap,
  Brain,
  Shield,
  Award,
  Globe,
  LayoutDashboard,
  Settings,
  BarChart,
  Bot,
  MessageCircle,
  Bell,
  Heart,
  Repeat,
  Network,
  Scale,
  Home,
  GraduationCap,
  Briefcase
} from "lucide-react";

export default function SunsineClinicCaseStudy() {
  const [touchedCard, setTouchedCard] = useState(null);
  const [touchedInfo, setTouchedInfo] = useState(null);
  const [touchedJourney, setTouchedJourney] = useState(null);
  const [touchedReason, setTouchedReason] = useState(null);
  const [touchedIndustry, setTouchedIndustry] = useState(null);

  const stats = [
    { icon: <TrendingUp size={28} />, value: "400%", label: "Lead Conversion Increase", color: "from-red-600 to-red-500" },
    { icon: <Clock size={28} />, value: "24/7", label: "AI Availability", color: "from-red-600 to-red-500" },
    { icon: <Users size={28} />, value: "0", label: "Additional Hires Needed", color: "from-red-600 to-red-500" },
    { icon: <Award size={28} />, value: "98%", label: "Patient Satisfaction", color: "from-red-600 to-red-500" }
  ];

  return (
    <div className="scroll-smooth bg-white text-slate-900 font-display">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-0 py-0 bg-black flex justify-center">
        <div className="relative w-full max-w-full rounded-none overflow-hidden">
          {/* Background Image */}
          <img
            src="/dist/sunsine_ai.png"
            alt="Clinic Interior"
            className="w-full h-[420px] object-cover"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white">
            {/* Tag */}
            <div className="mb-4">
              <span className="bg-red-600 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                HEALTHCARE AI
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-xl md:text-3xl font-bold leading-tight max-w-2xl">
              Sunshine Family Clinic: AI Transformation
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-sm md:text-base text-white/80 max-w-xl">
              Modernizing patient intake and operational efficiency through custom intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Business Background Section */}
      <section className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-6 flex justify-center relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center relative z-10"
        >
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
              Business Background
            </h2>

            {/* About the Clinic */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ x: 5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onTouchStart={() => {
                setTouchedInfo('about');
              }}
              className={`flex items-start gap-3 mb-6 p-4 bg-white rounded-xl shadow-lg border transition-all duration-300 ${touchedInfo === 'about' ? 'border-red-500 shadow-xl' : 'border-slate-200 hover:border-red-500/30'}`}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white text-xl shadow-lg transition-transform duration-300 ${touchedInfo === 'about' ? 'scale-110' : ''}`}>
                🏥
              </div>
              <div>
                <h3 className={`font-bold text-lg transition-colors duration-300 ${touchedInfo === 'about' ? 'text-red-600' : 'text-slate-900'}`}>About the Clinic</h3>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  Sunshine Family Clinic is a multi-doctor practice specializing in holistic family care and preventative medicine.
                </p>
              </div>
            </motion.div>

            {/* Staffing */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ x: 5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onTouchStart={() => {
                setTouchedInfo('staffing');
              }}
              className={`flex items-start gap-6 p-4 bg-white rounded-xl shadow-lg border transition-all duration-300 ${touchedInfo === 'staffing' ? 'border-red-500 shadow-xl' : 'border-slate-200 hover:border-red-500/30'}`}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white text-xl shadow-lg transition-transform duration-300 ${touchedInfo === 'staffing' ? 'scale-110' : ''}`}>
                👥
              </div>
              <div>
                <h3 className={`font-bold text-lg transition-colors duration-300 ${touchedInfo === 'staffing' ? 'text-red-600' : 'text-slate-900'}`}>Staffing</h3>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  Operating with 5 dedicated staff members managing a high volume of daily walk-ins and appointments.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION - Quote Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Decorative Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-5 left-5 text-white/20 text-4xl font-serif">"</div>

              <p className="text-lg leading-relaxed mb-6 relative z-10 italic">
                Before CoreSec, our phones never stopped ringing, yet we were still losing patients to long hold times. We needed a system that worked as hard as our doctors.
              </p>

              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/20">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 font-bold text-base backdrop-blur-sm border-2 border-white/30">
                  DS
                </div>
                <div>
                  <p className="font-bold text-white">Dr. Sarah Chen</p>
                  <p className="text-sm text-white/80 font-medium">
                    Clinic Owner & Lead Physician
                  </p>
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute bottom-6 right-6 flex gap-2 opacity-40">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Challenges Section */}
      <section className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 py-2 px-6 flex justify-center relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl w-full relative z-10">
          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              The Challenges{" "}
              <span className="text-red-600 text-lg align-top ml-1 font-semibold">
                Before Automation
              </span>
            </h2>

            {/* Alert pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 inline-flex items-center gap-3 bg-red-500/10 text-red-600 px-6 py-3 rounded-full text-sm font-bold border border-red-500/30 shadow-lg"
            >
              <span className="text-lg">⚠️</span>
              <span>25-30% of Patient Calls were Missed or Abandoned</span>
            </motion.div>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "📞",
                title: "Missed Opportunities",
                desc: "After-hours calls went to voicemail, often resulting in patients booking elsewhere."
              },
              {
                icon: "📅",
                title: "Appointment Confusion",
                desc: "Manual booking led to double-bookings and scheduling overlaps."
              },
              {
                icon: "⏱️",
                title: "Lack of Follow-ups",
                desc: "Busy staff forgot to send reminders, leading to a 15% 'no-show' rate."
              },
              {
                icon: "🧾",
                title: "Desk Overload",
                desc: "Receptionists spent 80% of their time on repetitive admin instead of patient care."
              },
              {
                icon: "📊",
                title: "No Data Insights",
                desc: "No clear view of peak hours, service popularity, or revenue patterns."
              },
              {
                icon: "👤",
                title: "Staff Dependency",
                desc: "The clinic struggled to function whenever a key admin staff member was absent."
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={() => {
                  setTouchedCard(`challenge-${index}`);
                }}
                className="group"
              >
                <div className={`bg-white border rounded-xl p-6 shadow-lg transition-all duration-300 h-full ${touchedCard === `challenge-${index}` ? 'border-red-500/30 shadow-2xl' : 'border-slate-200 hover:shadow-2xl hover:border-red-500/30'}`}>
                  {/* Icon Container */}
                  <div className="mb-5">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/5 transition-all duration-300 ${touchedCard === `challenge-${index}` ? 'from-red-500/20 to-red-600/10' : 'group-hover:from-red-500/20 group-hover:to-red-600/10'}`}>
                      <span className={`text-3xl transition-transform duration-300 ${touchedCard === `challenge-${index}` ? 'scale-110' : ''}`}>{card.icon}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-lg mb-2 transition-colors duration-300 ${touchedCard === `challenge-${index}` ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'}`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${touchedCard === `challenge-${index}` ? 'text-slate-700' : 'text-slate-600 group-hover:text-slate-700'}`}>
                    {card.desc}
                  </p>

                  {/* Decorative Line */}
                  <div className={`mt-5 w-12 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-opacity duration-300 ${touchedCard === `challenge-${index}` ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* After Implementing CoreSec Section */}
      <section className="w-full bg-gradient-to-br from-slate-900 via-[#1a0505] to-black text-white py-24 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(230,10,17,0.08),transparent_70%)]"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/20 text-red-400 text-sm font-bold uppercase tracking-widest border border-red-500/30 mb-5">
              <CheckCircle size={16} />
              The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent">
              After Implementing CoreSec AI Business OS™
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              CoreSec deployed the AI Business OS for Sunshine Clinic within 4 weeks. Here's how each part of the system helped:
            </p>
          </motion.div>

          {/* Component 1: AI Receptionist */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-500 shadow-xl shadow-red-500/30">
                    <Brain size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">AI Receptionist</h3>
                    <p className="text-slate-400 text-sm">(Virtual Assistant)</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Added to the website, WhatsApp, and clinic app",
                    "Replies instantly to all patient messages — 24×7",
                    "Books appointments automatically in the dashboard calendar",
                    "Answers common questions like:",
                    "Speaks naturally, understands Hindi & English"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-300">{item}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Example Questions */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 mt-6">
                  <p className="text-sm text-slate-400 mb-3 font-semibold">Common questions handled:</p>
                  <div className="flex flex-wrap gap-2">
                    {["What are your timings?", "Do you have a pediatrician?", "Can I reschedule my appointment?"].map((q, i) => (
                      <span key={i} className="text-xs bg-red-500/10 text-red-400 px-3 py-1.5 rounded-full border border-red-500/20">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Impact Box */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <CheckCircle size={20} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Impact</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                      <p className="text-green-400 font-bold text-lg mb-1">No missed calls</p>
                      <p className="text-slate-400 text-sm">No human delay</p>
                    </div>
                    
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                      <p className="text-blue-400 font-bold text-lg mb-1">24/7 Booking</p>
                      <p className="text-slate-400 text-sm">Patients can book or change appointments even at midnight</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Component 2: Smart Website & Patient App */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl shadow-blue-500/30">
                    <Globe size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Smart Website & Patient App</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Patients can see available doctors, book slots, and even pay online",
                    "Integrated chat widget directly connects with the AI receptionist",
                    "The app sends reminders for appointments or medicine refills automatically"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Impact Box */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <CheckCircle size={20} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Impact</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                      <p className="text-slate-300">Fewer front-desk calls</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                      <p className="text-slate-300">Smoother communication</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                      <p className="text-slate-300">Zero confusion</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Component 3: Doctor's Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 shadow-xl shadow-purple-500/30">
                    <LayoutDashboard size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Doctor's Dashboard</h3>
                    <p className="text-slate-400 text-sm">(Real-Time Control Panel)</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-slate-300"
                  >
                    Clinic staff and doctors can see today's appointments, pending reports, and patient analytics on one screen.
                  </motion.p>

                  {/* Daily Summary Box */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5"
                  >
                    <p className="text-purple-400 font-bold text-sm mb-2">Automatic daily summary sent at 9 PM:</p>
                    <p className="text-slate-300 text-sm font-mono">"Today: 42 patients seen, 10 new, 5 follow-ups pending."</p>
                  </motion.div>

                  {/* Trends List */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <p className="text-slate-400 text-sm font-semibold mb-2">The dashboard shows trends like:</p>
                    {[
                      "Which doctor gets the most appointments",
                      "Which test packages are most popular",
                      "Which days are busiest"
                    ].map((trend, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <TrendingUp size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                        <p className="text-slate-300 text-sm">{trend}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Right Impact Box */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <CheckCircle size={20} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Impact</h4>
                  </div>
                  
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
                    <p className="text-purple-400 font-bold mb-2">Better Business Decisions</p>
                    <p className="text-slate-400 text-sm">Doctor can now decide when to hire staff, which services to promote, etc.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Component 4: Automation Layer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-500 shadow-xl shadow-orange-500/30">
                    <Settings size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Automation Layer</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Sends appointment reminders automatically by WhatsApp & SMS",
                    "After appointment, sends digital feedback form and health tips",
                    "If a patient doesn't come for a follow-up, AI automatically reminds them after 7 days",
                    "Reports (like blood test results) sent automatically through the dashboard"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Impact Box */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <CheckCircle size={20} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Impact</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
                      <p className="text-orange-400 font-bold text-2xl mb-1">60%</p>
                      <p className="text-slate-400 text-sm">Clinic's workload reduced</p>
                    </div>
                    
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                      <p className="text-green-400 font-bold text-2xl mb-1">40%</p>
                      <p className="text-slate-400 text-sm">Follow-up patients increased</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Component 5: AI Analytics & Insights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-pink-500 shadow-xl shadow-red-500/30">
                    <BarChart size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">AI Analytics & Insights</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-slate-300"
                  >
                    The system analyzes patient flow and income patterns.
                  </motion.p>

                  {/* Weekly Report Box */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-red-500/10 border border-red-500/30 rounded-xl p-5"
                  >
                    <p className="text-red-400 font-bold text-sm mb-2">Every week, owner gets an automatic report:</p>
                    <p className="text-slate-300 text-sm font-mono">"Your clinic earned ₹3.8 L this week, up 15%. Most popular service: Diabetes Checkup."</p>
                  </motion.div>

                  {/* AI Suggestions */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-5"
                  >
                    <p className="text-pink-400 font-bold text-sm mb-2 flex items-center gap-2">
                      <Brain size={16} />
                      AI Suggestion:
                    </p>
                    <p className="text-slate-300 text-sm">"Send promotional messages to patients who haven't visited in 3 months."</p>
                  </motion.div>
                </div>
              </div>

              {/* Right Impact Box */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <CheckCircle size={20} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Impact</h4>
                  </div>
                  
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                    <p className="text-red-400 font-bold mb-2">Data-Driven Decisions</p>
                    <p className="text-slate-400 text-sm">Owner now makes informed decisions — not just guesses</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patient Experience Section */}
      <section className="w-full bg-gradient-to-br from-white via-slate-50 to-red-50 py-2 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/20 text-red-600 text-sm font-bold uppercase tracking-widest border border-red-500/30 mb-6">
              <Users size={16} />
              Patient Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Patient Experience (Layman View)
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how AI creates a seamless, caring experience for every patient
            </p>
          </motion.div>

          {/* Patient Journey Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-600 hidden md:block"></div>

            {/* Journey Steps */}
            <div className="space-y-12">
              {[
                {
                  step: "Step 1",
                  title: "Website Visit",
                  description: "A patient visits the clinic website",
                  icon: <Globe size={24} />,
                  color: "from-blue-600 to-cyan-500"
                },
                {
                  step: "Step 2",
                  title: "AI Welcome & Booking",
                  description: "AI assistant welcomes them, helps book a doctor",
                  icon: <Bot size={24} />,
                  color: "from-purple-600 to-purple-500"
                },
                {
                  step: "Step 3",
                  title: "WhatsApp Confirmation",
                  description: "Sends WhatsApp confirmation instantly",
                  icon: <MessageCircle size={24} />,
                  color: "from-green-600 to-emerald-500"
                },
                {
                  step: "Step 4",
                  title: "Visit Reminder",
                  description: "Reminds before visit via SMS/WhatsApp",
                  icon: <Bell size={24} />,
                  color: "from-orange-600 to-yellow-500"
                },
                {
                  step: "Step 5",
                  title: "Thank You Note",
                  description: "After visit, sends a thank-you note and checkup reminder",
                  icon: <Heart size={24} />,
                  color: "from-pink-600 to-red-500"
                },
                {
                  step: "Step 6",
                  title: "Follow-up Care",
                  description: "If they skip, AI messages politely again",
                  icon: <Repeat size={24} />,
                  color: "from-indigo-600 to-blue-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedJourney(index);
                  }}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Side */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} pl-20 md:pl-0`}>
                    <motion.div 
                      className={`bg-white rounded-2xl p-6 shadow-xl border transition-all duration-300 ${touchedJourney === index ? 'border-red-500/30 shadow-2xl' : 'border-slate-200 hover:border-red-500/30'}`}
                    >
                      {/* Step Badge */}
                      <p className="text-red-600 font-bold text-xs mb-2">{item.step}</p>
                      
                      {/* Icon & Title */}
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg transition-transform duration-300 ${touchedJourney === index ? 'scale-110' : ''}`}>
                          {item.icon}
                        </div>
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${touchedJourney === index ? 'text-red-600' : 'text-slate-900'}`}>{item.title}</h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-red-500 border-4 border-white shadow-lg z-10">
                  </div>

                  {/* Empty Side */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works So Well Section - Premium Design */}
      <section className="w-full bg-white py-24 px-6 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header with Side Lines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border border-red-200 mb-4 shadow-sm">
              <CheckCircle size={14} />
              Key Advantages
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Why It Works So Well
            </h2>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 mx-auto mb-6 rounded-full"></div>

            {/* Subtitle */}
            <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The secret behind CoreSec AI Business OS™ effectiveness
            </p>
          </motion.div>

          {/* Four Reasons - Card Layout with Central Hub */}
          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            {[
              {
                number: "01",
                title: "Instant AI Performance",
                description: "AI works instantly, while humans get tired or forget",
                icon: <Zap size={24} />,
                stat: "24/7",
                statLabel: "Non-stop Operation"
              },
              {
                number: "02",
                title: "Connected Data Ecosystem",
                description: "The system keeps all data connected, so nothing is lost",
                icon: <Network size={24} />,
                stat: "100%",
                statLabel: "Data Integrity"
              },
              {
                number: "03",
                title: "Live Owner Insights",
                description: "Owners get live insights without needing an IT person",
                icon: <BarChart size={24} />,
                stat: "Real-time",
                statLabel: "Business Analytics"
              },
              {
                number: "04",
                title: "Scalable Architecture",
                description: "It grows with the business — new branches can be added easily",
                icon: <TrendingUp size={24} />,
                stat: "Unlimited",
                statLabel: "Growth Potential"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={() => {
                  setTouchedReason(index);
                }}
                className="group relative"
              >
                {/* Card Container */}
                <div className={`bg-white rounded-2xl p-5 shadow-md border transition-all duration-300 overflow-hidden ${touchedReason === index ? 'border-red-300 shadow-xl' : 'border-slate-200 hover:border-red-300 hover:shadow-xl'}`}>
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full transition-all duration-500 ${touchedReason === index ? 'from-red-500/20' : 'group-hover:from-red-500/20'}`}></div>
                  
                  {/* Left Border Gradient */}
                  <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-600 via-red-500 to-red-600 transition-opacity duration-300 ${touchedReason === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

                  <div className="relative z-10">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-4">
                      {/* Number Circle */}
                      <div className="relative">
                        <div className={`absolute inset-0 rounded-full blur-md transition-all duration-300 ${touchedReason === index ? 'bg-red-500/30' : 'bg-red-500/20 group-hover:bg-red-500/30'}`}></div>
                        <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white font-black text-lg shadow-lg transition-transform duration-300 ${touchedReason === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                          {item.number}
                        </div>
                      </div>

                      {/* Icon Box */}
                      <div className={`w-12 h-12 rounded-xl transition-all duration-300 flex items-center justify-center text-red-600 ${touchedReason === index ? 'bg-red-100 scale-110 rotate-6' : 'bg-red-50 group-hover:bg-red-100 group-hover:scale-110 group-hover:rotate-6'}`}>
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${touchedReason === index ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Stat Card */}
                    <div className={`bg-gradient-to-br from-red-50 to-red-100/50 rounded-lg p-3 border transition-all duration-300 ${touchedReason === index ? 'border-red-300 shadow-sm' : 'border-red-200 group-hover:border-red-300 group-hover:shadow-sm'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-black text-red-600">{item.stat}</p>
                          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wide mt-0.5">{item.statLabel}</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/50 flex items-center justify-center">
                          <ArrowRight size={16} className={`text-red-600 transition-transform duration-300 ${touchedReason === index ? 'translate-x-1.5' : 'group-hover:translate-x-1.5'}`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Dots */}
                  <div className={`absolute bottom-4 left-4 flex gap-1.5 transition-opacity duration-300 ${touchedReason === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How This Model Fits Other Industries - Minimalist Design */}
      <section className="w-full bg-white py-2 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-red-50 text-red-600 text-sm font-bold uppercase tracking-widest border border-red-200 mb-6 shadow-sm">
              <TrendingUp size={16} />
              Beyond Healthcare
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              How This Model Fits Other Industries
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The same AI-powered automation transforming healthcare can revolutionize any business
            </p>
          </motion.div>

          {/* Four Industries - Clean Card Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                industry: "Legal Services",
                icon: <Scale size={36} />,
                description: "Law firms handling client inquiries and case scheduling"
              },
              {
                industry: "Real Estate",
                icon: <Home size={36} />,
                description: "Agencies managing property inquiries and viewings"
              },
              {
                industry: "Education",
                icon: <GraduationCap size={36} />,
                description: "Institutions managing student admissions and communications"
              },
              {
                industry: "Professional Services",
                icon: <Briefcase size={36} />,
                description: "Firms automating client onboarding and compliance"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={() => {
                  setTouchedIndustry(index);
                }}
                className="group"
              >
                {/* Card */}
                <div className={`relative h-full bg-white rounded-2xl p-8 shadow-lg border transition-all duration-300 overflow-hidden ${touchedIndustry === index ? 'border-red-300 shadow-2xl' : 'border-slate-200 hover:border-red-300 hover:shadow-2xl'}`}>
                  {/* Top Red Line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transition-transform duration-300 ${touchedIndustry === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
                  
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/5 to-transparent rounded-bl-full transition-all duration-500 ${touchedIndustry === index ? 'from-red-500/10' : 'group-hover:from-red-500/10'}`}></div>

                  <div className="relative z-10 text-center">
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className="relative inline-block">
                        <div className={`absolute inset-0 rounded-2xl blur-md transition-all duration-300 ${touchedIndustry === index ? 'bg-red-500/30' : 'bg-red-500/20 group-hover:bg-red-500/30'}`}></div>
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white shadow-lg transition-transform duration-300 ${touchedIndustry === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    {/* Industry Name */}
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${touchedIndustry === index ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'}`}>
                      {item.industry}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bottom Dots */}
                    <div className={`mt-6 flex justify-center gap-2 transition-opacity duration-300 ${touchedIndustry === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Universal Benefits Banner - UNCHANGED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white rotate-45"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm text-white mb-6 mx-auto">
                  <Globe size={40} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  One Platform, Unlimited Possibilities
                </h3>
                <p className="text-red-100 text-lg max-w-3xl mx-auto">
                  Whether you're in healthcare, legal, real estate, education, or professional services — CoreSec AI Business OS™ adapts to your unique workflow and scales with your growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
