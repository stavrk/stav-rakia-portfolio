
import { motion } from "framer-motion";
import { ProjectSection } from "./ProjectSection";

interface ProjectProcessProps {
  process: string[];
  color: string;
}

export const ProjectProcess = ({ process, color }: ProjectProcessProps) => {
  return (
    <ProjectSection title="Design Process" color={color} className="mt-16">
      <div className="space-y-4 mb-8">
        {process.map((step, index) => (
          <motion.div 
            key={index} 
            className="flex items-start" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div 
              className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-4 mt-0.5 text-white" 
              style={{ backgroundColor: color }}
            >
              {index + 1}
            </div>
            <p>{step}</p>
          </motion.div>
        ))}
      </div>
    </ProjectSection>
  );
};
