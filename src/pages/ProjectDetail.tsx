
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ProjectLink from '@/components/ProjectLink';

const projectsData = [{
  title: "ROOMIE",
  description: "An interactive guide designed to simplify the often overwhelming process of moving into a first apartment for young adults.",
  image: "/lovable-uploads/roomie-home-page.png",
  tags: ["UX/UI Design", "Instructional Design"],
  slug: "roomie",
  color: "#F4DB8B",
  overview: "Roomie is a comprehensive digital guide designed to simplify the often overwhelming process of moving into a first apartment. This project emerged from recognizing the challenges and uncertainties that young adults face when navigating housing independence for the first time.",
  challenge: "First-time movers face numerous challenges: understanding lease agreements, budgeting for moving expenses, knowing what essential items to purchase, and navigating roommate dynamics. Traditional resources are often scattered, overwhelming, or fail to address the emotional aspects of this significant life transition.",
  solution: "We designed Roomie with a user-centric workflow that guides users through each stage of the moving process. The interface combines practical checklists with supportive content that acknowledges both the practical and emotional aspects of moving.",
  structureTree: {
    title: "Project Structure",
    image: "/lovable-uploads/map-roomie.png",
    description: "Our project's structure was carefully planned to ensure a logical flow of information and features. The map above illustrates how different sections of the application interconnect, making the moving process more manageable for users."
  },
  wireframes: {
    title: "Initial Wireframes",
    image: "/lovable-uploads/roomie-wireframe.png",
    description: "At the beginning of our process, we focused heavily on wireframing to prioritize product definition, interaction design, and user experience. These wireframes helped us establish the core functionality and user flows before moving into the visual design phase."
  },
  process: ["Conducted extensive user research, interviewing 12 recent first-time movers about their challenges and wishes", "Synthesized insights and created user personas and journey maps to identify key pain points", "Developed multiple iterations of wireframes and prototypes for testing with potential users", "Refined the interface and features based on user feedback", "Created final designs with a warm, approachable aesthetic and calming color palette"],
  designProcessAndAesthetics: "For Roomie, our team crafted a visual language that balances practicality with emotional support. The color palette features warm, calming tones—primarily muted blues and soft yellows—to counteract the stress typically associated with moving. This deliberate choice helps create a sense of stability amidst the chaos of relocation.\n\nTypography plays a crucial role in the interface, with the primary font family being Assistant for its excellent readability and modern feel. Headers use weightier versions of the font (600-700) to create clear visual hierarchy, while body text maintains comfortable readability at 16px minimum.\n\nThe visual components follow a consistent rounded design system—buttons, cards, and input fields all feature softly rounded corners (8px radius) that contribute to the approachable feel of the application. Interactive elements like checklists and the budget calculator use subtle shadows and state changes to provide clear feedback to users.",
  challengesAndSolutions: "One significant challenge emerged during user testing: participants felt overwhelmed by seeing all moving tasks simultaneously. We addressed this by implementing a progressive disclosure system that reveals tasks based on timeline relevance, with a customizable view option for users who prefer seeing the complete picture. This solution required several iterations of the information architecture and careful consideration of how to balance comprehensive information with manageable cognitive load.\n\nThe roommate agreement generator presented another challenge—how to create legally sound templates while keeping them accessible to young adults with no legal background. The solution involved collaboration with a legal consultant and multiple rounds of simplification testing to strike the right balance between comprehensiveness and clarity.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/color-palette-roomie.png",
    description: "Warm, calming tones with soft yellows and muted accents"
  }, {
    title: "Typography",
    image: "/lovable-uploads/typography-roomie.png",
    description: "Assistant font family with weight variations for hierarchy"
  }, {
    title: "Interface Components",
    image: "/lovable-uploads/interface-roomie.png",
    description: "Rounded components with subtle shadows and clear visual feedback"
  }],
  additionalImages: ["/lovable-uploads/roomie-4.png", "/lovable-uploads/roomie-phone.png", "/lovable-uploads/roomie-typs-img.png"],
  link: "https://xd.adobe.com/view/36102754-0760-402c-b896-3eb51e5b9a6f-6343/?fullscreen"
}, /* ... other project data ... */];

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
      <section className="pt-20 pb-32 relative" style={{
        backgroundColor: `${project.color}10`
      }}>
        <div className="container">
          <motion.button 
            onClick={() => navigate('/projects')} 
            className="flex items-center mb-8 text-muted-foreground hover:text-foreground transition-colors" 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </motion.button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-background text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 
                className="text-4xl md:text-6xl font-medium mb-6" 
                style={{ color: project.color }}
              >
                {project.title}
              </h1>
              
              <p className="text-lg mb-8">
                {project.overview}
              </p>
              
              {project.link && <ProjectLink href={project.link} />}
            </motion.div>
            
            <motion.div 
              className="relative" 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img src={project.image} alt={project.title} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-4">The Challenge</h2>
                <p className="text-muted-foreground">
                  {project.challenge}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-4">The Solution</h2>
                <p className="text-muted-foreground">
                  {project.solution}
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.5 }} 
              className="mb-16"
            >
              <h2 className="text-2xl font-medium mb-6">Design Process</h2>
              <div className="space-y-4 mb-8">
                {project.process && project.process.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start" 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div 
                      className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-4 mt-0.5 text-white" 
                      style={{ backgroundColor: project.color }}
                    >
                      {index + 1}
                    </div>
                    <p>{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {project.slug === 'save-rapunzel' && (
              <>
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Design Evolution</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4 text-muted-foreground">The 'Save Rapunzel' project was characterized by an iterative design process that underwent numerous changes from the initial concept to the final product. The graphics and visual elements were carefully tailored to enhance the user experience.</p>
                  </div>
                  
                  <div className="mt-8 rounded-xl overflow-hidden border border-border/40">
                    <img src="/lovable-uploads/first-version-save-repunzel.png" alt="Initial Design Concept" className="w-full h-auto" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Design System</h2>
                  
                  <div className="space-y-8">
                    <div className="mb-8">
                      <p className="mb-4 text-muted-foreground">Save Rapunzel features a dual-interface design that supports both young learners and their educators. The student-facing interface uses a colorful, fairy tale-inspired palette that balances a sense of wonder with clear readability.</p>
                      
                      {project.designImages && 0 < project.designImages.length && (
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
                            <p className="text-sm text-muted-foreground">Earthy, storybook-inspired color palette with deep blue, moss green, golden yellow, warm copper, and brick red.</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Typography</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4 text-muted-foreground">The game uses playful Fredoka font (18px+) for young users, while the educator dashboard maintains the same font family with strategic weight variations to establish clear information hierarchy.</p>
                  </div>
                  
                  <div className="mt-8 rounded-xl overflow-hidden border border-border/40">
                    <img src="/lovable-uploads/save-repunzel-font.png" alt="Typography System" className="w-full h-auto" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Visual Elements</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4 text-muted-foreground">Game components feature rounded edges and vibrant colors appealing to young users, while background elements incorporate subtle animations that create an immersive environment without distracting from learning objectives.</p>
                  </div>
                  
                  <div className="mt-8 rounded-xl overflow-hidden border border-border/40">
                    <img src="/lovable-uploads/save-repunzel-interface.png" alt="Interface Components" className="w-full h-auto" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Interactive Features</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4 text-muted-foreground">Consistent visual cues reinforce learning—correct answers animate the prince climbing Rapunzel's hair, providing immediate feedback on progress. The editor uses intuitive drag-and-drop and inline editing, making content creation accessible regardless of technical expertise.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Key Animations</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4 text-muted-foreground">Strategic animations support the learning experience without causing distraction. The introductory sequence—showing Rapunzel walking through the tower with a gradual zoom to the window—replaced our original storybook concept and significantly improved engagement metrics. Similarly, the prince's climbing animation provides immediate feedback on correct answers while strengthening emotional investment in the storyline.</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Technical &amp; Development Challenges</h2>
                  
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-muted-foreground">We overcame several key challenges:</p>
                    
                    <p className="text-muted-foreground">
                      <strong>Content Creation System:</strong> Designed an intuitive editor for non-technical educators through card-sorting exercises that informed a template-based approach with progressive customization.
                    </p>
                    
                    <p className="text-muted-foreground">
                      <strong>Hebrew Interface Complexities:</strong> Built a custom solution for right-to-left text, number reversal, and alignment of English within Hebrew sentences—greatly improving usability.
                    </p>
                    
                    <p className="text-muted-foreground">
                      <strong>Balancing Engagement with Focus:</strong> After early prototypes showed students were distracted by animations, we added a "focus mode" that simplifies visuals during active learning moments.
                    </p>
                    
                    <p className="text-muted-foreground">
                      <strong>Workflow Management:</strong> Established robust file versioning and backup protocols. These proved essential when partial code loss occurred, enabling full recovery without delays.
                    </p>
                    
                    <p className="text-muted-foreground">
                      Through iterative testing and structured problem-solving, we delivered a product that meets educational goals and usability standards.
                    </p>
                  </div>
                </motion.div>
              </>
            )}
            
            {/* Remaining sections and component logic */}
            
          </div>
        </div>
      </section>
      
      {/* Next project section */}
      <section className="py-20 bg-secondary/40">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-2">Next Project</h2>
            <p className="text-muted-foreground">Continue exploring my work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="aspect-video rounded-xl overflow-hidden relative" 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              whileHover={{ y: -5 }} 
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <img src={nextProject.image} alt={nextProject.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-2xl font-medium text-white mb-2">{nextProject.title}</h3>
                <p className="text-white/80 mb-4 line-clamp-2">{nextProject.description}</p>
                <a 
                  href={`/projects/${nextProject.slug}`} 
                  className="inline-flex items-center text-white hover:text-primary transition-colors"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-medium mb-4">{nextProject.title}</h3>
              <p className="text-muted-foreground mb-6">{nextProject.description}</p>
              <div>
                <a 
                  href={`/projects/${nextProject.slug}`} 
                  className="inline-flex items-center justify-center h-10 px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View Case Study
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
