
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProjectLinkProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  slug?: string;
  image?: string;
}

const ProjectLink = ({ href, className, children, title, slug, image }: ProjectLinkProps) => {
  // If slug is provided, use it to create a link to the project
  if (slug) {
    return (
      <Link 
        to={`/projects/${slug}`}
        className="block"
      >
        <div className="group overflow-hidden rounded-lg border border-border/40 transition-all hover:translate-y-[-5px]">
          {image && (
            <div className="aspect-video overflow-hidden">
              <img 
                src={image} 
                alt={title || ''} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
          {title && (
            <div className="p-4">
              <h3 className="font-medium text-lg">{title}</h3>
            </div>
          )}
        </div>
      </Link>
    );
  }

  // Default external link behavior
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 rounded-full",
        "bg-white text-primary hover:bg-primary/5",
        "font-medium transition-all duration-300",
        "border-2 border-primary hover:translate-y-[-2px]",
        className
      )}
    >
      <span className="flex items-center justify-center mr-2">
        {children || "Check It Out"}
      </span>
      <ExternalLink className="h-4 w-4" />
    </a>
  );
};

export default ProjectLink;
