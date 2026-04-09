import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-8 md:px-20 py-2 bg-white from-gray-900 to-gray-800 max-h-screen">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight text-black">
          We Build <span className="text-red-600">AI-Powered</span>
          <br />
          Business Systems That Run Your Company
          <span className="text-red-600"> Automatically.</span>
        </h1>

        <p className="text-black mt-4 text-base md:text-lg">
          Stop losing leads, wasting time and doing manual work. Let our AI
          Agents, Smart Dashboard & Automation Engine run your business
          24×7—while you focus on growth.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#E50914] text-white rounded-full hover:bg-[#B00710] transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            Explore Services
            <ArrowRight size={20} />
          </motion.button>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="border border-red-500 text-red-600 px-6 py-3 rounded-full hover:bg-red-50 transition-all"
          >
            Browse Courses
          </motion.button>
        </div>
      </div>
    </section>
  );
}