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
}, {
  // ... other project data remains the same
}, {
  title: "PLANT LEARNING MODULE",
  description: "The Plant Learning Module was developed as a learning experience for houseplant care. The primary goal was to increase confidence among potential plant owners by providing comprehensive, accessible information through an interactive learning experience.",
  image: "/lovable-uploads/plant-first-page.png",
  tags: ["Instructional Design", "Educational"],
  slug: "plant-module",
  color: "#22C55E",
  overview: "This e-learning module builds confidence in plant care through engaging, interactive content. Focusing on six common houseplants, it provides essential care guidance in a user-friendly format that addresses the hesitation many feel when considering houseplant ownership.",
  challenge: "Many potential plant owners lack confidence in their ability to properly care for houseplants. This hesitation stems from uncertainty about watering needs, light requirements, and general maintenance. The challenge was to create a learning solution that would effectively build confidence through clear, accessible information and interactive learning experiences.",
  solution: "I designed a comprehensive e-learning module focused on six key houseplants, with detailed care instructions, interactive assessments, and engaging visuals. The module employs a branching navigation model allowing users to personalize their learning journey based on their specific interests. This approach enables learners to focus on plants that match their home environment and lifestyle.",
  wireflow: {
    title: "Wireflow Diagram",
    image: "/lovable-uploads/plant-wireflow.png",
    description: "The wireflow outlines the app's structure and user journey, focusing on personalized content and intuitive branching paths."
  },
  specification: {
    title: "Specification & Instructional Script",
    image: "/lovable-uploads/plant-prototyping.png",
    description: "Before design, I created a detailed specification and instructional script to guide the learning experience. The spec outlined learning goals - behavioral, knowledge-based, and skill-oriented - and included audience analysis to identify gaps and preferences.\n\nThe script organized content around six houseplants, with descriptions, care tips, and real-life scenarios. It applied multimodal strategies using interactive assessments (e.g., drag-and-drop, scenario questions) to bridge knowledge gaps and keep learners engaged."
  },
  process: [
    "Analyzing the target audience needs and potential knowledge gaps",
    "Establishing clear learning objectives for each module section",
    "Structuring content in logical categories based on plant types and care requirements",
    "Developing instructional strategies that incorporate interactive elements",
    "Creating opportunities for practical application and knowledge assessment"
  ],
  designProcessAndAesthetics: "For the Plant Learning Module, I designed a visual experience that embodies the natural, organic feel of the subject matter. The color palette centers on various shades of green with earth tones for balance, creating a fresh, clean aesthetic that evokes plant life while maintaining excellent readability.\n\nTypography choices prioritize clarity and accessibility, with the Assistant font family at appropriate sizes for comfortable reading on various devices. Headings use SemiBold weight to maintain visual harmony while creating clear information hierarchy.\n\nThe interface layout employs a grid system that organizes content into digestible sections, with consistent spacing and alignment. Plant images feature prominently throughout the module, serving both instructional and aesthetic purposes. Each plant category uses subtle visual cues to help users track where they are in the learning journey.",
  interactiveElements: {
    title: "Interactive Elements & Assessment",
    description: "The module features engaging learning interactions:\n- Drag-and-drop activities matching plants to ideal light conditions\n- Interactive quizzes on watering requirements\n- Visual simulations showing plant responses to care conditions\n- Progress tracking for motivation and advancement\nThese assessments require users to apply knowledge in practical scenarios, simulating real-world plant care decisions."
  },
  challengesAndSolutions: "We addressed two primary challenges:\n\nBalancing Rich Content with User Approachability:\nInitial feedback showed that detailed care instructions could overwhelm novice plant owners. To solve this, we:\n\nDesigned a layered information system that starts with essentials and allows users to expand for more detail\n\nMarked beginner-friendly plants with visual cues\n\nIncluded calming, supportive messaging about common mistakes and how to recover from them\n\nCreating Meaningful Assessments:\nRather than using simple recall questions, we designed scenario-based activities—like choosing the best location or watering schedule for a plant—that built real-world decision-making skills and increased user confidence.\n\nThis project highlights my ability to turn complex instructional material into an engaging, approachable experience tailored to users' needs and learning goals.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/plant-colors.png",
    description: "Various shades of green with earth tones for a fresh, natural aesthetic"
  }, {
    title: "Typography",
    image: "/lovable-uploads/plant-typography.png",
    description: "Assistant font family with clear hierarchy and readability"
  }, {
    title: "Interface Elements",
    image: "/lovable-uploads/plant-interface.png",
    description: "Visuals like icons, colors, and illustrations clarify care tips and create a friendly tone."
  }],
  additionalImages: [
    "/lovable-uploads/plant-1.png",
    "/lovable-uploads/plant-2.png",
    "/lovable-uploads/plant-3.png",
    "/lovable-uploads/plant-4.png"
  ],
  link: "https://360.articulate.com/review/content/6849bc42-e11b-489d-bcc4-cad07341bdbf/review"
}];

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
            
            {project.slug === 'plant-module' && project.wireflow && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">{project.wireflow.title}</h2>
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="mb-4 text-muted-foreground">The wireflow outlines the app's structure and user journey, focusing on personalized content and intuitive branching paths.</p>
                  
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-2 mr-3 flex-shrink-0"></div>
                      <span>Introduction screen highlighting the value of houseplants</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-2 mr-3 flex-shrink-0"></div>
                      <span>Category navigation for exploring plant types</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-2 mr-3 flex-shrink-0"></div>
                      <span>Interactive checkpoints to assess user understanding</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-2 mr-3 flex-shrink-0"></div>
                      <span>Practical module for applying knowledge in real-life scenarios</span>
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-xl overflow-hidden border border-border/40">
                  <img 
                    src={project.wireflow.image} 
                    alt="Wireflow Diagram" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            )}
            
            {project.slug === 'plant-module' && project.interactiveElements && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">{project.interactiveElements.title}</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-4 text-muted-foreground">The module features engaging learning interactions:</p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-2 mr-3 flex-shrink-0"></div>
                      <span>Drag-and-drop activities matching plants to ideal light conditions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-2 mr-3 flex-shrink-0"></div>
                      <span>Interactive quizzes on watering requirements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-2 mr-3 flex-shrink-0"></div>
                      <span>Visual simulations showing plant responses to care conditions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-2 mr-3 flex-shrink-0"></div>
                      <span>Progress tracking for motivation and advancement</span>
                    </li>
                  </ul>
                  
                  <p className="text-muted-foreground">These assessments require users to apply knowledge in practical scenarios, simulating real-world plant care decisions.</p>
                </div>
              </motion.div>
            )}
            
            {/* Rest of the component remains the same */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
