
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
  hideOnProjectDetail?: boolean; // New prop to control visibility on project detail pages
}

const ProjectLink = ({ 
  href, 
  className, 
  children, 
  title, 
  slug, 
  image, 
  isExternal = true,
  hideOnProjectDetail = false // Default to false for backward compatibility
}: ProjectLinkProps) => {
  // If this link should be hidden on project detail pages and we're on a project detail page
  // Get the current path to determine if we're on a project detail page
  const currentPath = window.location.pathname;
  const isProjectDetailPage = currentPath.includes('/projects/');

  // Hide the link if it should be hidden on project detail pages and we're on a project detail page
  if (hideOnProjectDetail && isProjectDetailPage) {
    return null;
  }

  // On project detail pages, always show the text passed via children prop or title
  // Never show "Try it yourself" on project detail pages
  const displayText = isProjectDetailPage 
    ? (children || title)
    : (children || title || "Try it yourself");

  const linkContent = (
    <>
      <span className="flex items-center justify-center mr-2">
        {displayText}
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
