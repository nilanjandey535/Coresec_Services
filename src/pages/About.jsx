import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Shield, Code, Network, Target, Users, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';
import Header from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const [touchedCard, setTouchedCard] = useState(null);
  const [touchedService, setTouchedService] = useState(null);
  
  return (
    <div className="scroll-smooth bg-white text-slate-900 font-display">
      <Header />

      {/* 1️⃣ HERO SECTION — Brand Introduction */}
      <section className="relative w-full bg-gradient-to-b from-white via-white to-slate-50 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#64748b" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        {/* Floating Hexagons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`hex-${i}`}
              className="absolute"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: 0,
                opacity: 0
              }}
              animate={{
                y: [null, Math.random() * -200],
                rotate: [0, 360],
                opacity: [0, 0.08, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: `${Math.random() * 80 + 60}px`,
                height: `${Math.random() * 80 + 60}px`
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  opacity="0.2"
                />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Pulsing Circles - Reduced from 6 to 3 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              className="absolute rounded-full border-2 border-slate-400"
              initial={{
                x: Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1,
                y: Math.random() * window.innerHeight * 0.6 + window.innerHeight * 0.2,
                scale: 0.5,
                opacity: 0
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0, 0.1, 0],
                rotate: [0, 180]
              }}
              transition={{
                duration: Math.random() * 5 + 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3
              }}
              style={{
                width: `${Math.random() * 150 + 100}px`,
                height: `${Math.random() * 150 + 100}px`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Animated Accent Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-28 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mb-6 origin-left rounded-full"
              />

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Building Intelligent Digital Solutions for the Future
              </h1>
              
              <p className="text-base md:text-lg text-slate-700 mb-5 leading-relaxed font-medium">
                CoreSec is a technology innovation company focused on building powerful software systems, AI-driven automation solutions, and scalable digital platforms that help businesses grow smarter and faster.
              </p>
              
              <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                We combine technology, automation, and intelligent systems to solve real-world business challenges.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(230, 10, 17, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/services')}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
                >
                  Explore Our Services
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 px-8 rounded-full border-2 border-slate-300 transition-all duration-300"
                  onClick={() => navigate('/contact')}
                >
                  Contact Our Team
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side - Logo/Graphic Design */}
            <div className="relative min-h-[500px] flex items-center justify-center">
              {/* Central Platform Base */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, y: 50 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                {/* Glowing Base Platform */}
                <div className="absolute -inset-12 bg-gradient-to-br from-slate-400/20 to-slate-500/20 blur-3xl rounded-full"></div>
                
                {/* Main Platform Circle */}
                <div className="w-36 h-36 bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-2xl shadow-2xl border-4 border-slate-300 flex items-center justify-center relative z-10">
                  {/* Rotating Outer Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-4 border-dashed border-slate-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Inner Content - Business + Tech Icon */}
                  <div className="text-center relative z-10">
                    <motion.div
                      className="text-4xl mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      🏢
                    </motion.div>
                    <motion.div
                      className="text-base font-black text-slate-700 uppercase tracking-wider"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      Business
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Service Modules - Floating Icons */}
              {[
                { 
                  label: 'Web Dev', 
                  angle: 0, 
                  delay: 0.5, 
                  gradient: 'from-blue-500 to-cyan-500',
                  secondaryGradient: 'from-blue-600 to-blue-400'
                },
                { 
                  label: 'AI & Auto', 
                  angle: 45, 
                  delay: 0.7, 
                  gradient: 'from-purple-500 to-pink-500',
                  secondaryGradient: 'from-purple-600 to-pink-400'
                },
                { 
                  label: 'Analytics', 
                  angle: 90, 
                  delay: 0.9, 
                  gradient: 'from-orange-500 to-yellow-500',
                  secondaryGradient: 'from-orange-600 to-yellow-400'
                },
                { 
                  label: 'Cloud', 
                  angle: 135, 
                  delay: 1.1, 
                  gradient: 'from-sky-500 to-blue-600',
                  secondaryGradient: 'from-sky-600 to-blue-400'
                },
                { 
                  label: 'Security', 
                  angle: 180, 
                  delay: 1.3, 
                  gradient: 'from-red-600 to-red-700',
                  secondaryGradient: 'from-red-700 to-red-500'
                },
                { 
                  label: 'Fast', 
                  angle: 225, 
                  delay: 1.5, 
                  gradient: 'from-amber-400 to-orange-500',
                  secondaryGradient: 'from-amber-500 to-orange-400'
                },
                { 
                  label: 'Strategy', 
                  angle: 270, 
                  delay: 1.7, 
                  gradient: 'from-emerald-500 to-green-600',
                  secondaryGradient: 'from-emerald-600 to-green-400'
                },
                { 
                  label: 'Growth', 
                  angle: 315, 
                  delay: 1.9, 
                  gradient: 'from-indigo-500 to-purple-600',
                  secondaryGradient: 'from-indigo-600 to-purple-400'
                }
              ].map((service, i) => {
                const angle = (service.angle * Math.PI) / 180;
                const radius = 200;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={`service-${i}`}
                    className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10"
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    whileInView={{ 
                      x: x, 
                      y: y, 
                      scale: 1, 
                      opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: service.delay }}
                  >
                    {/* Icon Container with Advanced Effects */}
                    <motion.div
                      className="relative w-full h-full flex items-center justify-center"
                      animate={{ 
                        y: [0, -12, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 4 + i * 0.5, 
                        repeat: Infinity, 
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Outer Glow Ring */}
                      <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} blur-2xl opacity-20 rounded-full animate-pulse`}></div>
                      
                      {/* Rotating Outer Ring */}
                      <motion.div
                        className={`absolute -inset-4 border-2 border-dashed bg-gradient-to-r ${service.gradient} rounded-full opacity-50`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      />
                      
                      {/* Middle Decorative Ring */}
                      <motion.div
                        className={`absolute -inset-2 border border-slate-300 rounded-full opacity-30`}
                        animate={{ rotate: -180 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      
                      {/* Main Icon Badge - Hexagonal Shape */}
                      <div className="relative w-14 h-14">
                        {/* Hexagon Background */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                          <defs>
                            <linearGradient id={`grad-${service.label.replace(' ', '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor={service.gradient.includes('blue') ? '#3b82f6' : service.gradient.includes('purple') ? '#a855f7' : service.gradient.includes('orange') ? '#f97316' : service.gradient.includes('sky') ? '#0ea5e9' : service.gradient.includes('red') ? '#dc2626' : service.gradient.includes('amber') ? '#f59e0b' : service.gradient.includes('emerald') ? '#10b981' : '#6366f1'} />
                              <stop offset="100%" stopColor={service.gradient.includes('cyan') ? '#06b6d4' : service.gradient.includes('pink') ? '#ec4899' : service.gradient.includes('yellow') ? '#eab308' : service.gradient.includes('blue-600') ? '#2563eb' : service.gradient.includes('red-500') ? '#ef4444' : service.gradient.includes('orange-400') ? '#fb923c' : service.gradient.includes('green-400') ? '#4ade80' : '#a855f7'} />
                            </linearGradient>
                          </defs>
                          <polygon
                            points="50,2 93.3,25 93.3,75 50,98 6.7,75 6.7,25"
                            fill={`url(#grad-${service.label.replace(' ', '-')})`}
                            stroke="white"
                            strokeWidth="3"
                            className="drop-shadow-xl"
                          />
                        </svg>
                        
                        {/* Icon Content - Centered in Hexagon */}
                        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                          {service.label === 'Web Dev' && (
                            <motion.svg
                              className="w-10 h-10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            >
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                              <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="12" cy="10" r="3" opacity="0.3"/>
                            </motion.svg>
                          )}
                          
                          {service.label === 'AI & Auto' && (
                            <motion.svg
                              className="w-10 h-10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 1, delay: 0.5, type: "spring" }}
                            >
                              <circle cx="12" cy="12" r="3"/>
                              <circle cx="12" cy="12" r="8" opacity="0.2"/>
                              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round"/>
                              <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                            </motion.svg>
                          )}
                          
                          {service.label === 'Analytics' && (
                            <motion.svg
                              className="w-10 h-10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2 12h20" opacity="0.3" strokeLinecap="round"/>
                              <circle cx="12" cy="12" r="9" opacity="0.2"/>
                            </motion.svg>
                          )}
                          
                          {service.label === 'Cloud' && (
                            <motion.svg
                              className="w-10 h-10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              animate={{ y: [0, -2, 0] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 14l-2 2m0 0l-2-2m2 2V8" opacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </motion.svg>
                          )}
                          
                          {service.label === 'Security' && (
                            <motion.svg
                              className="w-10 h-10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="12" cy="12" r="3"/>
                              <path d="M12 9v3m0 3h.01" opacity="0.6" strokeLinecap="round"/>
                            </motion.svg>
                          )}
                          
                          {service.label === 'Fast' && (
                            <motion.svg
                              className="w-10 h-10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 1, delay: 0.5 }}
                            >
                              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="12" cy="12" r="6" opacity="0.2"/>
                            </motion.svg>
                          )}
                          
                          {service.label === 'Strategy' && (
                            <motion.svg
                              className="w-10 h-10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <circle cx="12" cy="12" r="9"/>
                              <circle cx="12" cy="12" r="5" opacity="0.5"/>
                              <circle cx="12" cy="12" r="2"/>
                              <path d="M12 3v18M3 12h18" opacity="0.3" strokeLinecap="round"/>
                            </motion.svg>
                          )}
                          
                          {service.label === 'Growth' && (
                            <motion.svg
                              className="w-10 h-10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ duration: 1.2, delay: 0.5 }}
                            >
                              <path d="M12 2v20M12 22l6-6M12 22L6 16" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 2l6 6M12 2L6 8" opacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="12" cy="12" r="8" opacity="0.2"/>
                            </motion.svg>
                          )}
                        </div>
                      </div>
                      
                      {/* Orbiting Particles */}
                      {[0, 120, 240].map((deg, idx) => (
                        <motion.div
                          key={idx}
                          className={`absolute inset-0 w-1.5 h-1.5 bg-gradient-to-br ${service.gradient} rounded-full`}
                          style={{
                            transform: `rotate(${deg}deg) translateX(36px) rotate(-${deg}deg)`
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.3,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                      
                      {/* Label Below Icon */}
                      <motion.div
                        className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: service.delay + 0.3 }}
                      >
                        <div className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full shadow-lg">
                          {service.label}
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Concentric Orbit Rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-slate-300/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotate: 360 
                }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-4 border-dashed border-slate-400/15 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotate: -360 
                }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulsing Waves */}
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={`wave-${i}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-slate-300/10"
                  initial={{ width: 300, height: 300, opacity: 0 }}
                  animate={{
                    width: 600 + i * 150,
                    height: 600 + i * 150,
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeOut"
                  }}
                />
              ))}

              {/* Additional Floating Elements */}
              {[...Array(3)].map((_, i) => {
                const angle = (i / 3) * Math.PI * 2;
                const radius = 420;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={`floating-${i}`}
                    className="absolute top-1/2 left-1/2 w-7 h-7 -ml-3.5 -mt-3.5"
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    animate={{ 
                      x: x, 
                      y: [y, y - 30, y],
                      scale: 1, 
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 rounded-full shadow-lg"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ WHO WE ARE */}
      <section className="w-full py-12 md:py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Who We Are
            </h2>
            
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <p className="text-base text-slate-700 leading-relaxed mb-5">
                CoreSec was founded with a vision to help businesses leverage modern technologies such as artificial intelligence, automation, and scalable software architecture.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-5">
                We specialize in building intelligent systems that simplify operations, improve efficiency, and unlock growth opportunities for businesses of all sizes.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                From startups to growing companies, CoreSec focuses on delivering solutions that are practical, scalable, and future-ready.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🤖", title: "AI & Automation Solutions", color: "from-blue-500 to-cyan-500" },
                { icon: "💻", title: "Custom Software Development", color: "from-purple-500 to-pink-500" },
                { icon: "📊", title: "Digital Business Systems", color: "from-green-500 to-emerald-500" },
                { icon: "💡", title: "Technology Consulting", color: "from-orange-500 to-red-500" }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    setTouchedCard(`highlight-${index}`);
                  }}
                  className={`bg-white border rounded-xl p-5 shadow-lg transition-all duration-300 ${touchedCard === `highlight-${index}` ? 'border-blue-300 shadow-2xl' : 'border-slate-200 hover:shadow-2xl'}`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-2xl mb-3 shadow-lg ${touchedCard === `highlight-${index}` ? 'scale-110' : ''}`}>
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-slate-900">{card.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ OUR MISSION */}
      <section className="w-full py-2 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Mission PNG Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/mission.png"
                alt="Our Mission - AI Automation Workflow"
                className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-xl"
              />
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              
              <div className="space-y-6">
                <p className="text-base text-slate-700 leading-relaxed">
                  Our mission is to empower businesses with intelligent technology solutions that automate operations, improve efficiency, and unlock sustainable growth.
                </p>
                
                <p className="text-base text-slate-700 leading-relaxed">
                  We aim to simplify complex processes through AI-driven automation, scalable software systems, and innovative digital tools that help organizations perform better every day.
                </p>

                {/* Key Points */}
                <div className="space-y-4 pt-6">
                  {[
                    { icon: Target, text: "Empower businesses with intelligent technology" },
                    { icon: Users, text: "Automate operations and improve efficiency" },
                    { icon: TrendingUp, text: "Unlock sustainable growth opportunities" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <item.icon className="w-6 h-6 text-red-600" />
                      <span className="text-slate-700 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ OUR VISION */}
      <section className="w-full py-12 md:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Our Vision
              </h2>
              
              <div className="space-y-6">
                <p className="text-base text-slate-700 leading-relaxed">
                  Our vision is to become a global technology partner that helps businesses transform into intelligent, automated, and data-driven organizations.
                </p>
                
                <p className="text-base text-slate-700 leading-relaxed">
                  We believe the future of business lies in automation, AI-powered systems, and connected digital ecosystems, and CoreSec is committed to building solutions that shape that future.
                </p>
              </div>
            </motion.div>

            {/* Right - Vision PNG Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <img
                src="/assets/vision.png"
                alt="Our Vision - Future Technology Network"
                className="w-[300px] lg:max-w-md h-[300px] object-cover rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ WHAT WE DO */}
      <section className="w-full py-2 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive technology solutions for modern businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AI Business Automation Systems",
                desc: "Intelligent automation solutions that streamline operations and reduce manual work.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Network,
                title: "Social Media AI Automation",
                desc: "Automated content creation, scheduling, and performance tracking for social platforms.",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: Code,
                title: "Custom Software & Web Development",
                desc: "Tailored software solutions built to meet your specific business requirements.",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: Shield,
                title: "Cloud & DevOps Infrastructure",
                desc: "Scalable cloud infrastructure and deployment pipelines for modern applications.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: TrendingUp,
                title: "Data Analytics & Dashboards",
                desc: "Transform raw data into actionable insights with powerful analytics tools.",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: Shield,
                title: "Blockchain & IoT Systems",
                desc: "Decentralized solutions and connected device ecosystems for next-generation applications.",
                color: "from-slate-600 to-slate-800"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  setTouchedService(index);
                }}
                className={`group ${touchedService === index ? 'touched' : ''}`}
              >
                <div className={`bg-white rounded-xl p-6 shadow-lg border transition-all duration-300 h-full relative overflow-hidden ${touchedService === index ? 'border-red-500 shadow-2xl' : 'border-slate-200 hover:border-red-500 hover:shadow-2xl'}`}>
                  {/* Background Gradient Orb */}
                  <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-2xl transition-opacity duration-300 ${touchedService === index ? 'opacity-20' : 'opacity-10 group-hover:opacity-20'}`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 ${touchedService === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${touchedService === index ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'}`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`mt-6 h-1 bg-gradient-to-r ${service.color} transition-all duration-500 ${touchedService === index ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ OUR APPROACH */}
      <section className="w-full py-12 md:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Our Approach to Building Technology
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: "Step 1",
                    title: "Understand the Problem",
                    desc: "We study your business model, goals, and operational challenges.",
                    icon: SearchIcon
                  },
                  {
                    step: "Step 2",
                    title: "Design Smart Solutions",
                    desc: "Our team designs scalable architectures and automation strategies.",
                    icon: Lightbulb
                  },
                  {
                    step: "Step 3",
                    title: "Build & Implement",
                    desc: "We develop secure, efficient systems tailored to your needs.",
                    icon: Code
                  },
                  {
                    step: "Step 4",
                    title: "Optimize & Improve",
                    desc: "Continuous improvements ensure long-term growth and performance.",
                    icon: TrendingUp
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                      <div className="text-xs font-bold text-red-600 uppercase mb-1">{item.step}</div>
                      <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Technology Workflow Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src="/assets/service_hero.png"
                alt="Technology Workflow Diagram"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7️⃣ WHY BUSINESSES CHOOSE CORESEC */}
      <section className="w-full py-2 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              Why Businesses Choose CoreSec
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            {[
              { 
                title: "Innovative AI-driven solutions",
                gradient: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3"/>
                  </svg>
                )
              },
              { 
                title: "Scalable technology architecture",
                gradient: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="8" height="8" rx="1"/>
                    <rect x="14" y="2" width="8" height="8" rx="1"/>
                    <rect x="2" y="14" width="8" height="8" rx="1"/>
                    <rect x="14" y="14" width="8" height="8" rx="1"/>
                    <path d="M10 6h4M6 10v4M18 10v4M10 18h4" opacity="0.5"/>
                  </svg>
                )
              },
              { 
                title: "Business-focused automation",
                gradient: "from-orange-500 to-red-500",
                bgColor: "bg-orange-50",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                    <circle cx="12" cy="12" r="1" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                title: "Transparent communication",
                gradient: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 9h8M8 13h5" opacity="0.6" strokeLinecap="round"/>
                    <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.3"/>
                  </svg>
                )
              },
              { 
                title: "Long-term support & improvement",
                gradient: "from-indigo-500 to-purple-500",
                bgColor: "bg-indigo-50",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" opacity="0.5" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="1" fill="currentColor"/>
                  </svg>
                )
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  setTouchedCard(`why-${index}`);
                }}
                className={`group relative bg-white border rounded-2xl p-6 text-center transition-all duration-300 overflow-hidden ${
                  touchedCard === `why-${index}` 
                    ? 'shadow-2xl border-red-400' 
                    : 'border-slate-200 hover:shadow-2xl hover:border-red-400'
                }`}
              >
                {/* Background Gradient Orb */}
                <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${card.gradient} rounded-full blur-2xl transition-opacity duration-300 ${
                  touchedCard === `why-${index}` ? 'opacity-20' : 'opacity-0 group-hover:opacity-20'
                }`}></div>
                
                {/* Icon Container */}
                <div className="relative mb-5">
                  <motion.div 
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg transition-all duration-300 ${
                      touchedCard === `why-${index}` ? 'scale-110 rotate-6' : 'group-hover:scale-110 group-hover:rotate-6'
                    }`}
                  >
                    <div className="text-white">
                      {card.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className={`font-bold text-base leading-tight transition-colors duration-300 ${
                  touchedCard === `why-${index}` ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'
                }`}>
                  {card.title}
                </h3>

                {/* Bottom Accent Line */}
                <div className={`mt-5 h-1 bg-gradient-to-r ${card.gradient} rounded-full transition-all duration-500 ${
                  touchedCard === `why-${index}` ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </motion.div>
            ))}
          </div>

          {/* Highlight Line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 text-center"
          >
            <p className="text-xl font-bold">
              ✓ CoreSec focuses not only on technology, but on real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8️⃣ INDUSTRIES WE SUPPORT */}
      <section className="w-full py-12 md:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              Industries We Support
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Empowering businesses across diverse sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { emoji: "🚀", title: "Startups & Tech Companies", desc: "Fast-paced innovation and scalable solutions" },
              { emoji: "💪", title: "Fitness & Health Businesses", desc: "Member management and engagement automation" },
              { emoji: "🎓", title: "Coaching & Education Institutes", desc: "Student acquisition and learning platforms" },
              { emoji: "🛒", title: "Retail & E-commerce", desc: "Online stores and inventory management" },
              { emoji: "💼", title: "Professional Service Firms", desc: "Client management and workflow automation" },
              { emoji: "🏢", title: "Small & Medium Enterprises", desc: "Cost-effective digital transformation" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  setTouchedCard(`industry-${index}`);
                }}
                className={`bg-white rounded-2xl p-8 shadow-lg border transition-all duration-300 ${touchedCard === `industry-${index}` ? 'shadow-2xl border-green-300' : 'border-slate-200 hover:shadow-2xl'}`}
              >
                <div className={`text-5xl mb-4 ${touchedCard === `industry-${index}` ? 'scale-110' : ''}`}>{industry.emoji}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.title}</h3>
                <p className="text-slate-600 text-sm">{industry.desc}</p>
                <div className={`mt-4 flex items-center gap-2 text-green-600 ${touchedCard === `industry-${index}` ? 'scale-105' : ''}`}>
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-xs font-bold">Trusted Partner</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9️⃣ OUR PHILOSOPHY */}
      <section className="w-full py-3 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            {/* Quote Block */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-10 shadow-lg mb-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-2xl md:text-3xl font-bold text-black leading-relaxed mb-6 font-inter">
                  "Technology should not complicate business — it should <span className="text-red-500">simplify</span> it."
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto"
                  >
                    Our Philosophy
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Helper component for Step 1 icon
function SearchIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}
