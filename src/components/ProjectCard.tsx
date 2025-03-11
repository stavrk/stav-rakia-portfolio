
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
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
  color = '#6366f1', 
  index,
  comingSoon = false,
  link
}: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div 
        className="absolute inset-0 opacity-10 z-0 transition-opacity duration-500 group-hover:opacity-20" 
        style={{ backgroundColor: color }}
      />
      
      <div className="p-6 md:p-8 flex flex-col h-full border border-border/40 rounded-xl backdrop-blur-sm relative z-10">
        {comingSoon && (
          <div className="absolute top-4 right-4 z-30">
            <div className="flex items-center bg-black/30 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              <Clock className="h-3 w-3 mr-1" />
              <span>Coming Soon</span>
            </div>
          </div>
        )}
        
        <div className="mb-4 flex">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mr-2 bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl md:text-2xl font-medium mb-2">{title}</h3>
        
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        
        <div className="mb-6 relative overflow-hidden rounded-lg aspect-video">
          <img 
            src={image} 
            alt={title} 
            className={cn(
              "w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105", 
              comingSoon && "opacity-80"
            )}
          />
          <div className="absolute inset-0 border border-border/20 rounded-lg" />
        </div>
        
        <div className="flex justify-between items-center">
          <motion.a
            href={comingSoon ? "#" : `/projects/${slug}`}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium", 
              "transition-all duration-300 hover:gap-3"
            )}
            whileHover={{ x: 5 }}
            style={{ color }}
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
