
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Clock, Users, Target } from 'lucide-react';

const projectsData = [
  {
    title: "BIP",
    description: "A comprehensive financial management platform redesigned for better user experience and accessibility.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["UX/UI Design", "Financial Tech"],
    slug: "bip",
    color: "#8B5CF6",
    overview: "BIP is a financial management platform that helps users track expenses, save money, and manage investments. The redesign focused on improving usability while maintaining robust functionality.",
    challenge: "The original platform had powerful features but suffered from a confusing interface and poor information architecture, leading to high drop-off rates and customer support requests.",
    solution: "I completely redesigned the user interface, creating a new design system, simplifying complex financial workflows, and improving accessibility features. The redesign focused on clear information hierarchy and intuitive navigation.",
    process: [
      "Conducted user interviews and analyzed customer support data to identify pain points",
      "Created user flows and wireframes to outline the new structure",
      "Developed a design system for consistent visual elements",
      "Built high-fidelity prototypes and conducted usability testing",
      "Worked closely with developers for implementation"
    ],
    results: "The redesign led to a 42% increase in user engagement, 35% reduction in support tickets, and 28% increase in completed transactions.",
    duration: "12 weeks",
    team: "3 designers, 5 developers",
    role: "Lead UX/UI Designer",
    additionalImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1915&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop"
    ]
  },
  {
    title: "ROOMIE",
    description: "A modern roommate matching application with intuitive onboarding and secure messaging features.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    tags: ["App Design", "UX Research"],
    slug: "roomie",
    color: "#EC4899",
    overview: "ROOMIE is a mobile app focused on matching compatible roommates based on lifestyle preferences, helping users find ideal living situations.",
    challenge: "The roommate search process is often stressful and uncertain. Users needed a way to find compatible roommates based on lifestyle preferences, verify potential matches, and communicate securely.",
    solution: "I designed a mobile app with an intuitive matching system, comprehensive profile creation, verification features, and secure in-app messaging.",
    process: [
      "Conducted market research and user interviews to understand pain points in roommate searching",
      "Created user personas and journey maps",
      "Designed the app architecture and workflow",
      "Developed wireframes and interactive prototypes",
      "Conducted usability testing and iterated on the design"
    ],
    results: "The app launched with positive reviews, achieving a 4.7/5 rating. It facilitated over 5,000 successful roommate matches in the first quarter after launch.",
    duration: "16 weeks",
    team: "2 designers, 4 developers, 1 product manager",
    role: "UX/UI Designer",
    additionalImages: [
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?q=80&w=3276&auto=format&fit=crop"
    ]
  },
  {
    title: "Save Rapunzel",
    description: "An educational game aimed at teaching children basic coding concepts through interactive storytelling.",
    image: "https://images.unsplash.com/photo-1616161560417-66d4db5892ec?q=80&w=2070&auto=format&fit=crop",
    tags: ["Game Design", "Educational"],
    slug: "save-rapunzel",
    color: "#10B981",
    overview: "Save Rapunzel is an educational game that teaches children basic programming concepts through interactive fairy tale storytelling.",
    challenge: "Teaching programming concepts to young children in an engaging way that keeps them motivated while learning foundational skills.",
    solution: "I created a game that combines fairy tale elements with visual programming challenges. Players help Rapunzel escape her tower by solving increasingly complex coding puzzles.",
    process: [
      "Researched child development and educational game design principles",
      "Created character designs and storyline that would appeal to target age group",
      "Designed intuitive drag-and-drop coding interface for children",
      "Developed a progression system with appropriate difficulty scaling",
      "Conducted playtesting with children and incorporated feedback"
    ],
    results: "The game has been adopted by over 200 elementary schools and has shown a 40% improvement in logical reasoning skills among regular players.",
    duration: "20 weeks",
    team: "1 designer, 2 developers, 1 educational consultant",
    role: "Game Designer & UI Designer",
    additionalImages: [
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop"
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
                <span className="mr-2">View Live Project</span>
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
