
import { ProjectSection } from "./ProjectSection";
import { StuditChallenges } from "./challenges/StuditChallenges";
import { PlantModuleChallenges } from "./challenges/PlantModuleChallenges";
import { RoomieChallenges } from "./challenges/RoomieChallenges";
import { BipChallenges } from "./challenges/BipChallenges";
import { BipTechnicalChallenges } from "./challenges/BipTechnicalChallenges";
import { DefaultChallenges } from "./challenges/DefaultChallenges";

interface ChallengesSectionProps {
  project: any;
}

export const ChallengesSection = ({ project }: ChallengesSectionProps) => {
  const renderChallengesContent = () => {
    if (project.slug === 'studit') return <StuditChallenges />;
    if (project.slug === 'plant-module') return <PlantModuleChallenges />;
    if (project.slug === 'roomie') return <RoomieChallenges />;
    if (project.slug === 'bip') {
      return project.challengesAndSolutions ? <BipChallenges /> : <BipTechnicalChallenges />;
    }
    return <DefaultChallenges challengesText={project.challengesAndSolutions} />;
  };

  if (!project.challengesAndSolutions && project.slug !== 'bip') return null;
  
  return (
    <ProjectSection 
      title={project.slug === 'bip' && !project.challengesAndSolutions 
        ? "Technical & Development Challenges" 
        : "Key Challenges & Solutions"}
      color={project.color || '#10B981'}
    >
      {renderChallengesContent()}
    </ProjectSection>
  );
};
