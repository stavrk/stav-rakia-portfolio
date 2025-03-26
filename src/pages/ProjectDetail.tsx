
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
  process: ["Conducted parallel research streams on educators' content creation needs and how children engage with educational games", "Developed user personas for both audience segments (educators and students)", "Created initial concept, wireframes and interactive prototypes", "Conducted testing sessions with both educators and students to refine the user experience", "Designed vibrant fairy tale-inspired visuals for game interface and professional aesthetic for educator interface"],
  designProcessAndAesthetics: "For Save Rapunzel, a dual-interface design system serves both young learners and their educators. The game interface employs a vibrant, fairy tale-inspired color scheme dominated by purples, reds, and golds that evoke a sense of fantasy while maintaining sufficient contrast for readability.\n\nTypography choices differ between the student and educator interfaces. The game side uses the rounded, playful Fredoka font (minimum 18px) to engage younger users, while the educator dashboard employs the same font family with clear weight distinctions to create a visual hierarchy in the content management system.\n\nThe visual elements were carefully designed to create an engaging yet focused learning environment. Game elements like buttons, answer cards, and progress indicators feature rounded edges and vibrant colors that appeal to younger users. Background elements like the tower and clouds incorporate subtle animations to create a living world without distracting from the educational content.\n\nInteractive elements employ consistent visual cues—correct answers trigger animations of the prince climbing higher on Rapunzel's hair, providing immediate visual feedback that reinforces learning progress. The editor interface uses drag-and-drop functionality and inline editing to make content creation intuitive for educators with varying levels of technical expertise.",
  challengesAndSolutions: "A significant challenge in the development process was designing a content editor flexible enough to accommodate various question types while remaining simple for non-technical educators. The solution involved extensive card-sorting exercises with educators to determine the most intuitive organization of functions, resulting in a template-based approach with customization options revealed progressively as users become more comfortable with the system.\n\nAdditionally, optimizing the balance between engaging visual elements and educational clarity required careful consideration. This was addressed through multiple testing iterations with both educators and students to ensure the final product maintained educational effectiveness while providing an engaging user experience.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/save-repunzel-color-palette.png",
    description: "Earthy, storybook-inspired color palette with deep blue, moss green, golden yellow, warm copper, and brick red."
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
  designProcessAndAesthetics: "BIP reimagines financial interfaces for extraterrestrial users, featuring high-contrast, vibrant colors that address alien perceptual constraints—specifically their difficulty with gray tones and subtle contrasts. The space-themed interface uses bold blues and yellows against deep cosmic backgrounds to ensure maximum visibility.\n\nTypography & Readability\nAll text elements exceed standard human application sizes (14px minimum for secondary text, 18-24px for primary elements) to accommodate alien visual systems. We selected fonts with circular, open letterforms and substantial weight to maximize legibility.\n\nInterface Elements\nThe consistently rounded design includes generous padding around interactive elements to accommodate alien motor control differences. Buttons provide redundant feedback through both color and icon changes. Space-themed iconography replaces traditional financial symbols, creating culturally relevant visual metaphors.\n\nCustom animations communicate process status without relying on text. Using principles of anticipation and follow-through, these animations clearly signal the beginning and completion of processes, particularly during critical transaction moments.",
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
                {/* Content Generator Interface */}
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Content Generator Interface</h2>
                  <p className="text-muted-foreground mb-8">The intuitive content generator allows educators to create customized educational content without technical knowledge, featuring an easy-to-use interface with built-in validation and guidance.</p>
                  
                  <div className="rounded-xl overflow-hidden border border-border/40 shadow-lg mb-8">
                    <img src="/lovable-uploads/save-repunzel-editor.png" alt="Content Generator Interface" className="w-full h-auto" />
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4 text-muted-foreground">The generator represents a revolutionary approach to creating educational content. Unlike traditional systems, the interface balances simplicity with power, featuring built-in protection mechanisms that prevent the publication of invalid games and provide teachers with immediate feedback.</p>
                    <p className="mb-4 text-muted-foreground">The generator includes a progressive approval system that encourages users to create at least 10 quality questions before publishing the game, with a maximum allowance of 30 questions per game. These specifications were established after extensive user research with teachers and education professionals.</p>
                  </div>
                </motion.div>

                {/* Graphic Development Section */}
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Graphic Development and Design Evolution</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4 text-muted-foreground">The 'Save Rapunzel' project was characterized by an iterative design process that underwent numerous changes from the initial concept to the final product. The graphics and visual elements were carefully tailored to enhance the user experience.</p>
                  </div>
                  
                  <div className="mt-8 rounded-xl overflow-hidden border border-border/40">
                    <img src="/lovable-uploads/first-version-save-repunzel.png" alt="Initial Design Concept" className="w-full h-auto" />
                  </div>
                </motion.div>
                
                {/* Design Process & Aesthetics Section - UPDATED TEXT HERE */}
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
                          <p className="text-sm text-muted-foreground">Earthy, storybook-inspired color palette with deep blue, moss green, golden yellow, warm copper, and brick red.</p>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="mb-8">
                      <p className="mb-4 text-muted-foreground">Typography choices differ between the student and educator interfaces. The game side uses the rounded, playful Fredoka font (minimum 18px) to engage younger users, while the educator dashboard employs the same font family with clear weight distinctions to create a visual hierarchy in the content management system.</p>
                      
                      <motion.div 
                        className="mt-6 rounded-lg overflow-hidden border border-border/40" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <img src="/lovable-uploads/save-repunzel-font.png" alt="Typography" className="w-full object-cover h-64" />
                        <div className="p-4 bg-secondary/30">
                          <h4 className="text-lg font-medium mb-1">Typography</h4>
                          <p className="text-sm text-muted-foreground">Rounded, playful Fredoka font with consistent sizing for optimal readability</p>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="mb-8">
                      <p className="mb-4 text-muted-foreground">The visual elements were carefully designed to create an engaging yet focused learning environment. Game elements like buttons, answer cards, and progress indicators feature rounded edges and vibrant colors that appeal to younger users. Background elements like the tower and clouds incorporate subtle animations to create a living world without distracting from the educational content.</p>
                      
                      <motion.div 
                        className="mt-6 rounded-lg overflow-hidden border border-border/40" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <img src="/lovable-uploads/save-repunzel-interface.png" alt="Interface Elements" className="w-full object-cover h-[600px]" />
                        <div className="p-4 bg-secondary/30">
                          <h4 className="text-lg font-medium mb-1">Visual Elements</h4>
                          <p className="text-sm text-muted-foreground">Rounded, vibrant interface elements with consistent visual language</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Key Animations Section - UPDATED TEXT HERE WITH HYPHENS */}
                <motion.div 
                  className="mb-16" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-medium mb-6">Key Animations</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4 text-muted-foreground">Strategic animations support the learning experience without causing distraction. The introductory sequence - showing Rapunzel walking through the tower with a gradual zoom to the window - replaced our original storybook concept and significantly improved engagement metrics. Similarly, the prince's climbing animation provides immediate feedback on correct answers while strengthening emotional investment in the storyline.</p>
                  </div>
                </motion.div>

                {/* Technical & Development Challenges Section - UPDATED LIST FORMAT */}
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
                    
                    <div className="ml-6 space-y-6">
                      <div>
                        <p className="font-medium mb-2">Content Creation System:</p>
                        <p className="text-muted-foreground">Designed an intuitive editor for non-technical educators through card-sorting exercises that informed a template-based approach with progressive customization.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium mb-2">Hebrew Interface Complexities:</p>
                        <p className="text-muted-foreground">Built a custom solution for right-to-left text, number reversal, and alignment of English within Hebrew sentences—greatly improving usability.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium mb-2">Balancing Engagement with Focus:</p>
                        <p className="text-muted-foreground">After early prototypes showed students were distracted by animations, we added a "focus mode" that simplifies visuals during active learning moments.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium mb-2">Workflow Management:</p>
                        <p className="text-muted-foreground">Established robust file versioning and backup protocols. These proved essential when partial code loss occurred, enabling full recovery without delays.</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">Through iterative testing and structured problem-solving, we delivered a product that meets educational goals and usability standards.</p>
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
                    BIP's animation system is tailored to extraterrestrial perception patterns. Successful payments are represented through animated spaceships and meteorites, while loading states use orbital animations to maintain engagement. The interface provides immediate, redundant feedback through color shifts, size changes, and animated transitions—ensuring clarity across different alien perceptual abilities.
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
                    We overcame several unique challenges:
                  </p>
                  
                  <div className="ml-6 space-y-6">
                    <div>
                      <p className="font-medium mb-2">User Testing Limitations:</p>
                      <p className="text-muted-foreground">In the absence of direct alien testing, we created detailed extraterrestrial personas with specific perceptual constraints and validated designs against these parameters.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Security Verification:</p>
                      <p className="text-muted-foreground">We developed a specialized facial recognition system for alien morphologies, using animated positioning guides that balance security with accessibility.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Visual Adaptation:</p>
                      <p className="text-muted-foreground">The interface required complete reimagining for alien perception while maintaining essential financial functionality.</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Usability Balance:</p>
                      <p className="text-muted-foreground">We preserved recognizable patterns from human financial apps while introducing novel interactions tailored to alien cognitive processes.</p>
                    </div>
                  </div>
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
