
import { motion } from "framer-motion";

interface InteractiveElementsData {
  title: string;
  description: string;
}

interface ProjectInteractiveElementsProps {
  interactiveElements: InteractiveElementsData;
}

export const ProjectInteractiveElements = ({ interactiveElements }: ProjectInteractiveElementsProps) => {
  return (
    <motion.div 
      className="mb-16" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-medium mb-6">{interactiveElements.title}</h2>
      <div className="prose prose-lg max-w-none">
        {interactiveElements.description.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4 text-muted-foreground text-base">{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );
};
