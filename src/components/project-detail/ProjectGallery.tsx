
import { motion } from "framer-motion";
import { ImageLightbox } from "@/components/ImageLightbox";

interface ProjectGalleryProps {
  project: any;
}

export const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  if (!project.additionalImages || project.additionalImages.length === 0) return null;
  
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <motion.h2 
          className="text-2xl md:text-3xl font-medium mb-8 md:mb-12" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Project Gallery
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {project.additionalImages.map((image: string, index: number) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden shadow-md border border-border/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ImageLightbox 
                src={image} 
                alt={`${project.title} - Additional Image ${index + 1}`} 
                className="w-full h-auto object-contain" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
