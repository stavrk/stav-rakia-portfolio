
import { motion } from "framer-motion";
import { ImageLightbox } from "@/components/ImageLightbox";

interface DesignImage {
  title: string;
  image: string;
  description: string;
}

interface ProjectAestheticsProps {
  designProcessAndAesthetics: string;
  designImages: DesignImage[];
}

export const ProjectAesthetics = ({ designProcessAndAesthetics, designImages }: ProjectAestheticsProps) => {
  return (
    <motion.div 
      className="mb-16" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-medium mb-6">Design Process & Aesthetics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {designImages.map((designImage, index) => (
          <motion.div 
            key={index} 
            className="rounded-lg overflow-hidden border border-border/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ImageLightbox 
              src={designImage.image}
              alt={designImage.title}
              className="w-full object-contain h-auto"
            />
            <div className="p-4 bg-secondary/30">
              <h4 className="text-base sm:text-lg font-medium mb-1">{designImage.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{designImage.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="prose prose-lg max-w-none">
        {designProcessAndAesthetics.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4 text-muted-foreground text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
