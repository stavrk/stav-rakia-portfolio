
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
  hideOnProjectDetail?: boolean; // Controls visibility on project detail pages
}

const ProjectLink = ({ 
  href, 
  className, 
  children, 
  title, 
  slug, 
  image, 
  isExternal = true,
  hideOnProjectDetail = false 
}: ProjectLinkProps) => {
  // Determine if we're on a project detail page
  const currentPath = window.location.pathname;
  const isProjectDetailPage = currentPath.includes('/projects/');

  // Hide link if:
  // 1. We are explicitly told to hide it on project detail pages and we're on a project detail page, OR
  // 2. We're on a project detail page and there's no text content (just an icon)
  if ((hideOnProjectDetail && isProjectDetailPage) || (isProjectDetailPage && !children && !title)) {
    return null;
  }

  // Determine what text to display:
  // - On project detail pages: use children or title
  // - On other pages: use children, title, or default to "Try it yourself"
  const displayText = isProjectDetailPage 
    ? (children || title)
    : (children || title || "Try it yourself");

  // Link content with icon
  const linkContent = (
    <>
      <span className="flex items-center justify-center mr-2">
        {displayText}
      </span>
      <ExternalLink className="h-4 w-4" />
    </>
  );

  // Common classes for both link types
  const linkClasses = cn(
    "inline-flex items-center justify-center px-6 py-3 rounded-full",
    "bg-white text-primary hover:bg-primary/5",
    "font-medium transition-all duration-300",
    "border-2 border-primary hover:shadow-md hover:translate-y-[-2px]",
    className
  );

  // Render external link or React Router link based on isExternal prop
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
