
import { Project } from "@/data/types";
import { ProjectSection } from "./ProjectSection";

interface AnimationFeaturesProps {
  project: Project;
}

export const AnimationFeatures = ({ project }: AnimationFeaturesProps) => {
  if (project.slug !== 'bip') return null;
  
  return (
    <ProjectSection title="Animation and Interaction Features" color={project.color}>
      <div className="prose prose-lg max-w-none space-y-4">
        <p className="text-muted-foreground">
          BIP's animation system is tailored to extraterrestrial perception patterns. Successful payments are represented through animated spaceships and meteorites, while loading states use orbital animations to maintain engagement. The interface provides immediate, redundant feedback through color shifts, size changes, and animated transitions—ensuring clarity across different alien perceptual abilities.
        </p>
      </div>
    </ProjectSection>
  );
};
