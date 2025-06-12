
import { motion } from "framer-motion";
import { Project } from "@/data/types";
import { ProjectSection } from "./ProjectSection";
import { EducatorPersonas } from "./save-rapunzel/EducatorPersonas";
import { StudentPersonas } from "./save-rapunzel/StudentPersonas";
import { KeyFeatures } from "./save-rapunzel/KeyFeatures";
import { DesignSystems } from "./save-rapunzel/DesignSystems";
import { TechnologiesUsed } from "./save-rapunzel/TechnologiesUsed";
import { VideoDemo } from "./save-rapunzel/VideoDemo";

interface SaveRapunzelContentProps {
  project: Project;
}

export const SaveRapunzelContent = ({ project }: SaveRapunzelContentProps) => {
  if (project.slug !== 'save-rapunzel') return null;
  
  return (
    <>
      {/* User Research & Personas */}
      <ProjectSection title="User Research & Personas" color={project.color}>
        <div className="space-y-12">
          <EducatorPersonas color={project.color} />
          <StudentPersonas color={project.color} />
        </div>
      </ProjectSection>

      {/* Key Features */}
      <ProjectSection title="Key Features" color={project.color}>
        <KeyFeatures color={project.color} />
      </ProjectSection>

      {/* Design Systems */}
      <ProjectSection title="Design Systems" color={project.color}>
        <DesignSystems color={project.color} />
      </ProjectSection>

      {/* Technologies Used */}
      <ProjectSection title="Technologies Used" color={project.color}>
        <TechnologiesUsed color={project.color} />
      </ProjectSection>

      {/* See It in Action */}
      <ProjectSection title="See It in Action" color={project.color}>
        <VideoDemo color={project.color} />
      </ProjectSection>

      {/* What I Learned */}
      <ProjectSection title="What I Learned" color={project.color}>
        <div className="prose prose-lg max-w-none">
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: project.color }}></span>
              <span>Designing for two audiences requires visual and functional balance</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: project.color }}></span>
              <span>Animations and narrative framing dramatically improve engagement</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: project.color }}></span>
              <span>Validation features in the editor build user trust and prevent frustration</span>
            </li>
          </ul>
        </div>
      </ProjectSection>
    </>
  );
};
