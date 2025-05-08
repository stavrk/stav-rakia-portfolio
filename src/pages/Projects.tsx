
import { useState } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

// Style overrides to hide tag elements
// This is kept as-is to maintain the current functionality
const hideTagsStyle = document.createElement('style');
hideTagsStyle.textContent = `
  /* Hide tag elements on project detail pages */
  .project-detail-page .project-tags,
  .project-detail-page .tags-container,
  .project-page-header .badge,
  .project-detail-header .badge,
  /* Target any tag elements in project pages */
  [class*="project"] .badge,
  [class*="project-detail"] .badge,
  /* Additional specific selectors */
  .badge-container,
  .tag-container,
  .project-tags,
  .tags,
  /* Target by content */
  [class*="tag"],
  /* Hide UX UI and Instructional Design labels specifically */
  .badge:contains("UX UI Design"),
  .badge:contains("Instructional Design"),
  /* Target any element that seems to be a tag */
  div:has(> span:contains("UX/UI Design")),
  div:has(> span:contains("Instructional Design")),
  /* Target any paragraph or span that contains these texts */
  p:contains("UX/UI Design"), 
  span:contains("UX/UI Design"),
  p:contains("Instructional Design"),
  span:contains("Instructional Design"),
  /* Add specific selectors that apply to project detail structure */
  .project-detail-page [class*="tags"],
  .project-detail-page [class*="badge"],
  .project-detail-page [class*="tag"],
  .project-detail-page div:has(> span:contains("UX/UI")),
  .project-detail-page div:has(> span:contains("Instructional")),
  /* Hide "Try it yourself" buttons on project detail pages */
  .project-detail-page a:contains("Try it yourself"),
  .project-detail-page button:contains("Try it yourself"),
  /* Hide icon-only buttons/links on project detail pages */
  .project-detail-page a:not(:has(span:not(:empty))),
  .project-detail-page a:has(> svg:only-child),
  .project-detail-page button:has(> svg:only-child),
  .project-detail-page .icon-only-link,
  /* Target buttons with only the external link icon in project detail */
  .project-detail-page a:has(> span:empty + svg),
  .project-detail-page a:has(> svg.lucide-external-link:only-child)
  {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    position: absolute !important;
    pointer-events: none !important;
    clip: rect(0, 0, 0, 0) !important;
    overflow: hidden !important;
  }
`;
document.head.appendChild(hideTagsStyle);

const Projects = () => {
  // Filter projects to get UX/UI projects (all except Plant Module and Playtika)
  const uxuiProjects = projects.filter(project => 
    project.slug !== "plant-module" && 
    project.title !== "Playtika Manager Onboarding Guide"
  );
  
  // Filter instructional design projects
  const instructionalProjects = projects.filter(project => 
    project.slug === "plant-module" || 
    project.title === "Playtika Manager Onboarding Guide"
  );
  
  // Sort projects to show "Coming Soon" projects at the end within each category
  const sortedUxProjects = [...uxuiProjects].sort((a, b) => {
    if (a.comingSoon && !b.comingSoon) return 1;
    if (!a.comingSoon && b.comingSoon) return -1;
    return 0;
  });
  
  return (
    <Layout>
      {/* UX/UI Projects Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 sm:px-6">
          {/* Page Header */}
          <motion.div 
            className="mb-10 md:mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-4 leading-tight md:leading-snug">My Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of my UX UI and Instructional design work.
            </p>
          </motion.div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {sortedUxProjects.map((project, index) => (
              <ProjectCard 
                key={project.slug || index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                slug={project.slug}
                color={project.color}
                index={index}
                comingSoon={project.comingSoon}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Instructional Design Section */}
      <section className="pb-20 md:pb-24">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-center">
              Instructional Design Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-12">
              I also create learning and instructional design products.
            </p>
          </motion.div>
          
          {/* Instructional Design Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {instructionalProjects.map((project, index) => (
              <ProjectCard 
                key={project.slug || index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                slug={project.slug}
                color={project.color}
                index={index + 100} // Using high index to delay animation
                comingSoon={project.comingSoon}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
