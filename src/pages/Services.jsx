import React, { useState } from 'react';
import Header from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { motion } from "framer-motion";
import {
  Code, Smartphone, Server, Brain, BarChart3, Cloud, Blocks, Cpu, Layout,
  ShoppingCart, Database, Lock, Globe, Layers, Zap, Settings, Wrench,
  TestTube, Activity, Shield, Terminal, Box, Network, HardDrive, Eye,
  Gauge, Link as LinkIcon, Coins, Radio, Microchip, Home, Car, Factory,
  GraduationCap, Stethoscope, TrendingUp, Bitcoin, ArrowRight, CheckCircle2,
  ChevronDown, Users, Building2, BookOpen, Rocket, FileText
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  const [touchedCard, setTouchedCard] = useState(null);
  const [touchedFeature, setTouchedFeature] = useState(null);
  const [touchedSkill, setTouchedSkill] = useState(null);
  const [touchedCapability, setTouchedCapability] = useState(null);
  const [touchedTech, setTouchedTech] = useState(null);
  const [touchedCluster, setTouchedCluster] = useState(null);
  const [touchedAnalytics, setTouchedAnalytics] = useState(null);
  const [touchedIoT, setTouchedIoT] = useState(null);
  const [touchedAudience, setTouchedAudience] = useState(null);
  const [touchedTopic, setTouchedTopic] = useState(null);
  
  return (
    <>
      <Header />
      
      {/* HERO SECTION - SEQUENTIAL ANIMATION */}
      <section className="relative w-full min-h-screen flex items-center px-6 md:px-16 py-2 overflow-hidden">
        {/* Background Image - Visible Immediately */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/dist/service_hero.png"
            alt="background"
            className="w-full h-full object-cover"
            style={{ minHeight: '100vh' }}
          />
          {/* Overlay to enhance image visibility */}
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        {/* White Blur Overlay - Freezes in from Left */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent backdrop-blur-sm"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ 
            duration: 2.5, 
            delay: 0.8,
            ease: "easeInOut"
          }}
        />

        {/* CONTENT - Appears After Blur Completes */}
        <motion.div 
          className="realtive z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 3.3, // Waits for blur to complete (0.8 + 2.5)
            ease: "easeOut"
          }}
        >
          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Enterprise <br />
              Technology <br />
              Services for the <br />
              <span className="text-red-600">Next Generation</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl md:text-slate-600 text-slate-800 md:bg-transparent bg-white/70 md:backdrop-blur-none backdrop-blur-sm md:p-0 p-3 rounded-lg">
              Full-stack capabilities designed for scale, security, and innovation across Web, Mobile, AI, Cloud, Blockchain, IoT, and Analytics.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-700 transition">
                Start a Project
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: <Globe size={28} />, label:"WEB" },
              { icon: <Smartphone size={28} />, label:"MOBILE" },
              { icon: <Brain size={28} />, label:"AI" },
              { icon: <Cloud size={28} />, label:"CLOUD" },
              { icon: <Bitcoin size={28} />, label:"WEB3" },
              { icon: <BarChart3 size={28} />, label:"DATA" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-5 flex flex-col items-center justify-center gap-2"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 3.5 + (i * 0.1), // Staggered after content appears
                  ease: "easeOut"
                }}
              >
                <div className="text-red-600">{item.icon}</div>
                <span className="text-sm font-semibold text-slate-700 tracking-wide">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 2️⃣ PROBLEM → SOLUTION TRANSITION */}
      <section className="w-full py-2 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Challenge Most Businesses Face
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-4 items-center">
            {/* Left - Problem State */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-5 shadow-xl border-2 border-red-200"
            >
              <h3 className="text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
                <Settings className="w-6 h-6" />
                Before CoreSec
              </h3>
              <div className="space-y-3">
                {[
                  { icon: "🔧", text: "Scattered tools & disconnected systems" },
                  { icon: "⏱️", text: "Manual work consuming valuable time" },
                  { icon: "📊", text: "No real-time data visibility" },
                  { icon: "🐌", text: "Slow growth due to operational bottlenecks" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-red-50 rounded-lg"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Center Arrow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center text-white shadow-2xl">
                <ArrowRight size={32} />
              </div>
              <p className="text-1xl font-black text-slate-800 mt-6 text-center leading-tight">
                We Transform fragmented operations into<br />
                <span className="text-red-600">intelligent, connected systems</span>
              </p>
            </motion.div>

            {/* Right - After State */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-red-600 to-black rounded-xl p-5 shadow-2xl text-white"
            >
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                After CoreSec
              </h3>
              <div className="space-y-3">
                {[
                  { icon: "🎯", text: "Unified, integrated systems" },
                  { icon: "⚡", text: "Automated workflows saving hours" },
                  { icon: "📈", text: "Real-time insights & analytics" },
                  { icon: "🚀", text: "Scalable growth without limits" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-semibold">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ CORE FLOW — 4 STAGES TIMELINE */}
      <section className="w-full bg-gradient-to-br from-white via-slate-50 to-red-50 py-24 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
          
          {/* Floating stage indicators */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute text-4xl opacity-5"
              style={{
                left: `${10 + i * 15}%`,
                top: `${15 + (i % 3) * 25}%`
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              {['🚀', '💻', '📱', '🤖', '⛓️', '🌐'][i]}
            </motion.div>
          ))}
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
              <TrendingUp size={16} />
              Transformation Path
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Your Journey to Digital Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Four strategic stages to transform your business
            </p>
          </motion.div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-600 hidden md:block"></div>

            {/* Journey Steps */}
            <div className="space-y-12">
              {[
                {
                  step: "Stage 1",
                  title: "Build Foundations",
                  description: "Website + Backend - Establish your digital presence with robust infrastructure",
                  icon: <Code size={24} />,
                  color: "from-red-600 to-red-700"
                },
                {
                  step: "Stage 2",
                  title: "Scale Platforms",
                  description: "Mobile + Cloud - Expand reach with mobile apps and cloud infrastructure",
                  icon: <Smartphone size={24} />,
                  color: "from-red-700 to-red-800"
                },
                {
                  step: "Stage 3",
                  title: "Add Intelligence",
                  description: "AI + Analytics - Empower decisions with artificial intelligence and data insights",
                  icon: <Brain size={24} />,
                  color: "from-red-800 to-black"
                },
                {
                  step: "Stage 4",
                  title: "Optimize & Grow",
                  description: "Blockchain + IoT - Future-proof with emerging technologies and automation",
                  icon: <TrendingUp size={24} />,
                  color: "from-black to-red-900"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`relative flex items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Side */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} pl-20 md:pl-0`}>
                    <motion.div 
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      onTouchStart={() => {
                        setTouchedCard(`process-${index}`);
                      }}
                      className={`bg-white rounded-xl p-5 shadow-xl border transition-all duration-300 ${touchedCard === `process-${index}` ? 'border-red-500/30 shadow-2xl' : 'border-slate-200 hover:border-red-500/30'}`}
                    >
                      {/* Step Badge */}
                      <p className="text-red-600 font-bold text-xs mb-2">{item.step}</p>
                      
                      {/* Icon & Title */}
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
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

      {/* 4️⃣ STAGE 1 — BUILD FOUNDATIONS */}
      <section id="stage-1" className="w-full py-2 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-xl">
                <Code size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900">Build a Strong Digital Foundation</h2>
                <p className="text-lg text-slate-600">Websites, Backends & Systems That Scale</p>
              </div>
            </div>
          </motion.div>

          {/* 🌐 Website Development - PREMIUM DESIGN WITH DYNAMIC GRAPHICS */}
          <div className="mb-12 relative">
            {/* Dynamic Background - Code Pattern & Web Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Animated code brackets */}
              <motion.div
                className="absolute top-8 left-8 text-7xl font-mono text-red-600/5"
                animate={{
                  opacity: [0.05, 0.15, 0.05],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {"</>"}
              </motion.div>
              
              <motion.div
                className="absolute bottom-16 right-16 text-5xl font-mono text-black/5"
                animate={{
                  opacity: [0.05, 0.12, 0.05],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {"{}"}
              </motion.div>
              
              {/* Floating web elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`web-${i}`}
                  className="absolute w-1 h-8 bg-gradient-to-b from-red-600 to-transparent"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${15 + (i % 3) * 25}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.1, 0.4, 0.1],
                    scaleY: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Cursor blink animation */}
              <motion.div
                className="absolute top-1/3 right-1/4 w-3 h-8 bg-red-600"
                animate={{
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "steps(2)"
                }}
              />
              
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `linear-gradient(#dc2626 1px, transparent 1px), linear-gradient(90deg, #dc2626 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>

            {/* Section Header with Enhanced Icon Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mb-12"
            >
              <div className="flex items-center gap-4">
                {/* Enhanced Animated Icon Container */}
                <div className="relative">
                  {/* Multiple glow layers */}
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl blur-2xl"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.6, 0.3],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Orbiting ring */}
                  <motion.div
                    className="absolute -inset-3 border-2 border-dashed border-red-400/50 rounded-3xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Main icon container */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center text-white shadow-2xl">
                    <motion.div
                      animate={{
                        rotateY: [0, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Globe size={40} />
                    </motion.div>
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-3xl"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  {/* Floating particles */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-red-500 rounded-full"
                      style={{
                        top: `${20 + i * 20}%`,
                        right: '-15px'
                      }}
                      animate={{
                        x: [0, 20, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                    Website Development
                  </h3>
                  <p className="text-lg text-slate-600">Crafting Digital Experiences That Convert</p>
                </div>
              </div>
            </motion.div>

            {/* What You Get - Premium Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 relative z-10">
              {[
                { icon: Lock, text: "Secure Deployment", desc: "Enterprise-grade security", gradient: "from-red-500 to-red-600" },
                { icon: TestTube, text: "Comprehensive Testing", desc: "Quality assurance included", gradient: "from-red-600 to-red-700" },
                { icon: Shield, text: "1 Year Support", desc: "Dedicated maintenance", gradient: "from-red-700 to-red-800" },
                { icon: Zap, text: "Optimized Performance", desc: "Lightning-fast load times", gradient: "from-red-800 to-black" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedFeature(idx);
                  }}
                  className={`group relative ${touchedFeature === idx ? 'touched' : ''}`}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl transition-opacity duration-500 ${touchedFeature === idx ? 'opacity-20' : 'opacity-0 group-hover:opacity-20'}`}></div>
                  
                  <div className={`relative bg-white border-2 rounded-xl p-5 transition-all duration-300 overflow-hidden ${touchedFeature === idx ? 'border-red-500 shadow-xl' : 'border-slate-200 hover:border-red-500'}`}>
                    {/* Top Gradient Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}></div>
                    
                    {/* Icon with Background */}
                    <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 ${touchedFeature === idx ? 'scale-110' : 'group-hover:scale-110'}`}>
                      <item.icon size={28} />
                    </div>
                    
                    <h4 className={`text-lg font-bold mb-2 transition-colors ${touchedFeature === idx ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'}`}>
                      {item.text}
                    </h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expertise Showcase - Interactive Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glassmorphism Container */}
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-2xl p-6 md:p-10 border border-slate-200 shadow-xl backdrop-blur-sm">
                {/* Section Title */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                  <h4 className="text-2xl font-bold text-slate-900">Our Expertise</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent ml-4"></div>
                </div>

                {/* Skills Grid with Hover Effects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { skill: "Profile & Branding Websites", icon: Layout },
                    { skill: "Landing Pages", icon: Zap },
                    { skill: "Corporate Websites", icon: Building2 },
                    { skill: "Custom React/Vue Sites", icon: Code },
                    { skill: "E-Commerce Platforms", icon: ShoppingCart },
                    { skill: "Inventory Systems", icon: Database },
                    { skill: "Multi-role Portals", icon: Users },
                    { skill: "WordPress Dev", icon: Globe },
                    { skill: "Payment Integration", icon: Coins },
                    { skill: "Marketplace Sync", icon: Network },
                    { skill: "SEO Optimization", icon: TrendingUp }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.03, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onTouchStart={() => {
                        setTouchedSkill(idx);
                      }}
                      className="group cursor-pointer"
                    >
                      <div className={`relative bg-white rounded-xl p-5 border-2 transition-all duration-300 overflow-hidden ${touchedSkill === idx ? 'border-red-500 shadow-lg' : 'border-slate-200 hover:border-red-500'}`}>
                        {/* Background Gradient on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-red-50 to-transparent transition-opacity duration-300 ${touchedSkill === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                        
                        <div className="relative flex items-center gap-4">
                          {/* Icon Circle */}
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${touchedSkill === idx ? 'bg-red-100' : 'bg-slate-100 group-hover:bg-red-100'}`}>
                            <item.icon className={`w-5 h-5 transition-colors duration-300 ${touchedSkill === idx ? 'text-red-600' : 'text-slate-600 group-hover:text-red-600'}`} />
                          </div>
                          
                          <span className={`font-semibold transition-colors duration-300 ${touchedSkill === idx ? 'text-red-600' : 'text-slate-700 group-hover:text-red-600'}`}>
                            {item.skill}
                          </span>
                          
                          {/* Checkmark appears on hover/touch */}
                          <motion.div
                            className="ml-auto"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={touchedSkill === idx ? { opacity: 1, scale: 1 } : {}}
                            whileHover={{ opacity: 1, scale: 1 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-red-600" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-10 pt-8 border-t border-slate-200"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-600 text-center md:text-left">
                      <span className="font-semibold text-slate-900">Ready to build?</span> Let's create your perfect website
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        console.log('Start Your Project button clicked');
                        navigate('/contact');
                      }}
                      className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      Start Your Project
                      <ArrowRight size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ⚙️ API & Backend Development - PREMIUM DESIGN */}
          <div className="relative">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-200 to-transparent opacity-30"></div>
              <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-red-200 to-transparent opacity-30"></div>
              <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-red-200 to-transparent opacity-30"></div>
            </div>

            {/* Section Header with 3D Icon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mb-12"
            >
              <div className="flex items-center gap-4">
                {/* 3D Server Stack Icon */}
                <div className="relative">
                  {/* Glowing Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black to-red-900 rounded-3xl blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main Icon Container */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-black via-red-900 to-red-700 rounded-3xl flex items-center justify-center text-white shadow-2xl transform hover:rotate-6 transition-transform duration-300">
                    <Server size={40} />
                  </div>
                  
                  {/* Floating Data Points */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-red-500 rounded-full"
                      style={{
                        top: `${20 + i * 30}%`,
                        right: '-10px'
                      }}
                      animate={{
                        x: [0, 15, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                    API & Backend Development
                  </h3>
                  <p className="text-lg text-slate-600">Powerful, Scalable & Secure Infrastructure</p>
                </div>
              </div>
            </motion.div>

            {/* Services Showcase - Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
              {[
                {
                  title: "Custom APIs",
                  desc: "Tailored solutions for your needs",
                  icon: Code,
                  color: "from-red-600 to-red-700",
                  size: "large"
                },
                {
                  title: "Backend Architecture",
                  desc: "Scalable system design",
                  icon: Layers,
                  color: "from-red-700 to-red-800",
                  size: "large"
                },
                {
                  title: "Database Optimization",
                  desc: "Peak performance tuning",
                  icon: Database,
                  color: "from-red-800 to-black",
                  size: "normal"
                },
                {
                  title: "Auth & Security",
                  desc: "Enterprise-grade protection",
                  icon: Shield,
                  color: "from-black to-red-900",
                  size: "normal"
                },
                {
                  title: "Payment Systems",
                  desc: "Secure transactions",
                  icon: Coins,
                  color: "from-red-600 to-red-800",
                  size: "normal"
                },
                {
                  title: "Third-party Integrations",
                  desc: "Seamless connectivity",
                  icon: Network,
                  color: "from-red-700 to-black",
                  size: "normal"
                },
                {
                  title: "Microservices",
                  desc: "Modular architecture",
                  icon: Box,
                  color: "from-red-500 to-red-700",
                  size: "normal"
                },
                {
                  title: "Monitoring",
                  desc: "Real-time insights",
                  icon: Activity,
                  color: "from-red-800 to-red-900",
                  size: "normal"
                },
                {
                  title: "Documentation",
                  desc: "Comprehensive guides",
                  icon: Terminal,
                  color: "from-black to-red-800",
                  size: "normal"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedCapability(idx);
                  }}
                  className={`group relative ${item.size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  {/* Animated Border Gradient */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-red-600 to-black rounded-2xl blur transition-opacity duration-500 ${touchedCapability === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                  
                  <div className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 overflow-hidden h-full ${touchedCapability === idx ? 'border-transparent shadow-2xl' : 'border-slate-200 group-hover:border-transparent'}`}>
                    {/* Top Accent Line */}
                    <motion.div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    />
                    
                    {/* Icon with Animation */}
                    <div className="mb-4">
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon size={28} />
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    {/* Hover Arrow */}
                    <motion.div
                      className="absolute bottom-4 right-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                    >
                      <ArrowRight className="w-5 h-5 text-red-600" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technical Stack Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 relative"
            >
              <div className="bg-gradient-to-br from-black via-red-950 to-black rounded-2xl p-6 md:p-10 border border-red-900/30 shadow-2xl">
                {/* Title */}
                <div className="text-center mb-8">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Technical Excellence</h4>
                  <p className="text-gray-400">Built with cutting-edge technologies</p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis",
                    "GraphQL", "REST", "Docker", "Kubernetes", "AWS",
                    "Azure", "GCP", "CI/CD", "Git", "Linux"
                  ].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onTouchStart={() => {
                        setTouchedTech(idx);
                      }}
                      className={`px-4 py-2 bg-white/10 backdrop-blur-sm border rounded-full text-white text-sm font-semibold transition-all duration-300 cursor-default ${touchedTech === idx ? 'bg-red-600/30 border-red-500' : 'border-red-500/30 hover:bg-red-600/30 hover:border-red-500'}`}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-red-900/30">
                  {[
                    { number: "99.9%", label: "Uptime", icon: Activity },
                    { number: "<100ms", label: "Response Time", icon: Zap },
                    { number: "24/7", label: "Monitoring", icon: Shield }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                      className="text-center"
                    >
                      <stat.icon className="w-6 h-6 text-red-500 mx-auto mb-2" />
                      <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.number}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 5️⃣ STAGE 2 — SCALE PLATFORMS */}
      <section id="stage-2" className="w-full py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white shadow-xl">
                <Smartphone size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900">Scale Your Platforms</h2>
                <p className="text-xl text-slate-600">Mobile Apps & Cloud Infrastructure</p>
              </div>
            </div>
          </motion.div>

          {/* 📱 Mobile App Development - COMPLETELY NEW DESIGN */}
          <div className="mb-24 relative">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Hexagonal grid pattern */}
              <motion.div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%23dc2626' fill-opacity='1'/%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '60px 60px']
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Floating geometric shapes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border-2 border-red-600/20"
                  style={{
                    width: `${60 + i * 20}px`,
                    height: `${60 + i * 20}px`,
                    left: `${10 + i * 15}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 15 + i * 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
              
              {/* Pulsing circles */}
              <motion.div
                className="absolute top-1/4 right-1/4 w-64 h-64 border border-red-600/10 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0, 0.2]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/3 left-1/3 w-96 h-96 border border-black/10 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.15, 0, 0.15]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>

            {/* Section Header - Asymmetric Layout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-16"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left: Large Typography */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    {/* Decorative line */}
                    <motion.div
                      className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-black to-red-700"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-none mb-4">
                      MOBILE
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                        APP
                      </span>
                      <br />
                      <span className="text-3xl md:text-4xl lg:text-5xl text-slate-800">
                        DEVELOPMENT
                      </span>
                    </h3>
                  </motion.div>
                  
                  <motion.p 
                    className="text-xl text-slate-600 max-w-xl mt-6 pl-8 border-l-2 border-red-600/30"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Crafting Native & Cross-Platform Excellence for iOS and Android
                  </motion.p>
                </div>
                
                {/* Right: Abstract Phone Visualization */}
                <div className="lg:col-span-5 relative">
                  <motion.div
                    initial={{ opacity: 0, rotateY: -90 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative mx-auto w-64 h-[500px]"
                  >
                    {/* Phone frame */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black rounded-[3rem] p-2 shadow-2xl border-4 border-red-600/30">
                      {/* Screen */}
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                        {/* Scrollable Screen content pattern */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-slate-50 p-4 flex flex-col gap-3"
                          animate={{
                            y: [0, -300, 0]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                        >

                          {/* App Header with Notification */}
                          <motion.div
                            className="h-14 bg-gradient-to-r from-red-600 via-red-700 to-black rounded-xl flex items-center justify-between px-4 text-white shadow-lg"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div className="flex items-center gap-2">
                              <motion.div
                                className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                              >
                                <span className="text-sm">📊</span>
                              </motion.div>
                              <span className="font-bold text-sm">MyApp Dashboard</span>
                            </div>
                            <motion.div
                              className="relative"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <span className="text-lg">🔔</span>
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-black rounded-full border-2 border-white"></div>
                            </motion.div>
                          </motion.div>

                          {/* User Stats Row */}
                          <motion.div
                            className="flex gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <motion.div
                              className="flex-1 bg-gradient-to-br from-black to-slate-800 rounded-xl p-3 text-white"
                              whileHover={{ scale: 1.05 }}
                              animate={{ y: [0, -3, 0] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <div className="text-xs opacity-70 mb-1">Revenue</div>
                              <motion.div
                                className="text-lg font-bold"
                                animate={{ opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                $48.5K
                              </motion.div>
                              <div className="text-xs text-green-400 mt-1">↑ 12.5%</div>
                            </motion.div>
                            <motion.div
                              className="flex-1 bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-3 text-white"
                              whileHover={{ scale: 1.05 }}
                              animate={{ y: [0, -3, 0] }}
                              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                            >
                              <div className="text-xs opacity-70 mb-1">Users</div>
                              <motion.div
                                className="text-lg font-bold"
                                animate={{ opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                              >
                                2.4K
                              </motion.div>
                              <div className="text-xs opacity-80 mt-1">↑ 8.3%</div>
                            </motion.div>
                          </motion.div>

                          {/* Analytics Chart Card */}
                          <motion.div
                            className="bg-white rounded-xl p-3 shadow-lg border border-slate-100"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            animate={{ y: [0, -4, 0] }}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                <span className="text-xs font-semibold text-slate-700">Performance Analytics</span>
                              </div>
                              <motion.div
                                className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                Live
                              </motion.div>
                            </div>

                            {/* Animated Chart */}
                            <div className="h-24 flex items-end gap-1.5 justify-between">
                              {[35, 55, 45, 70, 60, 85, 75, 90, 65, 80].map((height, i) => (
                                <motion.div
                                  key={i}
                                  className="flex-1 rounded-t bg-gradient-to-t from-red-600 to-red-400"
                                  initial={{ height: 0 }}
                                  whileInView={{ height: `${height}%` }}
                                  viewport={{ once: true }}
                                  animate={{
                                    height: [`${height}%`, `${height + 10}%`, `${height}%`]
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: 0.6 + i * 0.15,
                                    ease: "easeInOut"
                                  }}
                                />
                              ))}
                            </div>

                            {/* Chart labels */}
                            <div className="flex justify-between mt-2 text-xs text-slate-400">
                              <span>Mon</span>
                              <span>Wed</span>
                              <span>Fri</span>
                              <span>Sun</span>
                            </div>
                          </motion.div>

                          {/* Activity Feed Card */}
                          <motion.div
                            className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-3 shadow-md border border-slate-200 flex-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                          >
                            <div className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-2">
                              <motion.span
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              >
                                ⚡
                              </motion.span>
                              Recent Activity
                            </div>
                            
                            <div className="space-y-2">
                              {[
                                { icon: '✅', text: 'Task completed', time: '2m ago', color: 'bg-green-500' },
                                { icon: '👤', text: 'New user signup', time: '5m ago', color: 'bg-blue-500' },
                                { icon: '💰', text: 'Payment received', time: '12m ago', color: 'bg-red-600' }
                              ].map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  whileHover={{ x: 3 }}
                                  animate={{
                                    boxShadow: [
                                      "0 0 0px rgba(220, 38, 38, 0)",
                                      "0 0 8px rgba(220, 38, 38, 0.2)",
                                      "0 0 0px rgba(220, 38, 38, 0)"
                                    ]
                                  }}
                                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 + idx * 0.3 }}
                                >
                                  <div className={`w-7 h-7 ${item.color} rounded-lg flex items-center justify-center text-white text-xs flex-shrink-0`}>
                                    {item.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs font-medium text-slate-700 truncate">{item.text}</div>
                                    <div className="text-[10px] text-slate-400">{item.time}</div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          {/* Quick Actions Grid */}
                          <motion.div
                            className="grid grid-cols-3 gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                          >
                            {[
                              { icon: '📈', label: 'Reports', color: 'from-red-600 to-red-700' },
                              { icon: '⚙️', label: 'Settings', color: 'from-black to-slate-800' },
                              { icon: '🎯', label: 'Goals', color: 'from-red-500 to-black' }
                            ].map((action, idx) => (
                              <motion.div
                                key={idx}
                                className={`bg-gradient-to-br ${action.color} rounded-lg p-2 text-white text-center shadow-md`}
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                  y: [0, -3, 0],
                                  boxShadow: [
                                    "0 2px 4px rgba(0,0,0,0.1)",
                                    "0 6px 12px rgba(220, 38, 38, 0.3)",
                                    "0 2px 4px rgba(0,0,0,0.1)"
                                  ]
                                }}
                                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                              >
                                <div className="text-lg mb-0.5">{action.icon}</div>
                                <div className="text-[9px] font-medium">{action.label}</div>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* CTA Button */}
                          <motion.button
                            className="mt-auto bg-gradient-to-r from-black via-slate-800 to-black text-white py-3 rounded-xl font-semibold shadow-xl"
                            animate={{
                              scale: [1, 1.03, 1],
                              boxShadow: [
                                "0 0 0px rgba(0,0,0,0.2)",
                                "0 0 15px rgba(0,0,0,0.4)",
                                "0 0 0px rgba(0,0,0,0.2)"
                              ]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                          >
                            <span className="flex items-center justify-center gap-2">
                              <motion.span
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              >
                                ⚡
                              </motion.span>
                              Generate Insights
                            </span>
                          </motion.button>
                        </motion.div>
                      </div>
                      
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl"></div>
                    </div>
                    
                    {/* Glow effect behind phone */}
                    <motion.div
                      className="absolute -inset-8 bg-gradient-to-br from-red-600/20 via-transparent to-black/20 rounded-[4rem] blur-2xl -z-10"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* What You Get - Horizontal Timeline Design */}
            <div className="mb-16 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h4 className="text-3xl font-black text-black mb-2">WHAT YOU GET</h4>
                <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-black mx-auto"></div>
              </motion.div>
              
              <div className="relative">
                {/* Connection line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 via-black to-red-700 transform -translate-y-1/2 hidden md:block"></div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { 
                      icon: Shield, 
                      title: "1 Year Support", 
                      desc: "Dedicated maintenance & updates",
                      stats: "365 Days",
                      position: "left"
                    },
                    { 
                      icon: TrendingUp, 
                      title: "Two Featured Updates", 
                      desc: "Major feature improvements",
                      stats: "Bi-annual",
                      position: "center"
                    },
                    { 
                      icon: Lock, 
                      title: "Security Updates", 
                      desc: "Enterprise-grade protection",
                      stats: "Real-time",
                      position: "right"
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                      className="relative"
                    >
                      {/* Center dot on timeline */}
                      <motion.div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                      />
                      
                      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-red-600 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-600/20 group relative overflow-hidden">
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-600/10 to-transparent rounded-bl-full"></div>
                        
                        {/* Icon in hexagon */}
                        <div className="relative mb-6 inline-block">
                          <motion.div
                            className="w-20 h-20 bg-gradient-to-br from-red-600 to-black flex items-center justify-center text-white shadow-xl clip-path-hexagon"
                            style={{
                              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                            }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <item.icon size={36} />
                          </motion.div>
                          
                          {/* Orbiting ring */}
                          <motion.div
                            className="absolute -inset-2 border-2 border-dashed border-red-600/30 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                        
                        {/* Stats badge */}
                        <div className="inline-block px-4 py-1 bg-black text-white text-sm font-bold rounded-full mb-4">
                          {item.stats}
                        </div>
                        
                        <h5 className="text-2xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h5>
                        <p className="text-slate-600">{item.desc}</p>
                        
                        {/* Animated underline */}
                        <motion.div
                          className="mt-4 h-0.5 bg-gradient-to-r from-red-600 to-black"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Expertise Showcase - Circular Radial Design */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-black via-slate-900 to-black rounded-[3rem] p-12 md:p-16 border-4 border-red-600/30 shadow-2xl relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-red-600 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>
                
                {/* Section Title */}
                <div className="text-center mb-16 relative z-10">
                  <motion.h4 
                    className="text-4xl md:text-5xl font-black text-white mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    OUR <span className="text-red-600">EXPERTISE</span>
                  </motion.h4>
                  <motion.div
                    className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>

                {/* Skills in Grid with Hover Effects */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
                  {[
                    { skill: "Android / iOS Development", icon: Smartphone },
                    { skill: "Cross-platform Solutions", icon: Layers },
                    { skill: "MVP Development", icon: Rocket },
                    { skill: "Enterprise Applications", icon: Building2 },
                    { skill: "AI-powered Apps", icon: Brain },
                    { skill: "IoT Applications", icon: Radio },
                    { skill: "Third-party Integrations", icon: Network },
                    { skill: "E-commerce Apps", icon: ShoppingCart },
                    { skill: "Testing & QA", icon: TestTube },
                    { skill: "Maintenance & Support", icon: Wrench },
                    { skill: "Consulting", icon: Users }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-600 transition-all duration-500 overflow-hidden">
                        {/* Background glow on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        
                        <div className="relative flex flex-col items-center text-center gap-3">
                          {/* Icon container */}
                          <motion.div
                            className="w-14 h-14 bg-gradient-to-br from-red-600 to-black rounded-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-red-600/50 transition-all duration-500"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <item.icon className="w-7 h-7" />
                          </motion.div>
                          
                          <span className="font-bold text-white text-sm group-hover:text-red-400 transition-colors duration-300">
                            {item.skill}
                          </span>
                          
                          {/* Bottom indicator */}
                          <motion.div
                            className="w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Section - Bold Design */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-16 pt-12 border-t-2 border-white/10 relative z-10"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                      <h5 className="text-3xl font-black text-white mb-2">
                        Ready to launch your app?
                      </h5>
                      <p className="text-slate-400 text-lg">Let's transform your idea into reality</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(220, 38, 38, 0.6)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/contact')}
                      className="relative px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-black text-lg rounded-full shadow-2xl transition-all duration-500 flex items-center gap-4 group overflow-hidden border-4 border-white/20"
                    >
                      {/* Animated shine */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/50"
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      <span className="relative z-10">START YOUR PROJECT</span>
                      <ArrowRight size={24} className="relative z-10 transform group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>



          {/* ☁️ Cloud & DevOps - COMPLETELY NEW DESIGN */}
          <div className="relative">
            {/* Animated Background - Cloud Network Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none mb-8">
              {/* Floating cloud shapes */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`cloud-${i}`}
                  className="absolute opacity-10"
                  style={{
                    width: `${100 + i * 40}px`,
                    height: `${60 + i * 20}px`,
                    left: `${i * 20}%`,
                    top: `${10 + (i % 3) * 30}%`,
                    background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)',
                    borderRadius: '50%'
                  }}
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                />
              ))}
              
              {/* Network connection lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10">
                {[...Array(8)].map((_, i) => (
                  <motion.line
                    key={`line-${i}`}
                    x1={`${Math.random() * 100}%`}
                    y1={`${Math.random() * 100}%`}
                    x2={`${Math.random() * 100}%`}
                    y2={`${Math.random() * 100}%`}
                    stroke="#dc2626"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.3
                    }}
                  />
                ))}
              </svg>
              
              {/* Pulsing nodes */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`node-${i}`}
                  className="absolute w-3 h-3 bg-red-600 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>

            {/* Section Header - Server Rack Visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-16"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left: Typography */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    {/* Decorative bracket */}
                    <motion.div
                      className="absolute -left-6 top-0 text-8xl font-black text-red-600/20"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      {"{"}
                    </motion.div>
                    
                    <h3 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none mb-4 pl-8">
                      CLOUD
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
                        & DEVOPS
                      </span>
                    </h3>
                  </motion.div>
                  
                  <motion.p 
                    className="text-xl text-slate-600 max-w-xl mt-6 pl-8 border-l-4 border-red-600"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Scalable Infrastructure & Automated Deployment Solutions
                  </motion.p>
                </div>
                
                {/* Right: Abstract Cloud Infrastructure Visualization */}
                <div className="lg:col-span-5 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative mx-auto"
                  >
                    {/* Server rack visualization */}
                    <div className="relative w-72 h-80">
                      {/* Main server frame */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800 rounded-2xl p-4 shadow-2xl border-4 border-red-600/40">
                        {/* Server units */}
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="mb-2 last:mb-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-3 border border-white/10"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          >
                            {/* Status lights */}
                            <div className="flex items-center justify-between">
                              <div className="flex gap-2">
                                <motion.div
                                  className="w-2 h-2 rounded-full bg-green-500"
                                  animate={{ opacity: [1, 0.3, 1] }}
                                  transition={{ duration: 1 + i * 0.2, repeat: Infinity }}
                                />
                                <motion.div
                                  className="w-2 h-2 rounded-full bg-red-600"
                                  animate={{ opacity: [0.3, 1, 0.3] }}
                                  transition={{ duration: 1.5 + i * 0.3, repeat: Infinity }}
                                />
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                              </div>
                              <motion.div
                                className="h-1 flex-1 mx-3 bg-slate-600 rounded-full overflow-hidden"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                              >
                                <motion.div
                                  className="h-full bg-gradient-to-r from-red-600 to-red-400"
                                  animate={{ width: ['30%', '80%', '50%'] }}
                                  transition={{ duration: 3 + i, repeat: Infinity }}
                                />
                              </motion.div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Cloud icon floating above */}
                      <motion.div
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-5xl"
                        animate={{
                          y: [0, -15, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity
                        }}
                      >
                        ☁️
                      </motion.div>
                      
                      {/* Connection lines to cloud */}
                      <svg className="absolute -top-8 left-0 w-full h-16 pointer-events-none">
                        <motion.path
                          d="M 144 80 Q 144 40 144 20"
                          stroke="#dc2626"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="5,5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </svg>
                      
                      {/* Glowing effect */}
                      <motion.div
                        className="absolute -inset-4 bg-gradient-to-br from-red-600/20 via-transparent to-black/20 rounded-3xl blur-2xl -z-10"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Cloud & DevOps Cards - Split Design */}
            <div className="grid lg:grid-cols-2 gap-8 relative z-10">
              {/* Cloud Services Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border-2 border-slate-200 hover:border-red-600 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-600/20 overflow-hidden">
                  {/* Animated corner pattern */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 opacity-10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Cloud className="w-full h-full text-red-600" />
                  </motion.div>
                  
                  {/* Header with animated icon */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-red-600 to-black rounded-2xl flex items-center justify-center text-white shadow-xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Cloud size={32} />
                    </motion.div>
                    <div>
                      <h4 className="text-3xl font-black text-black">Cloud Services</h4>
                      <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-transparent mt-2"></div>
                    </div>
                  </div>
                  
                  {/* Feature list with staggered animation */}
                  <div className="space-y-4">
                    {[
                      "Cloud Migration",
                      "Infrastructure Setup",
                      "Hybrid Cloud Solutions",
                      "Security & Compliance",
                      "Backup & Recovery"
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-red-600 transition-all duration-300 group/item cursor-pointer"
                      >
                        {/* Animated checkmark circle */}
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </motion.div>
                        
                        <span className="text-slate-700 font-semibold group-hover/item:text-red-600 transition-colors">
                          {item}
                        </span>
                        
                        {/* Arrow appears on hover */}
                        <motion.div
                          className="ml-auto opacity-0 group-hover/item:opacity-100"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <ArrowRight className="w-5 h-5 text-red-600" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-black to-red-700"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </motion.div>

              {/* DevOps Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-black via-slate-900 to-black rounded-3xl p-8 border-2 border-red-600/30 hover:border-red-600 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-600/30 overflow-hidden">
                  {/* Animated gear pattern */}
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 opacity-5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <Settings className="w-full h-full text-white" />
                  </motion.div>
                  
                  {/* Header with animated icon */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center text-white shadow-xl"
                      whileHover={{ rotate: -360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Settings size={32} />
                    </motion.div>
                    <div>
                      <h4 className="text-3xl font-black text-white">DevOps</h4>
                      <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-transparent mt-2"></div>
                    </div>
                  </div>
                  
                  {/* Feature list with staggered animation */}
                  <div className="space-y-4">
                    {[
                      "CI/CD Pipelines",
                      "Infrastructure as Code",
                      "Docker & Kubernetes",
                      "Monitoring & Logging",
                      "Auto Scaling"
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-600 transition-all duration-300 group/item cursor-pointer"
                      >
                        {/* Animated gear icon */}
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-br from-red-600 to-black rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Settings className="w-5 h-5 text-white" />
                        </motion.div>
                        
                        <span className="text-white font-semibold group-hover/item:text-red-400 transition-colors">
                          {item}
                        </span>
                        
                        {/* Arrow appears on hover */}
                        <motion.div
                          className="ml-auto opacity-0 group-hover/item:opacity-100"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <ArrowRight className="w-5 h-5 text-red-600" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-white to-red-700"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ STAGE 3 — ADD INTELLIGENCE */}
      <section id="stage-3" className="w-full py-2 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-800 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Brain size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900">Add Intelligence</h2>
                <p className="text-xl text-slate-600">AI, ML & Advanced Analytics</p>
              </div>
            </div>
          </motion.div>

          {/* 🤖 AI & Machine Learning - COMPLETELY NEW DESIGN */}
          <div className="mb-12 relative">
            {/* Animated Background - Neural Network Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Neural network nodes and connections */}
              <svg className="absolute inset-0 w-full h-full opacity-15">
                {/* Connection lines between nodes */}
                {[...Array(15)].map((_, i) => {
                  const x1 = Math.random() * 100;
                  const y1 = Math.random() * 100;
                  const x2 = x1 + (Math.random() - 0.5) * 30;
                  const y2 = y1 + (Math.random() - 0.5) * 30;
                  return (
                    <motion.line
                      key={`conn-${i}`}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="#dc2626"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 3
                      }}
                    />
                  );
                })}
                
                {/* Pulsing nodes */}
                {[...Array(20)].map((_, i) => (
                  <motion.circle
                    key={`node-${i}`}
                    cx={`${Math.random() * 100}%`}
                    cy={`${Math.random() * 100}%`}
                    r="3"
                    fill="#dc2626"
                    initial={{ r: 3, opacity: 0.3 }}
                    animate={{
                      r: [2, 5, 2],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </svg>
              
              {/* Floating brain/neural symbols */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`symbol-${i}`}
                  className="absolute text-4xl opacity-10"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${15 + (i % 3) * 25}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                >
                  {['🧠', '⚡', '🔮', '💡', '✨', '🎯'][i]}
                </motion.div>
              ))}
              
              {/* Gradient orbs */}
              <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-600/10 to-black/10 rounded-full blur-3xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-black/10 to-red-700/10 rounded-full blur-3xl"
                animate={{
                  x: [0, -40, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Section Header - Brain Visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-16"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left: Typography */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    {/* Decorative neural pattern */}
                    <motion.div
                      className="absolute -left-8 top-0"
                      initial={{ opacity: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    >
                      <Brain size={64} className="text-red-600/20" />
                    </motion.div>
                    
                    <h3 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none mb-4 pl-8">
                      AI &
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-black">
                        MACHINE
                      </span>
                      <br />
                      <span className="text-3xl md:text-4xl lg:text-5xl text-slate-800">
                        LEARNING
                      </span>
                    </h3>
                  </motion.div>
                  
                  <motion.p 
                    className="text-xl text-slate-600 max-w-xl mt-6 pl-8 border-l-4 border-gradient-to-b from-red-600 to-black"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Intelligent Solutions Powered by Advanced AI Technologies
                  </motion.p>
                </div>
                
                {/* Right: AI Processing Dashboard Visualization */}
                <div className="lg:col-span-5 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative mx-auto"
                  >
                    {/* AI Dashboard frame */}
                    <div className="relative w-96 h-80 bg-gradient-to-br from-slate-900 via-black to-slate-800 rounded-2xl p-4 shadow-2xl border-4 border-red-600/40">
                      {/* Dashboard header */}
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-600"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-white/50 text-xs">AI Processing Unit</div>
                      </div>
                      
                      {/* Dashboard content grid */}
                      <div className="grid grid-cols-2 gap-2 h-[calc(100%-40px)]">
                        {/* Panel 1 - Neural Network Visualization */}
                        <motion.div
                          className="bg-white/5 rounded-lg p-2 border border-white/10 relative overflow-hidden"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <div className="text-white/70 text-[8px] mb-2">Neural Net</div>
                          <svg className="w-full h-16" viewBox="0 0 100 50">
                            {/* Network connections */}
                            {[...Array(8)].map((_, i) => {
                              const x1 = 10 + Math.random() * 30;
                              const y1 = 10 + Math.random() * 30;
                              const x2 = 60 + Math.random() * 30;
                              const y2 = 10 + Math.random() * 30;
                              return (
                                <motion.line
                                  key={`nn-line-${i}`}
                                  x1={x1}
                                  y1={y1}
                                  x2={x2}
                                  y2={y2}
                                  stroke="#dc2626"
                                  strokeWidth="0.5"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: [0, 0.6, 0] }}
                                  transition={{
                                    duration: 2 + Math.random(),
                                    repeat: Infinity,
                                    delay: Math.random() * 2
                                  }}
                                />
                              );
                            })}
                            {/* Network nodes */}
                            {[...Array(6)].map((_, i) => (
                              <motion.circle
                                key={`nn-node-${i}`}
                                cx={20 + i * 12}
                                cy={25 + Math.sin(i) * 10}
                                r="2"
                                fill="#dc2626"
                                animate={{
                                  r: [1.5, 2.5, 1.5],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </svg>
                        </motion.div>
                        
                        {/* Panel 2 - AI Training Progress */}
                        <motion.div
                          className="bg-white/5 rounded-lg p-2 border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <div className="text-white/70 text-[8px] mb-2">Model Training</div>
                          <div className="space-y-2">
                            {['Accuracy', 'Loss', 'F1 Score'].map((metric, i) => (
                              <div key={metric}>
                                <div className="flex justify-between text-white/60 text-[7px] mb-1">
                                  <span>{metric}</span>
                                  <span>{[95, 12, 93][i]}%</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${[95, 12, 93][i]}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                        
                        {/* Panel 3 - AI Capabilities */}
                        <motion.div
                          className="bg-white/5 rounded-lg p-2 border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                        >
                          <div className="text-white/70 text-[8px] mb-2">AI Models</div>
                          <div className="grid grid-cols-2 gap-1">
                            {['NLP', 'CV', 'ML', 'DL'].map((model, i) => (
                              <motion.div
                                key={model}
                                className="bg-red-600/20 border border-red-600/40 rounded px-1.5 py-1 text-center"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <div className="text-white text-[8px] font-bold">{model}</div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                        
                        {/* Panel 4 - Processing Metrics */}
                        <motion.div
                          className="bg-white/5 rounded-lg p-2 border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                        >
                          <div className="text-white/70 text-[8px] mb-1">Inference</div>
                          <motion.div
                            className="text-white font-bold text-base"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.3 }}
                          >
                            2.3ms
                          </motion.div>
                          <motion.div
                            className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 1.4 }}
                          >
                            <motion.div
                              className="h-full bg-gradient-to-r from-red-600 to-red-400"
                              animate={{ width: ['70%', '90%', '70%'] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                          </motion.div>
                          <div className="text-white/50 text-[7px] mt-1">Latency</div>
                        </motion.div>
                      </div>
                      
                      {/* Glow effect */}
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-br from-red-600/20 via-transparent to-black/20 rounded-2xl blur-xl -z-10"
                        animate={{
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* AI Categories - Card Grid with Hover Effects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {[
                {
                  category: "Intelligence",
                  icon: Brain,
                  items: ["Personalization", "Chatbots", "Agentic AI", "Predictive Analytics"],
                  color: "from-red-600 to-red-800"
                },
                {
                  category: "Perception",
                  icon: Eye,
                  items: ["Computer Vision", "Voice Recognition", "Sentiment Analysis"],
                  color: "from-black to-slate-800"
                },
                {
                  category: "Security",
                  icon: Shield,
                  items: ["Fraud Detection", "Anomaly Detection"],
                  color: "from-red-700 to-black"
                },
                {
                  category: "Automation",
                  icon: Settings,
                  items: ["AI Workflows", "Generative AI", "Process Automation"],
                  color: "from-red-600 to-black"
                },
                {
                  category: "Advanced",
                  icon: Cpu,
                  items: ["AI Consulting", "Deep Tech Solutions"],
                  color: "from-black to-red-900"
                }
              ].map((cluster, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10, rotateY: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedCluster(idx);
                  }}
                  className={`group perspective-1000 ${touchedCluster === idx ? 'touched' : ''}`}
                >
                  <div className={`relative h-full bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border-2 transition-all duration-500 shadow-lg overflow-hidden ${touchedCluster === idx ? 'border-red-600 shadow-2xl shadow-red-600/20' : 'border-slate-200 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/20'}`}>
                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-5"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%']
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundImage: 'radial-gradient(circle, #dc2626 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}
                    />
                    
                    {/* Header with animated icon */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-br ${cluster.color} rounded-xl flex items-center justify-center text-white shadow-xl`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <cluster.icon size={28} />
                      </motion.div>
                      <h4 className="text-2xl font-black text-black group-hover:text-red-600 transition-colors">
                        {cluster.category}
                      </h4>
                    </div>
                    
                    {/* Items list with animations */}
                    <div className="space-y-3 relative z-10">
                      {cluster.items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 + i * 0.05 }}
                          whileHover={{ x: 8 }}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-red-600 transition-all duration-300 cursor-pointer group/item"
                        >
                          {/* Animated dot */}
                          <motion.div
                            className="w-2 h-2 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                          
                          <span className="text-slate-700 font-medium group-hover/item:text-red-600 transition-colors">
                            {item}
                          </span>
                          
                          {/* Arrow on hover */}
                          <motion.div
                            className="ml-auto opacity-0 group-hover/item:opacity-100"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            <ArrowRight className="w-4 h-4 text-red-600" />
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Bottom accent */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cluster.color}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 + 0.5 }}
                    />
                    
                    {/* Corner decoration */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 opacity-10"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      <cluster.icon className="w-full h-full text-red-600" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 📊 Data Analytics & Dashboards - COMPLETELY NEW DESIGN */}
          <div className="relative">
            {/* Animated Background - Data Flow Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none w-64 h-64">
              {/* Animated bar chart background */}
              <svg className="absolute bottom-0 left-0 w-full h-64 opacity-10">
                {[...Array(20)].map((_, i) => {
                  const startY = 100 - Math.random() * 80;
                  const midY = 100 - Math.random() * 60;
                  const startHeight = Math.random() * 80;
                  const midHeight = Math.random() * 60;
                  
                  return (
                    <motion.rect
                      key={`bar-${i}`}
                      x={`${i * 5}%`}
                      y={`${startY}%`}
                      width="3%"
                      height={`${startHeight}%`}
                      fill="#dc2626"
                      initial={{
                        y: `${startY}%`,
                        height: `${startHeight}%`
                      }}
                      animate={{
                        y: [`${startY}%`, `${midY}%`, `${startY}%`],
                        height: [`${startHeight}%`, `${midHeight}%`, `${startHeight}%`]
                      }}
                      transition={{
                        duration: 5 + Math.random() * 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                      }}
                    />
                  );
                })}
              </svg>
              
              {/* Flowing data lines */}
              <svg className="absolute inset-0 w-full h-full opacity-15">
                {[...Array(10)].map((_, i) => (
                  <motion.path
                    key={`flow-${i}`}
                    d={`M 0 ${50 + Math.sin(i) * 30} Q 250 ${50 + Math.cos(i) * 40} 500 ${50 + Math.sin(i + 1) * 30} T 1000 ${50 + Math.cos(i + 1) * 30}`}
                    stroke="#dc2626"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 6 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  />
                ))}
              </svg>
              
              {/* Floating data points */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`point-${i}`}
                  className="absolute w-2 h-2 bg-red-600 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
              
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(#dc2626 1px, transparent 1px), linear-gradient(90deg, #dc2626 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            {/* Section Header - Dashboard Visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-16"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left: Abstract Dashboard Visualization */}
                <div className="lg:col-span-5 relative order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative mx-auto"
                  >
                    {/* Dashboard frame - INCREASED FROM w-80 h-72 to w-96 h-96 */}
                    <div className="relative w-96 h-96 bg-gradient-to-br from-slate-900 via-black to-slate-800 rounded-2xl p-4 shadow-2xl border-4 border-red-600/40">
                      {/* Dashboard header */}
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-600"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-white/50 text-xs">Analytics Dashboard</div>
                      </div>
                      
                      {/* Dashboard content grid */}
                      <div className="grid grid-cols-2 gap-2 h-[calc(100%-40px)]">
                        {/* Chart 1 - Bar Chart */}
                        <motion.div
                          className="bg-white/5 rounded-lg p-2 border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <div className="text-white/70 text-[8px] mb-2">Revenue</div>
                          <div className="flex items-end justify-around h-16">
                            {[60, 80, 45, 90, 70].map((height, i) => (
                              <motion.div
                                key={i}
                                className="w-3 bg-gradient-to-t from-red-600 to-red-400 rounded-t"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${height}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                              />
                            ))}
                          </div>
                        </motion.div>
                        
                        {/* Chart 2 - Line Chart */}
                        <motion.div
                          className="bg-white/5 rounded-lg p-2 border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <div className="text-white/70 text-[8px] mb-2">Growth</div>
                          <svg className="w-full h-16" viewBox="0 0 100 50">
                            <motion.path
                              d="M 0 40 Q 25 35 50 20 T 100 10"
                              stroke="#dc2626"
                              strokeWidth="2"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                            />
                          </svg>
                        </motion.div>
                        
                        {/* Chart 3 - Pie Chart */}
                        <motion.div
                          className="bg-white/5 rounded-lg p-2 border border-white/10 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                        >
                          <svg className="w-16 h-16" viewBox="0 0 36 36">
                            <motion.circle
                              cx="18"
                              cy="18"
                              r="15.9155"
                              fill="transparent"
                              stroke="#dc2626"
                              strokeWidth="3"
                              strokeDasharray="75 25"
                              initial={{ rotate: 0 }}
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.circle
                              cx="18"
                              cy="18"
                              r="15.9155"
                              fill="transparent"
                              stroke="#000"
                              strokeWidth="3"
                              strokeDasharray="25 75"
                              strokeDashoffset="75"
                              initial={{ rotate: 0 }}
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                          </svg>
                        </motion.div>
                        
                        {/* Chart 4 - Metrics */}
                        <motion.div
                          className="bg-white/5 rounded-lg p-2 border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                        >
                          <div className="text-white/70 text-[8px] mb-1">Users</div>
                          <motion.div
                            className="text-white font-bold text-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.2 }}
                          >
                            12.5K
                          </motion.div>
                          <motion.div
                            className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 1.3 }}
                          >
                            <motion.div
                              className="h-full bg-gradient-to-r from-red-600 to-red-400"
                              animate={{ width: ['60%', '85%', '70%'] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            />
                          </motion.div>
                        </motion.div>
                      </div>
                      
                      {/* Live indicator */}
                      <motion.div
                        className="absolute -top-3 -right-3 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Analysed Data
                      </motion.div>
                      
                      {/* Glowing effect */}
                      <motion.div
                        className="absolute -inset-4 bg-gradient-to-br from-red-600/20 via-transparent to-black/20 rounded-3xl blur-2xl -z-10"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Right: Typography */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative text-right"
                  >
                    {/* Horizontal accent bars */}
                    <div className="flex gap-2 mb-6">
                      <motion.div
                        className="h-2 w-16 bg-red-600 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                      <motion.div
                        className="h-2 w-8 bg-black rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      />
                      <motion.div
                        className="h-2 w-4 bg-red-600 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      />
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-none mb-4">
                      DATA
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
                        ANALYTICS
                      </span>
                      <br />
                      <span className="text-3xl md:text-4xl lg:text-5xl text-slate-800">
                        & DASHBOARDS
                      </span>
                    </h3>
                    
                    {/* Bottom accent line */}
                    <motion.div
                      className="w-32 h-1 bg-gradient-to-r from-red-600 via-black to-red-700 mt-6 rounded-full ml-auto"
                      initial={{ width: 0 }}
                      whileInView={{ width: 128 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </motion.div>
                  
                  <motion.p 
                    className="text-xl text-slate-600 max-w-xl mt-6 text-right ml-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Transform Raw Data Into Actionable Business Intelligence
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Analytics Services - Interactive Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {[
                { title: "BI Dashboards", icon: BarChart3, delay: 0 },
                { title: "Live Monitoring", icon: Activity, delay: 0.05 },
                { title: "Data Pipelines", icon: Network, delay: 0.1 },
                { title: "AI Analytics", icon: Brain, delay: 0.15 },
                { title: "Performance Tracking", icon: Gauge, delay: 0.2 },
                { title: "Custom Reports", icon: FileText, delay: 0.25 },
                { title: "Cloud Analytics", icon: Cloud, delay: 0.3 },
                { title: "System Integrations", icon: Settings, delay: 0.35 }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedAnalytics(idx);
                  }}
                  className={`group cursor-pointer ${touchedAnalytics === idx ? 'touched' : ''}`}
                >
                  <div className={`relative bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border-2 transition-all duration-500 shadow-md overflow-hidden h-full ${touchedAnalytics === idx ? 'border-red-600 shadow-xl shadow-red-600/20' : 'border-slate-200 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/20'}`}>
                    {/* Animated background bars */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10 flex items-end justify-around px-2">
                      {[40, 70, 50, 80, 60].map((height, i) => (
                        <motion.div
                          key={i}
                          className="w-2 bg-red-600 rounded-t"
                          animate={{
                            height: [`${height}%`, `${height + 20}%`, `${height}%`]
                          }}
                          transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="relative z-10">
                      {/* Icon with animation */}
                      <motion.div
                        className="w-14 h-14 bg-gradient-to-br from-red-600 to-black rounded-xl flex items-center justify-center text-white shadow-lg mb-4 mx-auto group-hover:shadow-red-600/50 transition-shadow"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon size={28} />
                      </motion.div>
                      
                      {/* Title */}
                      <h5 className="text-lg font-bold text-black text-center group-hover:text-red-600 transition-colors mb-3">
                        {item.title}
                      </h5>
                      
                      {/* Animated underline */}
                      <motion.div
                        className="h-0.5 bg-gradient-to-r from-red-600 to-black mx-auto"
                        initial={{ width: 0 }}
                        whileHover={{ width: '60%' }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Data point indicators */}
                      <div className="flex justify-center gap-1 mt-4">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-red-600 rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 1, 0.3]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-12 h-12 opacity-10"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <item.icon className="w-full h-full text-red-600" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ STAGE 4 — OPTIMIZE & GROW - COMPLETELY NEW DESIGN */}
      <section id="stage-4" className="w-full py-20 bg-gradient-to-br from-slate-50 via-white to-red-50/30 relative overflow-hidden">
        {/* Animated Background - Tech Network Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Blockchain chain links */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-10">
            {[...Array(8)].map((_, i) => (
              <motion.rect
                key={`chain-${i}`}
                x={`${10 + i * 12}%`}
                y={`${20 + (i % 3) * 25}%`}
                width="60"
                height="30"
                rx="5"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1, 0.8],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </svg>
          
          {/* IoT connection dots */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`iot-${i}`}
              className="absolute w-2 h-2 bg-red-600 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
          
          {/* Connection lines between IoT dots */}
          <svg className="absolute inset-0 w-full h-full opacity-5">
            {[...Array(12)].map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = x1 + (Math.random() - 0.5) * 20;
              const y2 = y1 + (Math.random() - 0.5) * 20;
              return (
                <motion.line
                  key={`conn-${i}`}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="#000"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              );
            })}
          </svg>
          
          {/* Floating tech icons */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`tech-${i}`}
              className="absolute text-4xl opacity-5"
              style={{
                left: `${15 + i * 15}%`,
                top: `${10 + (i % 2) * 40}%`
              }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 15, -15, 0]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7
              }}
            >
              {['⛓️', '🌐', '🔗', '📡', '💫', '🚀'][i]}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left: Typography */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Vertical accent line */}
                  <motion.div
                    className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-black to-red-700"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none mb-4 pl-8">
                    OPTIMIZE
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
                      & GROW
                    </span>
                  </h2>
                  
                  {/* Accent underline */}
                  <motion.div
                    className="w-40 h-1.5 bg-gradient-to-r from-red-600 via-black to-red-700 mt-6 ml-8 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 160 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </motion.div>
                
                <motion.p 
                  className="text-xl text-slate-600 max-w-xl mt-6 pl-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Emerging Technologies
                </motion.p>
              </div>
              
              {/* Right: Growth Acceleration Visualization */}
              <div className="lg:col-span-5 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative mx-auto w-80 h-80"
                >
                  {/* Ascending growth bars */}
                  <div className="absolute inset-0 flex items-end justify-center gap-3 px-8 pb-12">
                    {[
                      { height: 120, delay: 0, icon: Bitcoin },
                      { height: 150, delay: 0.1, icon: Network },
                      { height: 180, delay: 0.2, icon: Cpu },
                      { height: 210, delay: 0.3, icon: Zap },
                      { height: 240, delay: 0.4, icon: Globe },
                      { height: 270, delay: 0.5, icon: Radio }
                    ].map((bar, i) => (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center relative"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: bar.delay }}
                        style={{ transformOrigin: 'bottom' }}
                      >
                        {/* Bar */}
                        <motion.div
                          className="w-10 bg-gradient-to-t from-red-600 via-black to-red-700 border-2 border-white/30 shadow-lg relative"
                          style={{ height: bar.height }}
                          animate={{
                            boxShadow: [
                              "0 0 10px rgba(220, 38, 38, 0.3)",
                              "0 0 25px rgba(220, 38, 38, 0.6)",
                              "0 0 10px rgba(220, 38, 38, 0.3)"
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        >
                          {/* Animated segments */}
                          {[...Array(Math.floor(bar.height / 30))].map((_, j) => (
                            <motion.div
                              key={j}
                              className="absolute w-full h-px bg-white/20"
                              style={{ bottom: j * 30 }}
                              animate={{
                                opacity: [0.2, 0.6, 0.2]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: j * 0.2
                              }}
                            />
                          ))}
                        </motion.div>
                        
                        {/* Icon on top */}
                        <motion.div
                          className="absolute -top-10 w-8 h-8 bg-gradient-to-br from-red-600 to-black border-2 border-white/30 flex items-center justify-center shadow-lg"
                          animate={{
                            y: [0, -6, 0]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        >
                          <bar.icon size={16} className="text-white" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Growth trend line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <motion.path
                      d="M 60 200 L 110 170 L 160 140 L 210 110 L 260 80 L 310 50"
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="3"
                      strokeLinecap="square"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Data points at intersections */}
                    {[{
                      x: 60, y: 200
                    }, {
                      x: 110, y: 170
                    }, {
                      x: 160, y: 140
                    }, {
                      x: 210, y: 110
                    }, {
                      x: 260, y: 80
                    }, {
                      x: 310, y: 50
                    }].map((point, i) => (
                      <motion.rect
                        key={i}
                        x={point.x - 4}
                        y={point.y - 4}
                        width="8"
                        height="8"
                        fill="#000"
                        stroke="#dc2626"
                        strokeWidth="2"
                        initial={{ width: 8, height: 8, opacity: 0.7 }}
                        animate={{
                          width: [8, 12, 8],
                          height: [8, 12, 8],
                          x: [point.x - 4, point.x - 6, point.x - 4],
                          y: [point.y - 4, point.y - 6, point.y - 4],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </svg>
                  
                  {/* Rising arrow indicator */}
                  {/* <motion.div
                    className="absolute top-8 right-8"
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-black border-2 border-white/30 flex items-center justify-center shadow-xl">
                      <TrendingUp size={28} className="text-white" />
                    </div>
                  </motion.div> */}
                  
                  {/* Animated data streams */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={`stream-${i}`}
                      className="absolute w-1 h-3 bg-red-600"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        bottom: '15%'
                      }}
                      animate={{
                        y: [0, -200],
                        opacity: [0, 1, 0],
                        scaleY: [1, 2, 1]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                  
                  {/* Base platform */}
                  <div className="absolute bottom-8 left-12 right-12 h-2 bg-gradient-to-r from-red-600 via-black to-red-700 shadow-lg"></div>
                  
                  {/* Glowing effect */}
                  <motion.div
                    className="absolute -inset-8 bg-gradient-to-t from-red-600/20 via-transparent to-black/20 blur-3xl -z-10"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Technology Cards - Split Design */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blockchain Card */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group perspective-1000"
            >
              <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border-2 border-slate-200 hover:border-red-600 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-600/20 overflow-hidden">
                {/* Animated blockchain pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {[...Array(5)].map((_, i) => (
                      <motion.rect
                        key={i}
                        x={10 + i * 18}
                        y={30 + (i % 2) * 20}
                        width="15"
                        height="10"
                        rx="2"
                        fill="#dc2626"
                        animate={{
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </svg>
                </div>
                
                {/* Header with animated icon */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-red-600 to-black rounded-2xl flex items-center justify-center text-white shadow-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Bitcoin size={32} />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-black text-black group-hover:text-red-600 transition-colors">Blockchain Solutions</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-transparent mt-2"></div>
                  </div>
                </div>
                
                {/* Feature list with chain link animation */}
                <div className="space-y-4 relative z-10">
                  {[
                    "Smart Contracts",
                    "DeFi Applications",
                    "NFT Platforms",
                    "Supply Chain Tracking",
                    "Decentralized Systems"
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-red-600 transition-all duration-300 group/item cursor-pointer"
                    >
                      {/* Chain link icon */}
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-6 h-3 border-2 border-white rounded-sm"></div>
                      </motion.div>
                      
                      <span className="text-slate-700 font-semibold group-hover/item:text-red-600 transition-colors">
                        {item}
                      </span>
                      
                      {/* Arrow appears on hover */}
                      <motion.div
                        className="ml-auto opacity-0 group-hover/item:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ArrowRight className="w-5 h-5 text-red-600" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-black to-red-700"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </div>
            </motion.div>

            {/* IoT Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group perspective-1000"
            >
              <div className="relative bg-gradient-to-br from-black via-slate-900 to-black rounded-3xl p-8 border-2 border-red-600/30 hover:border-red-600 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-600/30 overflow-hidden">
                {/* Animated network pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {[...Array(6)].map((_, i) => (
                      <motion.circle
                        key={i}
                        cx={20 + (i % 3) * 30}
                        cy={20 + Math.floor(i / 3) * 40}
                        r="4"
                        fill="#dc2626"
                        initial={{ r: 4, opacity: 0.3 }}
                        animate={{
                          r: [3, 6, 3],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </svg>
                </div>
                
                {/* Header with animated icon */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center text-white shadow-xl"
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Radio size={32} />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-red-400 transition-colors">Internet of Things</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-transparent mt-2"></div>
                  </div>
                </div>
                
                {/* Feature list - Same as Blockchain but with IoT icons and colors */}
                <div className="space-y-4 relative z-10 hidden md:block">
                  {[
                    { icon: Car, text: "Connected Vehicles" },
                    { icon: Factory, text: "Industrial IoT" },
                    { icon: Activity, text: "Healthcare" },
                    { icon: Gauge, text: "Monitoring" },
                    { icon: Network, text: "Sensor Networks" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-600 transition-all duration-300 group/item cursor-pointer"
                    >
                      {/* IoT icon */}
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-red-600 to-black rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      
                      <span className="text-white font-semibold group-hover/item:text-red-400 transition-colors">
                        {item.text}
                      </span>
                      
                      {/* Arrow appears on hover */}
                      <motion.div
                        className="ml-auto opacity-0 group-hover/item:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ArrowRight className="w-5 h-5 text-red-600" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Feature grid - Mobile view only */}
                <div className="grid grid-cols-2 gap-3 relative z-10 md:hidden">
                  {[
                    { icon: Home, text: "Smart Homes" },
                    { icon: Car, text: "Connected Vehicles" },
                    { icon: Factory, text: "Industrial IoT" },
                    { icon: Activity, text: "Healthcare" },
                    { icon: Gauge, text: "Monitoring" },
                    { icon: Network, text: "Sensor Networks" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onTouchStart={() => {
                        setTouchedIoT(idx);
                      }}
                      className={`flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 group/item cursor-pointer ${touchedIoT === idx ? 'border-red-600 shadow-lg' : 'border-white/10 hover:border-red-600'}`}
                    >
                      {/* Icon with pulse */}
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-red-600 to-black rounded-lg flex items-center justify-center flex-shrink-0 relative"
                        whileTap={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                        {/* Pulse ring */}
                        <motion.div
                          className="absolute inset-0 border-2 border-red-600 rounded-lg"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [1, 0, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.2
                          }}
                        />
                      </motion.div>
                      
                      <span className={`text-white font-semibold text-sm transition-colors ${touchedIoT === idx ? 'text-red-400' : 'group-hover/item:text-red-400'}`}>
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-white to-red-700"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8️⃣ KNOWLEDGE EMPOWERMENT */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <GraduationCap className="w-16 h-16 text-red-600" />
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                We Don't Just Deliver — We Teach
              </h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto"
            >
              Every system we build includes comprehensive training, detailed documentation, and hands-on guidance 
              so your team can confidently operate and scale it for long-term success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 9️⃣ CORESEC ACADEMY */}
      <section className="w-full py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Learn. Build. Grow. — <span className="text-red-500">CoreSec Academy</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              For students, professionals, and organizations who want to learn the same technologies 
              we use to build real systems, CoreSec offers a dedicated learning platform.
            </p>
          </motion.div>

          {/* Audience Split */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: GraduationCap,
                title: "Students",
                description: "Start Your Career",
                color: "from-red-500 to-red-600"
              },
              {
                icon: Users,
                title: "Professionals",
                description: "Upgrade Skills",
                color: "from-red-600 to-red-700"
              },
              {
                icon: Building2,
                title: "Institutions",
                description: "Train Teams",
                color: "from-red-700 to-red-800"
              }
            ].map((audience, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={() => {
                  setTouchedAudience(idx);
                }}
                className={`bg-gradient-to-br from-slate-900 to-black border-2 border-red-600 rounded-3xl p-8 text-center transition-all ${touchedAudience === idx ? 'shadow-2xl shadow-red-600/30' : 'hover:shadow-2xl'}`}
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${audience.color} rounded-2xl flex items-center justify-center ${touchedAudience === idx ? 'scale-110' : ''}`}>
                  <audience.icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{audience.title}</h3>
                <p className="text-gray-400">{audience.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Topics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {["AI & ML", "Cybersecurity", "Software Development", "Mobile App Development", "Advance Computer Application"].map((topic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onTouchStart={() => {
                  setTouchedTopic(idx);
                }}
                className={`bg-white/10 backdrop-blur-sm border border-red-600 rounded-xl p-6 text-center transition-colors ${touchedTopic === idx ? 'bg-red-600/20 shadow-lg' : 'hover:bg-red-600/20'}`}
              >
                <BookOpen className={`w-8 h-8 text-red-500 mx-auto mb-3 ${touchedTopic === idx ? 'scale-110' : ''}`} />
                <span className="font-semibold">{topic}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-xl"
            >
              Visit CoreSec Academy →
            </a>
          </motion.div>
        </div>
      </section>

      {/* 🔟 FINAL CTA */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Ready to Build Your Intelligent System?
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Let's transform your vision into reality with cutting-edge technology and expert guidance
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate('/contact');
                }}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 text-lg"
              >
                Start Your Project
                <Rocket size={24} />
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact?consultation=true")}
                className="bg-transparent hover:bg-red-50 text-red-600 font-bold py-5 px-10 rounded-full border-2 border-red-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                Talk to an Expert
                <ArrowRight size={24} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
