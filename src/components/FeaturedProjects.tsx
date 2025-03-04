
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "BIP",
    description: "A comprehensive financial management platform redesigned for better user experience and accessibility.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["UX/UI Design", "Financial Tech"],
    slug: "bip",
    color: "#8B5CF6"
  },
  {
    title: "ROOMIE",
    description: "A modern roommate matching application with intuitive onboarding and secure messaging features.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    tags: ["App Design", "UX Research"],
    slug: "roomie",
    color: "#EC4899"
  },
  {
    title: "Save Rapunzel",
    description: "An educational game aimed at teaching children basic coding concepts through interactive storytelling.",
    image: "https://images.unsplash.com/photo-1616161560417-66d4db5892ec?q=80&w=2070&auto=format&fit=crop",
    tags: ["Game Design", "Educational"],
    slug: "save-rapunzel",
    color: "#10B981"
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-20">
      <div className="container">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work spanning various industries and platforms.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              slug={project.slug}
              color={project.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
