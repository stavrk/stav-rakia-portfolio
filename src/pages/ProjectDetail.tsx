import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import ProjectLink from '../components/ProjectLink';

interface ProjectType {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  color?: string;
  comingSoon?: boolean;
  link?: string;
}

const projectsData: ProjectType[] = [
  {
    title: "ROOMIE",
    description: "Interactive guide for simplified apartment moving for young adults.",
    image: "/lovable-uploads/roomie-home-page.png",
    tags: ["UX UI Design", "Instructional Design"],
    slug: "roomie",
    color: "#a67c52",
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
    comingSoon: false,
    link: "https://360.articulate.com/review/content/6849bc42-e11b-489d-bcc4-cad07341bdbf/review"
  }
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      const foundProject = projectsData.find(p => p.slug === slug);
      if (foundProject) {
        setProject(foundProject);
      } else {
        setProject(null);
      }
      setIsLoading(false);
    }
  }, [slug]);
  
  return (
    <Layout>
      <div className="relative min-h-screen pb-20">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <p>Loading project...</p>
          </div>
        ) : project ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="container py-10">
                <div className="mb-12">
                  <button
                    onClick={() => navigate('/projects')}
                    className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Projects
                  </button>
                </div>
                
                <motion.div 
                  className="fixed left-1/2 bottom-8 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ 
                    opacity: [0.5, 1, 0.5], 
                    y: [0, 8, 0] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowDown className="h-6 w-6 text-gray-400" />
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl font-medium mb-6">{project.title}</h1>
                
                {/* Project Content */}
                <div className="grid grid-cols-1 gap-8 my-8">
                  {project.image && (
                    <motion.div 
                      className="aspect-video rounded-xl overflow-hidden shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover" 
                      />
                    </motion.div>
                  )}
                  
                  {project.description && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-lg text-muted-foreground">{project.description}</p>
                    </motion.div>
                  )}
                </div>
                
                {project.link && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:translate-y-[-2px]"
                    >
                      <span className="mr-2">View Project</span>
                    </a>
                  </motion.div>
                )}
                
                <div className="mt-20">
                  <h3 className="text-2xl font-medium mb-8">Other Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projectsData
                      .filter(p => p.slug !== slug)
                      .slice(0, 3)
                      .map((relatedProject, index) => (
                        <ProjectLink 
                          key={index}
                          title={relatedProject.title}
                          slug={relatedProject.slug}
                          image={relatedProject.image}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p>Project not found.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectDetail;
