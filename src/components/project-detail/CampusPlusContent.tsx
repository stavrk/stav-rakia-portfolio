
import { motion } from "framer-motion";
import { Users, MessageCircle, Map, Phone, Settings, Palette, AlertCircle, Target, Lightbulb, Navigation, ArrowRight } from "lucide-react";
import { Project } from "@/data/types";
import { ProjectSection } from "./ProjectSection";
import { PersonaCard } from "./PersonaCard";
import { InsightCard } from "./InsightCard";
import { FeatureCard } from "./FeatureCard";

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
      description: "Confused on campus, looking for a welcoming start",
      image: "/lovable-uploads/ceramic_art.jpg"
    },
    {
      name: "Tomer",
      age: 35,
      degree: "Electrical Engineering MA",
      description: "Wants everything in one place, fast and clean",
      image: "/lovable-uploads/jewelry_making.jpg"
    },
    {
      name: "Hadar",
      age: 27,
      degree: "Medical Tech",
      description: "Overwhelmed by unclear bureaucracy",
      image: "/lovable-uploads/pilates_reformer.jpg"
    },
    {
      name: "Or",
      age: 21,
      degree: "Computer Science",
      description: "Wants a virtual preview of how his first day will go",
      image: "/lovable-uploads/traveling.jpg"
    },
    {
      name: "Neta",
      age: 25,
      degree: "Learning Technologies",
      description: "Frustrated by inconsistent, outdated content",
      image: "/lovable-uploads/volunteering_with_dogs.jpg"
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
      title: "Interactive Campus Map",
      description: "Clear design with filters by building, service type, and department"
    },
    {
      icon: Phone,
      title: "Contact Directory",
      description: "Smart filters with names, roles, office hours, and locations"
    },
    {
      icon: MessageCircle,
      title: "HITbot Assistant",
      description: "Smart, tailored chatbot that adapts to user profiles"
    },
    {
      icon: Settings,
      title: "Onboarding Flow",
      description: "Walkthrough of app features for new users"
    }
  ];
  
  return (
    <>
      {/* My Role Section */}
      <ProjectSection title="My Role" color={project.color}>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4" style={{ color: project.color }}>
            UX/UI Research and Design
          </h3>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li>• User interviews and persona creation</li>
            <li>• Wireframing and prototyping</li>
            <li>• UX writing and microcopy</li>
            <li>• Visual design system</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            <strong>Collaborators:</strong> Liri Katnov & Eden Nissoiev
          </p>
        </div>
      </ProjectSection>

      {/* User Research & Personas */}
      <ProjectSection title="User Research & Personas" color={project.color}>
        <p className="text-muted-foreground mb-8">
          We interviewed over 10 students from different degrees and years of study. Based on the research, we created five detailed personas representing real user types at HIT with unique pain points and goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {personas.map((persona, index) => (
            <PersonaCard
              key={persona.name}
              name={persona.name}
              age={persona.age}
              degree={persona.degree}
              description={persona.description}
              image={persona.image}
              color={project.color}
              index={index}
            />
          ))}
        </div>
      </ProjectSection>

      {/* Main Insights */}
      <ProjectSection title="Main Insights" color={project.color}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => (
            <InsightCard
              key={index}
              icon={insight.icon}
              text={insight.text}
              color={project.color}
            />
          ))}
        </div>
      </ProjectSection>

      {/* Key Features */}
      <ProjectSection title="Key Features" color={project.color}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={project.color}
            />
          ))}
        </div>
      </ProjectSection>

      {/* First-Time Onboarding Experience */}
      <ProjectSection title="First-Time Onboarding Experience" color={project.color}>
        <p className="text-muted-foreground mb-8">
          The app opens with a short and friendly onboarding flow, introducing users to the app's key features and what they can expect to find.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl overflow-hidden border border-border/20">
            <img src="/lovable-uploads/campus_onboarding1.jpg" alt="Onboarding Step 1" className="w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden border border-border/20">
            <img src="/lovable-uploads/campus_onboarding2.jpg" alt="Onboarding Step 2" className="w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden border border-border/20">
            <img src="/lovable-uploads/campus_onboarding3.jpg" alt="Onboarding Step 3" className="w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden border border-border/20">
            <img src="/lovable-uploads/campus_onboarding4.jpg" alt="Onboarding Step 4" className="w-full h-auto" />
          </div>
        </div>
      </ProjectSection>

      {/* HITbot Core Feature */}
      <ProjectSection title="HITbot – Our Core Feature" color={project.color}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h4 className="text-xl font-semibold mb-4" style={{ color: project.color }}>
              What is HITbot?
            </h4>
            <p className="text-muted-foreground mb-6">
              A smart, always-available assistant that gives short, accurate answers and directs students to the right office or contact — based on their profile.
            </p>
            
            <h4 className="text-xl font-semibold mb-4" style={{ color: project.color }}>
              How it works:
            </h4>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full text-xs font-bold mr-4 mt-0.5 text-white flex items-center justify-center" style={{ backgroundColor: project.color }}>1</div>
                <p className="text-muted-foreground">User fills out a short profile (e.g. program, age, level)</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full text-xs font-bold mr-4 mt-0.5 text-white flex items-center justify-center" style={{ backgroundColor: project.color }}>2</div>
                <p className="text-muted-foreground">HITbot adapts responses accordingly</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full text-xs font-bold mr-4 mt-0.5 text-white flex items-center justify-center" style={{ backgroundColor: project.color }}>3</div>
                <p className="text-muted-foreground">Real examples: finding a classroom, figuring out who to contact about tuition, or locating a campus office</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-xl overflow-hidden border border-border/20 shadow-lg">
              <video 
                className="w-full rounded-lg max-w-xs" 
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
              <Palette className="h-5 w-5 mr-2" style={{ color: project.color }} />
              <h4 className="text-lg font-semibold">Color Palette</h4>
            </div>
            <p className="text-muted-foreground mb-6">
              We based the palette on HIT's official turquoise to maintain visual consistency and institutional branding. To support engagement and guide user action, we introduced a secondary orange color.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Typography</h4>
            <p className="text-muted-foreground mb-6">
              <strong>Gadi</strong> – a handwritten-style Hebrew font, used only in titles and short sentences to create a personal, optimistic feel.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden mb-8">
            <img src="/lovable-uploads/campus-ui.png" alt="UI Style System" className="w-full h-auto" />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Logo Design</h4>
            <p className="text-muted-foreground mb-6">
              The Campus+ logo was designed to align with HIT's branding while standing on its own as a fresh, mobile-native product.
            </p>
            
            <div className="flex gap-8 items-center justify-center mb-8">
              <div className="text-center">
                <img src="/lovable-uploads/hitlogo.png" alt="HIT Logo" className="h-32 mb-2 mx-auto" />
                <p className="text-sm text-muted-foreground">HIT</p>
              </div>
              <ArrowRight className="h-8 w-8 text-muted-foreground" />
              <div className="text-center">
                <img src="/lovable-uploads/campus-logo.png" alt="Campus+ Logo" className="h-32 mb-2 mx-auto" />
                <p className="text-sm text-muted-foreground">Campus+</p>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* Learnings */}
      <ProjectSection title="Learnings" color={project.color}>
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

      {/* Demo Section */}
      <ProjectSection title="Demo" color={project.color}>
        <p className="text-muted-foreground mb-8">
          See Campus+ in action through this interactive demo showcasing the full app flow.
        </p>
        
        <div className="max-w-xl mx-auto">
          <h4 className="font-semibold mb-4">Full App Flow</h4>
          <div className="rounded-xl overflow-hidden border border-border/20 shadow-lg">
            <video 
              className="w-full rounded-lg" 
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
        </div>
      </ProjectSection>
    </>
  );
};
