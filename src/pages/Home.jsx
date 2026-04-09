import Header from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import TechStack from "../components/sections/TechStack";
import ProjectComplexity from "../components/sections/ProjectComplexity";
import { PremiumCoreServices, PremiumClientTrust, PremiumTestimonials, PremiumTrainingCTA } from "../components/sections/PremiumSections";
import Button from "../components/ui/Button";
import { Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Briefcase,
  Building,
  Award,
  AlertCircle,
  CheckCircle2,
  X
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="scroll-smooth bg-white text-slate-900 font-display">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white text-slate-900 pt-2 pb-32 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating gradient orbs */}
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#e60a11]/20 to-orange-500/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              x: [0, -80, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/15 to-purple-500/15 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              x: [0, 60, 0],
              y: [0, -80, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl"
          />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e60a11]/10 text-[#e60a11] text-xs font-bold uppercase tracking-widest border border-[#e60a11]/30 shadow-lg hover:shadow-xl transition-shadow cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e60a11] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e60a11]"></span>
              </span>
              Next-Gen Digital Engineering
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-black leading-[1.1]"
            >
              Engineering Intelligent{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#e60a11] via-red-600 to-orange-600 bg-clip-text text-transparent">Digital Systems</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-[#e60a11]/30 to-orange-500/30 -z-0"
                />
              </span>{" "}
              for the Future
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              From scalable websites and AI-driven applications to cloud infrastructure
              and blockchain ecosystems — CoreSec builds technology that powers growth.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button variant="primary" size="lg" onClick={() => navigate('/services')} className="group">
                <span className="relative z-10">Explore Services</span>
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/contact?consultation=true")} className="border-2 border-slate-300 hover:border-[#e60a11]">
                Book Consultation
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-6 pt-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 + (i * 0.1), duration: 0.4 }}
                    className="w-9 h-9 rounded-full border-2 border-white shadow-md bg-gradient-to-br from-slate-200 to-slate-300"
                  />
                ))}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.4 }}
                  className="w-9 h-9 rounded-full border-2 border-white shadow-md bg-[#e60a11] flex items-center justify-center text-xs font-bold text-white"
                >
                  +5k
                </motion.div>
              </div>
              <div className="text-slate-700">
                <p className="text-xs font-bold">Growing Community</p>
                <p className="text-xs text-slate-500">Join the movement</p>
              </div>
            </motion.div>
          </div>

          <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end">
            {/* Main Interactive Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-full max-w-[440px] z-10 perspective-1000"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                whileTap={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white backdrop-blur-2xl border border-slate-200 p-6 rounded-[2rem] shadow-2xl overflow-hidden group"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e60a11]/20 via-purple-500/10 to-blue-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

                {/* Header: Growth Metric */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex justify-between items-start mb-8"
                >
                  <div>
                    <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-1">Projected Growth</p>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-3xl font-black text-slate-900">+240%</h3>
                      <span className="text-slate-400 text-xs text-left">avg. acceleration</span>
                    </div>
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                    className="px-2.5 py-1 bg-green-500/10 text-green-600 rounded-full text-xs font-bold border border-green-500/20 flex items-center gap-1.5 shadow-lg"
                  >
                    <TrendingUp size={12} /> Rising
                  </motion.div>
                </motion.div>

                {/* Animated Bar Chart */}
                <div className="flex items-end gap-2.5 h-28 mb-6 mt-3">
                  {[35, 45, 40, 60, 55, 75, 100].map((height, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 1.3 + (i * 0.1), duration: 0.6, ease: "easeOut" }}
                      whileHover={{ 
                        background: "linear-gradient(to top, #f97316, #facc15)"
                      }}
                      whileTap={{ 
                        background: "linear-gradient(to top, #f97316, #facc15)"
                      }}
                      className="flex-1 bg-gradient-to-t from-[#e60a11] to-orange-500 rounded-t-lg relative group/bar overflow-hidden hover:from-orange-500 hover:to-yellow-400 transition-all duration-300"
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/20 opacity-0 group-hover/bar:opacity-100 transition-opacity"
                        whileHover={{ opacity: 1 }}
                        whileTap={{ opacity: 1 }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Target Audience Interactive Pathways */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Choose Your Path</p>
                  </div>

                  {/* Student Badge (Primary focus 60%) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 1.02, x: 5 }}
                    className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 p-3 rounded-xl flex items-center gap-3 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer group"
                    style={{ background: "linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent)", borderColor: "rgba(59, 130, 246, 0.2)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(to right, rgba(59, 130, 246, 0.2), transparent)";
                      e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent)";
                      e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.2)";
                    }}
                    onTouchStart={(e) => {
                      e.currentTarget.style.background = "linear-gradient(to right, rgba(59, 130, 246, 0.2), transparent)";
                      e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.4)";
                    }}
                    onTouchEnd={(e) => {
                      e.currentTarget.style.background = "linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent)";
                      e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.2)";
                    }}
                  >
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      whileTap={{ rotate: 10, scale: 1.1 }}
                      className="h-10 w-10 rounded-lg bg-blue-500/20 text-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30"
                    >
                      <GraduationCap size={20} />
                    </motion.div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm flex items-center gap-2">
                        Students & Learners
                        <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-700 text-[9px] rounded-full font-bold">60%</span>
                      </h4>
                      <p className="text-slate-600 text-xs text-left">Master modern tech to launch your career</p>
                    </div>
                  </motion.div>

                  {/* Professional & Institutions Flex (20% each) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {/* Professional */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-3 rounded-xl hover:bg-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer group flex flex-col justify-center relative overflow-hidden"
                      style={{ background: "linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), transparent)", borderColor: "rgba(168, 85, 247, 0.2)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), transparent)";
                        e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), transparent)";
                        e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.2)";
                      }}
                      onTouchStart={(e) => {
                        e.currentTarget.style.background = "linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), transparent)";
                        e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.4)";
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.style.background = "linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), transparent)";
                        e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.2)";
                      }}
                    >
                      <motion.div
                        whileHover={{ rotate: -10, scale: 1.2 }}
                        whileTap={{ rotate: -10, scale: 1.2 }}
                        className="h-9 w-9 rounded-lg bg-purple-500/20 text-purple-600 flex items-center justify-center mb-1.5 shadow-lg"
                      >
                        <Briefcase size={18} />
                      </motion.div>
                      <h4 className="text-slate-900 font-bold text-xs">Professionals</h4>
                      <p className="text-slate-600 text-xs text-left mt-1">Accelerate skill scale</p>
                    </motion.div>

                    {/* Universities */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-bl from-amber-500/10 to-transparent border border-amber-500/20 p-3 rounded-xl hover:bg-amber-500/20 hover:border-amber-500/40 transition-all cursor-pointer group flex flex-col justify-center relative overflow-hidden"
                      style={{ background: "linear-gradient(to bottom left, rgba(245, 158, 11, 0.1), transparent)", borderColor: "rgba(245, 158, 11, 0.2)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "linear-gradient(to bottom left, rgba(245, 158, 11, 0.2), transparent)";
                        e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "linear-gradient(to bottom left, rgba(245, 158, 11, 0.1), transparent)";
                        e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.2)";
                      }}
                      onTouchStart={(e) => {
                        e.currentTarget.style.background = "linear-gradient(to bottom left, rgba(245, 158, 11, 0.2), transparent)";
                        e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.4)";
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.style.background = "linear-gradient(to bottom left, rgba(245, 158, 11, 0.1), transparent)";
                        e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.2)";
                      }}
                    >
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.2 }}
                        whileTap={{ rotate: 10, scale: 1.2 }}
                        className="h-9 w-9 rounded-lg bg-amber-500/20 text-amber-600 flex items-center justify-center mb-1.5 shadow-lg"
                      >
                        <Building size={18} />
                      </motion.div>
                      <h4 className="text-slate-900 font-bold text-xs">Universities</h4>
                      <p className="text-slate-600 text-xs text-left mt-1">Empower the campus</p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Achievement Badges */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -15, 0],
              }}
              transition={{ 
                delay: 2, 
                duration: 0.8,
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -right-4 top-16 bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-2xl z-20 hidden lg:flex items-center gap-3"
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white shadow-inner"></div>
                <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white shadow-inner"></div>
                <div className="w-10 h-10 rounded-full bg-[#e60a11] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-inner">+5k</div>
              </div>
              <div className="text-slate-900 ml-2">
                <p className="text-sm font-bold">Growing Community</p>
                <p className="text-xs text-slate-500 text-left">Join the movement</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ 
                opacity: 1, 
                y: [0, 15, 0],
              }}
              transition={{ 
                delay: 2.2, 
                duration: 0.8,
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              className="absolute -left-8 bottom-32 bg-gradient-to-r from-[#e60a11] to-rose-600 p-4 rounded-2xl shadow-2xl z-20 hidden lg:flex items-center gap-4"
            >
              <div className="bg-white/30 p-2.5 rounded-xl text-white backdrop-blur-sm">
                <Award size={24} />
              </div>
              <div>
                <p className="text-white font-black text-2xl leading-none">94%</p>
                <p className="text-white/90 text-xs font-semibold mt-1 uppercase tracking-wide">Success Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Technology Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <TechStack />
      </motion.div>

      {/* Premium Core Services Section */}
      <PremiumCoreServices />

      {/* Project Complexity Levels */}
      <ProjectComplexity />

      {/* Comparison Section */}
      <section className="w-full bg-[#f3f4f6] py-16 px-6 md:px-16 relative overflow-hidden">
        {/* Decorative background elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-500/15 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-green-500/15 to-transparent rounded-full blur-3xl"
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl md:text-4xl font-extrabold text-slate-900 mb-12"
          >
            Stop Struggling. Start Scaling.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT CARD - PROBLEMS */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-red-50 border border-red-200 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Title */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <AlertCircle className="text-red-500 flex-shrink-0" size={22} />
                <h3 className="text-xl font-bold text-red-600">
                  Common Roadblocks
                </h3>
              </motion.div>

              {/* List */}
              <div className="space-y-6 text-slate-700 text-base leading-relaxed">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <X className="text-red-500 mt-1 flex-shrink-0" size={18} />
                  <p>"Our systems don't talk to each other, leading to data silos."</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <X className="text-red-500 mt-1 flex-shrink-0" size={18} />
                  <p>"Security vulnerabilities are keeping us up at night."</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <X className="text-red-500 mt-1 flex-shrink-0" size={18} />
                  <p>"We spend 60% of our time on manual, repetitive tasks."</p>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT CARD - SOLUTIONS */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-green-50 border border-green-200 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Title */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-3 mb-8"
              >
                <CheckCircle2 className="text-green-600 flex-shrink-0" size={22} />
                <h3 className="text-xl font-bold text-green-700">
                  The CoreSec Solution
                </h3>
              </motion.div>

              {/* List */}
              <div className="space-y-6 text-slate-800 text-base leading-relaxed">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                  <p>Unified AI architecture for 100% data visibility.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                  <p>Military-grade encryption and zero-trust security.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                  <p>Automated workflows that save 40+ hours per week.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Product: AI Business OS */}
      <section className="py-12 px-6 bg-[#0a0505] text-white relative overflow-hidden">
        {/* Animated background effects */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#e60a11]/30 to-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#e60a11] font-bold text-sm uppercase tracking-widest inline-block px-4 py-2 bg-[#e60a11]/10 rounded-full border border-[#e60a11]/30"
            >
              Exclusive Product
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-black"
            >
              CoreSec AI Business OS™
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-400 text-xl leading-relaxed"
            >
              An intelligent operating system for modern businesses that integrates
              AI automation, analytics dashboards, workflow agents, and predictive
              insights into one unified platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="space-y-3 pt-8"
            >
              {[
                "AI Workflow Automation",
                "Agentic AI Systems",
                "Unified Business Dashboard",
                "Predictive Intelligence",
                "Real-time Analytics"
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="text-[#e60a11]" size={20} />
                  </motion.div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" onClick={() => navigate('/ai-business-os')}>
                Explore Product
              </Button>
              <Button variant="white" size="lg" onClick={() => navigate('/contact?demo=true')}>
                Request Demo
              </Button>
            </motion.div>
          </div>

          <div className="bg-gradient-to-br from-[#e60a11]/20 to-transparent rounded-2xl p-8 h-96 flex items-center justify-center">
            <img
              src="/dist/ai.png"
              alt="CoreSec AI Business OS"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Social Content Section */}
      <section className="w-full bg-[#f3f4f6] py-12 px-6 md:px-16 relative overflow-hidden">
        {/* Decorative background elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.12, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT IMAGE CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#e5e7eb] p-6 rounded-3xl shadow-inner"
          >
            <div className="rounded-2xl overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200"
                alt="AI Content"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight"
            >
              Social Content on <br /> Autopilot
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 mt-6 text-lg max-w-xl"
            >
              Our AI-driven automation tools don't just schedule posts—
              they generate high-converting creative content based on
              your unique brand voice.
            </motion.p>

            {/* FEATURES */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 space-y-8"
            >
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ x: 10 }}
                whileTap={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 1.1, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-red-100 text-red-600 p-3 rounded-full flex-shrink-0"
                >
                  <Sparkles size={20} />
                </motion.div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    AI Narrative Generation
                  </h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Transform raw ideas into viral threads and posts across all platforms.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ x: 10 }}
                whileTap={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 1.1, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-red-100 text-red-600 p-3 rounded-full flex-shrink-0"
                >
                  <TrendingUp size={20} />
                </motion.div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Predictive Engagement
                  </h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Optimize posting times and content type for maximum impact.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Case Study Section */}
      <section className="w-full bg-white py-2 px-6 md:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto bg-[#0f0f10] border border-white/10 rounded-[40px] px-10 md:px-16 py-16 flex flex-col lg:flex-row items-center gap-12 shadow-[0_0_80px_rgba(255,0,0,0.05)]"
        >
          {/* LEFT CONTENT */}
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-6"
            >
              Case Study
            </motion.p>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-3xl md:text-4xl font-extrabold leading-tight"
            >
              "Sunshine Family <br /> Clinic"
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed"
            >
              How we transformed a legacy healthcare provider into a digital-first
              powerhouse using custom AI automation.
            </motion.p>

            {/* STATS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-16 mt-10"
            >
              <div>
                <motion.h3 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-white text-3xl font-bold"
                >
                  +35%
                </motion.h3>
                <p className="text-gray-500 text-sm mt-1 uppercase tracking-wide">
                  Patient Renewal
                </p>
              </div>

              <div>
                <motion.h3 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-white text-3xl font-bold"
                >
                  -50%
                </motion.h3>
                <p className="text-gray-500 text-sm mt-1 uppercase tracking-wide">
                  Manual Workload
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <motion.button 
                whileHover={{ x: 10 }}
                whileTap={{ x: 10 }}
                onClick={() => navigate('/case-studies/sunsine-clinic')}
                className="flex items-center gap-2 text-white font-semibold group cursor-pointer"
              >
                Read Full Story
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="flex-1 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md"
            >
              {/* Image container */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative bg-[#0a2540] rounded-[30px] overflow-hidden shadow-2xl"
              >
                <img
                  src="/dist/clinic_home.png"
                  alt="AI Dashboard"
                  className="w-full h-full object-cover opacity-80"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Premium Client Trust Section */}
      <PremiumClientTrust />

      {/* Premium Testimonials Section */}
      <PremiumTestimonials />

      {/* Premium Training CTA Section */}
      <PremiumTrainingCTA />

      {/* Final CTA */}
      <section className="py-12 px-6 bg-[#0a0505] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-7xl font-black">
            Ready to build your next digital product?
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="xl"  onClick={() => navigate("/contact")}>
              Start a Project
            </Button>
            <Button variant="white" size="xl"  onClick={() => navigate("/contact?consultation=true")}>
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
