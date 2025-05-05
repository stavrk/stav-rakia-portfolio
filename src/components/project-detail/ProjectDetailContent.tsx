
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "@/components/Layout";
import { 
  ProjectHero,
  ProjectChallengeSolution,
  ProjectProcess,
  ProjectDesignResearch,
  ProjectWireflow,
  ProjectSpecification,
  ProjectInteractiveElements,
  ProjectAesthetics,
  ProjectGallery,
  ProjectCallToAction,
  ProjectNextProject,
  ChallengesSection
} from "@/components/project-detail";
import { SaveRapunzelContent } from "@/components/project-detail/SaveRapunzelContent";
import { AnimationFeatures } from "@/components/project-detail/AnimationFeatures";
import { Project } from '@/data/projectsData';

interface ProjectDetailContentProps {
  project: Project;
  nextProject: Project;
}

export const ProjectDetailContent = ({ project, nextProject }: ProjectDetailContentProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <ProjectHero project={project} />
      
      {/* Challenge & Solution Section */}
      <section className="py-20">
        <div className="container">
          <ProjectChallengeSolution challenge={project.challenge} solution={project.solution} />
          
          {/* Design Process Section */}
          {project.process && <ProjectProcess process={project.process} color={project.color} />}
          
          {/* Design Research Section - For STUDIT project */}
          {project.slug === 'studit' && project.designResearch && 
            <ProjectDesignResearch designResearch={project.designResearch} />
          }
          
          {/* Wireflow Section - For STUDIT project */}
          {project.slug === 'studit' && project.wireflowDetails && 
            <ProjectWireflow wireflow={project.wireflowDetails} />
          }
          
          {/* Wireflow Section - For BIP project */}
          {project.slug === 'bip' && project.wireflow && 
            <ProjectWireflow wireflow={project.wireflow} />
          }
          
          {/* Wireflow Section - For Plant Learning Module project */}
          {project.slug === 'plant-module' && project.wireflow && 
            <ProjectWireflow wireflow={project.wireflow} isPlantModule={true} />
          }
          
          {/* Specification & Instructional Script - For Plant Learning Module project */}
          {project.slug === 'plant-module' && project.specification && 
            <ProjectSpecification specification={project.specification} />
          }
          
          {/* Interactive Elements & Assessment - For Plant Learning Module project */}
          {project.slug === 'plant-module' && project.interactiveElements && 
            <ProjectInteractiveElements interactiveElements={project.interactiveElements} />
          }
          
          {/* Reordered and merged sections for Save Rapunzel */}
          <SaveRapunzelContent project={project} />
          
          {/* Project Structure Section - For Roomie project */}
          {project.slug === 'roomie' && project.structureTree && 
            <ProjectWireflow wireflow={{
              title: project.structureTree.title || "Project Structure",
              description: project.structureTree.description,
              image: project.structureTree.image
            }} />
          }

          {/* Wireframes Section - For Roomie project */}
          {project.slug === 'roomie' && project.wireframes && 
            <ProjectWireflow wireflow={project.wireframes} />
          }
          
          {/* Design Process & Aesthetics Section with images - For projects other than Save Rapunzel */}
          {project.slug !== 'save-rapunzel' && project.designProcessAndAesthetics && project.designImages && 
            <ProjectAesthetics 
              designProcessAndAesthetics={project.designProcessAndAesthetics} 
              designImages={project.designImages} 
            />
          }
          
          {/* Animation Features Section - For BIP */}
          <AnimationFeatures project={project} />
          
          {/* Challenges & Solutions Section - For all projects except Save Rapunzel */}
          <ChallengesSection project={project} />
        </div>
      </section>
      
      {/* Images Section */}
      <ProjectGallery project={project} />
      
      {/* Check It Out section */}
      {project.link && <ProjectCallToAction title={project.title} link={project.link} />}
      
      {/* Next Project - Updated with image and title */}
      <ProjectNextProject nextProject={nextProject} />
    </Layout>
  );
};
