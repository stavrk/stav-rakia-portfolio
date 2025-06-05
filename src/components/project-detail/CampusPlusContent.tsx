import { motion } from "framer-motion";
import { Users, MessageCircle, Map, Phone, Settings, User, Target, Lightbulb, AlertCircle, ArrowRight } from "lucide-react";
import { Project } from "@/data/types";
import { ProjectSection } from "./ProjectSection";

interface CampusPlusContentProps {
  project: Project;
}

export const CampusPlusContent = ({ project }: CampusPlusContentProps) => {
  if (project.slug !== 'campus-plus') return null;
  
  const personas = [
    {
      name: "Liron",
      age: 20,
      degree: "Visual Communication",
      quote: "I just want to know where to go and what to do on my first day",
      image: "/lovable-uploads/liron_persona.jpg"
    },
    {
      name: "Tomer",
      age: 35,
      degree: "Electrical Engineering MA", 
      quote: "Everything should be in one place, fast and clean",
      image: "/lovable-uploads/tomer_persona.jpg"
    },
    {
      name: "Hadar",
      age: 27,
      degree: "Medical Tech",
      quote: "The bureaucracy is so confusing and unclear",
      image: "/lovable-uploads/hadar_persona.jpg"
    },
    {
      name: "Or",
      age: 21,
      degree: "Computer Science", 
      quote: "I want to preview how my first day will actually go",
      image: "/lovable-uploads/or_persona.jpg"
    },
    {
      name: "Neta",
      age: 25,
      degree: "Learning Technologies",
      quote: "The information is always outdated and inconsistent",
      image: "/lovable-uploads/neta_persona.jpg"
    }
  ];

  const insights = [
    {
      icon: AlertCircle,
      text: "New students feel lost, unprepared, and overwhelmed"
    },
    {
      icon: Target,
      text: "Info is scattered across different websites and hard to trust"
    },
    {
      icon: Lightbulb,
      text: "Students want short, clear, practical information in one place"
    },
    {
      icon: MessageCircle,
      text: "Strong need for a non-intrusive, helpful chatbot that doesn't stand alone"
    }
  ];

  const features = [
    {
      icon: Map,
      title: "🗺️ Interactive Campus Map",
      description: "Clear design with filters by building, service type, and department"
    },
    {
      icon: Phone,
      title: "📞 Contact Directory", 
      description: "Smart filters with names, roles, office hours, and locations"
    },
    {
      icon: MessageCircle,
      title: "🤖 HITbot Assistant",
      description: "Smart, tailored chatbot that adapts to user profiles"
    },
    {
      icon: Settings,
      title: "👋 Onboarding Flow",
      description: "Walkthrough of app features for new users"
    }
  ];
  
  return (
    <>
      {/* My Role Section */}
      <ProjectSection title="My Role" color={project.color}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center flex flex-col items-center justify-center">
            <User className="h-8 w-8 mb-4" style={{ color: project.color }} />
            <h4 className="font-semibold mb-2">UX Research</h4>
            <p className="text-sm text-muted-foreground">User interviews and persona creation</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center flex flex-col items-center justify-center">
            <Settings className="h-8 w-8 mb-4" style={{ color: project.color }} />
            <h4 className="font-semibold mb-2">Wireframing</h4>
            <p className="text-sm text-muted-foreground">Prototyping and user flows</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center flex flex-col items-center justify-center">
            <MessageCircle className="h-8 w-8 mb-4" style={{ color: project.color }} />
            <h4 className="font-semibold mb-2">UX Writing</h4>
            <p className="text-sm text-muted-foreground">Microcopy and content strategy</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center flex flex-col items-center justify-center">
            <Target className="h-8 w-8 mb-4" style={{ color: project.color }} />
            <h4 className="font-semibold mb-2">Visual Design</h4>
            <p className="text-sm text-muted-foreground">Design system and UI components</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          <strong>Collaborators:</strong> Liri Katnov & Eden Nissoiev
        </p>
      </ProjectSection>

      {/* User Research & Personas */}
      <ProjectSection title="User Research & Personas" color={project.color}>
        <p className="text-muted-foreground mb-8">
          We interviewed over 10 students from different degrees and years of study. Based on the research, we created five detailed personas representing real user types at HIT with unique pain points and goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={persona.image} 
                  alt={persona.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-lg mb-1" style={{ color: project.color }}>
                {persona.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {persona.age}, {persona.degree}
              </p>
              <p className="text-sm text-muted-foreground italic">
                "{persona.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </ProjectSection>

      {/* Main Insights */}
      <ProjectSection title="Main Insights" color={project.color}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-border/50 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <insight.icon className="h-6 w-6 mb-3 flex-shrink-0" style={{ color: project.color }} />
              <p className="text-sm text-muted-foreground">{insight.text}</p>
            </motion.div>
          ))}
        </div>
      </ProjectSection>

      {/* Key Features */}
      <ProjectSection title="Key Features" color={project.color}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4 className="font-semibold mb-3">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </ProjectSection>

      {/* First-Time Onboarding Experience */}
      <ProjectSection title="First-Time Onboarding Experience" color={project.color}>
        <p className="text-muted-foreground mb-8">
          The app opens with a short and friendly onboarding flow, introducing users to the app's key features and what they can expect to find.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl overflow-hidden border-2 border-border/50 shadow-md">
            <img src="/lovable-uploads/campus_onboarding1.jpg" alt="Onboarding Step 1" className="w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden border-2 border-border/50 shadow-md">
            <img src="/lovable-uploads/campus_onboarding2.jpg" alt="Onboarding Step 2" className="w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden border-2 border-border/50 shadow-md">
            <img src="/lovable-uploads/campus_onboarding3.jpg" alt="Onboarding Step 3" className="w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden border-2 border-border/50 shadow-md">
            <img src="/lovable-uploads/campus_onboarding4.jpg" alt="Onboarding Step 4" className="w-full h-auto" />
          </div>
        </div>
      </ProjectSection>

      {/* HITbot Core Feature */}
      <ProjectSection title="HITbot – Our Core Feature" color={project.color}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="lg:pt-8">
            <h4 className="text-xl font-semibold mb-4" style={{ color: project.color }}>
              What is HITbot?
            </h4>
            <p className="text-muted-foreground mb-6">
              A smart, always-available assistant that gives short, accurate answers and directs students to the right office or contact — based on their profile.
            </p>
            
            <h4 className="text-xl font-semibold mb-4" style={{ color: project.color }}>
              How it works:
            </h4>
            
            <div className="space-y-6 mb-8">
              <div>
                <h5 className="font-semibold mb-2" style={{ color: project.color }}>Smart Profile Matching</h5>
                <p className="text-muted-foreground text-sm">When a student first uses the app, they fill out a short profile (e.g. program, age, level of studies). HITbot uses this data to personalize the experience.</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2" style={{ color: project.color }}>Contextual Answers</h5>
                <p className="text-muted-foreground text-sm">HITbot adapts responses to fit the user's context — offering short, clear answers and direct links to the relevant people, locations, or digital forms.</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2" style={{ color: project.color }}>Real-Life Examples</h5>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>"Where do I pay tuition?"</strong> → HITbot answers with the exact contact person, office hours, and a map link</p>
                  <p><strong>"Where's my classroom?"</strong> → HITbot shows the campus map and nearest entrance</p>
                  <p><strong>"I have a tech issue"</strong> → HITbot offers the right IT contact and a troubleshooting guide</p>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2" style={{ color: project.color }}>Live Video Support</h5>
                <p className="text-muted-foreground text-sm">In addition to text-based help, HITbot can initiate a live video call with a real representative — based on the user's location on campus and the issue they're facing. This feature allows students to speak directly with support staff in real time, making the help experience feel more human, immediate, and stress-free.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-[400px] h-full">
              <video 
                className="w-full h-full rounded-[48px] max-w-[400px] object-cover" 
                controls 
                autoPlay
                muted
                loop
                preload="metadata"
                poster="/lovable-uploads/campus_home_page.jpg"
              >
                <source src="/lovable-uploads/campus-plus-chatbot.mp4" type="video/mp4" />
                <p className="text-muted-foreground text-center py-4">
                  Video not available. Please check the video file format and hosting.
                </p>
              </video>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* Visual Design System */}
      <ProjectSection title="Visual Design System" color={project.color}>
        <div className="space-y-8">
          <div>
            <div className="flex items-center mb-4">
              <h4 className="text-lg font-semibold">Color Palette</h4>
            </div>
            <p className="text-muted-foreground mb-6">
              We based the palette on HIT's official turquoise to maintain visual consistency and institutional branding. To support engagement and guide user action, we introduced a secondary orange color.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Typography</h4>
            <p className="text-muted-foreground mb-4">
              <strong>Rubik</strong> – for most of the interface and body text. It's a rounded, lightweight, and highly readable font that brings warmth and clarity to the content.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Gadi</strong> – a handwritten-style Hebrew font, used only in titles and short sentences to create a personal, optimistic feel.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden mb-8">
            <img src="/lovable-uploads/campus-ui.png" alt="UI Style System" className="w-full h-auto" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: project.color }}>And what about the Logo?</h2>
            <p className="text-muted-foreground mb-6">
              The Campus+ logo was designed to align with HIT's branding while standing on its own as a fresh, mobile-native product.
            </p>
            
            <div className="flex gap-12 items-center justify-center mb-8">
              <div className="text-center">
                <img src="/lovable-uploads/hitlogo.png" alt="HIT Logo" className="h-48 mb-2 mx-auto" />
                <p className="text-sm text-muted-foreground">HIT</p>
              </div>
              <ArrowRight className="h-12 w-12 text-muted-foreground" />
              <div className="text-center">
                <img src="/lovable-uploads/campus-logo.png" alt="Campus+ Logo" className="h-48 mb-2 mx-auto" />
                <p className="text-sm text-muted-foreground">Campus+</p>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* More Than Just an App */}
      <ProjectSection title="More Than Just an App" color={project.color}>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
            <p className="text-muted-foreground">Empathy is key when designing for academic institutions — it's not just about usability, but stress relief</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
            <p className="text-muted-foreground">Visual hierarchy and tone of voice can make the difference between confusion and clarity</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
            <p className="text-muted-foreground">Chatbots should enhance, not replace, human support</p>
          </div>
        </div>
      </ProjectSection>

      {/* See It in Action Section */}
      <ProjectSection title="See It in Action" color={project.color}>
        <p className="text-muted-foreground mb-8">
          See Campus+ in action through this interactive demo showcasing the full app flow.
        </p>
        
        <div className="max-w-[280px] mx-auto">
          <video 
            className="w-full rounded-[32px]" 
            controls 
            autoPlay
            muted
            loop
            preload="metadata"
            poster="/lovable-uploads/campus_home_page.jpg"
          >
            <source src="/lovable-uploads/campus-plus-flow.mp4" type="video/mp4" />
            <p className="text-muted-foreground text-center py-4">
              Video not available. Please check the video file format and hosting.
            </p>
          </video>
        </div>
      </ProjectSection>
    </>
  );
};
