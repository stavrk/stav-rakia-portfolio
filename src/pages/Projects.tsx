
import { useState } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import ProjectLink from '@/components/ProjectLink';

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
    description: "Interactive game and content tool that turns lessons into Rapunzel-themed learning experiences.",
    image: "/lovable-uploads/save-repunzel-editor.png",
    tags: ["Instructional Design", "Game Design"],
    slug: "save-rapunzel",
    color: "#10B981",
    case: "Interactive game and content tool that turns lessons into Rapunzel-themed learning experiences.",
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

const categories = ["All", "UX UI Design", "Instructional Design", "Game Design", "Speculative Design"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(selectedCategory));
  
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.comingSoon && !b.comingSoon) return 1;
    if (!a.comingSoon && b.comingSoon) return -1;
    return 0;
  });
  
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-4">My Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of my UX UI and Instructional design work.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-white text-primary border border-primary hover:bg-primary/5"
                }`}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedProjects.map((project, index) => (
              <motion.div 
                key={project.slug || index}
                className="group overflow-hidden rounded-xl border border-border/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  {project.comingSoon && (
                    <div className="absolute top-4 right-4 z-30">
                      <div className="flex items-center bg-black/30 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>Coming Soon</span>
                      </div>
                    </div>
                  )}
                  <a 
                    href={project.comingSoon ? "#" : `/projects/${project.slug}`}
                    className="block relative w-full h-full"
                  >
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
                    />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 ${project.comingSoon ? 'opacity-80' : ''}`}
                    />
                    <div className="absolute bottom-0 left-0 z-20 p-6 w-full">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/30 text-white backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-medium text-white mb-1">{project.title}</h3>
                    </div>
                  </a>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  {project.comingSoon ? (
                    <span 
                      className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary font-medium cursor-default opacity-75"
                    >
                      In Development
                    </span>
                  ) : (
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href={`/projects/${project.slug}`} 
                        className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-md"
                      >
                        View Case Study
                      </a>
                      {project.link && (
                        <ProjectLink href={project.link} />
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
