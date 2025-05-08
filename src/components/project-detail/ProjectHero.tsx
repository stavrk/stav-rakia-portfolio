
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProjectLink from "@/components/ProjectLink";
import { Project } from "@/data/projects";
import { Button } from "../ui/button";

interface ProjectHeroProps {
  project: Project;
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
  const navigate = useNavigate();
  
  // Calculate a lighter shade for the background
  const getBgShade = (color: string) => {
    // For the Roomie project with #2A4359, use a softer background
    if (color === "#2A4359") {
      return `${color}15`; // 15% opacity for #2A4359
    }
    // Default for other projects
    return `${color}10`; // 10% opacity for other colors
  };
  
  // Scroll to gallery function
  const scrollToGallery = () => {
    const gallerySection = document.querySelector('.project-gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="pt-20 pb-32 relative" style={{
      backgroundColor: getBgShade(project.color)
    }}>
      <div className="container">
        <motion.button 
          onClick={() => navigate('/projects')} 
          className="flex items-center mb-8 text-muted-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </motion.button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 
              className="text-4xl md:text-6xl font-medium mb-6" 
              style={{ color: project.color }}
            >
              {project.title}
            </h1>
            
            <p className="text-lg mb-8">
              {project.overview}
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              {project.link && <ProjectLink href={project.link} />}
              
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToGallery}
                className="bg-white hover:bg-opacity-90 transition-all duration-300"
                style={{ 
                  color: project.color, 
                  borderColor: project.color,
                  boxShadow: `0 1px 2px rgba(0,0,0,0.05)`,
                }}
              >
                Jump to Final Design
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
