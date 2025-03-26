
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "../components/Layout";
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
  designProcessAndAesthetics: "For Roomie, our team crafted a visual language that balances practicality with emotional support. The color palette features warm, calming tones—primarily muted blues and soft yellows—to counteract the stress typically associated with moving.\n\nTypography plays a crucial role in the interface, with the primary font family being Assistant for its excellent readability and modern feel. Headers use weightier versions of the font (600-700) to create clear visual hierarchy, while body text maintains comfortable readability at 16px minimum.\n\nThe visual components follow a consistent rounded design system—buttons, cards, and input fields all feature softly rounded corners (8px radius) that contribute to the approachable feel of the application. Interactive elements like checklists and the budget calculator use subtle shadows and state changes to provide clear feedback to users.",
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
  title: "SAVE RAPUNZEL",
  description: "Save Rapunzel combines an engaging educational game for students with an intuitive content creation tool for educators. Built around the classic fairy tale, it transforms traditional learning into interactive experiences.",
  image: "/lovable-uploads/save-repunzel.png",
  tags: ["Game Design", "Educational"],
  slug: "save-rapunzel",
  color: "#10B981",
  overview: "Save Rapunzel transforms traditional education through a dual-purpose platform. It features an interactive game where students help the prince rescue Rapunzel by answering questions correctly, alongside a powerful tool that lets educators create custom content without technical expertise.",
  challenge: "Traditional educational materials often fail to engage students, particularly for challenging subjects. Educators need simple tools to create interactive content without technical knowledge, while students benefit from learning experiences that blend education with enjoyment.",
  solution: "We created an interactive game where students help the prince climb Rapunzel's hair by answering questions correctly - providing immediate visual feedback on their progress. The accompanying content management system allows educators to easily create custom question sets through an intuitive interface, without any coding requirements.",
  graphicDevelopment: "The project evolved from a storybook concept to an interactive animation where Rapunzel walks to the window as the story unfolds. This transformation significantly improved student engagement and created a more immersive learning experience.",
  technicalChallenges: "We tackled two main challenges: creating an intuitive content system for non-technical educators and handling Hebrew bidirectional text complexities. Our solutions included a template-based approach with progressive customization options and custom RTL text handling for seamless Hebrew display.",
  contentGenerator: "Our generator makes educational content creation accessible to all teachers. The intuitive interface includes built-in validation and immediate feedback to ensure quality learning materials.\n\nThe system features a progressive approval workflow requiring at least 10 quality questions before publishing, with a maximum of 30 questions per game. These specifications came directly from our research with educators.",
  animationFeatures: "Key animations provide immediate feedback and reinforce learning progress. When students answer correctly, the prince climbs higher on Rapunzel's hair, creating a visual reward. The opening sequence shows Rapunzel walking through the tower with a gradual zoom to the window, establishing the narrative context.",
  collaborativeDevelopment: "The project was characterized by close teamwork, with each team member bringing their skills and strengths to the table. An efficient workflow for file and version management was developed, including systematic backups, change documentation, and meticulous organization of graphic assets.\n\nDespite technical challenges, such as partial code loss at one stage, the system allowed for continued efficient work, resulting in a final product that precisely meets user needs.",
  editorShowcase: {
    title: "Content Generator Interface",
    image: "/lovable-uploads/save-repunzel-editor.png",
    description: "Our intuitive content generator empowers educators to create custom educational materials without technical expertise. The streamlined interface includes built-in validation and guidance to ensure quality content creation."
  },
  process: [
    "Conducted parallel research with educators and students to understand both content creation needs and learning engagement factors", 
    "Developed distinct user personas for our two audience segments: educators and students", 
    "Created initial concepts, wireframes, and interactive prototypes for testing", 
    "Refined the experience through multiple testing sessions with both teachers and students", 
    "Designed vibrant fairy tale visuals for the student game interface alongside a professional, efficient interface for educators"
  ],
  designProcessAndAesthetics: "Save Rapunzel uses a dual-interface design system. The game features vibrant fairy tale colors (purples, reds, and golds) that engage young learners, while maintaining professional aesthetics in the educator dashboard for a focused content creation experience.",
  challengesAndSolutions: "A significant challenge in the development process was designing a content editor flexible enough to accommodate various question types while remaining simple for non-technical educators. The solution involved extensive card-sorting exercises with educators to determine the most intuitive organization of functions, resulting in a template-based approach with customization options revealed progressively as users become more comfortable with the system.\n\nAdditionally, optimizing the balance between engaging visual elements and educational clarity required careful consideration. This was addressed through multiple testing iterations with both educators and students to ensure the final product maintained educational effectiveness while providing an engaging user experience.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/save-repunzel-color-palette.png",
    description: "Vibrant, fairy tale-inspired color scheme with purples, reds, and golds"
  }, {
    title: "Typography",
    image: "/lovable-uploads/save-repunzel-font.png",
    description: "The student interface uses rounded Fredoka font (minimum 18px) for young users, while the educator dashboard uses the same font with weight variations for visual hierarchy"
  }, {
    title: "Visual Elements",
    image: "/lovable-uploads/save-repunzel-interface.png",
    description: "Rounded, vibrant interface elements with consistent visual language"
  }],
  additionalImages: ["/lovable-uploads/save-repunzel-third.png", "/lovable-uploads/save-repunzel-my-games.png", "/lovable-uploads/save-repunzel-sec.png"],
  link: "https://saverapunzel.telem-hit.net/GamesList"
}, {
  title: "BIP",
  description: "A conceptual money transfer application designed specifically for extraterrestrial users with unique perceptual needs.",
  image: "/lovable-uploads/bip-lots-of-iphones.png",
  tags: ["Speculative Design", "Financial Tech"],
  slug: "bip",
  color: "#8B5CF6",
  overview: "BIP is a conceptual money transfer application designed specifically for extraterrestrial users. This speculative design project challenged conventional UI/UX assumptions by considering the unique perceptual and cognitive needs of non-human users.",
  challenge: "Design a financial application that accommodates alien perceptual abilities while maintaining the security and functionality expected in money transfer applications. Standard human-centered design principles needed significant adaptation to serve this unique user group.",
  solution: "A reimagined money transfer app interface through an alien-centered design lens, with new visual languages, interaction patterns, and information hierarchies suited to extraterrestrial perception, while still drawing inspiration from familiar human applications like Bit and PayBox.",
  wireflow: {
    title: "Wireflow",
    image: "/lovable-uploads/bip-wireflow.png",
    description: "The wireflow diagram illustrates the navigation paths and interaction flows for extraterrestrial users, with special attention to non-linear thinking patterns and multiple sensory feedback loops throughout the transaction process."
  },
  designImages: [
    {
      title: "Color Palette",
      image: "/lovable-uploads/bip-colors.png",
      description: "High-contrast, vibrant colors with bold blues and bright yellows"
    },
    {
      title: "Typography & Layout",
      image: "/lovable-uploads/bip-typography.png",
      description: "Large text elements with circular, open letterforms and substantial weight"
    },
    {
      title: "Interface Elements",
      image: "/lovable-uploads/bip-intarface.png",
      description: "Rounded design language with substantial padding and redundant feedback cues"
    }
  ],
  additionalImages: [
    "/lovable-uploads/bip-group-page.png",
    "/lovable-uploads/bip-home-page.png",
    "/lovable-uploads/bip-loading-page.png",
    "/lovable-uploads/bip-transfer-details.png"
  ],
  process: ["Established alien user personas based on specified perceptual constraints", "Studied existing financial apps and adapted their core functionality to the alien context", "Created wireframes that emphasized visual communication", "Refined the interface through multiple iterations to balance alien-centered design with transaction security", "Designed custom animations for key moments in the user journey for clear feedback"],
  designProcessAndAesthetics: "The Bip money transfer app required a complete reimagining of financial interface conventions for extraterrestrial users. The color palette features high-contrast, vibrant combinations with bold blues and bright yellows against deep space-themed backgrounds. This choice directly addresses the perceptual constraints of the alien users, who struggle with gray tones and low-contrast interfaces.\n\nTypography was a critical consideration—all text elements are significantly larger than human-centered applications, with a minimum size of 14px for secondary information and 18-24px for primary interface elements. Font selection prioritized circular, open letterforms with substantial weight to enhance legibility for alien visual systems.\n\nThe interface employs a consistent rounded design language with substantial padding around interactive elements to accommodate potential differences in alien motor control precision. All buttons feature both color and icon changes in their active states to provide redundant feedback cues. The space-themed iconography replaces traditional financial symbols, creating culturally appropriate visual metaphors for the target users.\n\nInteractive animations play a crucial role in communicating process status, particularly during transaction verification and confirmation. I designed custom animations using principles of anticipation and follow-through to signal the beginning and completion of processes, helping users understand system status without relying on text.",
  case: "Our team reimagined a conventional money transfer app interface through an alien-centered design lens, developing new visual languages, interaction patterns, and information hierarchies suited to extraterrestrial perception.",
  comingSoon: false,
  link: "https://xd.adobe.com/view/866550b7-89fd-4901-92d2-dc087ed5fb28-d336/screen/4d7b2d99-6a21-45fb-b04b-c398d6bedc83/?fullscreen"
}, {
  title: "STUDIT",
  description: "An AI-powered study companion for Israeli Psychometric Entrance Test and matriculation (bagrut) exams preparation with personalized study plans.",
  image: "/lovable-uploads/studit-home-page.png",
  tags: ["Educational Tech", "AI"],
  slug: "studit",
  color: "#F59E0B",
  overview: "Studit is a web-based platform designed to help students prepare for the Israeli Psychometric Entrance Test and matriculation (bagrut) exams. It provides personalized study plans, adaptive practice tests, and scheduling based on diagnostic tests and user preferences.",
  challenge: "Psychometric and matriculation exam preparation is typically stressful, time-consuming, and often inefficient. Many students struggle to structure their study time effectively or identify which areas need the most attention. Existing platforms often present practice questions in a static, uninspiring format that fails to engage students.",
  solution: "Designed by Stav Rakia and Eden Nisoyev, Studit is an interactive, adaptive learning platform that makes studying feel less overwhelming and more engaging. The interface guides users through a complete journey: from selecting their exam date to taking a diagnostic assessment and receiving a personalized study schedule based on their performance and preferences.",
  wireflowDetails: {
    title: "Wireflow",
    image: "/lovable-uploads/studit-wireflow.png",
    description: "The wireframing stage for Studit focused on creating a clear, guided user journey through the exam preparation process. I developed low-fidelity wireframes that mapped out the core journey from exam selection to personalized study plan generation."
  },
  designResearch: {
    title: "Design Research",
    image: "/lovable-uploads/studit-design-research.png",
    description: "Before diving into the design process, I conducted comprehensive research of existing platforms in the test preparation space. This analysis of Israeli market leaders like Yoel Geva, Kidum, and Niv Revach revealed both opportunities and limitations in current offerings.\nFrom Kidum's homepage, I adopted their clear subject emphasis and scroll-prompting arrow, while Yoel Geva's interactive regional map inspired our location selection feature. Studying interactive educational platforms like Wordwall led to the implementation of drag-and-drop functionality for verbal reasoning questions, transforming traditionally static multiple-choice questions into engaging interactive challenges.\nThis competitive analysis uncovered several gaps: most platforms presented practice materials in a visually uninspiring format, lacked meaningful interaction, and failed to personalize the study experience. I noticed that navigation was often confusing and users struggled to understand where they were in the preparation process.\nThese insights directly informed Studit's design approach: creating a step-by-step guided journey with clear progress indicators, implementing interactive question formats, and developing a visually distinctive yet professional aesthetic that stands out from competitors while maintaining educational credibility."
  },
  process: [
    "Conducted extensive research into student pain points during exam preparation", 
    "Analyzed existing educational platforms like Yoel Geva, Kidum, and Niv Revach to identify strengths and weaknesses", 
    "Developed wireframes and user flows that addressed key pain points while introducing interactive elements", 
    "Conducted multiple rounds of user testing to refine the interface", 
    "Created a clean, modern aesthetic with a warm color palette for a calm, focused studying environment"
  ],
  designProcessAndAesthetics: "For Studit, we developed a visual language that balances academic seriousness with engaging interactivity. The color palette features warm neutrals (beiges and soft browns) as a base, accented with muted blues and occasional touches of yellow to create focus points without overwhelming the learning content. This restrained approach creates a calm environment conducive to focused study while providing enough visual interest to maintain engagement.\n\nTypography choices were critical for supporting extended reading periods. We selected Assistant as the primary font for its excellent readability and comprehensive Hebrew character support, with Indie Flower as an accent font for highlighting important elements. Text hierarchy uses weight variation rather than dramatic size differences, with a minimum body text size of 16px to ensure comfortable reading during study sessions.\n\nThe layout employs generous white space and a consistent grid system to organize complex information clearly. Cards with subtle shadows and rounded corners (4px radius) contain related information groups, while interactive elements use slightly more pronounced shadows and state changes to indicate their functionality.\n\nUser flow considerations were paramount, with the interface guiding users through a logical progression from homepage through exam/date selection, location selection, diagnostic assessment and personalized scheduling. Each stage features animated transitions that provide both functional feedback and moments of delight in what could otherwise be a stressful process.",
  challengesAndSolutions: "A significant design challenge emerged in making practice questions interactive without sacrificing academic rigor. Traditional multiple-choice formats felt static and disengaging, but overly gamified approaches risked undermining the serious purpose of the platform. The solution involved developing custom interaction patterns for different question types—drag-and-drop completions for verbal reasoning, interactive maps for selecting exam locations—that enhance engagement while maintaining focus on the academic content.\n\nAnother challenge was designing the scheduling system to feel trustworthy and valuable. Early user testing revealed skepticism about scheduling systems. We addressed this by creating a transparent process that reveals the factors influencing schedule creation and allows users to adjust parameters while still benefiting from optimization. The schedule customization interface went through five iterations before achieving the right balance of guidance and user control.\n\nThe loading screens presented a particular design opportunity—rather than passive waiting periods, we transformed them into micro-moments of encouragement with progress animations and motivational messages. User testing showed this significantly reduced perceived waiting time and helped maintain motivation throughout the assessment process. Additionally, we incorporated color customization for the schedule to help students personalize their study experience.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/studit-colors.png",
    description: "Warm neutrals with muted blues and yellow accents"
  }, {
    title: "Typography",
    image: "/lovable-uploads/studit-typography.png",
    description: "Assistant and Indie Flower fonts with weight variations and generous white space"
  }, {
    title: "Interface Components",
    image: "/lovable-uploads/studit-interface.png",
    description: "Cards with subtle shadows and clear visual feedback"
  }],
  additionalImages: ["/lovable-uploads/studit-1.png", "/lovable-uploads/studit-2.png", "/lovable-uploads/studit-3.png", "/lovable-uploads/studit-4.png"],
  link: "https://xd.adobe.com/view/a56c02e8-2d4f-4803-bcbb-811822907cf1-f03f/?fullscreen"
}, {
  title: "PLANT LEARNING MODULE",
  description: "The Plant Learning Module was developed as a learning experience for houseplant care. The primary goal was to increase confidence among potential plant owners by providing comprehensive, accessible information through an interactive learning experience.",
  image: "/lovable-uploads/plant-first-page.png",
  tags: ["Instructional Design", "Educational"],
  slug: "plant-module",
  color: "#22C55E",
  overview: "This e-learning module teaches users how to successfully care for houseplants through engaging, interactive content. The module focuses on six common houseplants, providing detailed care requirements and practical guidance in a user-friendly format.",
  challenge: "Many potential plant owners lack confidence in their ability to properly care for houseplants. This hesitation stems from uncertainty about watering needs, light requirements, and general maintenance. The challenge was to create a learning solution that would effectively build confidence through clear, accessible information and interactive learning experiences.",
  solution: "I designed a comprehensive e-learning module focused on six key houseplants, with detailed care instructions, interactive assessments, and engaging visuals. The module employs a branching navigation model allowing users to personalize their learning journey based on their specific interests. This approach enables learners to focus on plants that match their home environment and lifestyle.",
  wireflow: {
    title: "Wireflow",
    image: "/lovable-uploads/plant-wireflow.png",
    description: "The wireflow demonstrates the module's branching structure, allowing users to navigate through content based on their specific interests. The design includes:\n\nAn introduction section explaining the importance of houseplants\n\nCategory-based navigation allowing users to explore specific plant types\n\nInteractive elements for learning assessment\n\nPractical applications section for real-world implementation"
  },
  specification: {
    title: "Specification & Instructional Script",
    image: "/lovable-uploads/plant-prototyping.png",
    description: "Before entering the design phase, I developed a comprehensive specification document and detailed instructional script. The specification established the pedagogical foundation by defining the behavioral, knowledge, and skill objectives for learners. I conducted a thorough analysis of the target audience, identifying knowledge gaps and learning preferences to inform content organization.\n\nThe instructional script translated these objectives into structured content, using a category-based approach organized around six houseplants. For each plant, I crafted detailed descriptions, care instructions, and contextual scenarios to promote knowledge application. The script incorporated multimodal learning strategies through varied assessment methods, including interactive elements like drag-and-drop activities and scenario-based questions. This instructional planning ensured the learning experience would effectively bridge knowledge gaps while maintaining engagement through thoughtfully paced content progression."
  },
  process: [
    "Analyzing the target audience needs and potential knowledge gaps",
    "Establishing clear learning objectives for each module section",
    "Structuring content in logical categories based on plant types and care requirements",
    "Developing instructional strategies that incorporate interactive elements",
    "Creating opportunities for practical application and knowledge assessment"
  ],
  designProcessAndAesthetics: "For the Plant Learning Module, I designed a visual experience that embodies the natural, organic feel of the subject matter. The color palette centers on various shades of green with earth tones for balance, creating a fresh, clean aesthetic that evokes plant life while maintaining excellent readability.\n\nTypography choices prioritize clarity and accessibility, with the Assistant font family at appropriate sizes for comfortable reading on various devices. Headings use SemiBold weight to maintain visual harmony while creating clear information hierarchy.\n\nThe interface layout employs a grid system that organizes content into digestible sections, with consistent spacing and alignment. Plant images feature prominently throughout the module, serving both instructional and aesthetic purposes. Each plant category uses subtle visual cues to help users track where they are in the learning journey.",
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
    description: "Grid-based layout with consistent spacing and visual cues"
  }],
  interactiveElements: {
    title: "Interactive Elements & Assessment",
    description: "The module includes several interactive elements designed to engage learners and reinforce key concepts:\n\nDrag-and-drop activities for matching plants to their ideal light conditions\n\nInteractive quizzes testing knowledge about watering requirements\n\nVisual simulations showing plant responses to different care conditions\n\nProgress tracking to help learners monitor their advancement\n\nThese assessment components go beyond simple recall, requiring users to apply their knowledge in practical scenarios that simulate real-world plant care decisions."
  },
  challengesAndSolutions: "A key challenge was balancing comprehensive plant care information with an approachable, non-overwhelming user experience. Initial feedback indicated that detailed care instructions could intimidate novice plant owners. I addressed this by:\n\nImplementing a layered information architecture that presents essential care details first, with options to expand sections for more detailed information\n\nUsing visual indicators to clearly mark beginner-friendly plants\n\nIncluding reassuring messaging about common plant care mistakes and recovery techniques\n\nAnother challenge was creating effective assessment activities that would genuinely measure understanding rather than simple recall. I developed application-based questions asking users to make decisions about plant placement and care schedules based on specific scenarios, which proved more effective at building confidence than traditional knowledge-checking questions.\n\nThis project demonstrated my ability to transform complex instructional content into an engaging, user-friendly learning experience while addressing specific user needs and learning objectives.",
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
  
  // Find next project data for the navigation section
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
      {/* Hero Section */}
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
      
      {/* Challenge & Solution Section */}
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
            
            {/* Design Process Section */}
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
            
            {/* Design Research Section - For STUDIT project */}
            {project.slug === 'studit' && project.designResearch && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">{project.designResearch.title}</h2>
                <div className="prose prose-lg max-w-none mb-8">
                  {project.designResearch.description.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
                
                <div className="rounded-xl overflow-hidden border border-border/40 mt-6">
                  <img 
                    src={project.designResearch.image} 
                    alt="Design Research" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            )}
            
            {/* Wireflow Section - For STUDIT project */}
            {project.slug === 'studit' && project.wireflowDetails && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">{project.wireflowDetails.title}</h2>
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="mb-4 text-muted-foreground">{project.wireflowDetails.description}</p>
                </div>
                
                <div className="rounded-xl overflow-hidden border border-border/40">
                  <img 
                    src={project.wireflowDetails.image} 
                    alt="Wireflow Diagram" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            )}
            
            {/* Wireflow Section - For BIP project */}
            {project.slug === 'bip' && project.wireflow && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">{project.wireflow.title}</h2>
                <p className="text-muted-foreground mb-8">{project.wireflow.description}</p>
                
                <div className="rounded-xl overflow-hidden border border-border/40">
                  <img 
                    src={project.wireflow.image} 
                    alt="Wireflow Diagram" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            )}
            
            {/* Wireflow Section - For Plant Learning Module project */}
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
                  {project.wireflow.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                  ))}
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
            
            {/* Specification & Instructional Script - For Plant Learning Module project */}
            {project.slug === 'plant-module' && project.specification && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">{project.specification.title}</h2>
                <div className="prose prose-lg max-w-none mb-8">
                  {project.specification.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
                
                <div className="rounded-xl overflow-hidden border border-border/40">
                  <img 
                    src={project.specification.image} 
                    alt="Specification & Instructional Script" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            )}
            
            {/* Interactive Elements & Assessment - For Plant Learning Module project */}
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
                  {project.interactiveElements.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            )}
            
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
                    <h2 className="text-2xl font-medium mb-6">Graphic Development and Design Evolution</h2>
                    <div className="prose prose-lg max-w-none">
                      {project.graphicDevelopment.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="mt-8 rounded-xl overflow-hidden border border-border/40">
                      <img src="/lovable-uploads/first-version-save-repunzel.png" alt="Initial Design Concept" className="w-full h-auto" />
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
                  <h2 className="text-2xl font-medium mb-6">Design Process & Aesthetics</h2>
                  
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
                    <h2 className="text-2xl font-medium mb-6">Animation and Interaction Features</h2>
                    <div className="prose prose-lg max-w-none">
                      {project.animationFeatures.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Technical & Development Challenges Section - REPLACED */}
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Technical &amp; Development Challenges</h2>
                  
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-muted-foreground">
                      Developing a flexible yet intuitive content creation system posed a significant challenge. The content editor needed to support a variety of question types while remaining simple enough for non-technical educators. Extensive card-sorting exercises with educators helped identify the most intuitive organization, leading to a template-based approach where customization options are progressively introduced as users gain familiarity.
                    </p>
                    
                    <p className="text-muted-foreground">
                      Handling Hebrew text and bidirectional interface complexities was another major technical hurdle. Displaying right-to-left text, reversing numbers, and ensuring proper alignment of English words within Hebrew sentences required a custom-built solution that significantly improved readability and usability for Hebrew-speaking users.
                    </p>
                    
                    <p className="text-muted-foreground">
                      Optimizing visual engagement without compromising educational clarity was critical. Early prototypes showed that students were sometimes distracted by animations during question-answering phases. The solution involved implementing a "focus mode" that temporarily simplified the visual environment during active question engagement while preserving interactive elements that reinforce learning progress.
                    </p>
                    
                    <p className="text-muted-foreground">
                      The development process also required robust workflow management. A structured system for file versioning, backups, and asset organization was essential to maintaining efficiency. At one stage, partial code loss occurred, but thanks to meticulous documentation and backup protocols, the team was able to recover and continue development without significant setbacks.
                    </p>
                    
                    <p className="text-muted-foreground">
                      These challenges, tackled through iterative testing, technical innovation, and structured problem-solving, ensured that the final product met both usability and pedagogical goals without compromising on flexibility or performance.
                    </p>
                  </div>
                </motion.div>
              </>
            )}
            
            {/* Project Structure Section - For Roomie project */}
            {project.slug === 'roomie' && project.structureTree && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">{project.structureTree.title || "Project Structure"}</h2>
                <p className="text-muted-foreground mb-8">{project.structureTree.description}</p>
                
                <div className="rounded-xl overflow-hidden border border-border/40">
                  <img 
                    src={project.structureTree.image} 
                    alt="Project Structure" 
                    className="w-full h-auto" 
                  />
                </div>
              </motion.div>
            )}

            {/* Wireframes Section - For Roomie project */}
            {project.slug === 'roomie' && project.wireframes && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">{project.wireframes.title}</h2>
                <p className="text-muted-foreground mb-8">{project.wireframes.description}</p>
                
                <div className="rounded-xl overflow-hidden border border-border/40">
                  <img 
                    src={project.wireframes.image} 
                    alt="Project Wireframes" 
                    className="w-full h-auto" 
                  />
                </div>
              </motion.div>
            )}
            
            {/* Design Process & Aesthetics Section with images - For projects other than Save Rapunzel */}
            {project.slug !== 'save-rapunzel' && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">Design Process & Aesthetics</h2>
                
                <div className="space-y-8">
                  {project.designProcessAndAesthetics && project.designProcessAndAesthetics.split('\n\n').map((paragraph, idx) => (
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
                          <img 
                            src={project.designImages[idx].image} 
                            alt={project.designImages[idx].title} 
                            className={`w-full object-cover ${idx === 2 ? "h-[600px]" : "h-64"}`} 
                          />
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
            )}
            
            {/* Animation Features Section - For BIP */}
            {project.slug === 'bip' && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">Animation and Interaction Features</h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-muted-foreground">
                    The BIP application features custom animations designed specifically for extraterrestrial perception patterns. Key interaction moments are highlighted with visual feedback that accommodates alien visual processing.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Transaction confirmations use animated spaceships and meteorite visuals to represent successful payments. Loading states feature orbital animations that maintain user engagement while processing occurs in the background.
                  </p>
                  
                  <p className="text-muted-foreground">
                    The interface responds to touch with immediate visual feedback, providing redundant confirmation through color shifts, size changes, and animated transitions to ensure clarity for users with different perceptual abilities.
                  </p>
                </div>
              </motion.div>
            )}
            
            {/* Challenges & Solutions Section - For all projects except Save Rapunzel */}
            {project.challengesAndSolutions && project.slug !== 'save-rapunzel' && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">Challenges & Solutions</h2>
                <div className="prose prose-lg max-w-none">
                  {project.challengesAndSolutions.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Technical & Development Challenges Section - For BIP */}
            {project.slug === 'bip' && !project.challengesAndSolutions && (
              <motion.div 
                className="mb-16" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-medium mb-6">Technical &amp; Development Challenges</h2>
                
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-muted-foreground">
                    Developing for extraterrestrial users presented unique technical challenges, particularly in the absence of direct user testing possibilities. The solution involved creating detailed alien personas with specific perceptual constraints and validating designs against these constraints.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Security verification posed another significant challenge. A specialized facial recognition system was designed to accommodate alien facial structures, with animated guides for proper positioning, balancing security needs with accessibility.
                  </p>
                  
                  <p className="text-muted-foreground">
                    The visual design required complete reimagining for alien perception. Color schemes, typography, and spacing were adapted to address the specific visual needs of extraterrestrial users while maintaining the functional elements expected in a money transfer application.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Balancing innovation with usability was perhaps the greatest challenge. The solution involved maintaining recognizable patterns from human financial applications while introducing novel interaction methods tailored to alien cognitive patterns.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Images Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.h2 
            className="text-2xl font-medium mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Project Gallery
          </motion.h2>
          
          {/* Updated gallery grid - with different layout for BIP and new images added */}
          {project.slug === 'bip' ? (
            // BIP gallery - 4 images in one row
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {project.additionalImages && project.additionalImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto aspect-[9/19] object-cover"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            // For other projects - 2-column grid
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.additionalImages && project.additionalImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto"
                  />
                </motion.div>
              ))}
              
              {/* Add roomie-expenses to ROOMIE gallery */}
              {project.slug === 'roomie' && (
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/roomie-expenses.png"
                    alt="ROOMIE - Expense Tracking Interface"
                    className="w-full h-auto"
                  />
                </motion.div>
              )}
              
              {/* Add save-repunzel-my-games-add to SAVE RAPUNZEL gallery */}
              {project.slug === 'save-rapunzel' && (
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <img
                    src="/lovable-uploads/save-repunzel-my-games-add.png"
                    alt="SAVE RAPUNZEL - Add New Game Interface"
                    className="w-full h-auto"
                  />
                </motion.div>
              )}
            </div>
          )}
        </div>
      </section>
      
      {/* Check It Out section */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="container">
          <motion.div
            className="max-w-md mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-medium mb-4">
              Ready to see it in action?
            </h3>
            <p className="text-muted-foreground mb-8">
              Check out the full {project.title} project to explore all the features and interactions.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ProjectLink 
                href={project.link} 
                className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
              >
                View Full Project
              </ProjectLink>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Next Project - Updated with image and title */}
      <section className="py-20 bg-background border-t border-border/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-8" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-muted-foreground mb-2">Next Project</p>
              <h3 className="text-2xl font-medium mb-6" style={{ color: nextProject.color }}>
                {nextProject.title}
              </h3>
              
              <div className="mb-8 max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={nextProject.image} 
                  alt={nextProject.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <a 
                href={`/projects/${nextProject.slug}`} 
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
              >
                View Next Project
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
