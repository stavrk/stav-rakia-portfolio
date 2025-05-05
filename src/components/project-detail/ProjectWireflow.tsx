
import { motion } from "framer-motion";
import { ImageLightbox } from "@/components/ImageLightbox";

interface WireflowProps {
  title: string;
  image: string;
  description: string;
}

interface ProjectWireflowProps {
  wireflow: WireflowProps;
  isPlantModule?: boolean;
}

export const ProjectWireflow = ({ wireflow, isPlantModule = false }: ProjectWireflowProps) => {
  return (
    <motion.div 
      className={`mb-16 ${isPlantModule ? "" : ""}`} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-medium mb-6">{wireflow.title}</h2>
      
      <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm mb-8">
        <ImageLightbox 
          src={wireflow.image} 
          alt={wireflow.title} 
          className="w-full h-auto object-contain"
        />
      </div>
      
      <div className="prose prose-lg max-w-none">
        {wireflow.description.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4 text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
