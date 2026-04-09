import { ExternalLink, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div 
      className="bg-[#F0C38E] border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
      whileTap={{ scale: 0.98 }}
    >
      {/* Project Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        
        {/* Added Image Element */}
        <img 
          src={project.image} // Assuming your project object has an 'image' property
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#E50914] text-white rounded-full text-xs">
            {project.category}
          </span>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <button className="px-4 py-2 bg-white text-black rounded-full flex items-center gap-2 text-sm">
            View Details
            <ExternalLink size={14} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl text-black mb-2 group-hover:text-[#E50914] transition-colors">
          {project.title}
        </h3>
        <p className="text-black text-sm mb-4">{project.description}</p>

        <div className="mb-4">
          <div className="text-xs text-black mb-2">Technologies:</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-200 text-black rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-[#E50914]" size={16} />
            <span className="text-sm text-black">Key Results:</span>
          </div>
          <ul className="space-y-1">
            {project.results.map((result, resultIndex) => (
              <li
                key={resultIndex}
                className="text-xs text-black flex items-start gap-2"
              >
                <span className="text-[#E50914] mt-0.5">•</span>
                {result}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-xs text-black">Client: {project.client}</div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;