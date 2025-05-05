
import React from "react";
import { motion } from "framer-motion";

interface ProcessStepProps {
  index: number;
  step: string;
  color: string;
}

export const ProcessStep = ({ index, step, color }: ProcessStepProps) => {
  return (
    <motion.div 
      className="flex items-start" 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flex-shrink-0 mr-4 mt-0.5">
        <div 
          className="flex items-center justify-center w-6 h-6 aspect-square rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {index + 1}
        </div>
      </div>
      <p>{step}</p>
    </motion.div>
  );
};
