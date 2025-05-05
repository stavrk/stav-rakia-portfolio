
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
    "inline-flex items-center text-black hover:text-[#8247E5] transition-colors duration-200 font-medium text-sm",
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
