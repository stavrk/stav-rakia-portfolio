
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProjectLink from './ProjectLink';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  color?: string;
  index: number;
  comingSoon?: boolean;
  link?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  slug, 
  index,
  comingSoon = false,
  link
}: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-card border border-border/50 shadow-sm hover:shadow-md will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.1, 0.3) + 0.2, duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >      
      <div className="relative">
        <div className="overflow-hidden rounded-t-xl aspect-video">
          <a href={comingSoon ? "#" : `/projects/${slug}`} className="block w-full h-full">
            <img 
              src={image} 
              alt={title}
              loading="lazy" 
              className={cn(
                "w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105", 
                comingSoon && "opacity-80"
              )}
            />
          </a>
        </div>
      </div>
      
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl md:text-2xl font-medium mb-2">{title}</h3>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex justify-between items-center mt-auto">
          {comingSoon ? (
            <motion.span
              className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary font-medium"
              whileHover={{ x: 5 }}
            >
              Coming Soon
            </motion.span>
          ) : (
            <a 
              href={`/projects/${slug}`} 
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-md"
            >
              View Case Study
            </a>
          )}
          
          {!comingSoon && link && (
            <ProjectLink href={link} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
