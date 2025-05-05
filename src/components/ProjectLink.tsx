
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProjectLinkProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  slug?: string;
  image?: string;
  isExternal?: boolean;
}

const ProjectLink = ({ 
  href, 
  className, 
  children, 
  title, 
  slug, 
  image, 
  isExternal = true 
}: ProjectLinkProps) => {
  const linkContent = (
    <>
      <span className="flex items-center justify-center mr-2">
        {children || title || "Try it yourself"}
      </span>
      <ExternalLink className="h-4 w-4" />
    </>
  );

  const linkClasses = cn(
    "inline-flex items-center justify-center px-6 py-3 rounded-full",
    "bg-white text-primary hover:bg-primary/5",
    "font-medium transition-all duration-300",
    "border-2 border-primary hover:shadow-md hover:translate-y-[-2px]",
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        {linkContent}
      </a>
    );
  }

  return (
    <Link to={href} className={linkClasses}>
      {linkContent}
    </Link>
  );
};

export default ProjectLink;
