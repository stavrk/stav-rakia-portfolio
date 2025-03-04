
import { useState } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "BIP",
    description: "A comprehensive financial management platform redesigned for better user experience and accessibility.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["UX/UI Design", "Financial Tech"],
    slug: "bip",
    color: "#8B5CF6",
    case: "Redesigned the entire user interface to improve usability while maintaining robust functionality. Created a new design system, simplified complex financial workflows, and improved accessibility features."
  },
  {
    title: "ROOMIE",
    description: "A modern roommate matching application with intuitive onboarding and secure messaging features.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    tags: ["App Design", "UX Research"],
    slug: "roomie",
    color: "#EC4899",
    case: "Designed a mobile app focused on matching compatible roommates based on lifestyle preferences. Created an intuitive onboarding flow, secure messaging system, and profile verification process."
  },
  {
    title: "Save Rapunzel",
    description: "An educational game aimed at teaching children basic coding concepts through interactive storytelling.",
    image: "https://images.unsplash.com/photo-1616161560417-66d4db5892ec?q=80&w=2070&auto=format&fit=crop",
    tags: ["Game Design", "Educational"],
    slug: "save-rapunzel",
    color: "#10B981",
    case: "Created an engaging educational game that teaches children programming concepts through interactive storytelling. Designed intuitive game mechanics, character animations, and level progression."
  },
  {
    title: "Health Tracker",
    description: "A wellness application that helps users track their physical and mental health metrics.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    tags: ["Mobile App", "Health Tech"],
    slug: "health-tracker",
    color: "#F59E0B",
    case: "Designed a wellness app with intuitive dashboards for monitoring health metrics. Created visualizations for data tracking and implemented gamification elements to encourage healthy habits."
  },
  {
    title: "Artisan",
    description: "An e-commerce platform for independent artisans to showcase and sell their handcrafted products.",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=2070&auto=format&fit=crop",
    tags: ["E-commerce", "Web Design"],
    slug: "artisan",
    color: "#0EA5E9",
    case: "Designed an e-commerce platform that highlights the craftsmanship of artisanal products. Created a clean, image-focused interface with streamlined checkout process and seller management tools."
  },
  {
    title: "Urban Transit",
    description: "A public transportation app redesigned to improve navigation and real-time updates for commuters.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
    tags: ["Mobile App", "Transportation"],
    slug: "urban-transit",
    color: "#D946EF",
    case: "Reimagined a public transportation app to provide clear navigation and real-time updates. Designed an accessible interface with offline functionality and multi-modal trip planning features."
  }
];

// Filter categories
const categories = ["All", "Mobile App", "Web Design", "UX/UI Design", "Game Design", "E-commerce"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(selectedCategory));
  
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
              A collection of my work across various industries and platforms.
            </p>
          </motion.div>
          
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
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
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.slug}
                className="group overflow-hidden rounded-xl border border-border/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
                  />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{project.case}</p>
                  <a 
                    href={`/projects/${project.slug}`} 
                    className="inline-block px-5 py-2 rounded-full bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/70"
                    style={{ borderColor: project.color }}
                  >
                    View Case Study
                  </a>
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
