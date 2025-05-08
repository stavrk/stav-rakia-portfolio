
import { Project } from "@/data/projects";
import { ReactNode } from "react";

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <SummaryItem title="The Challenge">
        {project.challenge}
      </SummaryItem>
      
      <SummaryItem title="The Solution" delay={0.2}>
        {project.solution}
      </SummaryItem>
    </div>
  );
};
