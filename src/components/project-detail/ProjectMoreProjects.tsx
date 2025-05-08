
import { motion } from "framer-motion";
import { getPreviousProject, getNextProject } from "@/data/projects";
import type { Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

interface ProjectMoreProjectsProps {
  currentSlug: string;
}

export const ProjectMoreProjects = ({ currentSlug }: ProjectMoreProjectsProps) => {
  const previousProject = getPreviousProject(currentSlug);
  const nextProject = getNextProject(currentSlug);

  return (
    <section className="py-20 bg-background border-t border-border/30">
      <div className="container">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-medium mb-10">More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {previousProject && (
              <ProjectCard 
                title={previousProject.title}
                description={previousProject.description}
                image={previousProject.image}
                tags={previousProject.tags}
                slug={previousProject.slug}
                color={previousProject.color}
                index={0}
                comingSoon={previousProject.comingSoon}
                link={previousProject.link}
              />
            )}
            
            {nextProject && (
              <ProjectCard 
                title={nextProject.title}
                description={nextProject.description}
                image={nextProject.image}
                tags={nextProject.tags}
                slug={nextProject.slug}
                color={nextProject.color}
                index={1}
                comingSoon={nextProject.comingSoon}
                link={nextProject.link}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
