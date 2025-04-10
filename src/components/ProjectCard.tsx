
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
  color = "#9b87f5", // Default to primary purple if no color is provided
  index,
  comingSoon = false,
  link
}: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-card border border-border/50 shadow-sm hover:shadow-md will-change-transform cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.1, 0.3) + 0.2, duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => {
        if (!comingSoon) {
          window.location.href = `/projects/${slug}`;
        }
      }}
    >      
      <div className="relative">
        <div className="overflow-hidden rounded-t-xl aspect-video">
          <img 
            src={image} 
            alt={title}
            loading="lazy" 
            className={cn(
              "w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105", 
              comingSoon && "opacity-80"
            )}
          />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-gradient-title text-xl md:text-2xl font-medium mb-2 leading-tight">{title}</h3>
        <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
