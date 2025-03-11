
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectLinkProps {
  href: string;
  className?: string;
}

const ProjectLink = ({ href, className }: ProjectLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center px-6 py-3 rounded-full",
        "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
        "font-medium transition-all duration-300",
        "border border-primary/20 hover:border-primary",
        className
      )}
    >
      Check It Out
      <ExternalLink className="ml-2 h-4 w-4" />
    </a>
  );
};

export default ProjectLink;
