
import { motion } from "framer-motion";

interface SpecificationData {
  title: string;
  description: string;
  image: string;
}

interface ProjectSpecificationProps {
  specification: SpecificationData;
}

export const ProjectSpecification = ({ specification }: ProjectSpecificationProps) => {
  return (
    <motion.div 
      className="mb-16" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-medium mb-6">{specification.title}</h2>
      <div className="prose prose-lg max-w-none mb-8">
        {specification.description.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
        ))}
      </div>
      
      <div className="rounded-xl overflow-hidden border border-border/40">
        <img src={specification.image} alt="Specification & Instructional Script" className="w-full h-auto" />
      </div>
    </motion.div>
  );
};
