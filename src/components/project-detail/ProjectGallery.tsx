import { motion } from "framer-motion";
import { Project } from "@/data/types";
interface ProjectGalleryProps {
  project: Project;
}
export const ProjectGallery = ({
  project
}: ProjectGalleryProps) => {
  if (!project.additionalImages || project.additionalImages.length === 0) {
    return null;
  }
  return <section className="py-20 bg-secondary/50 project-gallery-section">
      <div className="container">
        <motion.h2 className="text-4xl font-bold mb-10 text-center" style={{
        color: project.color || '#10B981'
      }} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.5
      }}>
          Project Gallery
        </motion.h2>
        
        {project.slug === 'bip' || project.slug === 'campus-plus' ?
      // BIP and Campus+ gallery - 4 images in one row, with consistent styling
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {project.additionalImages && project.additionalImages.map((image: string, index: number) => <motion.div key={index} className="rounded-xl overflow-hidden" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }}>
                <img src={image} alt={`${project.title} - Image ${index + 1}`} className="w-full h-auto aspect-[9/19] object-cover" />
              </motion.div>)}
          </div> :
      // For other projects - 2-column grid
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.additionalImages && project.additionalImages.map((image: string, index: number) => <motion.div key={index} className="rounded-xl overflow-hidden" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }}>
                <img src={image} alt={`${project.title} - Image ${index + 1}`} className="w-full h-auto" />
              </motion.div>)}
            
            {/* Add roomie-expenses to ROOMIE gallery */}
            {project.slug === 'roomie' && <motion.div className="rounded-xl overflow-hidden" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: 0.3,
          duration: 0.5
        }}>
                <img src="/lovable-uploads/roomie-expenses.png" alt="ROOMIE - Expense Tracking Interface" className="w-full h-auto" />
              </motion.div>}
            
            {/* Add save-repunzel-my-games-add to SAVE RAPUNZEL gallery */}
            {project.slug === 'save-rapunzel' && <motion.div className="rounded-xl overflow-hidden" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: 0.3,
          duration: 0.5
        }}>
                
              </motion.div>}
          </div>}
      </div>
    </section>;
};