import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProjectLink from '@/components/ProjectLink';
import { motion } from 'framer-motion';
import ScrollToExplore from '@/components/ScrollToExplore';

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

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  
  useEffect(() => {
    const foundProject = projectsData.find((p) => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/projects');
    }
  }, [slug, navigate]);

  if (!project) {
    return (
      <Layout>
        <div className="container py-20">
          <p>Loading project...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="project-detail-page">
        {/* Hero Section */}
        <section 
          className="project-detail-header py-16 md:py-20" 
          style={{backgroundColor: project.color || '#f0f0f0'}}
        >
          <div className="container px-4">
            <motion.div 
              className="mb-10 md:mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">{project.title}</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{project.description}</p>
            </motion.div>
          </div>
        </section>
        
        {/* Main Image */}
        <section className="py-8 md:py-12">
          <div className="container px-4">
            <div className="overflow-hidden rounded-xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Scroll to Explore - added here between image and challenge section */}
        <ScrollToExplore className="mx-auto" />
        
        {/* Challenge Section */}
        <section className="py-8 md:py-12">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-medium mb-6">The Challenge</h2>
              <div className="prose prose-lg max-w-none">
                <p>{project.case}</p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Solution Section */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-medium mb-6">The Solution</h2>
              <div className="prose prose-lg max-w-none">
                <p>{project.case}</p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-8 md:py-12">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-medium mb-6">The Results</h2>
              <div className="prose prose-lg max-w-none">
                <p>{project.case}</p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Project Link */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container px-4">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {project.link && !project.comingSoon && (
                <ProjectLink href={project.link} />
              )}
              
              {project.comingSoon && (
                <div className="inline-block px-6 py-3 rounded-full bg-muted text-muted-foreground">
                  Coming Soon
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
