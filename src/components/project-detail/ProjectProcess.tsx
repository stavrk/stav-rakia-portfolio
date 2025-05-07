
import { motion } from "framer-motion";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProjectProcessProps {
  process: ProcessStep[];
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
              {step.step}
            </div>
            <div>
              <h3 className="font-medium">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
