import React from "react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="bg-linear-to-r from-[#E50914] to-black text-white py-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-gray-200">
          Let&#39;s transform your ideas into reality. Contact us today for a
          free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            // onClick={() => onNavigate("contact")}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-[#E50914] rounded-full hover:bg-gray-100 transition-all hover:scale-105"
          >
            Start a Project
          </motion.button>
          <motion.button
            // onClick={() => onNavigate("courses")}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#E50914] transition-all hover:scale-105"
          >
            Join a Course
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
