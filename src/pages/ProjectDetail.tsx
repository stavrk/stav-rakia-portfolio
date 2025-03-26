import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ProjectLink from '@/components/ProjectLink';
import CollapsibleChallenges from '@/components/CollapsibleChallenges';

const projectsData = [
  // Existing project data, with updated Save Rapunzel project details
  {
    title: "SAVE RAPUNZEL",
    description: "An educational platform with a game for students and a content creation tool for educators built around the classic fairy tale.",
    image: "/lovable-uploads/save-repunzel-editor.png",
    tags: ["Instructional Design", "Game Design"],
    slug: "save-rapunzel",
    color: "#10B981",
    comingSoon: false,
    overview: "Save Rapunzel is a dual-purpose educational platform consisting of an interactive educational game for students and a content creation tool for educators. The platform transforms traditional learning material into engaging game experiences built around the classic fairy tale of Rapunzel.",
    challenge: "Traditional educational materials often fail to capture students' attention, particularly for challenging subjects. Educators need tools to create engaging content without extensive technical knowledge, while students need learning experiences that are both educational and entertaining.",
    solution: "A dual-purpose educational platform with an interactive game where correct answers help the prince climb Rapunzel's hair, and a content management system allowing educators to create custom question sets without coding knowledge.",
    animationDescription: "Strategic animations support the learning experience without causing distraction. The introductory sequence - showing Rapunzel walking through the tower with a gradual zoom to the window - replaced our original storybook concept and significantly improved engagement metrics. Similarly, the prince's climbing animation provides immediate feedback on correct answers while strengthening emotional investment in the storyline.",
    designImages: [{
      title: "Color Palette",
      image: "/lovable-uploads/save-repunzel-color-palette.png",
      description: "Earthy, storybook-inspired color palette with deep blue, moss green, golden yellow, warm copper, and brick red."
    }, 
    // Other design images remain the same
    ],
    challenges: [
      {
        title: "Content Creation System",
        description: "Designed an intuitive editor for non-technical educators through card-sorting exercises that informed a template-based approach with progressive customization.",
        icon: "FileCode"
      },
      {
        title: "Hebrew Interface Complexities",
        description: "Built a custom solution for right-to-left text, number reversal, and alignment of English within Hebrew sentences—greatly improving usability.",
        icon: "Globe"
      },
      {
        title: "Balancing Engagement with Focus",
        description: "After early prototypes showed students were distracted by animations, we added a \"focus mode\" that simplifies visuals during active learning moments.",
        icon: "Eye"
      },
      {
        title: "Workflow Management",
        description: "Established robust file versioning and backup protocols. These proved essential when partial code loss occurred, enabling full recovery without delays.",
        icon: "FileArchive"
      }
    ],
    // Rest of the existing project data remains the same
  },
  // Other projects remain unchanged
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.slug === slug);
  
  const nextProjectIndex = (projectsData.findIndex(p => p.slug === slug) + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];
  
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
      {/* Existing sections remain the same */}
      
      {project.slug === 'save-rapunzel' && (
        <>
          {/* Existing sections remain the same */}
          
          {/* Design Process & Aesthetics Section */}
          <motion.div 
            className="mb-16" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-medium mb-6">Design Process & Aesthetics</h2>
            
            <div className="space-y-8">
              <div className="mb-8">
                <p className="mb-4 text-muted-foreground">Save Rapunzel features a dual-interface design that supports both young learners and their educators. The student-facing interface uses a colorful, fairy tale-inspired palette that balances a sense of wonder with clear readability.</p>
                
                <motion.div 
                  className="mt-6 rounded-lg overflow-hidden border border-border/40" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <img src="/lovable-uploads/save-repunzel-color-palette.png" alt="Color Palette" className="w-full object-cover h-64" />
                  <div className="p-4 bg-secondary/30">
                    <h4 className="text-lg font-medium mb-1">Color Palette</h4>
                    <p className="text-sm text-muted-foreground">{project.designImages[0].description}</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Existing typography and visual elements sections remain the same */}
            </div>
          </motion.div>
          
          {/* Key Animations Section */}
          <motion.div 
            className="mb-16" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-medium mb-6">Key Animations</h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4 text-muted-foreground">{project.animationDescription}</p>
            </div>
          </motion.div>

          {/* Technical & Development Challenges Section */}
          <motion.div 
            className="mb-16" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-medium mb-6">Technical &amp; Development Challenges</h2>
            
            {project.challenges && (
              <CollapsibleChallenges 
                challenges={project.challenges} 
                color={project.color} 
              />
            )}
          </motion.div>
        </>
      )}
      
      {/* Existing remaining sections */}
    </Layout>
  );
};

export default ProjectDetail;
