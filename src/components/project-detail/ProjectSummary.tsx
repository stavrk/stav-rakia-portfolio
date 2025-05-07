
import { Project } from "@/data/projects";
import { ProjectSection } from "./ProjectSection";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SummaryItemProps {
  title: string;
  children: ReactNode;
  delay?: number;
  color?: string;
}

const SummaryItem = ({ title, children, delay = 0, color = "#10B981" }: SummaryItemProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4" style={{ color }}>
        {title}
      </h2>
      <p className="text-muted-foreground">
        {children}
      </p>
    </div>
  );
};

export const ProjectSummary = ({ project }: { project: Project }) => {
  const scrollToGallery = () => {
    const galleryElement = document.getElementById("project-gallery");
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
        <SummaryItem title="The Challenge" color={project.color}>
          {project.challenge}
        </SummaryItem>
        
        <SummaryItem title="The Solution" delay={0.2} color={project.color}>
          {project.solution}
        </SummaryItem>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-center"
      >
        <Button 
          onClick={scrollToGallery} 
          variant="outline" 
          size="lg" 
          className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-full border shadow-sm"
        >
          Jump to Final Design
        </Button>
      </motion.div>
    </div>
  );
};
