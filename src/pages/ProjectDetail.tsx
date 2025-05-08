
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "@/components/Layout";
import { getProjectBySlug } from "@/data/projects";

// Project components
import { ProjectHero } from "@/components/project-detail/ProjectHero";
import { ProjectSummary } from "@/components/project-detail/ProjectSummary";
import { ProjectProcess } from "@/components/project-detail/ProjectProcess";
import { ProjectDesignResearch } from "@/components/project-detail/ProjectDesignResearch";
import { ProjectWireflow } from "@/components/project-detail/ProjectWireflow";
import { ProjectSpecification } from "@/components/project-detail/ProjectSpecification";
import { ProjectInteractiveElements } from "@/components/project-detail/ProjectInteractiveElements";
import { ProjectAesthetics } from "@/components/project-detail/ProjectAesthetics";
import { ProjectGallery } from "@/components/project-detail/ProjectGallery";
import { ProjectCallToAction } from "@/components/project-detail/ProjectCallToAction";
import { ProjectNextProject } from "@/components/project-detail/ProjectNextProject";
import { SaveRapunzelContent } from "@/components/project-detail/SaveRapunzelContent";
import { AnimationFeatures } from "@/components/project-detail/AnimationFeatures";
import { ChallengesSection } from "@/components/project-detail/ChallengesSection";

const ProjectDetail = () => {
  const { slug } = useParams<{slug: string}>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || '');
  
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
          <ProjectSummary project={project} />
          
          {/* Design Process Section */}
          {project.process && <ProjectProcess process={project.process} color={project.color} />}
          
          {/* Design Research Section - For STUDIT project */}
          {project.slug === 'studit' && project.designResearch && 
            <ProjectDesignResearch designResearch={project.designResearch} color={project.color} />
          }
          
          {/* Wireflow Section - For STUDIT project */}
          {project.slug === 'studit' && project.wireflowDetails && 
            <ProjectWireflow wireflow={project.wireflowDetails} color={project.color} />
          }
          
          {/* Wireflow Section - For BIP project */}
          {project.slug === 'bip' && project.wireflow && 
            <ProjectWireflow wireflow={project.wireflow} color={project.color} />
          }
          
          {/* Wireflow Section - For Plant Learning Module project */}
          {project.slug === 'plant-module' && project.wireflow && 
            <ProjectWireflow wireflow={project.wireflow} isPlantModule={true} color={project.color} />
          }
          
          {/* Specification & Instructional Script - For Plant Learning Module project */}
          {project.slug === 'plant-module' && project.specification && 
            <ProjectSpecification specification={project.specification} color={project.color} />
          }
          
          {/* Interactive Elements & Assessment - For Plant Learning Module project */}
          {project.slug === 'plant-module' && project.interactiveElements && 
            <ProjectInteractiveElements interactiveElements={project.interactiveElements} color={project.color} />
          }
          
          {/* Reordered and merged sections for Save Rapunzel */}
          <SaveRapunzelContent project={project} />
          
          {/* Project Structure Section - For Roomie project */}
          {project.slug === 'roomie' && project.structureTree && 
            <ProjectWireflow 
              wireflow={{
                title: project.structureTree.title || "Project Structure",
                description: project.structureTree.description,
                image: project.structureTree.image
              }} 
              color={project.color}
            />
          }

          {/* Wireframes Section - For Roomie project */}
          {project.slug === 'roomie' && project.wireframes && 
            <ProjectWireflow wireflow={project.wireframes} color={project.color} />
          }
          
          {/* Design Process & Aesthetics Section with images - For projects other than Save Rapunzel */}
          {project.slug !== 'save-rapunzel' && project.designProcessAndAesthetics && project.designImages && 
            <ProjectAesthetics 
              designProcessAndAesthetics={project.designProcessAndAesthetics} 
              designImages={project.designImages} 
              color={project.color}
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
      
      {/* Next Project */}
      <ProjectNextProject currentSlug={slug || ''} />
    </Layout>
  );
};

export default ProjectDetail;
