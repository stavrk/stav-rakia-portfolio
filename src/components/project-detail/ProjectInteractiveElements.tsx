
import { motion } from "framer-motion";

interface InteractiveElementsData {
  title: string;
  description: string;
}

interface ProjectInteractiveElementsProps {
  interactiveElements: InteractiveElementsData;
  color?: string;
}

export const ProjectInteractiveElements = ({ interactiveElements, color = '#10B981' }: ProjectInteractiveElementsProps) => {
  return (
    <motion.div 
      className="mb-16" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-10" style={{ color }}>
        {interactiveElements.title}
      </h2>
      <div className="prose prose-lg max-w-none">
        {interactiveElements.description.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );
};
