import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Zap, TrendingUp, Award, CheckCircle } from 'lucide-react';
import Header from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Sunsine Clinic - AI Business OS",
    category: "AI Automation",
    description: "Complete digital transformation with AI-powered patient management and automated workflows",
    image: "/dist/sunsine_ai.png",
    client: "Sunsine Clinic",
    industry: "Healthcare",
    duration: "8 weeks",
    technologies: ["AI/ML", "React", "Node.js", "PostgreSQL"],
    results: [
      { metric: "85%", label: "Time Saved" },
      { metric: "3x", label: "Patient Growth" },
      { metric: "₹50K+", label: "Monthly Savings" }
    ],
    testimonial: "CoreSec transformed our clinic operations completely.",
    featured: true
  },
  {
    id: 2,
    title: "Fitness Power Gym - Social Media AI",
    category: "Social Media Automation",
    description: "AI-powered social media automation that grew membership by 220%",
    image: "/dist/fitness_case_study.png",
    client: "Fitness Power Gym",
    industry: "Fitness & Health",
    duration: "4 weeks",
    technologies: ["AI Content Generation", "Automation APIs", "Analytics"],
    results: [
      { metric: "220%", label: "Engagement Growth" },
      { metric: "19", label: "New Members" },
      { metric: "₹12K", label: "Monthly Saved" }
    ],
    testimonial: "Our social media is now fully automated and performing better than ever.",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-featured online shopping platform with payment integration and inventory management",
    image: "https://images.unsplash.com/photo-1649694902788-9ccda3aa1d78?w=1080&auto=format&fit=crop",
    client: "RetailMax Inc.",
    industry: "Retail",
    duration: "12 weeks",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    results: [
      { metric: "300%", label: "Sales Increase" },
      { metric: "50K+", label: "Monthly Users" },
      { metric: "99.9%", label: "Uptime" }
    ],
    testimonial: "The platform exceeded our expectations in every way.",
    featured: false
  },
  {
    id: 4,
    title: "FinTech Mobile App",
    category: "Mobile Development",
    description: "Secure banking app with real-time transactions and advanced fraud detection",
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=1080&auto=format&fit=crop",
    client: "SecureBank",
    industry: "Finance",
    duration: "16 weeks",
    technologies: ["React Native", "Firebase", "AI/ML", "Biometrics"],
    results: [
      { metric: "1M+", label: "Downloads" },
      { metric: "4.8★", label: "Rating" },
      { metric: "0", label: "Security Breaches" }
    ],
    testimonial: "Best-in-class security and user experience.",
    featured: false
  },
  {
    id: 5,
    title: "AI Analytics Dashboard",
    category: "AI & Data Analytics",
    description: "Real-time business intelligence platform with predictive analytics and ML insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&auto=format&fit=crop",
    client: "DataCorp Solutions",
    industry: "Technology",
    duration: "10 weeks",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
    results: [
      { metric: "40%", label: "Better Insights" },
      { metric: "Real-time", label: "Processing" },
      { metric: "85%", label: "Accuracy" }
    ],
    testimonial: "Game-changing insights that transformed our decision-making.",
    featured: false
  },
  {
    id: 6,
    title: "Cloud Infrastructure Migration",
    category: "Cloud & DevOps",
    description: "Complete cloud migration from on-premise to AWS with auto-scaling",
    image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?w=1080&auto=format&fit=crop",
    client: "TechGlobal Corp",
    industry: "Enterprise",
    duration: "6 weeks",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    results: [
      { metric: "60%", label: "Cost Reduction" },
      { metric: "10x", label: "Scalability" },
      { metric: "0", label: "Downtime" }
    ],
    testimonial: "Seamless migration with incredible results.",
    featured: false
  }
];

const categories = ["All", "AI Automation", "Web Development", "Mobile Development", "Cloud & DevOps", "AI & Data Analytics"];

