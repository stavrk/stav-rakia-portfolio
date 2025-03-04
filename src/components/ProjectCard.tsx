
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  color?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, tags, slug, color = '#6366f1', index }: ProjectCardProps) => {
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
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 border border-border/20 rounded-lg" />
        </div>
        
        <motion.a
          href={`/projects/${slug}`}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium", 
            "transition-all duration-300 hover:gap-3"
          )}
          whileHover={{ x: 5 }}
          style={{ color }}
        >
          View Project <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
