
import React from 'react';
import { FileCode, Globe, Eye, FileArchive } from 'lucide-react';
import CollapsibleChallenges from './CollapsibleChallenges';

interface ChallengeData {
  title: string;
  description: string;
  icon: string;
}

interface ProjectDetailSectionsProps {
  projectSlug: string;
  colorPalette?: string;
  designDescription?: string;
  animationDescription?: string;
  challenges?: ChallengeData[];
}

const ProjectDetailSections: React.FC<ProjectDetailSectionsProps> = ({
  projectSlug,
  colorPalette,
  designDescription,
  animationDescription,
  challenges = [],
}) => {
  // Only process if this is the Save Rapunzel project
  if (projectSlug !== 'save-rapunzel') {
    return null;
  }

  // Map challenge icons to actual components
  const mappedChallenges = challenges.map(challenge => {
    let iconComponent;
    
    switch (challenge.icon) {
      case 'FileCode':
        iconComponent = <FileCode className="h-4 w-4 text-primary" />;
        break;
      case 'Globe':
        iconComponent = <Globe className="h-4 w-4 text-primary" />;
        break;
      case 'Eye':
        iconComponent = <Eye className="h-4 w-4 text-primary" />;
        break;
      case 'FileArchive':
        iconComponent = <FileArchive className="h-4 w-4 text-primary" />;
        break;
      default:
        iconComponent = <FileCode className="h-4 w-4 text-primary" />;
    }
    
    return {
      ...challenge,
      icon: iconComponent
    };
  });

  return (
    <>
      {/* Design Process & Aesthetics Section */}
      {designDescription && (
        <div className="mb-12">
          <h3 className="text-xl font-medium mb-4">Design Process & Aesthetics</h3>
          <p className="text-muted-foreground mb-4">{designDescription}</p>
          {colorPalette && (
            <div className="bg-secondary/10 border border-border/40 rounded-lg p-4 mt-4">
              <p className="text-sm font-medium">Color Palette:</p>
              <p className="text-muted-foreground">{colorPalette}</p>
            </div>
          )}
        </div>
      )}

      {/* Key Animations Section */}
      {animationDescription && (
        <div className="mb-12">
          <h3 className="text-xl font-medium mb-4">Key Animations</h3>
          <p className="text-muted-foreground">{animationDescription}</p>
        </div>
      )}

      {/* Technical & Development Challenges Section */}
      {challenges.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-medium mb-4">Technical & Development Challenges</h3>
          <CollapsibleChallenges challenges={mappedChallenges} />
        </div>
      )}
    </>
  );
};

export default ProjectDetailSections;
