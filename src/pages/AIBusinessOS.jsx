import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";
import Button from "../components/ui/Button";
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  LayoutGrid,
  Repeat,
  UserPlus,
  Share2,
  TrendingUp,
  Bot, 
  Network, 
  Shield, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Workflow,
  LineChart,
  Award,
  Rocket,
  Star,
  ExternalLink,
  Clock,
  MessageCircle,
  Database,
  Users,
  FileText,
  DollarSign,
  Smile
} from "lucide-react";

export default function AIBusinessOS() {
  const navigate = useNavigate();
  const [touchedCard, setTouchedCard] = useState(null);
  const [touchedTech, setTouchedTech] = useState(null);
  const [touchedFeature, setTouchedFeature] = useState(null);
  const [touchedStat, setTouchedStat] = useState(null);
  const [touchedProblem, setTouchedProblem] = useState(null);
  const [touchedBusinessBenefit, setTouchedBusinessBenefit] = useState(null);
  const [touchedFinancialBenefit, setTouchedFinancialBenefit] = useState(null);
  const [touchedOwnerBenefit, setTouchedOwnerBenefit] = useState(null);

  const features = [
    {
      icon: <Zap size={20} />,
      text: "AI Agents respond instantly to customers",
    },
    {
      icon: <Repeat size={20} />,
      text: "Automated workflows handle repetitive work",
    },
    {
      icon: <LayoutGrid size={20} />,
      text: "Smart dashboards organize business data",
    },
    {
      icon: <UserPlus size={20} />,
      text: "Lead capture systems ensure no opportunities are lost",
    },
    {
      icon: <Share2 size={20} />,
      text: "Integrated tools streamline operations",
    },
    {
      icon: <TrendingUp size={20} />,
        text: "Predictive analytics improve decision making",
    },
  ];

  const businessProblems = [
    {
      number: "01",
      title: "Manual & Repetitive Tasks",
      description: "Employees waste countless hours on data entry, email responses, scheduling, and administrative work that could be automated.",
      impact: "60% of work time wasted",
      color: "from-red-500 to-orange-500"
    },
    {
      number: "02",
      title: "Slow Response Times",
      description: "Customers wait hours or days for responses, leading to frustration, lost sales, and damaged reputation.",
      impact: "40% customer loss rate",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "03",
      title: "Scattered Data & Tools",
      description: "Critical business information is trapped across multiple platforms - CRM, spreadsheets, emails - making it impossible to get a unified view.",
      impact: "3× more errors",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "04",
      title: "Poor Decision Making",
      description: "Without real-time insights and predictive analytics, business decisions are based on gut feelings rather than data-driven intelligence.",
      impact: "70% decisions fail",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "05",
      title: "Limited Scalability",
      description: "Growth requires hiring more people instead of leveraging systems, making expansion expensive and unsustainable.",
      impact: "Costs increase 5×",
      color: "from-yellow-500 to-amber-500"
    },
    {
      number: "06",
      title: "Missed Opportunities",
      description: "Leads slip through cracks, follow-ups are forgotten, and potential revenue is lost due to lack of systematic tracking.",
      impact: "50% revenue missed",
      color: "from-indigo-500 to-violet-500"
    },
    {
      number: "07",
      title: "Operational Inefficiency",
      description: "Processes are inconsistent, quality varies, and there's no visibility into what's working and what's not.",
      impact: "45% profit margin loss",
      color: "from-rose-500 to-red-600"
    }
  ];

  const benefitsData = {
    business: [
      {
        icon: <Clock size={28} />,
        title: "24/7 Operation",
        description: "Your business never sleeps",
        stat: "Always active"
      },
      {
        icon: <MessageCircle size={28} />,
        title: "Zero Missed Leads",
        description: "Every inquiry gets a reply",
        stat: "100% response"
      },
      {
        icon: <Database size={28} />,
        title: "Organized System",
        description: "No more messy data or confusion",
        stat: "100% organized"
      },
      {
        icon: <Users size={28} />,
        title: "Saves Manpower",
        description: "Repetitive work handled by AI",
        stat: "Less staff needed"
      },
      {
        icon: <FileText size={28} />,
        title: "Automatic Reports",
        description: "Know your daily performance instantly",
        stat: "Real-time data"
      },
      {
        icon: <Brain size={28} />,
        title: "Smart Insights",
        description: "Helps make better business decisions",
        stat: "AI-powered"
      }
    ],
    financial: [
      {
        icon: <TrendingUp size={28} />,
        title: "Increase Sales",
        description: "Increase sales and customer conversions by 30–50%",
        stat: "30-50% boost"
      },
      {
        icon: <DollarSign size={28} />,
        title: "Save Costs",
        description: "Save cost by reducing extra staff or manual tasks",
        stat: "Lower overhead"
      },
      {
        icon: <LineChart size={28} />,
        title: "Higher Profits",
        description: "See higher profits because the system works faster than humans",
        stat: "Maximized ROI"
      }
    ],
    owner: [
      {
        icon: <Smile size={36} />,
        title: "Less Stress",
        description: "Less stress, less management work",
        benefit: "Peaceful operations"
      },
      {
        icon: <Rocket size={36} />,
        title: "More Strategic Time",
        description: "More time to focus on strategy and growth",
        benefit: "Focus on growth"
      },
      {
        icon: <Shield size={36} />,
        title: "Peace of Mind",
        description: "Everything is automated and under control",
        benefit: "Total control"
      }
    ]
  };

  const smbNeedsData = [
    {
      number: "01",
      title: "AI is Reshaping Business",
      description: "Your competitors are already adopting AI. Stay ahead or get left behind.",
      icon: <TrendingUp size={28} />
    },
    {
      number: "02",
      title: "Customers Expect Instant Response",
      description: "Modern customers demand 24/7 availability. Meet their expectations effortlessly.",
      icon: <Zap size={28} />
    },
    {
      number: "03",
      title: "Efficiency = Survival",
      description: "Do more with less. Automate to reduce costs while scaling operations.",
      icon: <Shield size={28} />
    }
  ];

  const capabilities = [
    {
      icon: Bot,
      title: "AI Workflow Automation",
      description: "Automate repetitive tasks with intelligent workflows that learn and adapt.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: Brain,
      title: "AI Agents 24/7",
      description: "Custom agents that handle sales, support, and admin without human fatigue.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Workflow,
      title: "Intelligent Dashboard",
      description: "Real-time visualization of your entire business operations and growth metrics.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: LineChart,
      title: "Predictive Intelligence",
      description: "Forecast trends and make data-driven decisions with AI-powered insights.",
      color: "from-orange-500 to-yellow-600"
    }
  ];

  const steps = [
    "answers their question",
    "captures contact information",
    "qualifies the lead",
    "books an appointment",
    "stores data in CRM",
  ];

  return (
    <div className="scroll-smooth bg-white text-slate-900 font-display">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br bg-white text-black pt-2 pb-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e60a11]/20 text-[#e60a11] text-sm font-bold uppercase tracking-widest border border-[#e60a11]/30">
              Revolutionary Product
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-[1.1]">
              CoreSec AI Business OS™
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-[1.1]">- <span className="text-red-600">We Build Smart Businesses That Run Themselves</span></h1>

            <p className="text-lg text-slate-400 max-w-xl">
              Grow automatically by combining AI agents, automation
              workflows, analytics, and smart integrations. Powered
              by the future of intelligence.  
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" onClick={() => navigate("/contact?consultation=true")}>
                Get Ai Business Consultation
              </Button>
              {/* <Button variant="secondary" size="lg">
                Explore Features
              </Button> */}
            </div>
          </div>

          {/* Right side - Layered Images with Fade Transition */}
          <div className="relative">
            {/* Background - Neuro Brain Image (sequential animation) */}
            <motion.img
              src="/dist/neuro_brain.png"
              alt="Neural Network"
              className="absolute w-auto h-auto object-contain rounded-xl"
              initial={{ 
                opacity: 0, 
                scale: 0.45,
                top: '0%',
                right: '0%',
                left: 'auto',
                transform: 'translate(0, 0)',
                maxWidth: '50%',
                maxHeight: '50%'
              }}
              animate={{ 
                opacity: [0, 1, 1, 1],
                scale: [0.45, 0.45, 0.45, 1],
                top: ['0%', '0%', '50%', '50%'],
                left: ['auto', 'auto', '50%', '50%'],
                right: ['0%', '0%', 'auto', 'auto'],
                transform: [
                  'translate(0, 0)',
                  'translate(0, 0)',
                  'translate(-50%, -50%)',
                  'translate(-50%, -50%)'
                ],
                maxWidth: ['50%', '50%', '50%', '100%'],
                maxHeight: ['50%', '50%', '50%', '100%']
              }}
              transition={{
                opacity: {
                  times: [0, 0.33, 0.66, 1],
                  duration: 3,
                  delay: 2.5,
                  ease: "easeInOut"
                },
                scale: {
                  times: [0, 0.33, 0.66, 1],
                  duration: 9,
                  delay: 2.5,
                  ease: "easeOut"
                },
                top: {
                  times: [0, 0.33, 0.66, 1],
                  duration: 9,
                  delay: 2,
                  ease: "easeInOut"
                },
                left: {
                  times: [0, 0.33, 0.66, 1],
                  duration: 9,
                  delay: 2,
                  ease: "easeInOut"
                },
                right: {
                  times: [0, 0.33, 0.66, 1],
                  duration: 4,
                  delay: 2,
                  ease: "easeInOut"
                },
                transform: {
                  times: [0, 0.33, 0.66, 1],
                  duration: 9,
                  delay: 2.5,
                  ease: "easeInOut"
                },
                maxWidth: {
                  times: [0, 0.33, 0.66, 1],
                  duration: 9,
                  delay: 2.5,
                  ease: "easeOut"
                },
                maxHeight: {
                  times: [0, 0.33, 0.66, 1],
                  duration: 9,
                  delay: 2.5,
                  ease: "easeOut"
                }
              }}
            />
            
            {/* Orbiting Particles - Only visible when brain is full size */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Orbital Ring 1 - Inner */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ 
                  opacity: [0, 0, 0, 1],
                  rotate: 360
                }}
                transition={{
                  opacity: {
                    times: [0, 0.7, 0.85, 1],
                    duration: 13,
                    delay: 0,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 30,
                    delay: 13,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                {/* Particle 1 */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg shadow-red-500/50 blur-[1px]"></div>
                </motion.div>
                
                {/* Particle 2 */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg shadow-orange-500/50 blur-[1px]"></div>
                </motion.div>
              </motion.div>

              {/* Orbital Ring 2 - Middle */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ 
                  opacity: [0, 0, 0, 1],
                  rotate: -360
                }}
                transition={{
                  opacity: {
                    times: [0, 0.7, 0.85, 1],
                    duration: 13,
                    delay: 0,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 40,
                    delay: 13,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                {/* Particle 3 */}
                <motion.div
                  className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-red-600 to-pink-500 rounded-full shadow-lg shadow-red-600/50 blur-[2px]"></div>
                </motion.div>
                
                {/* Particle 4 */}
                <motion.div
                  className="absolute bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2"
                  animate={{
                    scale: [1.3, 1, 1.3],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                  }}
                >
                  <div className="w-3.5 h-3.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-500/50 blur-[1px]"></div>
                </motion.div>
              </motion.div>

              {/* Orbital Ring 3 - Outer */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ 
                  opacity: [0, 0, 0, 1],
                  rotate: 360
                }}
                transition={{
                  opacity: {
                    times: [0, 0.7, 0.85, 1],
                    duration: 13,
                    delay: 0,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 50,
                    delay: 13,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                {/* Particle 5 - Badge Style */}
                <motion.div
                  className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4
                  }}
                >
                  <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-3 py-1.5 rounded-full shadow-lg shadow-red-600/40 border border-white/20 backdrop-blur-sm">
                    <span className="text-xs font-bold whitespace-nowrap">AI</span>
                  </div>
                </motion.div>
                
                {/* Particle 6 - Glowing Dot */}
                <motion.div
                  className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/60 blur-[3px]"></div>
                </motion.div>

                {/* Particle 7 - Small Badge */}
                <motion.div
                  className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                >
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white px-2.5 py-1 rounded-full shadow-lg shadow-purple-600/40 border border-white/20">
                    <span className="text-[10px] font-bold">OS</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Glow Particles - Random positions */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`glow-${i}`}
                  className="absolute"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 0, 0, 0.6, 0.6],
                    scale: [0, 0, 0, 1, 1]
                  }}
                  transition={{
                    opacity: {
                      times: [0, 0.6, 0.75, 0.85, 1],
                      duration: 13,
                      delay: 0,
                      ease: "easeOut"
                    },
                    scale: {
                      times: [0, 0.6, 0.75, 0.85, 1],
                      duration: 13,
                      delay: 0,
                      ease: "easeOut"
                    }
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      x: [0, Math.random() * 10 - 5, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2
                    }}
                  >
                    <div 
                      className="rounded-full bg-gradient-to-br from-red-400/60 to-red-600/60 blur-sm"
                      style={{
                        width: `${4 + Math.random() * 6}px`,
                        height: `${4 + Math.random() * 6}px`
                      }}
                    ></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            {/* Foreground - Human Face Image (fades out to reveal brain) */}
            <motion.img
              src="/dist/human_face.png"
              alt="AI Business OS"
              className="w-full h-auto rounded-xl shadow-2xl relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              style={{
                animation: 'fadeOut 2s ease-in-out 1.5s forwards'
              }}
            />
            
            {/* CSS for fade out animation */}
            <style>{`
              @keyframes fadeOut {
                0% {
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                }
              }
            `}</style>
            
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 z-20"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0],
                scale: 1
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1 },
                y: { 
                  duration: 3,
                  delay: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: { duration: 0.5, delay: 1 }
              }}
            >
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-5 py-3 rounded-xl shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold opacity-90">AI-Powered</p>
                    <p className="text-lg font-black">Business OS</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Key Capabilities */}
      <section className="py-2 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">
              What is Coresec Ai Business OS™
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-xl p-6 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <capability.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{capability.title}</h3>
                <p className="text-slate-400">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 px-6 bg-gradient-to-b bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 space-y-4"
          > 
            <h2 className="text-3xl md:text-4xl font-black text-black">
              What We Do in This Service
            </h2>
            
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A structured journey to complete business autonomy
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#e60a11] via-red-600 to-orange-600 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-0">
              {[
                { layer: "Understand Your Business", desc: "Deep dive into your current manual processes, pain points, and growth goals.", icon: <Rocket size={28} /> },
                { layer: "Design a Smart AI Strategy", desc: "Architecting the custom automation map and selecting the right AI models for your needs.", icon: <Star size={28} /> },
                { layer: "Build Your AI Agents", desc: "Programming and fine-tuning specialized agents to handle your specific business logic.", icon: <Brain size={28} /> },
                { layer: "Integrate Your Systems", desc: "Plugging the AI OS into your existing tools (Slack, HubSpot, Shopify, etc.)", icon: <Network size={28} /> },
                { layer: "Launch & Optimize", desc: "Going live with continuous monitoring and iterative improvements.", icon: <TrendingUp size={28} /> }
              ].map((item, index) => (
                <TimelineItem 
                  key={index} 
                  item={item} 
                  index={index}
                  isEven={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Problems Businesses Face */}
      <section className="py-2 px-6 bg-gradient-to-br from-slate-900 via-[#1a0505] to-black text-white overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/20 text-red-400 text-sm font-bold uppercase tracking-widest border border-red-500/30">
              Business Challenges
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              What Problems Businesses Face
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Every day without AI automation costs you time, money, and customers
            </p>
          </motion.div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {businessProblems.map((problem, index) => (
              <ProblemCard 
                key={index} 
                problem={problem} 
                index={index}
                isTouched={touchedProblem === index}
                onTouched={() => setTouchedProblem(index)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl px-6 py-5">
              <p className="text-xl font-bold text-white mb-2">
                Sound Familiar?
              </p>
              <p className="text-slate-400">
                CoreSec AI Business OS™ solves all of these problems and more
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="w-full bg-white py-20 px-6 md:px-16">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
          <span className="text-slate-900">
            How CoreSec AI Business OS™ Solves These Problems
          </span>
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          
          {/* LEFT GRID */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-[#e5e7eb] rounded-xl p-5 shadow-sm flex flex-col gap-2"
              >
                <div className="text-red-500">{item.icon}</div>
                <p className="text-sm font-medium text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="relative rounded-2xl p-6 bg-gradient-to-br from-[#0f172a] via-[#0b1324] to-[#111827] shadow-[0_0_60px_rgba(255,0,0,0.2)]">
            
            {/* Glow Border Effect */}
            <div className="absolute inset-0 rounded-2xl border border-white/10"></div>

            {/* Content */}
            <div className="relative z-10 text-white">
              
              {/* Header */}
              <div className="flex items-center gap-2 text-red-500 text-xs font-semibold tracking-widest mb-5">
                <Bot size={14} />
                MINI EXAMPLE BOX
              </div>

              {/* Example */}
              <p className="text-sm text-slate-400 mb-2">Example:</p>
              <p className="text-base font-semibold mb-5">
                A visitor sends a message through your website.
              </p>

              <div className="border-t border-white/10 my-6"></div>

              {/* AI Agent */}
              <p className="text-xs text-slate-400 mb-4">THE AI AGENT:</p>

              <div className="space-y-3">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-red-500" />
                    <p className="text-sm text-slate-300">{step}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <p className="text-red-500 font-semibold mt-6">
                — All automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of This Service */}
      <section className="py-2 px-6 bg-white text-slate-900 overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1400"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/20 text-red-600 text-sm font-bold uppercase tracking-widest border border-red-500/30">
              Transform Your Business
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 via-red-600 to-slate-900 bg-clip-text text-transparent">
              Benefits of This Service
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experience the transformation across every aspect of your business
            </p>
          </motion.div>

          {/* Business Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                📈 Business Benefits
              </h3>
              <p className="text-slate-600 text-lg">
                Supercharge your operations with AI-powered excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefitsData.business.map((benefit, index) => (
                <BusinessBenefitCard
                  key={index} 
                  benefit={benefit} 
                  index={index}
                  isTouched={touchedBusinessBenefit === index}
                  onTouched={() => setTouchedBusinessBenefit(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* Financial & Owner Benefits Row */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Financial Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-50 to-white backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 h-full shadow-xl">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-500 text-white mb-3 shadow-lg shadow-red-500/30">
                    <LineChart size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    💰 Financial Benefits
                  </h3>
                  <p className="text-slate-600">
                    Watch your profits soar
                  </p>
                </div>

                <div className="space-y-6">
                  {benefitsData.financial.map((benefit, index) => (
                    <FinancialBenefitItem
                      key={index} 
                      benefit={benefit} 
                      index={index}
                      isTouched={touchedFinancialBenefit === index}
                      onTouched={() => setTouchedFinancialBenefit(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Owner Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-50 to-white backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 h-full shadow-xl">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-500 text-white mb-3 shadow-lg shadow-red-500/30">
                    <Rocket size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    👤 Owner Benefits
                  </h3>
                  <p className="text-slate-600">
                    Reclaim your freedom and peace of mind
                  </p>
                </div>

                <div className="space-y-6">
                  {benefitsData.owner.map((benefit, index) => (
                    <OwnerBenefitItem
                      key={index} 
                      benefit={benefit} 
                      index={index}
                      isTouched={touchedOwnerBenefit === index}
                      onTouched={() => setTouchedOwnerBenefit(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onTouchStart={(e) => {
                e.preventDefault();
                setTouchedCard('cta');
              }}
              className={`inline-block bg-gradient-to-br from-red-500/10 to-red-500/20 border-2 border-red-500/40 rounded-3xl px-12 py-8 transition-transform duration-300 cursor-pointer group shadow-xl ${touchedCard === 'cta' ? 'scale-105' : 'hover:scale-105'}`}
            >
              <p className={`text-3xl font-bold mb-2 transition-colors ${touchedCard === 'cta' ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'}`}>
                Ready to Experience These Benefits?
              </p>
              <p className="text-slate-600 text-lg">
                Start your AI transformation journey today
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-red-600 font-semibold">
                <span>Get Started Now</span>
                <ArrowRight className={touchedCard === 'cta' ? 'translate-x-2 transition-transform' : 'group-hover:translate-x-2 transition-transform'} size={20} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why SMB Needs This Now */}
      <section className="py-2 px-6 bg-gradient-to-br from-white via-[#f7f7f7] to-white text-black overflow-hidden relative">

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/20 text-red-400 text-sm font-bold uppercase tracking-widest border border-red-500/30">
              Urgent Call to Action
            </div>
          </motion.div>

          {/* Technical Excellence Style Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-black via-red-950 to-black rounded-3xl p-8 md:p-12 border border-red-900/30 shadow-2xl">
              {/* Title */}
              <div className="text-center mb-8">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Why SMB Needs This Now</h4>
                <p className="text-gray-400">The future of business is here. Adapt today or risk becoming obsolete.</p>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {[
                  "AI Revolution", "Instant Response", "Operational Efficiency", "Cost Optimization", "Competitive Advantage",
                  "Customer Expectations", "Market Disruption", "Automation Priority", "Digital Transformation", "Business Survival",
                  "Revenue Protection", "Growth Acceleration", "Risk Mitigation", "Future Proofing", "Strategic Innovation"
                ].map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      setTouchedTech(idx);
                    }}
                    className={`px-4 py-2 bg-white/10 backdrop-blur-sm border rounded-full text-white text-sm font-semibold transition-all duration-300 cursor-default ${touchedTech === idx ? 'bg-red-600/30 border-red-500' : 'border-red-500/30 hover:bg-red-600/30 hover:border-red-500'}`}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>

              {/* Three Key Points as Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {smbNeedsData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      setTouchedFeature(index);
                    }}
                    className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${touchedFeature === index ? 'bg-white/10 border-red-500/40 shadow-xl' : 'border-red-500/20 hover:bg-white/10 hover:border-red-500/40'}`}
                  >
                    {/* Number Badge */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-500 text-white font-black text-lg mb-4 transition-transform duration-300 ${touchedFeature === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                      {item.number}
                    </div>

                    {/* Icon */}
                    <div className={`mb-4 transition-colors duration-300 ${touchedFeature === index ? 'text-red-300' : 'text-red-400 group-hover:text-red-300'}`}>
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${touchedFeature === index ? 'text-red-400' : 'text-white group-hover:text-red-400'}`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${touchedFeature === index ? 'text-slate-300' : 'text-slate-400 group-hover:text-slate-300'}`}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-red-900/30">
                {[
                  { number: "85%", label: "Businesses Adopting AI", icon: TrendingUp },
                  { number: "3×", label: "Faster Market Response", icon: Zap },
                  { number: "60%", label: "Efficiency Gain", icon: Brain }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
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
      </section>

      {/* Scenario Section */}
      <section className="w-full bg-gradient-to-br from-slate-100 via-white to-slate-50 py-20 px-6 md:px-16 flex justify-center relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* MAIN CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 relative z-10 border border-slate-200"
        >
          
          {/* LEFT CONTENT */}
          <div className="p-10 md:p-12 flex flex-col justify-center">
            
            {/* SCENARIO TAG */}
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 w-fit border border-red-500/30"
            >
              <Zap size={12} />
              Scenario
            </motion.span>

            {/* TITLE */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4"
            >
              The 11:00 PM Lead
            </motion.h2>

            {/* UNDERLINE */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-16 h-[3px] bg-gradient-to-r from-red-600 to-red-500 mb-6 origin-left"
            ></motion.div>

            {/* DESCRIPTION */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-600 text-base leading-relaxed mb-8"
            >
              "A potential high-value client visits your site at 11 PM on a Sunday. Usually, they'd wait 12 hours for a reply. With CoreSec, our AI Agent engages instantly, answers their technical questions, checks your calendar, and books a call for Monday morning. By the time you wake up, the sale is halfway closed."
            </motion.p>

            {/* USER */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full"></div>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Mark Stevenson"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white relative z-10"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white z-20"></div>
              </div>

              <div>
                <p className="font-bold text-slate-900 text-lg">
                  Mark Stevenson
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  CEO, SolarEdge Solutions
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE PANEL */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#020617] flex items-center justify-center p-8 relative overflow-hidden"
          >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-red-500/10 rounded-full blur-2xl animate-pulse delay-700"></div>
            </div>

            {/* Robot Image Container */}
            <div className="relative w-full h-full min-h-[400px] bg-gradient-to-br from-white/5 to-transparent rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
              <img
                src="/dist/robot.png"
                alt="AI Robot"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Transformation Section */}
      <section className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 py-2 px-6 md:px-16 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* HEADER */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Transformation in Action
            </h2>

            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              See how real businesses achieved total autonomy and exponential growth using the CoreSec AI Business OS™.
            </p>
          </motion.div>

          {/* MAIN CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-200"
          >
            
            {/* TAGS */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-red-500/30">
                <TrendingUp size={12} />
                Service Industry
              </span>

              <span className="text-xs text-slate-500 font-semibold tracking-wide uppercase bg-slate-100 px-4 py-2 rounded-full">
                6 Month Study
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
            >
              From Operational Chaos to 4x Growth
            </motion.h3>

            {/* DESCRIPTION */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-600 text-base max-w-3xl mb-8 leading-relaxed"
            >
              A specialized service firm integrated our automated lead capture and AI scheduling agents. Within 6 months, they scaled without increasing headcount.
            </motion.p>

            {/* STATS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  setTouchedStat('conversion');
                }}
                className={`relative group ${touchedStat === 'conversion' ? 'touched' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-xl transition-opacity duration-300 ${touchedStat === 'conversion' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                <div className={`relative bg-white rounded-xl p-6 shadow-lg border transition-all duration-300 ${touchedStat === 'conversion' ? 'border-red-500/30 shadow-xl' : 'border-slate-200 hover:border-red-500/30'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-red-600 text-4xl font-black">400%</p>
                    <div className={`w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center ${touchedStat === 'conversion' ? 'scale-110' : ''}`}>
                      <TrendingUp size={20} className="text-red-600" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">
                    Conversion Increase
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.65 }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  setTouchedStat('hires');
                }}
                className={`relative group ${touchedStat === 'hires' ? 'touched' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-xl transition-opacity duration-300 ${touchedStat === 'hires' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                <div className={`relative bg-white rounded-xl p-6 shadow-lg border transition-all duration-300 ${touchedStat === 'hires' ? 'border-red-500/30 shadow-xl' : 'border-slate-200 hover:border-red-500/30'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-red-600 text-4xl font-black">0</p>
                    <div className={`w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center ${touchedStat === 'hires' ? 'scale-110' : ''}`}>
                      <UserPlus size={20} className="text-red-600" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">
                    New Hires Needed
                  </p>
                </div>
              </motion.div>

            </motion.div>

            {/* BUTTON */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onTouchStart={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, #1e293b, #1e293b)";
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, #0f172a, #1e293b)";
                e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
              }}
              onClick={() => navigate('/case-studies/sunsine-clinic')}
              className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              Read Full Story
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </motion.button>

          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bottom CTA Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
              {/* Decorative Circles */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  The Time to Act is Now
                </h3>
                <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                  Every day you wait, your competitors gain ground. Don't let your business get left behind in the AI revolution.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={() => navigate('/contact?demo=true')} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all duration-300 hover:scale-105 shadow-lg">
                    <Rocket size={20} />
                    Start Your Transformation
                  </button>
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

function TimelineItem({ item, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 last:mb-0`}
    >
      {/* Content Side (Left or Right) */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} pl-20 md:pl-0`}>
        <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-black p-8 rounded-2xl hover:border-[#e60a11]/50 transition-all duration-300 group">
          {/* Title */}
          <h3 className="text-2xl font-black text-black mb-3 group-hover:text-[#e60a11] transition-colors duration-300">
            {item.layer}
          </h3>
          
          {/* Description */}
          <p className="text-slate-400 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Center Icon (Desktop Only) */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#e60a11] to-red-600 border-4 border-black shadow-[0_0_30px_rgba(230,10,17,0.5)] z-10 group-hover:scale-110 transition-transform duration-300">
        <div className="text-white font-black text-xl">
          {index + 1}
        </div>
      </div>

      {/* Empty Side for Balance */}
      <div className="hidden md:block w-1/2"></div>
    </motion.div>
  );
}

// Helper component for dashboard icon
function LayoutDashboard({ size = 24 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

// Problem Card Component
function ProblemCard({ problem, index, isTouched, onTouched }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onTouchStart={() => {
        onTouched();
      }}
      className={`group relative ${isTouched ? 'touched' : ''}`}
    >
      {/* Card Container with Hover Effect */}
      <div className={`relative h-full bg-gradient-to-br ${problem.color} p-[1px] rounded-2xl transition-transform duration-300 ${isTouched ? 'scale-105' : 'hover:scale-105'}`}>
        {/* Glow Effect on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-white/20 to-transparent transition-opacity duration-300 rounded-2xl ${isTouched ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
        
        {/* Content Container */}
        <div className="relative h-full bg-slate-900 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
          
          {/* Number Badge */}
          <div className="relative mb-4">
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} text-white font-black text-lg shadow-lg transition-transform duration-300 ${isTouched ? 'scale-110' : 'group-hover:scale-110'}`}>
              {problem.number}
            </div>
          </div>

          {/* Title */}
          <h3 className={`relative text-xl font-bold mb-3 transition-colors duration-300 ${isTouched ? 'text-red-400' : 'text-white group-hover:text-red-400'}`}>
            {problem.title}
          </h3>
          
          {/* Description */}
          <p className="relative text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
            {problem.description}
          </p>
          
          {/* Impact Badge */}
          <div className="relative pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${problem.color} animate-pulse`}></div>
              <p className="text-xs font-semibold text-slate-300">
                {problem.impact}
              </p>
            </div>
          </div>

          {/* Animated Arrow on Hover */}
          <div className={`absolute bottom-6 right-6 transform transition-all duration-300 ${isTouched ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0'}`}>
            <ArrowRight className="text-red-400" size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Business Benefit Card Component
function BusinessBenefitCard({ benefit, index, isTouched, onTouched }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onTouchStart={() => {
        onTouched();
      }}
      className={`group relative ${isTouched ? 'touched' : ''}`}
    >
      <div className={`relative h-full bg-gradient-to-br from-white to-slate-50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 overflow-hidden shadow-lg ${isTouched ? 'border-red-500/50 shadow-xl' : 'border-slate-200 hover:border-red-500/50'}`}>
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/5 transition-all duration-500 ${isTouched ? 'from-red-500/10 to-red-500/10' : 'group-hover:from-red-500/10 group-hover:to-red-500/10'}`}></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon Container */}
          <div className="mb-5">
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30 transition-all duration-300 ${isTouched ? 'scale-110 shadow-red-500/50' : 'group-hover:scale-110 group-hover:shadow-red-500/50'}`}>
              {benefit.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isTouched ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'}`}>
            {benefit.title}
          </h3>
          
          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            {benefit.description}
          </p>
          
          {/* Stat Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30">
            <TrendingUp size={16} className="text-red-600" />
            <span className="text-sm font-bold text-red-600">{benefit.stat}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Financial Benefit Item Component
function FinancialBenefitItem({ benefit, index, isTouched, onTouched }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ x: 5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onTouchStart={() => {
        onTouched();
      }}
      className={`group ${isTouched ? 'touched' : ''}`}
    >
      <div className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${isTouched ? 'bg-red-500/10' : 'hover:bg-red-500/10'}`}>
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-500 text-white shadow-md transition-transform duration-300 ${isTouched ? 'scale-110' : 'group-hover:scale-110'}`}>
            {benefit.icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h4 className={`text-lg font-bold mb-1 transition-colors duration-300 ${isTouched ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'}`}>
            {benefit.title}
          </h4>
          <p className="text-sm text-slate-600 mb-2">
            {benefit.description}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500/10 border border-red-500/30">
            <LineChart size={14} className="text-red-600" />
            <span className="text-xs font-bold text-red-600">{benefit.stat}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Owner Benefit Item Component
function OwnerBenefitItem({ benefit, index, isTouched, onTouched }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ x: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onTouchStart={() => {
        onTouched();
      }}
      className={`group ${isTouched ? 'touched' : ''}`}
    >
      <div className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${isTouched ? 'bg-red-500/10' : 'hover:bg-red-500/10'}`}>
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-500 text-white shadow-md transition-transform duration-300 ${isTouched ? 'scale-110' : 'group-hover:scale-110'}`}>
            {benefit.icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h4 className={`text-lg font-bold mb-1 transition-colors duration-300 ${isTouched ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'}`}>
            {benefit.title}
          </h4>
          <p className="text-sm text-slate-600 mb-2">
            {benefit.description}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500/10 border border-red-500/30">
            <CheckCircle size={14} className="text-red-600" />
            <span className="text-xs font-semibold text-red-600">{benefit.benefit}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// SMB Need Card Component
function SMBNeedCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="group relative"
    >
      {/* Card with gradient border */}
      <div className="relative h-full bg-gradient-to-br from-red-500/20 to-red-600/10 p-[1px] rounded-3xl hover:scale-105 transition-transform duration-300">
        {/* Inner content */}
        <div className="relative h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all duration-500"></div>
          
          {/* Number Badge */}
          <div className="relative mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 text-white font-black text-2xl shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300">
              {item.number}
            </div>
          </div>

          {/* Icon Container */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-500/20 text-red-400 group-hover:bg-red-500/30 transition-all duration-300">
              {item.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="relative text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
            {item.title}
          </h3>
          
          {/* Description */}
          <p className="relative text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
            {item.description}
          </p>

          {/* Animated Arrow */}
          <div className="relative mt-6 flex items-center gap-2 text-red-400 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
            <span className="text-sm font-semibold">Learn more</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
