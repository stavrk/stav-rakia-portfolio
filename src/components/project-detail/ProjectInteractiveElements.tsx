
import { motion } from "framer-motion";
import { ProjectSection } from "./ProjectSection";

interface InteractiveElementsData {
  title: string;
  description: string;
}

interface ProjectInteractiveElementsProps {
  interactiveElements: InteractiveElementsData;
  color?: string;
}

export const ProjectInteractiveElements = ({ interactiveElements, color = '#10B981' }: ProjectInteractiveElementsProps) => {
  return (
    <ProjectSection title={interactiveElements.title} color={color}>
      <div className="prose prose-lg max-w-none">
        {interactiveElements.description.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="mb-4 text-content">{paragraph}</p>
        ))}
      </div>
    </ProjectSection>
  );
};
