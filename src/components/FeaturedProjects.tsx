
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

const FeaturedProjects = () => {
  // Filter only the specific projects we want to show on the homepage - Campus+ comes first
  const featuredProjectSlugs = ['save-rapunzel', 'campus-plus', 'bip', 'studit'];
  const featuredProjects = projects.filter(project => 
    featuredProjectSlugs.includes(project.slug) && !project.comingSoon
  );
  
  // Sort projects to match the desired order: Save Rapunzel, Campus+, BIP, Studit
  const sortedFeaturedProjects = featuredProjects.sort((a, b) => {
    const order = ['save-rapunzel', 'campus-plus', 'bip', 'studit'];
    return order.indexOf(a.slug) - order.indexOf(b.slug);
  });
  
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {sortedFeaturedProjects.map((project, index) => (
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
      </div>
    </section>
  );
};

export default FeaturedProjects;
