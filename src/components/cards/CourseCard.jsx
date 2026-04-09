import CyberSecurityLogo from "../logos/CyberSecurityLogo";
import AIWithPythonLogo from "../logos/AIWithPythonLogo";
import BackendWebDevelopmentLogo from "../logos/BackendWebDevelopmentLogo";
import FrontendWebDevelopmentLogo from "../logos/FrontendWebDevelopmentLogo";
import PythonForBeginnersLogo from "../logos/PythonForBeginnersLogo";
import { motion } from "framer-motion";

function CourseCard({ course }) {
  // Check if this is the AI with Python course
  const isAIPythonLogo = course.image === "ai-python-logo";
  // Check if this is the Backend Web Development course
  const isBackendWebDevLogo = course.image === "backend-web-dev-logo";
  // Check if this is the Frontend Web Development course
  const isFrontendWebDevLogo = course.image === "frontend-web-dev-logo";
  // Check if this is the Python for Beginners course
  const isPythonBeginnerLogo = course.image === "python-beginner-logo";
  
  return (
    <motion.div 
      className="bg-[#F0C38E] rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02]"
      whileTap={{ scale: 0.98 }}
    >
      {isAIPythonLogo ? (
        <AIWithPythonLogo size="w-full h-48" isBeginnerPython={true} />
      ) : isBackendWebDevLogo ? (
        <BackendWebDevelopmentLogo size="w-full h-48" />
      ) : isFrontendWebDevLogo ? (
        <FrontendWebDevelopmentLogo size="w-full h-48" />
      ) : isPythonBeginnerLogo ? (
        <PythonForBeginnersLogo size="w-full h-48" />
      ) : (
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
          width={500}
          height={400}
        />
      )}

      <div className="p-6 grow">
        <div className="flex items-center gap-2 mb-4">
          {course.tags.map((tag, indx) => (
            <span
              key={indx}
              className="inline-block bg-gray-200 text-black text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">
          {course.title}
        </h3>
        <p className="text-black text-sm">{course.description}</p>
      </div>
    </motion.div>
  );
}

export default CourseCard;
