
import { motion } from "framer-motion";
import { ProcessStep } from "./ProcessStep";

interface ProjectProcessProps {
  process: string[];
  color: string;
}

export const ProjectProcess = ({ process, color }: ProjectProcessProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-medium mb-6">Design Process</h2>
      <div className="space-y-4 mb-8">
        {process.map((step, index) => (
          <ProcessStep 
            key={index}
            index={index}
            step={step}
            color={color}
          />
        ))}
      </div>
    </motion.div>
  );
};
