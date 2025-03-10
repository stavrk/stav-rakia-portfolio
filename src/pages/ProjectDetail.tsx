
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Clock, Users, Target } from 'lucide-react';

const projectsData = [
  {
    title: "ROOMIE",
    description: "An interactive guide designed to simplify the often overwhelming process of moving into a first apartment for young adults.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    tags: ["UX/UI Design", "User Research"],
    slug: "roomie",
    color: "#EC4899",
    overview: "Roomie is a comprehensive digital guide designed to simplify the often overwhelming process of moving into a first apartment. This project emerged from recognizing the challenges and uncertainties that young adults face when navigating housing independence for the first time.",
    challenge: "First-time movers face numerous challenges: understanding lease agreements, budgeting for moving expenses, knowing what essential items to purchase, and navigating roommate dynamics. Traditional resources are often scattered, overwhelming, or fail to address the emotional aspects of this significant life transition.",
    solution: "I designed Roomie with a user-centric workflow that guides users through each stage of the moving process. The interface combines practical checklists with supportive content that acknowledges both the practical and emotional aspects of moving.",
    process: [
      "Conducted extensive user research, interviewing 12 recent first-time movers about their challenges and wishes",
      "Synthesized insights and created user personas and journey maps to identify key pain points",
      "Developed multiple iterations of wireframes and prototypes for testing with potential users",
      "Refined the interface and features based on user feedback",
      "Created final designs with a warm, approachable aesthetic and calming color palette"
    ],
    results: "User testing revealed that Roomie reduced reported stress levels by 40% among first-time movers and increased confidence in their preparedness. The interactive checklist feature was particularly praised for making the overwhelming process feel structured and achievable.",
    duration: "10 weeks",
    team: "Solo project with user testing participants",
    role: "UX/UI Designer",
    additionalImages: [
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?q=80&w=3276&auto=format&fit=crop"
    ]
  },
  {
    title: "SAVE RAPUNZEL",
    description: "An educational platform with a game for students and a content creation tool for educators built around the classic fairy tale.",
    image: "https://images.unsplash.com/photo-1616161560417-66d4db5892ec?q=80&w=2070&auto=format&fit=crop",
    tags: ["Game Design", "Educational"],
    slug: "save-rapunzel",
    color: "#10B981",
    overview: "Save Rapunzel is a dual-purpose educational platform consisting of an interactive educational game for students and a content creation tool for educators. The platform transforms traditional learning material into engaging game experiences built around the classic fairy tale of Rapunzel.",
    challenge: "Traditional educational materials often fail to capture students' attention, particularly for challenging subjects. Educators need tools to create engaging content without extensive technical knowledge, while students need learning experiences that are both educational and entertaining.",
    solution: "I designed a system with two interconnected components: a fairy tale-themed educational game where correct answers help the prince climb Rapunzel's hair to rescue her, and an intuitive content management system allowing educators to create custom question sets without coding knowledge.",
    process: [
      "Conducted parallel research streams on educators' content creation needs and how children engage with educational games",
      "Developed user personas for both audience segments (educators and students)",
      "Created initial concept, wireframes and interactive prototypes",
      "Conducted testing sessions with both educators and students to refine the user experience",
      "Designed vibrant fairy tale-inspired visuals for game interface and professional aesthetic for educator interface"
    ],
    results: "Initial testing with a class of 25 students showed increased engagement times compared to traditional study methods. Educators reported that the content creation tool reduced preparation time by approximately 30% compared to other digital learning platforms.",
    duration: "16 weeks",
    team: "Collaboration with 2 developers",
    role: "Game Designer & UI Designer",
    additionalImages: [
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop"
    ]
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
    results: "This speculative project successfully demonstrated how fundamental UX principles can be adapted for radically different user needs. The resulting interface effectively communicates complex financial interactions through visual means while maintaining the security protocols essential for financial transactions.",
    duration: "8 weeks",
    team: "Solo speculative design project",
    role: "Speculative UX/UI Designer",
    additionalImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1915&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop"
    ]
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
    results: "User testing showed that students found the personalized scheduling feature particularly valuable, with 85% reporting that it would help them structure their study time more effectively. The interactive practice questions received positive feedback for making exam preparation less monotonous.",
    duration: "14 weeks",
    team: "Collaboration with 1 developer and 1 educational consultant",
    role: "UX/UI Designer",
    additionalImages: [
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop"
    ]
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
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-secondary mr-3">
                    <Clock className="h-5 w-5" style={{ color: project.color }} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-secondary mr-3">
                    <Users className="h-5 w-5" style={{ color: project.color }} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Team</p>
                    <p className="font-medium">{project.team}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-secondary mr-3">
                    <Target className="h-5 w-5" style={{ color: project.color }} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">My Role</p>
                    <p className="font-medium">{project.role}</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: project.color }}
              >
                <span className="mr-2">View Prototype</span>
                <ExternalLink className="h-4 w-4" />
              </a>
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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
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
      
      {/* Results Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-medium mb-4">Results & Impact</h2>
              <p className="text-lg mb-12">
                {project.results}
              </p>
            </motion.div>
            
            {/* Next Project */}
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
