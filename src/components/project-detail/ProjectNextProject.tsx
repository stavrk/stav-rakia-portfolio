
import { motion } from "framer-motion";

interface ProjectNextProjectProps {
  nextProject: {
    title: string;
    image: string;
    slug: string;
    color: string;
  };
}

export const ProjectNextProject = ({ nextProject }: ProjectNextProjectProps) => {
  return (
    <section className="py-20 bg-background border-t border-border/30">
      <div className="container">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-muted-foreground mb-2">Next Project</p>
          <h3 
            className="text-2xl font-medium mb-6" 
            style={{ color: nextProject.color }}
          >
            {nextProject.title}
          </h3>
          
          <div className="mb-8 max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
            <img src={nextProject.image} alt={nextProject.title} className="w-full h-auto object-cover" />
          </div>
          
          <a 
            href={`/projects/${nextProject.slug}`} 
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
          >
            View Next Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};
