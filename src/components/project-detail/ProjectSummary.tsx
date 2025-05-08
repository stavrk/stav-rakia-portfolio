
import { Project } from "@/data/projects";
import { ReactNode } from "react";

interface SummaryItemProps {
  title: string;
  children: ReactNode;
  delay?: number;
  color?: string;
}

const SummaryItem = ({ title, children, delay = 0, color = '#10B981' }: SummaryItemProps) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6" style={{ color }}>
        {title}
      </h2>
      <p className="text-muted-foreground">
        {children}
      </p>
    </div>
  );
};

export const ProjectSummary = ({ project }: { project: Project }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      <SummaryItem title="The Challenge" color={project.color}>
        {project.challenge}
      </SummaryItem>
      
      <SummaryItem title="The Solution" color={project.color} delay={0.2}>
        {project.solution}
      </SummaryItem>
    </div>
  );
};
