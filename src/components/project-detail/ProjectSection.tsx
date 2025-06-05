
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ProjectSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  color?: string;
}

export const ProjectSection = ({
  title,
  children,
  className = '',
  delay = 0,
  color = '#00747A', // Updated default to turquoise instead of green
}: ProjectSectionProps) => {
  return (
    <motion.div
      className={`mb-20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      {title && (
        <h2 
          className="text-4xl font-bold mb-10" 
          style={{ color: color }}
        >
          {title}
        </h2>
      )}
      <div className="text-content">
        {children}
      </div>
    </motion.div>
  );
};
