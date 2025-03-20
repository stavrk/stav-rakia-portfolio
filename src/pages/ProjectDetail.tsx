import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft } from 'lucide-react';
import ProjectLink from '@/components/ProjectLink';

const projectsData = [
  {
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
    process: [
      "Conducted extensive user research, interviewing 12 recent first-time movers about their challenges and wishes",
      "Synthesized insights and created user personas and journey maps to identify key pain points",
      "Developed multiple iterations of wireframes and prototypes for testing with potential users",
      "Refined the interface and features based on user feedback",
      "Created final designs with a warm, approachable aesthetic and calming color palette"
    ],
    designProcessAndAesthetics: "For Roomie, our team crafted a visual language that balances practicality with emotional support. The color palette features warm, calming tones—primarily muted blues and soft yellows—to counteract the stress typically associated with moving. This deliberate choice helps create a sense of stability amidst the chaos of relocation.\n\nTypography plays a crucial role in the interface, with the primary font family being Assistant for its excellent readability and modern feel. Headers use weightier versions of the font (600-700) to create clear visual hierarchy, while body text maintains comfortable readability at 16px minimum.\n\nThe visual components follow a consistent rounded design system—buttons, cards, and input fields all feature softly rounded corners (8px radius) that contribute to the approachable feel of the application. Interactive elements like checklists and the budget calculator use subtle shadows and state changes to provide clear feedback to users.",
    challengesAndSolutions: "One significant challenge emerged during user testing: participants felt overwhelmed by seeing all moving tasks simultaneously. We addressed this by implementing a progressive disclosure system that reveals tasks based on timeline relevance, with a customizable view option for users who prefer seeing the complete picture. This solution required several iterations of the information architecture and careful consideration of how to balance comprehensive information with manageable cognitive load.\n\nThe roommate agreement generator presented another challenge—how to create legally sound templates while keeping them accessible to young adults with no legal background. The solution involved collaboration with a legal consultant and multiple rounds of simplification testing to strike the right balance between comprehensiveness and clarity.",
    designImages: [
      {
        title: "Color Palette",
        image: "/lovable-uploads/color-palette-roomie.png",
        description: "Warm, calming tones with soft yellows and muted accents"
      },
      {
        title: "Typography",
        image: "/lovable-uploads/typography-roomie.png",
        description: "Assistant font family with weight variations for hierarchy"
      },
      {
        title: "Interface Components",
        image: "/lovable-uploads/interface-roomie.png",
        description: "Rounded components with subtle shadows and clear visual feedback"
      }
    ],
    additionalImages: [
      "/lovable-uploads/roomie-4.png",
      "/lovable-uploads/roomie-phone.png",
      "/lovable-uploads/roomie-typs-img.png"
    ],
    link: "https://xd.adobe.com/view/36102754-0760-402c-b896-3eb51e5b9a6f-6343/?fullscreen"
  },
  {
    title: "SAVE RAPUNZEL",
    description: "An educational platform with a game for students and a content creation tool for educators built around the classic fairy tale.",
    image: "/lovable-uploads/save-repunzel.png",
    tags: ["Game Design", "Educational"],
    slug: "save-rapunzel",
    color: "#10B981",
    overview: "Save Rapunzel is a dual-purpose educational platform consisting of an interactive educational game for students and a content creation tool for educators. The platform transforms traditional learning material into engaging game experiences built around the classic fairy tale of Rapunzel.",
    challenge: "Traditional educational materials often fail to capture students' attention, particularly for challenging subjects. Educators need tools to create engaging content without extensive technical knowledge, while students need learning experiences that are both educational and entertaining.",
    solution: "A dual-purpose educational platform with an interactive game where correct answers help the prince climb Rapunzel's hair, and a content management system allowing educators to create custom question sets without coding knowledge.",
    graphicDevelopment: "The 'Save Rapunzel' project was characterized by an iterative design process that underwent numerous changes from the initial concept to the final product. The graphics and visual elements were carefully tailored to enhance the user experience.\n\nThe project began with a traditional storybook concept, but after user research and consultations, the approach pivoted toward an interactive animation where Rapunzel walks to the window as the story unfolds. This change significantly deepened the user experience and resulted in greater student engagement.",
    technicalChallenges: "One significant challenge was creating a system that allowed both simple interaction for students and flexibility for teachers in content creation. The solution was an intuitive content generator that enables teachers with no technical background to create customized questions, incorporate images, and define parameters such as time per question.\n\nAnother challenge involved displaying Hebrew text and navigating a bidirectional interface, which required developing a unique solution for reversing numbers and English words in mixed text, significantly enhancing the user experience for Hebrew speakers.",
    contentGenerator: "The generator represents a revolutionary approach to creating educational content. Unlike traditional systems, the interface balances simplicity with power, featuring built-in protection mechanisms that prevent the publication of invalid games and provide teachers with immediate feedback.\n\nThe generator includes a progressive approval system that encourages users to create at least 10 quality questions before publishing the game, with a maximum allowance of 30 questions per game. These specifications were established after extensive user research with teachers and education professionals.",
    animationFeatures: "Unique animations enhance the user experience without distracting from the learning process. For instance, when a student answers correctly, the prince climbs higher on Rapunzel's hair, providing immediate visual feedback on progress and strengthening the emotional connection to the story.\n\nThe opening animation sequence shows Rapunzel walking through the tower, with a gradual zoom to the window when she reaches it—a substantial change from the original storybook concept that significantly improved student engagement.",
    collaborativeDevelopment: "The project was characterized by close teamwork, with each team member bringing their skills and strengths to the table. An efficient workflow for file and version management was developed, including systematic backups, change documentation, and meticulous organization of graphic assets.\n\nDespite technical challenges, such as partial code loss at one stage, the system allowed for continued efficient work, resulting in a final product that precisely meets user needs.",
    editorShowcase: {
      title: "Content Generator Interface",
      image: "/lovable-uploads/save-repunzel-editor.png",
      description: "The intuitive content generator allows educators to create customized educational content without technical knowledge, featuring an easy-to-use interface with built-in validation and guidance."
    },
    process: [
      "Conducted parallel research streams on educators' content creation needs and how children engage with educational games",
      "Developed user personas for both audience segments (educators and students)",
      "Created initial concept, wireframes and interactive prototypes",
      "Conducted testing sessions with both educators and students to refine the user experience",
      "Designed vibrant fairy tale-inspired visuals for game interface and professional aesthetic for educator interface"
    ],
    designProcessAndAesthetics: "For Save Rapunzel, a dual-interface design system serves both young learners and their educators. The game interface employs a vibrant, fairy tale-inspired color scheme dominated by purples, reds, and golds that evoke a sense of fantasy while maintaining sufficient contrast for readability.\n\nTypography choices differ between the student and educator interfaces. The game side uses the rounded, playful Fredoka font (minimum 18px) to engage younger users, while the educator dashboard employs the same font family with clear weight distinctions to create a visual hierarchy in the content management system.\n\nThe visual elements were carefully designed to create an engaging yet focused learning environment. Game elements like buttons, answer cards, and progress indicators feature rounded edges and vibrant colors that appeal to younger users. Background elements like the tower and clouds incorporate subtle animations to create a living world without distracting from the educational content.\n\nInteractive elements employ consistent visual cues—correct answers trigger animations of the prince climbing higher on Rapunzel's hair, providing immediate visual feedback that reinforces learning progress. The editor interface uses drag-and-drop functionality and inline editing to make content creation intuitive for educators with varying levels of technical expertise.",
    challengesAndSolutions: "A significant challenge in the development process was designing a content editor flexible enough to accommodate various question types while remaining simple for non-technical educators. The solution involved extensive card-sorting exercises with educators to determine the most intuitive organization of functions, resulting in a template-based approach with customization options revealed progressively as users become more comfortable with the system.\n\nAdditionally, optimizing the balance between engaging visual elements and educational clarity required careful consideration. This was addressed through multiple testing iterations with both educators and students to ensure the final product maintained educational effectiveness while providing an engaging user experience.",
    designImages: [
      {
        title: "Color Palette",
        image: "/lovable-uploads/save-repunzel-color-palette.png",
        description: "Vibrant, fairy tale-inspired color scheme with purples, reds, and golds"
      },
      {
        title: "Typography",
        image: "/lovable-uploads/save-repunzel-font.png",
        description: "Rounded, playful Fredoka font with consistent sizing for optimal readability"
      },
      {
        title: "Visual Elements",
        image: "/lovable-uploads/save-repunzel-interface.png",
        description: "Rounded, vibrant interface elements with consistent visual language"
      }
    ],
    additionalImages: [
      "/lovable-uploads/save-repunzel-third.png",
      "/lovable-uploads/save-repunzel-my-games.png",
      "/lovable-uploads/save-repunzel-sec.png"
    ],
    link: "https://saverapunzel.telem-hit.net/GamesList"
  },
  {
    title: "BIP",
    description: "A conceptual money transfer application designed specifically for extraterrestrial users with unique perceptual needs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["Speculative Design", "Financial Tech"],
    slug: "bip",
    color: "#8B5CF6",
    overview: "Bip is a conceptual money transfer application designed specifically for extraterrestrial users. This speculative design project challenged conventional UI/UX assumptions by considering the unique perceptual and cognitive needs of non-human users.",
    challenge: "Design a financial application that accommodates alien perceptual abilities while maintaining the security and functionality expected in money transfer applications. Standard human-centered design principles needed significant adaptation to serve this unique user group.",
    solution: "I reimagined the conventional money transfer app interface through an alien-centered design lens. This required developing new visual languages, interaction patterns, and information hierarchies suited to extraterrestrial perception, while still drawing inspiration from familiar human applications like Bit and PayBox.",
    process: [
      "Established alien user personas based on specified perceptual constraints",
      "Studied existing financial apps and adapted their core functionality to the alien context",
      "Created wireframes that emphasized visual communication",
      "Refined the interface through multiple iterations to balance alien-centered design with transaction security",
      "Designed custom animations for key moments in the user journey for clear feedback"
    ],
    designProcessAndAesthetics: "The Bip money transfer app required a complete reimagining of financial interface conventions for extraterrestrial users. The color palette features high-contrast, vibrant combinations with bold blues and bright yellows against deep space-themed backgrounds. This choice directly addresses the perceptual constraints of the alien users, who struggle with gray tones and low-contrast interfaces.\n\nTypography was a critical consideration—all text elements are significantly larger than human-centered applications, with a minimum size of 14px for secondary information and 18-24px for primary interface elements. Font selection prioritized circular, open letterforms with substantial weight to enhance legibility for alien visual systems.\n\nThe interface employs a consistent rounded design language with substantial padding around interactive elements to accommodate potential differences in alien motor control precision. All buttons feature both color and icon changes in their active states to provide redundant feedback cues. The space-themed iconography replaces traditional financial symbols, creating culturally appropriate visual metaphors for the target users.\n\nInteractive animations play a crucial role in communicating process status, particularly during transaction verification and confirmation. I designed custom animations using principles of anticipation and follow-through to signal the beginning and completion of processes, helping users understand system status without relying on text.",
    challengesAndSolutions: "The primary challenge was designing without access to actual extraterrestrial users for testing. To address this, I created detailed alien personas with specific perceptual constraints and decision-making patterns, then validated design choices against these profiles. This speculative design approach required multiple revisions as new constraints emerged during the design process.\n\nThe security verification system presented another unique challenge—how to implement secure authentication without relying on human biometric patterns. The solution involved creating a facial recognition system that accommodates alien facial structures, with animated guides to help users position correctly during scanning. This required careful consideration of how to communicate proper positioning without assuming human facial reference points.",
    designImages: [
      {
        title: "Color Palette",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop",
        description: "High-contrast, vibrant colors with bold blues and bright yellows"
      },
      {
        title: "Typography & Layout",
        image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop",
        description: "Large text elements with circular, open letterforms and substantial weight"
      },
      {
        title: "Interface Elements",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1915&auto=format&fit=crop",
        description: "Rounded design language with substantial padding and redundant feedback cues"
      }
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1915&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop"
    ],
    link: "https://xd.adobe.com/view/866550b7-89fd-4901-92d2-dc087ed5fb28-d336/screen/4d7b2d99-6a21-45fb-b04b-c398d6bedc83/?fullscreen"
  },
  {
    title: "STUDIT",
    description: "An AI-powered study companion for Israeli Psychometric Entrance Test preparation with personalized study plans.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    tags: ["Educational Tech", "AI"],
    slug: "studit",
    color: "#F59E0B",
    overview: "Studit is a web-based platform designed to help students prepare for the Israeli Psychometric Entrance Test (equivalent to the SAT/ACT). It provides personalized study plans, adaptive practice tests, and AI-generated scheduling based on individual performance and learning preferences.",
    challenge: "Psychometric exam preparation is typically stressful, time-consuming, and often inefficient. Many students struggle to structure their study time effectively or identify which areas need the most attention. Existing platforms often present practice questions in a static, uninspiring format that fails to engage students.",
    solution: "I designed Studit as an interactive, adaptive learning platform that makes studying feel less overwhelming and more engaging. The interface guides users through a complete journey: from selecting their exam date to taking a diagnostic assessment and receiving a personalized study schedule.",
    process: [
      "Conducted extensive research into student pain points during exam preparation",
      "Analyzed existing educational platforms like Yoel Geva and Kidum to identify strengths and weaknesses",
      "Developed wireframes and user flows that addressed key pain points while introducing interactive elements",
      "Conducted multiple rounds of user testing to refine the interface",
      "Created a clean, modern aesthetic with a warm color palette for a calm, focused studying environment"
    ],
    designProcessAndAesthetics: "For Studit, I developed a visual language that balances academic seriousness with engaging interactivity. The color palette features warm neutrals (beiges and soft browns) as a base, accented with muted blues and occasional touches of yellow to create focus points without overwhelming the learning content. This restrained approach creates a calm environment conducive to focused study while providing enough visual interest to maintain engagement.\n\nTypography choices were critical for supporting extended reading periods. I selected Assistant as the primary font for its excellent readability and comprehensive Hebrew character support. Text hierarchy uses weight variation rather than dramatic size differences, with a minimum body text size of 16px to ensure comfortable reading during study sessions.\n\nThe layout employs generous white space and a consistent grid system to organize complex information clearly. Cards with subtle shadows and rounded corners (4px radius) contain related information groups, while interactive elements use slightly more pronounced shadows and state changes to indicate their functionality.\n\nUser flow considerations were paramount, with the interface guiding users through a logical progression from exam selection to diagnostic assessment and personalized scheduling. Each stage features animated transitions that provide both functional feedback and moments of delight in what could otherwise be a stressful process.",
    challengesAndSolutions: "A significant design challenge emerged in making practice questions interactive without sacrificing academic rigor. Traditional multiple-choice formats felt static and disengaging, but overly gamified approaches risked undermining the serious purpose of the platform. The solution involved developing custom interaction patterns for different question types—drag-and-drop completions for verbal reasoning, interactive graphs for quantitative sections—that enhance engagement while maintaining focus on the academic content.\n\nAnother challenge was designing the AI-powered scheduling system to feel trustworthy and valuable rather than arbitrary. Early user testing revealed skepticism about algorithmically generated schedules. I addressed this by creating a transparent process that reveals the factors influencing schedule creation and allows users to adjust parameters while still benefiting from AI optimization. The schedule customization interface went through five iterations before achieving the right balance of guidance and user control.\n\nThe loading screens presented a particular design opportunity—rather than passive waiting periods, I transformed them into micro-moments of encouragement with progress animations and supportive messages. User testing showed this significantly reduced perceived waiting time and helped maintain motivation throughout the assessment process.",
    designImages: [
      {
        title: "Color Palette",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
        description: "Warm neutrals with muted blues and yellow accents"
      },
      {
        title: "Typography & Layout",
        image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop",
        description: "Assistant font with weight variations and generous white space"
      },
      {
        title: "Interface Components",
        image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop",
        description: "Cards with subtle shadows and clear visual feedback"
      }
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop"
    ],
    link: "https://xd.adobe.com/view/a56c02e8-2d4f-4803-bcbb-811822907cf1-f03f/?fullscreen"
  },
  {
    title: "PLANT LEARNING MODULE",
    description: "An interactive educational module designed to boost customer confidence in selecting and caring for houseplants.",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=2090&auto=format&fit=crop",
    tags: ["Instructional Design"],
    slug: "plant-module",
    color: "#22C55E",
    overview: "The Plant Learning Module was developed for 'Mishak 50', a company experiencing declining houseplant sales. The primary goal was to increase sales by educating customers and boosting their confidence in plant care through an interactive learning experience.",
    challenge: "Many potential plant buyers lack confidence in their ability to care for houseplants, resulting in hesitation to purchase. The challenge was to create an educational solution that would effectively build this confidence through clear, accessible information and interactive learning experiences.",
    solution: "I designed a comprehensive e-learning module focused on six key houseplants, with detailed care instructions, interactive assessments, and engaging visuals. The module employs a branching navigation model allowing users to personalize their learning journey based on their specific interests.",
    process: [
      "Analyzed 'Mishak 50' sales data to identify key plants with potential for increased sales",
      "Conducted user research to understand common plant care misconceptions and learning preferences",
      "Developed the instructional framework based on plant categories and care requirements",
      "Created interactive elements including pre-learning assessments and knowledge checks",
      "Designed a clean, plant-themed aesthetic with high-quality visuals and intuitive navigation"
    ],
    designProcessAndAesthetics: "For the Plant Learning Module, I designed a visual experience that embodies the natural, organic feel of the subject matter. The color palette centers on various shades of green with white space for balance, creating a fresh, clean aesthetic that evokes plant life while maintaining excellent readability.\n\nTypography choices prioritize clarity and accessibility, with sans-serif fonts at appropriate sizes for comfortable reading on various devices. Headings use a slightly bolder weight of the same font family to maintain visual harmony while creating clear information hierarchy.\n\nThe interface layout employs a grid system that organizes content into digestible sections, with consistent spacing and alignment. Plant images feature prominently throughout the module, serving both instructional and aesthetic purposes. Each plant category uses subtle visual cues to help users track where they are in the learning journey.\n\nInteractive elements employ a consistent design language, with clearly indicated touch/click targets and visual feedback on user actions. Drag-and-drop activities for plant placement and animated transitions between sections enhance engagement while reinforcing learning objectives.",
    challengesAndSolutions: "A key challenge was balancing comprehensive plant care information with an approachable, non-overwhelming user experience. Many users reported feeling intimidated by detailed care instructions in initial testing. I addressed this by implementing a layered information architecture that presents essential care details first, with the option to expand sections for more detailed information.\n\nAnother challenge was creating effective assessment activities that would genuinely measure understanding rather than simple recall. I developed application-based questions that ask users to make decisions about plant placement and care schedules based on specific scenarios. These contextual assessments proved more effective at building confidence than traditional knowledge-checking questions.\n\nThe technical implementation presented challenges regarding the integration of high-quality visuals while maintaining performance across devices. I optimized image assets and implemented progressive loading to ensure the module remained responsive and engaging even on lower-bandwidth connections.",
    designImages: [
      {
        title: "Color Palette",
        image: "https://images.unsplash.com/photo-1447753072255-ca9a2c22afe7?q=80&w=2076&auto=format&fit=crop",
        description: "Various shades of green with white space for a fresh, plant-inspired aesthetic"
      },
      {
        title: "Typography & Layout",
        image: "https://images.unsplash.com/photo-1582640299692-63b2d1e1a2e3?q=80&w=2069&auto=format&fit=crop",
        description: "Clean, accessible typography with consistent spacing and alignment"
      },
      {
        title: "Interactive Elements",
        image: "https://images.unsplash.com/photo-1581022294576-c6d2an29d9af?q=80&w=2070&auto=format&fit=crop",
        description: "Engaging interactive elements with clear visual feedback"
      }
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1545165311-508ed0c91361?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467043198406-dc953a3defa0?q=80&w=2070&auto=format&fit=crop"
    ],
    link: "https://360.articulate.com/review/content/6849bc42-e11b-489d-bcc4-cad07341bdbf/review"
  }
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.slug === slug);
  
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
      <section 
        className="pt-20 pb-32 relative"
        style={{ backgroundColor: `${project.color}10` }}
      >
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
              
              <h1 className="text-4xl md:text-6xl font-medium mb-6" style={{ color: project.color }}>
                {project.title}
              </h1>
              
              <p className="text-lg mb-8">
                {project.overview}
              </p>
              
              {project.link && (
                <ProjectLink href={project.link} />
              )}
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto"
                />
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
                {project.process.map((step, index) => (
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
                      <img 
                        src={project.editorShowcase.image} 
                        alt="Content Generator Interface"
                        className="w-full h-auto"
                      />
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
                      <img 
                        src="/lovable-uploads/first-version-save-repunzel.png" 
                        alt="Initial Design Concept"
                        className="w-full h-auto"
                      />
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
                  <h2 className="text-2xl font-medium mb-6">🛠 Technical & Development Challenges</h2>
                  
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-muted-foreground">
                      Developing a flexible yet intuitive content creation system posed a significant challenge. The content editor needed to support a variety of question types while remaining simple enough for non-technical educators. Extensive card-sorting exercises with teachers helped identify the most intuitive organization, leading to a template-based approach where customization options are progressively introduced as users gain familiarity.
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
            {project.structureTree && (
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
            
            {/* Challenges & Solutions Section - For all projects except Save Rapunzel */}
            {project.slug !== 'save-rapunzel' && (
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.additionalImages.map((image, index) => (
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
          </div>
        </div>
      </section>
      
      {/* Next Project */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-muted-foreground mb-4">Next Project</p>
              <h3 className="text-2xl font-medium mb-6">
                {projectsData[(projectsData.findIndex(p => p.slug === slug) + 1) % projectsData.length].title}
              </h3>
              <a 
                href={`/projects/${projectsData[(projectsData.findIndex(p => p.slug === slug) + 1) % projectsData.length].slug}`} 
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

