import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Server, Brain, BarChart3, Cloud, Blocks, Cpu, Star, Quote, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Premium Core Services Section
export function PremiumCoreServices() {
  const [touchedCard, setTouchedCard] = React.useState(null);
  
  const services = [
    { icon: <Code size={32} />, title: "Website Development", description: "Scalable architectures and high-performance web applications built for growth.", techStack: ["React", "Node.js", "Next.js"], gradient: "from-white to-red-600" },
    { icon: <Smartphone size={32} />, title: "Mobile App Development", description: "Native and cross-platform mobile solutions with seamless user experiences.", techStack: ["React Native", "Flutter", "iOS"], gradient: "from-white to-red-600" },
    { icon: <Server size={32} />, title: "API & Backend Systems", description: "Robust backend infrastructure and RESTful APIs for modern applications.", techStack: ["Node.js", "Python", "GraphQL"], gradient: "from-white to-red-600" },
    { icon: <Brain size={32} />, title: "AI & Machine Learning", description: "Intelligent systems powered by cutting-edge AI and ML technologies.", techStack: ["TensorFlow", "PyTorch", "OpenAI"], gradient: "from-white to-red-600" },
    { icon: <BarChart3 size={32} />, title: "Data Analytics", description: "Transform raw data into actionable insights with real-time dashboards.", techStack: ["Python", "Tableau", "PowerBI"], gradient: "from-white to-red-600" },
    { icon: <Cloud size={32} />, title: "Cloud & DevOps", description: "Scalable cloud infrastructure and automated deployment pipelines.", techStack: ["AWS", "Docker", "Kubernetes"], gradient: "from-white to-red-600" },
    { icon: <Blocks size={32} />, title: "Blockchain Solutions", description: "Decentralized applications and smart contracts on leading platforms.", techStack: ["Ethereum", "Solidity", "Web3"], gradient: "from-white to-red-600" },
    { icon: <Cpu size={32} />, title: "IoT & Embedded Systems", description: "Connected devices and embedded systems for smart automation.", techStack: ["Arduino", "Raspberry Pi", "MQTT"], gradient: "from-white to-red-600" }
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-white via-[#f5f5f5] to-white text-black relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.45, 0.25] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-red-600/30 via-red-700/20 to-white/30 rounded-full blur-[120px]" />
        <motion.div animate={{ scale: [1.3, 1, 1.3], opacity: [0.25, 0.45, 0.25] }} transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }} className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-tr from-red-700/25 via-red-600/20 to-white/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/10 via-red-600/10 to-red-700/10 backdrop-blur-xl border border-white/10">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-5 border-2 border-red-400 rounded-full" />
            <span className="text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Premium Solutions</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-black"><span className="bg-gradient-to-r from-black via-red-400 to-black bg-clip-text text-transparent">Our Core Services</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">Enterprise-grade technology solutions engineered for scale, performance, and innovation</motion.p>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="w-32 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40, scale: 0.95 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.08 }} 
              whileHover={{ y: -12, scale: 1.03 }} 
              whileTap={{ scale: 0.98 }}
              onTouchStart={(e) => {
                e.preventDefault();
                setTouchedCard(index);
              }}
              className={`group relative ${touchedCard === index ? 'touched' : ''}`}
            >
              {/* Removed glowing red border effect */}
              <div className={`relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 ${touchedCard === index ? 'border-white/20' : 'border-white/10 group-hover:border-white/20 bg-white'}`}>
                {/* Removed red glow orb */}
                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 1.1 }}
                  className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient}/20 flex items-center justify-center border border-white/10 transition-all duration-500`}
                >
                  <div className={`transition-colors ${touchedCard === index ? 'text-red-300' : 'text-red-400 group-hover:text-red-300'}`}>{service.icon}</div>
                </motion.div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${touchedCard === index ? 'text-red-100' : 'text-black group-hover:text-red-500'}`}>{service.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">{service.techStack.map((tech, i) => (<span key={i} className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 ${touchedCard === index ? 'bg-white/10 border-white/10' : 'bg-white/5 border-white/10 text-slate-600 group-hover:bg-white/10'}`}>{tech}</span>))}</div>
                <motion.div 
                  initial={{ scaleX: 0 }} 
                  whileInView={{ scaleX: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }} 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 transition-transform duration-500 origin-left ${touchedCard === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Premium Client Trust Section
export function PremiumClientTrust() {
  const [touchedClient, setTouchedClient] = React.useState(null);
  // const stats = [{ value: "500+", label: "Projects Delivered", icon: "🚀" }, { value: "98%", label: "Client Satisfaction", icon: "⭐" }, { value: "150+", label: "Global Clients", icon: "🌍" }, { value: "24/7", label: "Support Available", icon: "💬" }];
  const clients = ["TechCorp Global", "InnovateLab", "DataStream Inc", "CloudNine Systems", "AI Dynamics", "FutureNet", "SmartBiz Pro", "Digital Edge"];

  return (
    <section className="py-2 px-6 bg-gradient-to-br from-white via-red-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-red-200/40 to-red-100/40 rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 18, repeat: Infinity, delay: 3 }} className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-red-100/40 to-red-200/40 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-200">
            <Star className="w-4 h-4 text-red-600" fill="currentColor" />
            <span className="text-sm font-bold uppercase tracking-wider text-red-700">Trusted Worldwide</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-6xl font-black text-slate-900">Organizations That Trust <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">CoreSec</span></motion.h2>
        </div>
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-slate-200 py-1">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center text-slate-500 font-semibold mb-8 uppercase tracking-wider text-sm">Partnered with Industry Leaders</motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  setTouchedClient(index);
                }}
                className={`flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border transition-all duration-300 cursor-pointer group ${touchedClient === index ? 'border-red-300 shadow-lg' : 'border-slate-100 hover:border-red-300 hover:shadow-lg'}`}
              >
                <span className={`font-bold text-center transition-colors ${touchedClient === index ? 'text-red-600' : 'text-slate-700 group-hover:text-red-600'}`}>{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Premium Testimonials Section
export function PremiumTestimonials() {
  const testimonials = [
    { 
      name: "Sarah Johnson", 
      role: "CEO, TechStartup Inc", 
      content: "CoreSec transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300%. Absolutely phenomenal team!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      project: "AI Automation System"
    },
    { 
      name: "Michael Chen", 
      role: "CTO, DataFlow Systems", 
      content: "The level of expertise and dedication is unmatched. They delivered beyond our expectations with cutting-edge technology.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      project: "Cloud Migration"
    },
    { 
      name: "Emily Rodriguez", 
      role: "Director, InnovateLab", 
      content: "Working with CoreSec was a game-changer. Their strategic approach to AI automation saved us countless hours and resources.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      project: "Data Analytics Platform"
    },
    { 
      name: "David Park", 
      role: "Founder, SmartBiz Pro", 
      content: "From concept to deployment, CoreSec exceeded every milestone. Their team is world-class and incredibly responsive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      project: "Mobile App Development"
    },
    { 
      name: "Lisa Thompson", 
      role: "VP Engineering, CloudNine", 
      content: "The ROI we've seen since implementing CoreSec's solutions has been remarkable. They truly understand enterprise needs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      project: "Enterprise Platform"
    },
    { 
      name: "James Wilson", 
      role: "COO, FutureNet", 
      content: "Professional, innovative, and results-driven. CoreSec is our go-to partner for all technology initiatives.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      project: "Digital Transformation"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-red-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Red Circle */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-red-100/60 to-red-50/40 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1.1, 1, 1.1], rotate: [180, 0, 180] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-red-50/50 to-red-100/40 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb30_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb30_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Floating Quote Marks */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 text-[200px] font-serif text-red-600 select-none"
        >
          "
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-20 text-[200px] font-serif text-red-600 select-none"
        >
          "
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600" />
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">Testimonials</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6"
          >
            What Our Clients
            <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Say About Us
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take our word for it — hear from the businesses we've helped transform
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-6 h-full shadow-lg border border-slate-100 hover:shadow-2xl hover:border-red-200 transition-all duration-500 overflow-hidden">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Top Section */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center text-red-600 font-bold text-lg border-2 border-red-300">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 line-clamp-4">
                    {testimonial.content}
                  </p>
                  
                  {/* Bottom Section */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-slate-900 font-bold text-base">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 rounded-full border border-red-100">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                      <span className="text-red-700 text-xs font-semibold">{testimonial.project}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Premium Training CTA Section
export function PremiumTrainingCTA() {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-800 to-black">
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1.3, 1, 1.3], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }} className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-tr from-white/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (<motion.div key={i} initial={{ x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), y: Math.random() * 800, opacity: 0.1 }} animate={{ y: [null, Math.random() * -200], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: Math.random() * 10 + 15, repeat: Infinity, ease: "easeInOut" }} className="absolute text-6xl">{['🎓', '💡', '🚀', '⚡', '🎯', '📚'][i]}</motion.div>))}
      </div>
      <div className="max-w-5xl mx-auto relative z-10 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8"><Users className="w-5 h-5" /><span className="text-sm font-bold uppercase tracking-widest">Empower Your Team</span></motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">Empower Your Team<br /><span className="bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">With CoreSec Training</span></motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="text-white/90 text-2xl max-w-3xl mx-auto leading-relaxed mb-12">We don't just build tools; we train your staff to master them. Comprehensive tech training for modern enterprise teams.</motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }} whileTap={{ scale: 0.95 }} className="px-10 py-5 bg-white text-red-700 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 justify-center"><TrendingUp className="w-6 h-6" />Explore Our Courses</motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/contact?course=true')} className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white font-bold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300">Schedule a Course Consultation</motion.button>
        </motion.div>
      </div>
    </section>
  );
}
