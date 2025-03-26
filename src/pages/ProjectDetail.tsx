import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ProjectLink from '@/components/ProjectLink';

const projectsData = [
  // Existing projects data for ROOMIE and others
  {
    title: "SAVE RAPUNZEL",
    description: "An educational platform with a game for students and a content creation tool for educators built around the classic fairy tale.",
    image: "/lovable-uploads/save-repunzel-editor.png",
    tags: ["Instructional Design", "Game Design"],
    slug: "save-rapunzel",
    color: "#10B981",
    overview: "Save Rapunzel is a dual-purpose educational platform consisting of an interactive educational game for students and a content creation tool for educators. The platform transforms traditional learning material into engaging game experiences built around the classic fairy tale of Rapunzel.",
    challenge: "Traditional educational materials often fail to capture students' attention, particularly for challenging subjects. Educators need tools to create engaging content without extensive technical knowledge, while students need learning experiences that are both educational and entertaining.",
    solution: "A dual-purpose educational platform with an interactive game where correct answers help the prince climb Rapunzel's hair, and a content management system allowing educators to create custom question sets without coding knowledge.",
    graphicDevelopment: "Design Evolution\nThe 'Save Rapunzel' project evolved through iterative design, transforming from a static storybook concept to an interactive animation. Based on user research, we pivoted to showing Rapunzel walking to the window as the story unfolds—a change that measurably increased student engagement.",
    technicalChallenges: "One significant challenge was creating a system that allowed both simple interaction for students and flexibility for teachers in content creation. The solution was an intuitive content generator that enables teachers with no technical background to create customized questions, incorporate images, and define parameters such as time per question.\n\nAnother challenge involved displaying Hebrew text and navigating a bidirectional interface, which required developing a unique solution for reversing numbers and English words in mixed text, significantly enhancing the user experience for Hebrew speakers.",
    contentGenerator: "The generator represents a revolutionary approach to creating educational content. Unlike traditional systems, the interface balances simplicity with power, featuring built-in protection mechanisms that prevent the publication of invalid games and provide teachers with immediate feedback.\n\nThe generator includes a progressive approval system that encourages users to create at least 10 quality questions before publishing the game, with a maximum allowance of 30 questions per game. These specifications were established after extensive user research with teachers and education professionals.",
    animationFeatures: "Key Animations\nStrategic animations support the learning experience without causing distraction. The introductory sequence—showing Rapunzel walking through the tower with a gradual zoom to the window—replaced our original storybook concept and significantly improved engagement metrics. Similarly, the prince's climbing animation provides immediate feedback on correct answers while strengthening emotional investment in the storyline.",
    collaborativeDevelopment: "The project was characterized by close teamwork, with each team member bringing their skills and strengths to the table. An efficient workflow for file and version management was developed, including systematic backups, change documentation, and meticulous organization of graphic assets.\n\nDespite technical challenges, such as partial code loss at one stage, the system allowed for continued efficient work, resulting in a final product that precisely meets user needs.",
    editorShowcase: {
      title: "Content Generator Interface",
      image: "/lovable-uploads/save-repunzel-editor.png",
      description: "The intuitive content generator allows educators to create customized educational content without technical knowledge, featuring an easy-to-use interface with built-in validation and guidance."
    },
    process: ["Conducted parallel research streams on educators' content creation needs and how children engage with educational games", "Developed user personas for both audience segments (educators and students)", "Created initial concept, wireframes and interactive prototypes", "Conducted testing sessions with both educators and students to refine the user experience", "Designed vibrant fairy tale-inspired visuals for game interface and professional aesthetic for educator interface"],
    designProcessAndAesthetics: "Design System\nSave Rapunzel features a dual-interface design: a vibrant, fairy tale-inspired game interface for students with purples, reds, and golds that balance fantasy with readability, alongside a professional interface for educators.\n\nTypography\nThe game uses playful Fredoka font (18px+) for young users, while the educator dashboard maintains the same font family with strategic weight variations to establish clear information hierarchy.\n\nVisual Elements\nGame components feature rounded edges and vibrant colors appealing to young users, while background elements incorporate subtle animations that create an immersive environment without distracting from learning objectives.\n\nInteractive Features\nConsistent visual cues reinforce learning—correct answers animate the prince climbing Rapunzel's hair, providing immediate feedback on progress. The editor uses intuitive drag-and-drop and inline editing, making content creation accessible regardless of technical expertise.",
    challengesAndSolutions: "Technical Challenges & Solutions\nWe overcame several key challenges:\n\nContent Creation System: We designed an intuitive editor for non-technical educators by conducting card-sorting exercises that informed our template-based approach with progressive customization options.\nHebrew Interface Complexities: We developed a custom solution for right-to-left text, number reversal, and proper alignment of English words within Hebrew sentences, significantly improving usability.\nBalancing Engagement with Focus: After discovering students were sometimes distracted by animations during questions, we implemented a \"focus mode\" that simplifies the visual environment during active learning moments.\nWorkflow Management: We established robust file versioning and backup protocols that proved critical when we experienced partial code loss, allowing seamless recovery without significant delays.\n\nThrough iterative testing and structured problem-solving, we created a product that meets both educational goals and usability standards.",
    designImages: [{
      title: "Color Palette",
      image: "/lovable-uploads/save-repunzel-color-palette.png",
      description: "Vibrant, fairy tale-inspired color scheme with purples, reds, and golds"
    }, {
      title: "Typography",
      image: "/lovable-uploads/save-repunzel-font.png",
      description: "Rounded, playful Fredoka font with consistent sizing for optimal readability"
    }, {
      title: "Visual Elements",
      image: "/lovable-uploads/save-repunzel-interface.png",
      description: "Rounded, vibrant interface elements with consistent visual language"
    }],
    additionalImages: ["/lovable-uploads/save-repunzel-third.png", "/lovable-uploads/save-repunzel-my-games.png", "/lovable-uploads/save-repunzel-sec.png"],
    link: "https://saverapunzel.telem-hit.net/GamesList"
  },
  // Existing projects data for other projects
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
      {/* Existing hero section code */}
      <section className="pt-20 pb-32 relative" style={{
        backgroundColor: `${project.color}10`
      }}>
        {/* Existing hero section content */}
      </section>
      
      {/* Challenge & Solution Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Existing challenge and solution section content */}
            
            {/* Reordered and merged sections for Save Rapunzel */}
            {project.slug === 'save-rapunzel' && (
              <>
                {/* Content Generator Interface - MERGED */}
                {project.editorShowcase && (
                  <motion.div 
                    className="mb-16" 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-medium mb-6">{project.editorShowcase.title}</h2>
                    <p className="text-muted-foreground mb-8">{project.editorShowcase.description}</p>
                    
                    <div className="rounded-xl overflow-hidden border border-border/40 shadow-lg mb-8">
                      <img src={project.editorShowcase.image} alt="Content Generator Interface" className="w-full h-auto" />
                    </div>
                    
                    {/* Content from contentGenerator property */}
                    <div className="prose prose-lg max-w-none">
                      {project.contentGenerator.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Graphic Development Section */}
                {project.graphicDevelopment && (
                  <motion.div 
                    className="mb-16" 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-medium mb-6">Design Evolution</h2>
                    <div className="prose prose-lg max-w-none">
                      {project.graphicDevelopment.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {/* Design Process & Aesthetics Section */}
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Design System</h2>
                  
                  <div className="space-y-8">
                    {project.designProcessAndAesthetics.split('\n\n').map((paragraph, idx) => (
                      <div key={idx} className="mb-8">
                        <p className="mb-4 text-muted-foreground">{paragraph}</p>
                        
                        {/* Display relevant design image if available */}
                        {project.designImages && idx < project.designImages.length && (
                          <motion.div 
                            className="mt-6 rounded-lg overflow-hidden border border-border/40" 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            <img src={project.designImages[idx].image} alt={project.designImages[idx].title} className={`w-full object-cover ${idx === 2 ? "h-[600px]" : "h-64"}`} />
                            <div className="p-4 bg-secondary/30">
                              <h4 className="text-lg font-medium mb-1">{project.designImages[idx].title}</h4>
                              <p className="text-sm text-muted-foreground">{project.designImages[idx].description}</p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Animation Features Section */}
                {project.animationFeatures && (
                  <motion.div 
                    className="mb-16" 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-medium mb-6">Key Animations</h2>
                    <div className="prose prose-lg max-w-none">
                      {project.animationFeatures.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Technical Challenges & Solutions Section */}
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Technical Challenges & Solutions</h2>
                  
                  <div className="prose prose-lg max-w-none space-y-4">
                    {project.challengesAndSolutions.split('\n').map((paragraph, idx) => (
                      <p key={idx} className="text-muted-foreground">{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
            
            {/* Existing other project sections */}
          </div>
        </div>
      </section>
      
      {/* Existing remaining sections */}
    </Layout>
  );
};

export default ProjectDetail;
