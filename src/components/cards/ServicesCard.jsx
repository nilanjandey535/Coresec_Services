import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

function ServicesCard({ service, index }) {
  return (
    <section
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
        <section>
          <h2 className="text-3xl text-black mb-4">{service.title}</h2>
          <p className="text-black text-lg mb-6">{service.description}</p>
        </section>
        <section className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="text-[#E50914] shrink-0 mt-1" size={20} />
              <span className="text-black">{feature}</span>
            </div>
          ))}
        </section>
        <section className="mb-6">
          <div className="text-sm text-black mb-2">Technologies:</div>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#E50914] text-white rounded-full hover:bg-[#B00710] transition-colors inline-flex items-center gap-2"
        >
          Get Started
          <ArrowRight size={20} />
        </motion.button>
      </div>
      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <img
          src={service.image}
          alt=""
          className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
        />
      </div>
    </section>
  );
}

export default ServicesCard;