export default function Portfolio() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [touchedProject, setTouchedProject] = useState(null);
  const [touchedBenefit, setTouchedBenefit] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(selectedCategory));

  return (
    <div className="scroll-smooth bg-white text-slate-900 font-display">
      <Header />

      {/* 1️⃣ HERO SECTION - Premium Introduction with Infinite Animations */}
      <section className="relative w-full py-2 md:py-4 bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating White Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-3xl"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
                opacity: 0
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight
                ],
                scale: [0.5, 1.5, 0.5],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: `${Math.random() * 300 + 200}px`,
                height: `${Math.random() * 300 + 200}px`
              }}
            />
          ))}
        </div>

        {/* Rising White Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 10,
                opacity: 0
              }}
              animate={{
                y: -window.innerHeight - 100,
                opacity: [0, 1, 1, 0],
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Pulsing White Light Beams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`beam-${i}`}
              className="absolute w-px h-96 bg-gradient-to-b from-transparent via-white/20 to-transparent"
              initial={{
                x: (i / 5) * window.innerWidth,
                y: -200,
                opacity: 0,
                rotate: 90
              }}
              animate={{
                y: window.innerHeight + 200,
                opacity: [0, 0.5, 0],
                rotate: [90, 110, 90]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 1.6,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Rotating Ring Elements - White */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-[800px] h-[800px] border border-white/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] border border-white/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] border border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                boxShadow: [
                  "0 0 20px rgba(220, 38, 38, 0.3)",
                  "0 0 40px rgba(220, 38, 38, 0.6)",
                  "0 0 20px rgba(220, 38, 38, 0.3)"
                ]
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.2 },
                scale: { duration: 0.6, delay: 0.2 },
                rotate: { duration: 0.6, delay: 0.2 },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 backdrop-blur-sm border-2 border-red-500/50 rounded-full px-8 py-4 mb-8 shadow-2xl"
            >
              <Award className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-sm tracking-wide">AWARD-WINNING PROJECTS</span>
            </motion.div>

            {/* Main Headline with Glow Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight relative"
            >
              <span className="relative z-10">Our Portfolio of</span>
              <br />
              <motion.span
                className="relative z-10 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Excellence & Innovation
              </motion.span>
            </motion.h1>

            {/* Subheadline with Shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              />
              <span className="relative z-10">
                Discover how we've transformed businesses worldwide through cutting-edge technology,
                AI-powered automation, and innovative digital solutions.
              </span>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-16"
            > 
              {/* Red Arrow Mark */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="mt-6 flex justify-center"
              >
                <motion.svg
                  className="w-8 h-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{
                    y: [0, 8, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </motion.svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* CSS for Grid Animation */}
        <style>{`
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}</style>
      </section>

      {/* 2️⃣ CATEGORY FILTER */}
      <section className="w-full py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 top-20 z-30 bg-white/95 backdrop-blur-sm py-3 -mx-6 px-6 rounded-xl border border-slate-200 shadow-lg"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ ALL PROJECTS GRID */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              All Client Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every project tells a story of innovation and success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  setTouchedProject(project.id);
                }}
                className={`group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-slate-200 ${touchedProject === project.id ? 'shadow-2xl' : 'hover:shadow-2xl'}`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${touchedProject === project.id ? 'scale-110' : 'group-hover:scale-110'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${touchedProject === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                  
                  {/* Industry Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-2 py-1 rounded-full text-xs font-bold">
                      {project.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Category */}
                  <div className="text-xs font-bold text-red-600 uppercase mb-1.5">{project.category}</div>
                  
                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-1">{project.title}</h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-xs mb-3 line-clamp-2 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-base font-black text-slate-900">{result.metric}</div>
                        <div className="text-xs text-slate-500 truncate">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ WHY CHOOSE US SECTION */}
      <section className="w-full py-2 bg-gradient-to-br bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              Why Leading Businesses Choose CoreSec
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We don't just build software — we deliver transformative results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Proven Track Record",
                desc: "Multiple successful projects across industries",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Zap,
                title: "Cutting-Edge Technology",
                desc: "Latest AI, ML, and automation tools",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Certified professionals with deep expertise",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: TrendingUp,
                title: "Measurable Results",
                desc: "Data-driven outcomes you can track",
                color: "from-red-500 to-pink-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  setTouchedBenefit(index);
                }}
                className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${touchedBenefit === index ? 'border-white/30 shadow-xl' : 'border-white/10 hover:border-white/30'}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg ${touchedBenefit === index ? 'scale-110' : ''}`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ FINAL CTA SECTION */}
      <section className="relative w-full py-12 bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
            animation: 'ctaPulse 8s ease-in-out infinite'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-48 h-48 bg-red-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-tight">
              Ready to Be Our Next
              <motion.span
                className="inline ml-2 bg-gradient-to-r from-red-200 via-white to-red-200 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Success Story?
              </motion.span>
            </h2>
            <p className="text-base md:text-lg mb-8 leading-relaxed text-red-100 max-w-2xl mx-auto">
              Let's build something extraordinary together. Your dream project starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onTouchStart={(e) => {
                  e.currentTarget.style.backgroundColor = "#f1f5f9";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onClick={() => navigate('/contact')}
                className="bg-white hover:bg-red-50 text-red-700 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 text-base"
              >
                Start Your Project
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* CSS for CTA Animation */}
        <style>{`
          @keyframes ctaPulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.2; }
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
}
