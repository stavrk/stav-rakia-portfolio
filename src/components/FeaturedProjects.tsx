
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

const FeaturedProjects = () => {
  // Get only non-coming-soon projects for the featured section
  const featuredProjects = projects.filter(project => !project.comingSoon).slice(0, 5);
  
  return (
    <section id="featured-projects" className="py-20 md:py-24">
      <div className="container">
        <motion.div 
          className="mb-12 md:mb-16 text-center" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A little taste of my UX/UI work
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              title={project.title} 
              description={project.description} 
              image={project.image} 
              tags={project.tags} 
              slug={project.slug} 
              color={project.color} 
              index={index} 
              comingSoon={project.comingSoon}
              link={project.link}
            />
          ))}
        </div>
        
        {/* Center the fifth project */}
        <div className="mt-6 md:mt-8 flex justify-center">
          <div className="w-full md:w-1/2 mx-auto">
            {featuredProjects.slice(4, 5).map((project, index) => (
              <ProjectCard 
                key={project.slug} 
                title={project.title} 
                description={project.description} 
                image={project.image} 
                tags={project.tags} 
                slug={project.slug} 
                color={project.color} 
                index={index + 4} 
                comingSoon={project.comingSoon}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
