
import { motion } from "framer-motion";
import { ImageLightbox } from "@/components/ImageLightbox";

interface DesignResearchProps {
  title: string;
  image: string;
  description: string;
}

interface ProjectDesignResearchProps {
  designResearch: DesignResearchProps;
}

export const ProjectDesignResearch = ({ designResearch }: ProjectDesignResearchProps) => {
  return (
    <motion.div 
      className="mb-16" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-medium mb-6">{designResearch.title}</h2>
      
      <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm mb-8">
        <ImageLightbox 
          src={designResearch.image} 
          alt={designResearch.title} 
          className="w-full h-auto object-contain"
        />
      </div>
      
      <div className="prose prose-lg max-w-none">
        {designResearch.description.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4 text-muted-foreground text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
