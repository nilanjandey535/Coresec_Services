import { BarChart, CheckCircle, Clock, Star, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CyberSecurityLogo from "../logos/CyberSecurityLogo";
import AIWithPythonLogo from "../logos/AIWithPythonLogo";
import BackendWebDevelopmentLogo from "../logos/BackendWebDevelopmentLogo";
import FrontendWebDevelopmentLogo from "../logos/FrontendWebDevelopmentLogo";
import PythonForBeginnersLogo from "../logos/PythonForBeginnersLogo";
import FullStackWebDevelopmentLogo from "../logos/FullStackWebDevelopmentLogo";

function CoursePageCard({ course }) {
  // Check if thumbnail is the cybersecurity logo identifier
  const isCyberSecurityLogo = course.thumbnail === "cybersecurity-logo";
  // Check if thumbnail is the AI with Python logo identifier
  const isAIPythonLogo = course.thumbnail === "ai-python-advanced-logo";
  // Check if thumbnail is the Backend Web Development logo identifier
  const isBackendWebDevLogo = course.thumbnail === "backend-web-dev-logo";
  // Check if thumbnail is the Frontend Web Development logo identifier
  const isFrontendWebDevLogo = course.thumbnail === "frontend-web-dev-logo";
  // Check if thumbnail is the Python for Beginners logo identifier
  const isPythonBeginnerLogo = course.thumbnail === "python-beginner-logo";
  // Check if thumbnail is the Full Stack Web Development logo identifier
  const isFullStackWebDevLogo = course.thumbnail === "full-stack-web-dev-logo";
  
  return (
    <motion.section 
      className="bg-[#F0C38E] border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
      whileTap={{ scale: 0.98 }}
    >
        
      {/* Course Header */}
      <section className="h-48 relative bg-black">
        {isCyberSecurityLogo ? (
          <CyberSecurityLogo size="w-full h-full" />
        ) : isAIPythonLogo ? (
          <AIWithPythonLogo size="w-full h-full" isBeginnerPython={false} />
        ) : isBackendWebDevLogo ? (
          <BackendWebDevelopmentLogo size="w-full h-full" />
        ) : isFrontendWebDevLogo ? (
          <FrontendWebDevelopmentLogo size="w-full h-full" />
        ) : isPythonBeginnerLogo ? (
          <PythonForBeginnersLogo size="w-full h-full" />
        ) : isFullStackWebDevLogo ? (
          <FullStackWebDevelopmentLogo size="w-full h-full" />
        ) : (
          <img 
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs bg-white">
              {course.level}
            </span>
            <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
              <Star className="text-yellow-400 fill-yellow-400" size={14} />
              <span className="text-white text-xs">{course.rating}</span>
            </div>
          </div>
        </div>
      </section>
      {/* Course Content */}
      <section className="p-6">
        <h3 className="text-xl text-black mb-3 group-hover:text-[#E50914] transition-colors">
          {course.title}
        </h3>
        <p className="text-black text-sm mb-4">{course.description}</p>
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-black">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart size={14} />
            <span>{course.level}</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="text-sm text-black mb-2">What you'll learn:</div>
          <div className="space-y-1">
            {course.modules.slice(0, 3).map((module, moduleIndex) => (
              <div
                key={moduleIndex}
                className="flex items-start gap-2 text-sm text-black"
              >
                <CheckCircle
                  className="text-[#E50914] shrink-0 mt-0.5"
                  size={14}
                />
                <span>{module}</span>
              </div>
            ))}
          </div>
          {course.modules.length > 3 && (
            <div className="text-xs text-black mt-1">
              +{course.modules.length - 3} more modules
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-2xl text-[#E50914]">{course.price}</div>
          <Link 
            to={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-4 py-2 bg-[#E50914] text-white rounded-full hover:bg-[#B00710] transition-colors text-sm cursor-pointer block text-center"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </motion.section>
  );
}

export default CoursePageCard;
