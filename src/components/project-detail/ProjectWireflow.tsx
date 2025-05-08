
import { motion } from "framer-motion";

interface WireflowData {
  title: string;
  description: string;
  image: string;
}

interface ProjectWireflowProps {
  wireflow: WireflowData;
  isPlantModule?: boolean;
  color?: string;
}

export const ProjectWireflow = ({ wireflow, isPlantModule = false, color = '#10B981' }: ProjectWireflowProps) => {
  return (
    <motion.div 
      className="mb-16" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-10" style={{ color }}>
        {wireflow.title}
      </h2>
      
      {isPlantModule ? (
        <div className="prose prose-lg max-w-none mb-8">
          {wireflow.description.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4 text-content">{paragraph}</p>
          ))}
        </div>
      ) : (
        <p className="text-content mb-8">{wireflow.description}</p>
      )}
      
      <div className="rounded-xl overflow-hidden">
        <img src={wireflow.image} alt="Wireflow Diagram" className="w-full h-auto" />
      </div>
    </motion.div>
  );
};
