import React, { useState, useEffect } from 'react';
import Header from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function AIMarketing() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [touchedCard, setTouchedCard] = useState(null);
  const [touchedBenefit, setTouchedBenefit] = useState(null);
  const [touchedUseCase, setTouchedUseCase] = useState(null);
  const [touchedStep, setTouchedStep] = useState(null);
  
  // Detect mobile environment at component level
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Progress tracking for Phase 2 AI Processing - Optimized for mobile
  useEffect(() => {
    let animationFrame = null;
    let startDelay = null;
    
    const startProgress = () => {
      // Clear any existing animations
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (startDelay) clearTimeout(startDelay);
      
      setProgress(0);
      setIsProcessing(true);
      
      // Mobile: optimized timing, Desktop: original
      const progressStartTime = isMobile ? 3000 : 2400;
      const progressDuration = isMobile ? 4500 : 5000; // Faster on mobile
      
      startDelay = setTimeout(() => {
        const startTime = performance.now();
        
        // Use requestAnimationFrame for smoother animation
        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progressValue = Math.min((elapsed / progressDuration) * 100, 100);
          
          // Only update state at reasonable intervals to prevent lag
          setProgress(Math.round(progressValue * 10) / 10); // Round to 1 decimal
          
          if (elapsed < progressDuration) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            // Animation complete
            setProgress(100);
            setTimeout(() => {
              setIsProcessing(false);
            }, 300);
          }
        };
        
        animationFrame = requestAnimationFrame(animate);
      }, progressStartTime);
    };
    
    startProgress();
    
    // Reset cycle
    const cycleDuration = isMobile ? 9000 : 8000;
    const cycleInterval = setInterval(() => {
      startProgress();
    }, cycleDuration);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (startDelay) clearTimeout(startDelay);
      clearInterval(cycleInterval);
    };
  }, []);

  return (
    <div className="scroll-smooth bg-white text-slate-900 font-display">
      <Header />

      {/* HERO SECTION */}
      <section className="w-full py-2 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4">
                AI-Powered Automated Social Media Handling System
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-700 mb-4">
                Smart, consistent, and fully automated social media marketing for your business.
              </h2>
              
              <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                Let AI plan your content, design posts, write captions, schedule publishing, and track performance — automatically.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact?socialmedia=true')}
                  onTouchStart={(e) => {
                    e.currentTarget.style.backgroundColor = '#dc2626';
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start Automated Social Media Setup
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>

            {/* Right - Content → AI → Viral Explosion Animation (Enhanced) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] flex items-center justify-center overflow-hidden rounded-xl"
            >
              {/* Enhanced Background with Gradient Mesh */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50 rounded-xl"></div>
              
              {/* Animated Gradient Orbs */}
              <motion.div
                className="absolute top-8 left-8 w-56 h-56 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, 20, 0],
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, -30, 0],
                  y: [0, 20, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Dynamic Grid Pattern */}
              <motion.div 
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.4) 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '40px 40px']
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* PHASE 1: Enhanced Content Cards Sliding In */}
              <div className="absolute inset-0">
                {/* Social Post Card 1 - Instagram Style (Enhanced) */}
                <motion.div
                  className="absolute top-6 left-2 w-48 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-10"
                  initial={{ x: -400, opacity: 0, rotate: -20, scale: 0.7 }}
                  animate={{ 
                    x: [ -400, 0, 0, 0, 0 ],
                    opacity: [ 0, 1, 1, 1, 0 ],
                    rotate: [ -20, -8, -8, -8, -8 ],
                    scale: [ 0.7, 1, 1, 1, 0.85 ]
                  }}
                  transition={{
                    times: [0, 0.12, 0.45, 0.65, 1],
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Card Header with Avatar */}
                  <div className="flex items-center gap-3 p-3 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-[2px]"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full rounded-full bg-white p-[2px]">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <div className="h-2.5 w-24 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full"></div>
                      <div className="h-2 w-16 bg-slate-300 rounded-full mt-1.5"></div>
                    </div>
                    <div className="text-slate-400">•••</div>
                  </div>
                  
                  {/* Card Image with Overlay */}
                  <div className="relative h-28 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <span className="text-3xl relative z-10 drop-shadow-lg">📸</span>
                    {/* Heart overlay */}
                    <motion.div
                      className="absolute top-2 right-2 text-red-500"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ❤️
                    </motion.div>
                  </div>
                  
                  {/* Card Actions & Content */}
                  <div className="p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <motion.div 
                          className="w-6 h-6 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white text-xs"
                          whileHover={{ scale: 1.2 }}
                        >
                          ❤️
                        </motion.div>
                        <motion.div 
                          className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs"
                          whileHover={{ scale: 1.2 }}
                        >
                          💬
                        </motion.div>
                        <motion.div 
                          className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-xs"
                          whileHover={{ scale: 1.2 }}
                        >
                          🔁
                        </motion.div>
                      </div>
                      <div className="w-6 h-6 rounded-lg bg-slate-100"></div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-full bg-gradient-to-r from-slate-300 to-slate-200 rounded-full"></div>
                      <div className="h-2 w-4/5 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Social Post Card 2 - LinkedIn Style (Enhanced) */}
                <motion.div
                  className="absolute top-24 right-4 w-52 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-20"
                  initial={{ x: 400, opacity: 0, rotate: 20, scale: 0.7 }}
                  animate={{ 
                    x: [ 400, 0, 0, 0, 0 ],
                    opacity: [ 0, 1, 1, 1, 0 ],
                    rotate: [ 20, 8, 8, 8, 8 ],
                    scale: [ 0.7, 1, 1, 1, 0.85 ]
                  }}
                  transition={{
                    times: [0, 0.12, 0.45, 0.65, 1],
                    duration: 8,
                    repeat: Infinity,
                    delay: 0.25,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3.5,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Card Header */}
                  <div className="flex items-center gap-3 p-3 border-b border-slate-100 bg-gradient-to-r from-blue-50/50 to-white">
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-md"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      in
                    </motion.div>
                    <div className="flex-1">
                      <div className="h-2.5 w-28 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full"></div>
                      <div className="h-2 w-20 bg-slate-300 rounded-full mt-1.5"></div>
                      <div className="h-1.5 w-12 bg-slate-200 rounded-full mt-1"></div>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-3 space-y-2">
                    <div className="space-y-1.5">
                      <div className="h-2 w-full bg-gradient-to-r from-slate-300 to-slate-200 rounded-full"></div>
                      <div className="h-2 w-full bg-gradient-to-r from-slate-200 to-slate-100 rounded-full"></div>
                      <div className="h-2 w-3/4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Card Image */}
                  <div className="relative h-24 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 flex items-center justify-center overflow-hidden mx-3 mb-3 rounded-xl border border-slate-100">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-yellow-400/10"
                      animate={{ opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <span className="text-3xl relative z-10 drop-shadow-md">💼</span>
                  </div>
                  
                  {/* Engagement Bar */}
                  <div className="px-3 pb-3 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <span>👍</span>
                      <span className="font-semibold">247</span>
                    </div>
                    <div className="flex gap-3">
                      <span>42 comments</span>
                      <span>18 shares</span>
                    </div>
                  </div>
                </motion.div>

                {/* Social Post Card 3 - Twitter/X Style (Enhanced) */}
                <motion.div
                  className="absolute bottom-10 left-8 w-44 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-15"
                  initial={{ y: 250, opacity: 0, scale: 0.7 }}
                  animate={{ 
                    y: [ 250, 0, 0, 0, 0 ],
                    opacity: [ 0, 1, 1, 1, 0 ],
                    scale: [ 0.7, 1, 1, 1, 0.85 ],
                    rotate: [0, 0, 0, 0, 0]
                  }}
                  transition={{
                    times: [0, 0.12, 0.45, 0.65, 1],
                    duration: 8,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="p-3">
                    <div className="flex items-start gap-3">
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-md flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        𝕏
                      </motion.div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-20 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full"></div>
                          <div className="h-2 w-16 bg-slate-300 rounded-full"></div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-2 w-full bg-gradient-to-r from-slate-300 to-slate-200 rounded-full"></div>
                          <div className="h-2 w-full bg-gradient-to-r from-slate-200 to-slate-100 rounded-full"></div>
                          <div className="h-2 w-1/2 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full"></div>
                        </div>
                        {/* Engagement Icons */}
                        <div className="flex items-center justify-between pt-1">
                          <motion.div 
                            className="flex items-center gap-1 text-slate-400 hover:text-red-500 transition-colors"
                            whileHover={{ scale: 1.2 }}
                          >
                            <span className="text-sm">❤️</span>
                            <span className="text-xs font-semibold">1.2K</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-1 text-slate-400 hover:text-green-500 transition-colors"
                            whileHover={{ scale: 1.2 }}
                          >
                            <span className="text-sm">🔁</span>
                            <span className="text-xs font-semibold">342</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* PHASE 2: AI Processing - Linear Digital Progress Bar */}
              <motion.div
                className="absolute inset-0 z-30 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [ 0, 0, 1, 1, 0 ]
                }}
                transition={{
                  times: [0, 0.25, 0.35, 0.85, 1],
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Dark Navy Blue Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-navy-950"></div>
                
                {/* Subtle Grid Pattern */}
                <motion.div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                  }}
                  animate={{
                    backgroundPosition: ['0px 0px', '50px 50px']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Glowing Orbs */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1.3, 1, 1.3],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />

                {/* Central Processing Container */}
                <div className="relative z-10 w-full max-w-2xl px-8">
                  {/* AI Processing Header */}
                  <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ 
                      opacity: [0, 0, 1, 1, 0],
                      y: [-20, -20, 0, 0, -20]
                    }}
                    transition={{
                      times: [0, 0.25, 0.35, 0.85, 1],
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  >
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="text-3xl"
                      >
                        ⚙️
                      </motion.div>
                      <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        AI Neural Processing
                      </h3>
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="text-3xl"
                      >
                        ⚙️
                      </motion.div>
                    </div>
                    <motion.p
                      className="text-blue-300 text-sm md:text-base font-semibold"
                      animate={{ opacity: isProcessing ? [0.5, 1, 0.5] : 1 }}
                      transition={{ duration: 1, repeat: isProcessing ? Infinity : 0 }}
                    >
                      {progress >= 100 ? '✓ Processing Complete!' : 'Analyzing and optimizing your content...'}
                    </motion.p>
                  </motion.div>

                  {/* Main Progress Bar Container */}
                  <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 shadow-2xl">
                    {/* Progress Percentage */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-300 text-sm font-semibold">Processing Status</span>
                      <motion.span
                        className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono"
                        animate={{ 
                          opacity: isProcessing ? [0.7, 1, 0.7] : 1,
                          scale: progress >= 100 ? [1, 1.2, 1] : 1
                        }}
                        transition={{ 
                          opacity: { duration: 0.5, repeat: isProcessing ? Infinity : 0 },
                          scale: { duration: 0.3 }
                        }}
                      >
                        {progress.toFixed(1)}%
                      </motion.span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="relative h-6 bg-slate-800 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-inner">
                      {/* Animated Gradient Progress Fill - Optimized */}
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
                          willChange: 'width' // GPU acceleration hint
                        }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{
                          type: "tween",
                          ease: "easeOut",
                          duration: 0.05 // Minimal delay for instant response
                        }}
                      >
                        {/* Shimmer Effect - Only on desktop for performance */}
                        {!isMobile && (
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'
                            }}
                            animate={{
                              x: ['-100%', '100%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        )}
                      </motion.div>
                      
                      {/* Progress Glow - Simplified */}
                      <motion.div
                        className="absolute top-0 h-full w-2 bg-white/50 blur-sm"
                        style={{
                          left: `calc(${progress}% - 4px)`,
                          willChange: 'left, opacity' // GPU acceleration
                        }}
                        animate={{
                          opacity: isProcessing ? [0.5, 1, 0.5] : 0
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: isProcessing ? Infinity : 0
                        }}
                      />
                    </div>

                    {/* Processing Metrics */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-cyan-400 text-xs font-semibold mb-1">Content Analysis</div>
                        <motion.div 
                          className="text-white font-bold text-sm"
                          animate={{ opacity: progress > 20 ? 1 : 0.3 }}
                        >
                          {progress > 20 ? '✓' : '○'}
                        </motion.div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 text-xs font-semibold mb-1">AI Optimization</div>
                        <motion.div 
                          className="text-white font-bold text-sm"
                          animate={{ opacity: progress > 60 ? 1 : 0.3 }}
                        >
                          {progress > 60 ? '✓' : '○'}
                        </motion.div>
                      </div>
                      <div className="text-center">
                        <div className="text-purple-400 text-xs font-semibold mb-1">Ready to Post</div>
                        <motion.div 
                          className="text-white font-bold text-sm"
                          animate={{ opacity: progress >= 100 ? 1 : 0.3 }}
                        >
                          {progress >= 100 ? '✓' : '○'}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Decorations - Optimized for mobile */}
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={`dot-${i}`}
                        className="w-2 h-2 rounded-full bg-blue-400"
                        animate={isMobile && isProcessing ? {
                          opacity: [0.5, 1, 0.5]
                        } : isProcessing ? {
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5]
                        } : {}}
                        transition={{
                          duration: 1.5,
                          repeat: isProcessing ? Infinity : 0,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="w-full py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-tight">
              Why Most Businesses Struggle With Social Media Marketing
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: "⏰", title: "No time", desc: "Manual work takes hours out of your busy schedule." },
                { icon: "❓", title: "Uncertain Content", desc: "Guesswork instead of data-backed content planning." },
                { icon: "💳", title: "Expensive Agencies", desc: "High monthly retainers that eat your marketing budget." },
                { icon: "📅", title: "Inconsistent Posting", desc: "Missing days or weeks kills your algorithm reach." },
                { icon: "☹️", title: "Low Engagement", desc: "Content that doesn't resonate with your audience." },
                { icon: "🎨", title: "Poor Design", desc: "Unprofessional visuals that hurt your brand image." }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedCard(`problem-${index}`);
                  }}
                  className={`bg-white border rounded-xl p-5 shadow-sm transition-all duration-300 ${touchedCard === `problem-${index}` ? 'border-red-500 shadow-xl' : 'border-slate-200 hover:border-red-500 hover:shadow-xl'}`}
                >
                  <div className={`text-lg mb-3 transition-transform duration-300 ${touchedCard === `problem-${index}` ? 'scale-110' : ''}`}>{card.icon}</div>
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${touchedCard === `problem-${index}` ? 'text-red-600' : 'text-slate-900'}`}>{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="bg-slate-200 rounded-xl p-3">
              <img
                src="/assets/business_struggle.png"
                alt="Businessman"
                className="w-[320px] h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS OUR AI-POWERED SOCIAL MEDIA AUTOMATION SYSTEM */}
      <section className="w-full py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-12">
              What Is Our AI-Powered Social Media Automation System?
            </h2>
          </motion.div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: "💡",
                title: "AI Content Strategy",
                desc: "Deep niche analysis to create a roadmap tailored to your goals."
              },
              {
                icon: "✨",
                title: "Automatic Creation",
                desc: "Graphics, videos, and copy generated by advanced AI models."
              },
              {
                icon: "📢",
                title: "Smart Publishing",
                desc: "Hands-free scheduling at optimal engagement times."
              },
              {
                icon: "📈",
                title: "AI Performance",
                desc: "System learns from data to optimize every future post."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-start text-left max-w-xs"
              >
                <div className="bg-red-100 text-red-500 p-2 rounded-lg mb-3 text-lg">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div className="text-white max-w-xl">
              <h3 className="text-xl font-bold mb-2">
                The Complete Hands-Free Experience
              </h3>
              <p className="text-white/90">
                From planning to posting, our system replaces an entire marketing department for a fraction of the cost.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
              onClick={() => navigate('/contact?socialmedia=true')}
              className="bg-white text-red-600 font-semibold px-6 py-3 rounded-xl shadow hover:scale-105 transition transform"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* HOW OUR SOCIAL MEDIA AUTOMATION WORKS */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              How Our Social Media Automation Works
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Five simple steps to automated social media success
            </p>
          </motion.div>

          {/* Process Steps - Horizontal Flow with Connected Boxes */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {[
                { id: 1, icon: "💡", title: "Strategy", desc: "AI analyzes your business and goals" },
                { id: 2, icon: "✏️", title: "Creation", desc: "Content designed by AI models" },
                { id: 3, icon: "📅", title: "Scheduling", desc: "Auto-publish at optimal times" },
                { id: 4, icon: "👁️", title: "Tracking", desc: "Monitor engagement metrics" },
                { id: 5, icon: "🚀", title: "Optimization", desc: "Continuous improvement cycle" }
              ].map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedStep(index);
                  }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Icon Circle with Pulse Effect */}
                  <div className="relative mb-5">
                    {/* Pulse Rings */}
                    <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
                    <div className={`relative w-16 h-16 rounded-full bg-white border-4 flex items-center justify-center shadow-lg transition-all duration-300 ${touchedStep === index ? 'border-red-500 scale-110' : 'border-red-600 hover:border-red-500'}`}>
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    {/* Step Number */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm border-2 border-white">
                      {step.id}
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className={`rounded-xl p-5 border transition-all duration-300 w-full ${touchedStep === index ? 'bg-red-50 border-red-500 shadow-lg' : 'bg-slate-50 border-slate-200 hover:border-red-500 hover:bg-red-50'}`}>
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${touchedStep === index ? 'text-red-600' : 'text-slate-900'}`}>{step.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION - Traditional vs AI Automation */}
      <section className="w-full py-16 md:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              Traditional vs AI-Automation
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* LEFT SIDE - Problems */}
              <div>
                <h3 className="text-xl font-semibold text-slate-400 mb-6">
                  Common Problems
                </h3>

                <ul className="space-y-6">
                  {[
                    "Waiting days for design revisions",
                    "Manually posting every morning",
                    "High overhead costs for agencies",
                    "Inconsistent brand voice"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                      <span className="text-slate-600 text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* RIGHT SIDE - Solutions */}
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-8">
                  CoreSec AI Solution
                </h3>

                <ul className="space-y-6">
                  {[
                    "Instant high-quality content generation",
                    "Fully hands-off auto-scheduling",
                    "90% cheaper than traditional agencies",
                    "Data-driven constant brand growth"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                      <span className="text-slate-700 text-lg font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="w-full py-2 bg-gradient-to-br from-slate-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              What Your Business Gains
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Here's what your business gains from this system
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              {
                icon: "💰",
                title: "Save Time & Money",
                desc: "No need to spend hours on content or pay for expensive marketing agencies.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: "🚀",
                title: "Consistent Growth",
                desc: "Regular posting and engagement increase your brand awareness and trust.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "🤖",
                title: "Fully Automated System",
                desc: "Once set up, the system works on auto-pilot — managing everything for you.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "🎯",
                title: "Targeted Marketing",
                desc: "AI understands your business type and target audience, ensuring every post is relevant.",
                color: "from-red-500 to-red-600"
              },
              {
                icon: "🧾",
                title: "Better Analytics",
                desc: "You get clear reports about what's working and where to improve.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "🪄",
                title: "Professional Brand Image",
                desc: "Your social media will look professional and well-managed, even if you're a small business.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: "🌐",
                title: "24/7 Online Presence",
                desc: "Even when you're busy or sleeping, your business is active online — building visibility continuously.",
                color: "from-teal-500 to-cyan-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={() => {
                  setTouchedBenefit(index);
                }}
                className={`lg:col-span-1 ${index === 6 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''}`}
              >
                <div className={`bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 h-full group overflow-hidden relative ${touchedBenefit === index ? 'border-red-500 shadow-2xl' : 'border-slate-200 hover:border-red-500 hover:shadow-2xl'}`}>
                  {/* Background Gradient Orb */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${benefit.color} rounded-full blur-2xl transition-opacity duration-300 ${touchedBenefit === index ? 'opacity-20' : 'opacity-10 group-hover:opacity-20'}`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-3xl shadow-lg transition-transform duration-300 ${touchedBenefit === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${touchedBenefit === index ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`mt-4 h-1 bg-gradient-to-r ${benefit.color} transition-all duration-500 ${touchedBenefit === index ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT'S IMPORTANT FOR SMBs SECTION */}
      <section className="w-full py-20 bg-gradient-to-br from-slate-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6">
              Why It's So Important for Small & Medium Businesses
            </h2>
            
            {/* Intro Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-600"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Where Your Customers Are</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Social media is no longer optional — it's where your customers are spending their time and attention.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-slate-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⚠️</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">The Challenge</h3>
                    <p className="text-slate-600 leading-relaxed">
                      But small businesses often lack time, budget, or skilled staff to manage it properly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Solution Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white mb-6">
                  <span className="text-4xl">✨</span>
                </div>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  This service is designed exactly for them — to help small and medium businesses grow their online presence, attract customers, and increase sales automatically without hiring a team.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Use Cases - Horizontal Layout */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mb-10"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Perfect For Every Business Type</h3>
              <p className="text-slate-600">See how different businesses benefit</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: "🎓", title: "Coaching Centers", benefit: "Attract new students", color: "from-blue-500 to-cyan-500" },
                { emoji: "☕", title: "Cafés & Restaurants", benefit: "Showcase their offers", color: "from-orange-500 to-yellow-500" },
                { emoji: "💪", title: "Gyms, Salons & Boutiques", benefit: "Promote brand daily", color: "from-pink-500 to-red-500" },
                { emoji: "🚀", title: "Startups & Agencies", benefit: "Look professional online", color: "from-purple-500 to-indigo-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedUseCase(index);
                  }}
                  className="group"
                >
                  <div className={`bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 h-full relative overflow-hidden ${touchedUseCase === index ? 'border-red-300 shadow-2xl' : 'border-slate-200 hover:border-red-300 hover:shadow-2xl'}`}>
                    {/* Top Accent Bar */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
                    
                    {/* Icon */}
                    <div className={`text-6xl mb-4 transition-transform duration-300 ${touchedUseCase === index ? 'scale-125' : 'group-hover:scale-125'}`}>{item.emoji}</div>
                    
                    {/* Content */}
                    <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${touchedUseCase === index ? 'text-red-600' : 'text-slate-900'}`}>{item.title}</h4>
                    <p className="text-slate-600 text-sm mb-4">{item.benefit}</p>
                    
                    {/* Checkmark Badge */}
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-xs font-bold">Ideal Solution</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-slate-200 relative overflow-hidden">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-500/10 to-transparent rounded-tr-full"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-block mb-6">
                  <div className="flex items-center gap-2 text-sm font-bold text-red-600 uppercase tracking-wider mb-2">
                    <span>In Simple Words</span>
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto rounded-full"></div>
                </div>
                
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                  Our system makes social media marketing
                  <span className="block text-2xl md:text-3xl font-black text-slate-900 my-4">
                    Affordable • Automatic • Effective
                  </span>
                  <span className="text-red-600 font-bold text-lg">
                    for every small business.
                  </span>
                </p>

                {/* Final Quote */}
                <div className="mt-8 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 md:p-8 border border-red-200">
                  <p className="text-xl md:text-2xl font-bold text-slate-900 italic flex items-center justify-center gap-3">
                    <span className="text-3xl text-red-600">"</span>
                    You focus on your business — let our AI handle your social media, automatically.
                    <span className="text-3xl text-red-600">"</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="w-full py-16 md:py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Tag Badge */}
              <div className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-lg mb-6 tracking-wide">
                LOCAL SUCCESS STORY
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
                Real Business Example: How Automation Grew a Local Gym
              </h2>

              {/* Stats Grid */}
              <div className="flex gap-12 mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-3xl md:text-4xl font-black text-red-600 mb-2">220%</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Follower Growth</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="text-3xl md:text-4xl font-black text-red-600 mb-2">28</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Posts/Month</div>
                </motion.div>
              </div>

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-base text-slate-600 mb-8 max-w-2xl leading-relaxed italic"
              >
                "Before CoreSec, we posted maybe once a month. Now we have a premium daily presence without touching our phone."
                <span className="block mt-3 font-semibold text-slate-700 not-italic">— Owner, Fitness Power Gym</span>
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/case-studies/fitness-power-gym')}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
              >
                View Full Case Study
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/assets/fitness_case_study.png"
                alt="Fitness AI Automation"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="w-full py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Turn Your Social Media Into an Automated Growth Engine
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-red-100">
              Our AI-Powered Social Media Automation System helps businesses maintain a professional online presence, attract customers, and grow faster — without manual effort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onTouchStart={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1f5f9';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.transform = '';
                }}
                onClick={() => navigate('/contact?socialmedia=true')}
                className="bg-white hover:bg-slate-100 text-red-600 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-2xl flex items-center justify-center gap-2"
              >
                Start AI Social Media Automation
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onTouchStart={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.transform = '';
                }}
                onClick={() => navigate('/contact?consultation=true')}
                className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full border-2 border-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Talk to Our Experts
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}