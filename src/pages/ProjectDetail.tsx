
import { useParams } from 'react-router-dom';
import { ProjectDetailContent } from "@/components/project-detail/ProjectDetailContent";
import { projectsData } from "@/data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  // Find next project data for the navigation section
  const nextProjectIndex = project 
    ? (projectsData.findIndex(p => p.slug === slug) + 1) % projectsData.length 
    : 0;
  const nextProject = projectsData[nextProjectIndex];

  return <ProjectDetailContent project={project!} nextProject={nextProject} />;
};

export default ProjectDetail;
