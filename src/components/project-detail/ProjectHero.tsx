
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProjectLink from "@/components/ProjectLink";

interface ProjectHeroProps {
  project: any;
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
  const navigate = useNavigate();
  
  // Calculate a lighter shade for the background
  const getBgShade = (color: string) => {
    // For the Roomie project with #DC665C, use a softer background
    if (color === "#DC665C") {
      return `${color}15`; // 15% opacity for #DC665C
    }
    // Default for other projects
    return `${color}10`; // 10% opacity for other colors
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
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags && project.tags.map((tag: string, i: number) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ 
                    backgroundColor: `${project.color}20`, 
                    color: project.color 
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 
              className="text-4xl md:text-6xl font-medium mb-6" 
              style={{ color: project.color }}
            >
              {project.title}
            </h1>
            
            <p className="text-lg mb-8">
              {project.overview}
            </p>
            
            {project.link && <ProjectLink href={project.link} />}
          </motion.div>
          
          <motion.div 
            className="relative" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img src={project.image} alt={project.title} className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
