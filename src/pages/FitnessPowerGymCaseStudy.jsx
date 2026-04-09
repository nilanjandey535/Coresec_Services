import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Header from "../components/sections/Header";
import { Footer } from "../components/sections/Footer";

export default function FitnessPowerGymCaseStudy() {
  const [touchedCard, setTouchedCard] = useState(null);
  const [touchedChallenge, setTouchedChallenge] = useState(null);
  const [touchedOnboard, setTouchedOnboard] = useState(null);
  const [touchedFeature, setTouchedFeature] = useState(null);
  const [touchedSchedule, setTouchedSchedule] = useState(null);
  const [touchedMetric, setTouchedMetric] = useState(null);
  const [touchedResult, setTouchedResult] = useState(null);
  const [touchedAdvantage, setTouchedAdvantage] = useState(null);
  const [touchedImpact, setTouchedImpact] = useState(null);
  
  return (
    <div className="scroll-smooth bg-white text-slate-900 font-display">
      <Header />

      {/* 1️⃣ HERO SECTION — Case Study Introduction */}
      <section className="w-full py-2 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 leading-tight mb-3">
                Case Study: How "Fitness Power Gym" Automated Their Social Media and Grew Membership
              </h1>
              
              <p className="text-base text-slate-600 mb-5 leading-relaxed">
                A real example of how AI-powered automation helped a local gym attract new customers, increase engagement, and save marketing costs.
              </p>

              {/* Quick Results Highlight */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200"
                >
                  <div className="text-xl md:text-2xl font-black text-red-600">+220%</div>
                  <div className="text-xs text-slate-600 font-semibold">Engagement Growth</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200"
                >
                  <div className="text-xl md:text-2xl font-black text-blue-600">3,800</div>
                  <div className="text-xs text-slate-600 font-semibold">People Reached</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200"
                >
                  <div className="text-xl md:text-2xl font-black text-green-600">19</div>
                  <div className="text-xs text-slate-600 font-semibold">New Memberships</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200"
                >
                  <div className="text-xl md:text-2xl font-black text-purple-600">₹12K</div>
                  <div className="text-xs text-slate-600 font-semibold">Monthly Cost Saved</div>
                </motion.div>
              </div>

              {/* CTA */}
              <a href="#step1">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  See How It Worked ↓
                </button>
              </a>
            </motion.div>

            {/* Right - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/dist/fitness_case_study.png"
                alt="Fitness Power Gym - AI Automation Dashboard"
                className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ BUSINESS BACKGROUND */}
      <section className="w-full py-12 md:py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              The Business Background
            </h2>
            
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <p className="text-base text-slate-700 leading-relaxed mb-5">
                "Fitness Power Gym" is a local gym in Kolkata with around 200 active members.
                Like many small businesses, they wanted to grow through social media but lacked the time, resources, and marketing expertise.
              </p>
            </div>

            {/* Challenges Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: "👤", title: "No dedicated social media manager" },
                { icon: "⏰", title: "Owner too busy to post regularly" },
                { icon: "❓", title: "Unsure what type of content works" },
                { icon: "💸", title: "₹10k–₹15k/month spent on agency with poor results" }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedChallenge(index);
                  }}
                  className={`bg-white border rounded-xl p-5 shadow-sm transition-all duration-300 ${
                    touchedChallenge === index ? 'border-red-500 shadow-xl' : 'border-slate-200 hover:shadow-xl hover:border-red-500'
                  }`}
                >
                  <div className={`text-3xl mb-3 transition-transform duration-300 ${
                    touchedChallenge === index ? 'scale-110' : ''
                  }`}>{challenge.icon}</div>
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    touchedChallenge === index ? 'text-red-600' : 'text-slate-900'
                  }`}>{challenge.title}</h3>
                </motion.div>
              ))}
            </div>

            {/* Closing Line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 text-center"
            >
              <p className="text-lg font-bold">
                They needed a professional, automated, and affordable solution.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ STEP 1 — ONBOARDING */}
      <section id="step1" className="w-full py-2 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                Step 1: Simple Onboarding Through Our System
              </h2>
              
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                The entire onboarding process takes less than 10 minutes. No complicated meetings or technical setup required.
              </p>

              {/* Form Details as Cards */}
              <div className="space-y-3 mb-6">
                {[
                  { label: "Business Name", value: "Fitness Power Gym", icon: "🏋️" },
                  { label: "Services", value: "Weight training, Zumba, CrossFit", icon: "💪" },
                  { label: "Target Audience", value: "18–40 fitness lovers near Garia", icon: "🎯" },
                  { label: "Goal", value: "Increase membership sign-ups", icon: "📈" },
                  { label: "Post Preference", value: "Motivational + Informative + Offers", icon: "✨" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onTouchStart={() => {
                      setTouchedOnboard(index);
                    }}
                    className={`bg-slate-50 border rounded-xl p-4 flex items-center gap-4 transition-all duration-300 ${
                      touchedOnboard === index ? 'border-red-500 shadow-lg bg-red-50' : 'border-slate-200 hover:shadow-lg hover:border-red-500'
                    }`}
                  >
                    <div className={`text-2xl transition-transform duration-300 ${
                      touchedOnboard === index ? 'scale-110' : ''
                    }`}>{item.icon}</div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">{item.label}</div>
                      <div className={`font-medium transition-colors duration-300 ${
                        touchedOnboard === index ? 'text-red-600' : 'text-slate-900'
                      }`}>{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Highlight Line */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-r-xl"
              >
                <p className="text-lg font-bold text-green-800">
                  ✓ No meetings. No complicated setup. Just a simple form.
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg">
                <img
                  src="/dist/social_ai.png"
                  alt="Onboarding Dashboard"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ STEP 2 — AI MARKETING PLAN */}
      <section className="w-full py-12 md:py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
              Step 2: AI Generates a 30-Day Marketing Plan
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our AI analyzes your business and creates a complete content calendar tailored to your goals and audience.
            </p>

            {/* Content Calendar Preview Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Date</th>
                      <th className="px-6 py-4 text-left font-bold">Post Type</th>
                      <th className="px-6 py-4 text-left font-bold">Platform</th>
                      <th className="px-6 py-4 text-left font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: "June 3", type: "Motivation", platform: "Instagram", desc: "Gym quote post" },
                      { date: "June 5", type: "Workout Tip", platform: "Facebook", desc: "CrossFit technique" },
                      { date: "June 7", type: "Offer", platform: "Instagram", desc: "Membership discount" },
                      { date: "June 10", type: "Education", platform: "LinkedIn", desc: "Fitness health benefits" }
                    ].map((row, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`border-b ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-red-50 transition-colors`}
                      >
                        <td className="px-6 py-4 font-semibold text-slate-900">{row.date}</td>
                        <td className="px-6 py-4">
                          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {row.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-700">{row.platform}</td>
                        <td className="px-6 py-4 text-slate-600">{row.desc}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl"
            >
              <p className="text-slate-800 font-medium">
                💡 The owner can review and approve the plan before posting begins.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5️⃣ STEP 3 — AI POST CREATION */}
      <section className="w-full py-2 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
              Step 3: AI Generates Posts Automatically
            </h2>
            
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              The AI creates professional posts with visuals, captions, and hashtags — ready to publish.
            </p>

            {/* Example Post Card */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img src="/dist/fitness_ai.png" alt="Post Preview" className="w-[300px] h-[350px] rounded-xl" />
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-6"
              >
                {[
                  { icon: "🎨", title: "Professional Design", desc: "Eye-catching visuals with your branding" },
                  { icon: "✍️", title: "Engaging Captions", desc: "Compelling copy that resonates with your audience" },
                  { icon: "🏷️", title: "Smart Hashtags", desc: "Strategic tags to maximize reach and discovery" },
                  { icon: "✅", title: "Ready to Publish", desc: "Everything prepared automatically" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ x: 10 }}
                    onTouchStart={() => {
                      setTouchedFeature(index);
                    }}
                    className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                      touchedFeature === index ? 'bg-red-50 shadow-lg' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className={`text-3xl transition-transform duration-300 ${
                      touchedFeature === index ? 'scale-110' : ''
                    }`}>{feature.icon}</div>
                    <div>
                      <h3 className={`font-bold transition-colors duration-300 ${
                        touchedFeature === index ? 'text-red-600' : 'text-slate-900'
                      }`}>{feature.title}</h3>
                      <p className="text-slate-600 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ STEP 4 — AUTO POSTING */}
      <section className="w-full py-12 md:py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Step 4: Auto-Scheduling and Publishing
            </h2>
            
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              Set it and forget it. The system automatically publishes at optimal times for maximum engagement.
            </p>

            {/* Schedule Examples */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { day: "Monday Motivation", time: "9:00 AM", icon: "💪", color: "from-red-500 to-red-600" },
                { day: "Workout Tips", time: "6:00 PM", icon: "🏋️", color: "from-blue-500 to-blue-600" },
                { day: "Offer Post", time: "Friday Evening", icon: "🎁", color: "from-green-500 to-green-600" }
              ].map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedSchedule(index);
                  }}
                  className={`bg-gradient-to-br ${schedule.color} rounded-xl p-6 shadow-lg transition-all duration-300 ${
                    touchedSchedule === index ? 'ring-4 ring-white/50 shadow-2xl' : 'hover:shadow-2xl'
                  }`}
                >
                  <div className={`text-4xl mb-4 transition-transform duration-300 ${
                    touchedSchedule === index ? 'scale-110' : ''
                  }`}>{schedule.icon}</div>
                  <div className="text-2xl font-bold mb-2">{schedule.day}</div>
                  <div className="text-white/90 text-lg">{schedule.time}</div>
                </motion.div>
              ))}
            </div>

            {/* Platform Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8"
            >
              <div className="text-center mb-6">
                <p className="text-slate-300 mb-4">Publishes to all major platforms:</p>
                <div className="flex justify-center gap-8 text-4xl">
                  <span>📸</span>
                  <span>📘</span>
                  <span>💼</span>
                  <span>▶️</span>
                </div>
                <div className="flex justify-center gap-8 mt-2 text-sm text-slate-400">
                  <span>Instagram</span>
                  <span>Facebook</span>
                  <span>LinkedIn</span>
                  <span>YouTube</span>
                </div>
              </div>
            </motion.div>

            {/* Highlight Line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 text-center"
            >
              <p className="text-lg font-bold">
                ✓ The gym's social media remained active every day — automatically.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7️⃣ STEP 5 — PERFORMANCE REPORT */}
      <section className="w-full py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
              Step 5: Monthly Performance Tracking
            </h2>
            
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Transparent reporting shows exactly what's working and how your social media is growing.
            </p>

            {/* Metrics Cards */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              {[
                { icon: "📝", value: "28", label: "Total Posts Published", color: "from-blue-500 to-blue-600" },
                { icon: "📈", value: "+220%", label: "Engagement Growth", color: "from-red-500 to-red-600" },
                { icon: "👥", value: "3,800", label: "New Reach", color: "from-purple-500 to-purple-600" },
                { icon: "💬", value: "46", label: "Direct Messages", color: "from-green-500 to-green-600" },
                { icon: "🎯", value: "19", label: "Membership Conversions", color: "from-orange-500 to-orange-600" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedMetric(index);
                  }}
                  className={`bg-gradient-to-br from-slate-50 to-slate-100 border rounded-2xl p-6 text-center transition-all duration-300 ${
                    touchedMetric === index ? 'border-red-500 shadow-2xl' : 'border-slate-200 hover:shadow-2xl hover:border-red-500'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${metric.color} text-white text-2xl mb-4 shadow-lg transition-transform duration-300 ${
                    touchedMetric === index ? 'scale-110' : ''
                  }`}>
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-2">{metric.value}</div>
                  <div className="text-xs text-slate-600 font-semibold uppercase">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-100 rounded-2xl p-8 text-center"
            >
              <p className="text-slate-700 font-medium">
                📊 Reports are delivered as dashboard + PDF summary
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8️⃣ RESULTS AFTER 1 MONTH */}
      <section className="w-full py-12 md:py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
              Results After the First Month
            </h2>

            {/* Checklist */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Owner didn't post anything manually",
                "Social media activity became consistent",
                "19 new members joined through Instagram DMs",
                "₹12,000/month saved compared to previous agency",
                "Gym visibility improved in local searches",
                "Daily engagement with followers automated"
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedResult(index);
                  }}
                  className={`bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4 transition-all duration-300 ${
                    touchedResult === index ? 'border-2 border-red-500 shadow-2xl' : 'hover:shadow-2xl hover:border-2 hover:border-red-500'
                  }`}
                >
                  <Check className={`w-8 h-8 flex-shrink-0 transition-all duration-300 ${
                    touchedResult === index ? 'text-red-600 scale-110' : 'text-green-500'
                  }`} />
                  <p className={`text-lg font-medium transition-colors duration-300 ${
                    touchedResult === index ? 'text-red-600' : 'text-slate-700'
                  }`}>{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9️⃣ WHY THIS SYSTEM WORKS */}
      <section className="w-full py-2 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
              Why Automation Works So Well
            </h2>

            {/* Three Core Advantages */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: "🤖",
                  title: "AI Content Creation",
                  desc: "Posts, captions, and visuals are created automatically.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: "⚡",
                  title: "Consistent Activity",
                  desc: "The system never skips posting days.",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: "🔄",
                  title: "Continuous Optimization",
                  desc: "AI learns what content performs best.",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedAdvantage(index);
                  }}
                  className={`bg-gradient-to-br from-slate-50 to-white border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    touchedAdvantage === index ? 'border-red-500 shadow-2xl' : 'border-slate-200'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-4xl mb-6 shadow-lg transition-transform duration-300 ${
                    touchedAdvantage === index ? 'scale-110' : ''
                  }`}>
                    {card.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    touchedAdvantage === index ? 'text-red-600' : 'text-slate-900'
                  }`}>{card.title}</h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    touchedAdvantage === index ? 'text-slate-700' : 'text-slate-600'
                  }`}>{card.desc}</p>
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
              <p className="text-lg font-bold">
                ✓ The system doesn't just post — it improves continuously.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🔟 FINAL IMPACT */}
      <section className="w-full py-12 md:py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
              Long-Term Impact After 3 Months
            </h2>

            {/* Metrics Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { value: "2×", label: "Increase in Followers", icon: "👥", color: "from-blue-500 to-blue-600" },
                { value: "4×", label: "Higher Engagement", icon: "❤️", color: "from-red-500 to-red-600" },
                { value: "60+", label: "Membership Leads", icon: "📩", color: "from-green-500 to-green-600" },
                { value: "₹35K+", label: "Marketing Cost Saved", icon: "💰", color: "from-purple-500 to-purple-600" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onTouchStart={() => {
                    setTouchedImpact(index);
                  }}
                  className={`bg-white rounded-2xl p-8 shadow-lg text-center transition-all duration-300 ${
                    touchedImpact === index ? 'border-2 border-red-500 shadow-2xl' : 'hover:shadow-2xl hover:border-2 hover:border-red-500'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${metric.color} text-white text-3xl mb-4 shadow-lg transition-transform duration-300 ${
                    touchedImpact === index ? 'scale-110' : ''
                  }`}>
                    {metric.icon}
                  </div>
                  <div className={`text-4xl font-black mb-2 transition-colors duration-300 ${
                    touchedImpact === index ? 'text-red-600' : 'text-slate-900'
                  }`}>{metric.value}</div>
                  <div className="text-sm text-slate-600 font-semibold uppercase">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Owner's Effort */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">Owner's Total Effort:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", task: "Filled the form once", icon: "📝" },
                  { step: "2", task: "Approved the first plan", icon: "✅" },
                  { step: "3", task: "Everything else automated", icon: "🤖" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">Step {item.step}</div>
                      <div className="text-slate-900 font-medium">{item.task}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1️⃣1️⃣ FINAL STORY MESSAGE */}
      <section className="w-full py-2 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Large Quote Block */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-10 shadow-lg mb-8">
              <div className="text-4xl text-red-600 mb-5">"</div>
              <p className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed mb-5">
                From posting struggles to consistent growth —
                <br />
                this system helped a small gym operate and grow like a professional brand.
              </p>
              <div className="text-4xl text-red-600 rotate-180">"</div>
            </div>

            {/* Supporting Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-slate-700 font-medium"
            >
              AI-powered automation transformed their marketing into a predictable growth system.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
