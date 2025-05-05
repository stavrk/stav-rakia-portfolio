import { useState } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

// Add CSS to hide tag elements on project detail pages
const hideTagsStyle = document.createElement('style');
hideTagsStyle.textContent = `
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
  .project-detail-page div:has(> span:contains("Instructional"))
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

const projectsData = [
  {
    title: "ROOMIE",
    description: "Interactive guide for simplified apartment moving for young adults.",
    image: "/lovable-uploads/roomie-home-page.png",
    tags: ["UX UI Design", "Instructional Design"],
    slug: "roomie",
    color: "#F4DB8B",
    case: "Interactive guide for simplified apartment moving for young adults.",
    comingSoon: false,
    link: "https://xd.adobe.com/view/36102754-0760-402c-b896-3eb51e5b9a6f-6343/?fullscreen"
  },
  {
    title: "SAVE RAPUNZEL",
    description: "Interactive game and tool turning lessons into experiences.",
    image: "/lovable-uploads/save-repunzel-editor.png",
    tags: ["Instructional Design", "Game Design"],
    slug: "save-rapunzel",
    color: "#10B981",
    case: "Interactive game and tool turning lessons into experiences.",
    comingSoon: false,
    link: "https://saverapunzel.telem-hit.net/GamesList"
  },
  {
    title: "BIP",
    description: "Money transfer app designed for extraterrestrial users with unique needs.",
    image: "/lovable-uploads/bip-lots-of-iphones.png",
    tags: ["UX UI Design", "Speculative Design"],
    slug: "bip",
    color: "#8B5CF6",
    case: "Money transfer app designed for extraterrestrial users with unique needs.",
    comingSoon: false,
    link: "https://xd.adobe.com/view/866550b7-89fd-4901-92d2-dc087ed5fb28-d336/screen/4d7b2d99-6a21-45fb-b04b-c398d6bedc83/?fullscreen"
  },
  {
    title: "STUDIT",
    description: "AI-powered study companion for personalized test preparation.",
    image: "/lovable-uploads/studit-home-page.png",
    tags: ["UX UI Design", "Instructional Design"],
    slug: "studit",
    color: "#F59E0B",
    case: "AI-powered study companion for personalized test preparation.",
    comingSoon: false,
    link: "https://xd.adobe.com/view/a56c02e8-2d4f-4803-bcbb-811822907cf1-f03f/?fullscreen"
  },
  {
    title: "PLANT LEARNING MODULE",
    description: "Interactive experience to build confidence in houseplant care.",
    image: "/lovable-uploads/plant-first-page.png",
    tags: ["Instructional Design"],
    slug: "plant-module",
    color: "#22C55E",
    case: "Interactive experience to build confidence in houseplant care.",
    comingSoon: false,
    link: "https://360.articulate.com/review/content/6849bc42-e11b-489d-bcc4-cad07341bdbf/review"
  },
  {
    title: "Playtika Manager Onboarding Guide",
    description: "An interactive learning module specifically designed for Playtika managers who need to guide new employees through the onboarding process.",
    image: "/lovable-uploads/playtika-home.jpg",
    tags: ["Instructional Design"],
    color: "#D946EF",
    case: "An interactive learning module specifically designed for Playtika managers who need to guide new employees through the onboarding process.",
    comingSoon: true
  }
];

const Projects = () => {
  // Projects are now always displayed without filtering
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (a.comingSoon && !b.comingSoon) return 1;
    if (!a.comingSoon && b.comingSoon) return -1;
    return 0;
  });
  
  return (
    <Layout>
      <section className="py-16 md:py-20">
        <div className="container px-4 sm:px-6">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {sortedProjects.map((project, index) => (
              <ProjectCard 
                key={project.slug || index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                slug={project.slug || ''}
                color={project.color}
                index={index}
                comingSoon={project.comingSoon || false}
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
