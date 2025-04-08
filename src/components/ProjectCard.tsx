
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
        <div className="mb-3 flex flex-wrap">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mr-2 mb-2 bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl md:text-2xl font-medium mb-2">{title}</h3>
        
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        
        <div className="flex justify-between items-center">
          <motion.a
            href={comingSoon ? "#" : `/projects/${slug}`}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium text-primary", 
              "transition-all duration-200 hover:gap-3"
            )}
            whileHover={{ x: 5 }}
          >
            {comingSoon ? "Learn More" : "View Project"} <ArrowRight className="h-4 w-4" />
          </motion.a>
          
          {!comingSoon && link && (
            <ProjectLink href={link} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
