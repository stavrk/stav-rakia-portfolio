
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ProjectSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ProjectSection = ({
  title,
  children,
  className = '',
  delay = 0,
}: ProjectSectionProps) => {
  return (
    <motion.div
      className={`mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      {title && <h2 className="text-3xl font-semibold mb-8 text-[#10B981]">{title}</h2>}
      {children}
    </motion.div>
  );
};
