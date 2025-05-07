
import { motion } from "framer-motion";
import { getNextProject, getPreviousProject } from "@/data/projects";
import type { Project } from "@/data/projects";
import ProjectCard from "../ProjectCard";

interface ProjectNextProjectProps {
  currentSlug: string;
}

export const ProjectNextProject = ({ currentSlug }: ProjectNextProjectProps) => {
  const nextProject = getNextProject(currentSlug);
  const prevProject = getPreviousProject(currentSlug);

  return (
    <section className="py-20 bg-background border-t border-border/30">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 section-title-gradient">More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Project */}
            <ProjectCard 
              title={prevProject.title}
              description={prevProject.shortDescription || prevProject.overview.substring(0, 100) + '...'}
              image={prevProject.image}
              tags={prevProject.tags || []}
              slug={prevProject.slug}
              color={prevProject.color}
              index={0}
              link={`/projects/${prevProject.slug}`}
            />
            
            {/* Next Project */}
            <ProjectCard 
              title={nextProject.title}
              description={nextProject.shortDescription || nextProject.overview.substring(0, 100) + '...'}
              image={nextProject.image}
              tags={nextProject.tags || []}
              slug={nextProject.slug}
              color={nextProject.color}
              index={1}
              link={`/projects/${nextProject.slug}`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
