
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[]; // We keep this in the interface for compatibility
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
  tags, // Keeping this parameter even though we don't display tags
  slug, 
  color = "#9b87f5", // Default to primary purple if no color provided
  index,
  comingSoon = false,
  link
}: ProjectCardProps) => {
  // Handle card click - navigate to the project detail page unless "coming soon"
  const handleCardClick = (e: React.MouseEvent) => {
    if (!comingSoon && !e.defaultPrevented) {
      window.location.href = `/projects/${slug}`;
    }
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-card border border-border/50 shadow-sm hover:shadow-md will-change-transform cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.1, 0.3) + 0.2, duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={handleCardClick}
    >      
      {/* Project Image */}
      <div className="relative">
        <div className="overflow-hidden rounded-t-xl aspect-video flex items-center justify-center">
          <img 
            src={image} 
            alt={title}
            loading="lazy" 
            className={cn(
              "transition-transform duration-300 group-hover:scale-105 object-contain", 
              comingSoon && "opacity-80",
              slug === 'campus-plus' ? "w-3/4 h-3/4" : "w-full h-full object-cover object-center"
            )}
          />
          
          {/* Coming Soon Badge */}
          {comingSoon && (
            <div className="absolute top-4 right-4 z-10 bg-black/30 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm flex items-center">
              <span className="mr-1">Coming Soon</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-4">
        <h3 className="text-gradient-title text-xl md:text-2xl font-medium mb-2 leading-tight">{title}</h3>
        <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
        
        {/* Divider line */}
        <div className="h-px w-full bg-[#f4efff] my-4"></div>
        
        {/* Call to action */}
        {!comingSoon ? (
          <Link 
            to={`/projects/${slug}`}
            className="inline-flex items-center text-black hover:text-[#8247E5] transition-colors duration-200 font-medium text-sm"
            onClick={(e) => e.stopPropagation()} // Prevent triggering the parent div's onClick
          >
            View Case Study
            <ArrowRight className="ml-1 h-4 w-4 transition-colors duration-200" />
          </Link>
        ) : (
          <span className="inline-block text-sm text-muted-foreground font-medium">
            Coming Soon
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
