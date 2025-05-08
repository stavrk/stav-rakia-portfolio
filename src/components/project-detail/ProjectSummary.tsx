
import { Project } from "@/data/projects";
import { ReactNode } from "react";
import { Button } from "../ui/button";

interface SummaryItemProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

const SummaryItem = ({ title, children, delay = 0 }: SummaryItemProps) => {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-4">{title}</h2>
      <p className="text-muted-foreground">
        {children}
      </p>
    </div>
  );
};

export const ProjectSummary = ({ project }: { project: Project }) => {
  const scrollToGallery = () => {
    const gallerySection = document.querySelector('.project-gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <SummaryItem title="The Challenge">
          {project.challenge}
        </SummaryItem>
        
        <SummaryItem title="The Solution" delay={0.2}>
          {project.solution}
        </SummaryItem>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          size="lg"
          onClick={scrollToGallery}
          className="bg-white text-primary hover:bg-primary/5 border-primary"
        >
          Jump to Final Design
        </Button>
      </div>
    </div>
  );
};
