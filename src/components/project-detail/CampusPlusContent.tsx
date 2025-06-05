
import { motion } from "framer-motion";
import { Users, MessageCircle, Map, Phone, Settings, Palette } from "lucide-react";
import { Project } from "@/data/types";
import { ProjectSection } from "./ProjectSection";

interface CampusPlusContentProps {
  project: Project;
}

export const CampusPlusContent = ({ project }: CampusPlusContentProps) => {
  if (project.slug !== 'campus-plus') return null;
  
  return (
    <>
      {/* My Role Section */}
      <ProjectSection title="My Role">
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
      <ProjectSection title="User Research & Personas">
        <p className="text-muted-foreground mb-8">
          We interviewed over 10 students from different degrees and years of study. Based on the research, we created five detailed personas representing real user types at HIT with unique pain points and goals.
        </p>
        
        <div className="bg-secondary/30 p-6 rounded-xl mb-8">
          <h4 className="text-lg font-semibold mb-4" style={{ color: project.color }}>
            Key Personas
          </h4>
          <div className="space-y-3 text-sm">
            <div><strong>Liron (20, Visual Communication):</strong> Confused on campus, looking for a welcoming start</div>
            <div><strong>Tomer (35, Electrical Engineering MA):</strong> Wants everything in one place, fast and clean</div>
            <div><strong>Hadar (27, Medical Tech):</strong> Overwhelmed by unclear bureaucracy</div>
            <div><strong>Or (21, Computer Science):</strong> Wants a virtual preview of how his first day will go</div>
            <div><strong>Neta (25, Learning Technologies):</strong> Frustrated by inconsistent, outdated content</div>
          </div>
        </div>
      </ProjectSection>

      {/* Main Insights */}
      <ProjectSection title="Main Insights">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
              <p className="text-muted-foreground">New students feel lost, unprepared, and overwhelmed</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
              <p className="text-muted-foreground">Info is scattered across different websites and hard to trust</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
              <p className="text-muted-foreground">Students want short, clear, practical information in one place</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
              <p className="text-muted-foreground">Strong need for a non-intrusive, helpful chatbot that doesn't stand alone</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* Key Features */}
      <ProjectSection title="Key Features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <Map className="h-6 w-6 mr-3 flex-shrink-0 mt-1" style={{ color: project.color }} />
              <div>
                <h4 className="font-semibold mb-2">Interactive Campus Map</h4>
                <p className="text-muted-foreground text-sm">Clear design with filters by building, service type, and department</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-6 w-6 mr-3 flex-shrink-0 mt-1" style={{ color: project.color }} />
              <div>
                <h4 className="font-semibold mb-2">Contact Directory</h4>
                <p className="text-muted-foreground text-sm">Smart filters with names, roles, office hours, and locations</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MessageCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" style={{ color: project.color }} />
              <div>
                <h4 className="font-semibold mb-2">HITbot Assistant</h4>
                <p className="text-muted-foreground text-sm">Smart, tailored chatbot that adapts to user profiles</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Settings className="h-6 w-6 mr-3 flex-shrink-0 mt-1" style={{ color: project.color }} />
              <div>
                <h4 className="font-semibold mb-2">Onboarding Flow</h4>
                <p className="text-muted-foreground text-sm">Walkthrough of app features for new users</p>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* First-Time Onboarding Experience */}
      <ProjectSection title="First-Time Onboarding Experience">
        <p className="text-muted-foreground mb-8">
          The app opens with a short and friendly onboarding flow, introducing users to the app's key features and what they can expect to find.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl overflow-hidden">
            <img src="/lovable-uploads/campus_onboarding1.png" alt="Onboarding Step 1" className="w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="/lovable-uploads/campus_onboarding2.png" alt="Onboarding Step 2" className="w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="/lovable-uploads/campus_onboarding3.png" alt="Onboarding Step 3" className="w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="/lovable-uploads/campus_onboarding4.png" alt="Onboarding Step 4" className="w-full h-auto" />
          </div>
        </div>
      </ProjectSection>

      {/* HITbot Core Feature */}
      <ProjectSection title="HITbot – Our Core Feature">
        <div className="mb-8">
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
          
          <div className="rounded-xl overflow-hidden bg-black/5 p-4">
            <video 
              className="w-full rounded-lg" 
              controls 
              poster="/lovable-uploads/campus_home_page.png"
            >
              <source src="/lovable-uploads/campus-plus-chatbot.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </ProjectSection>

      {/* Visual Design System */}
      <ProjectSection title="Visual Design System">
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
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Logo Design</h4>
            <p className="text-muted-foreground mb-6">
              The Campus+ logo was designed to align with HIT's branding while standing on its own as a fresh, mobile-native product.
            </p>
            
            <div className="flex gap-8 items-center mb-8">
              <div className="text-center">
                <img src="/lovable-uploads/campus-logo.png" alt="Campus+ Logo" className="h-16 mb-2" />
                <p className="text-sm text-muted-foreground">Campus+</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/hitlogo.png" alt="HIT Logo" className="h-16 mb-2" />
                <p className="text-sm text-muted-foreground">HIT</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden">
            <img src="/lovable-uploads/campus-ui.png" alt="UI Style System" className="w-full h-auto" />
          </div>
        </div>
      </ProjectSection>

      {/* Learnings */}
      <ProjectSection title="Learnings">
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

      {/* Future Plans */}
      <ProjectSection title="Future Plans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
              <p className="text-muted-foreground">Add multilingual support (Hebrew/English)</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
              <p className="text-muted-foreground">Implement voice interaction for better accessibility</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
              <p className="text-muted-foreground">Expand the chatbot's knowledge base through real feedback</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* Demo Section */}
      <ProjectSection title="Demo">
        <p className="text-muted-foreground mb-8">
          See Campus+ in action through these interactive demos showcasing the full app flow and chatbot interaction.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Full App Flow</h4>
            <div className="rounded-xl overflow-hidden bg-black/5 p-4">
              <video 
                className="w-full rounded-lg" 
                controls 
                poster="/lovable-uploads/campus_home_page.png"
              >
                <source src="/lovable-uploads/campus-plus-flow.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Chatbot Interaction</h4>
            <div className="rounded-xl overflow-hidden bg-black/5 p-4">
              <video 
                className="w-full rounded-lg" 
                controls 
                poster="/lovable-uploads/campus_home_page.png"
              >
                <source src="/lovable-uploads/campus-plus-chatbot.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </ProjectSection>
    </>
  );
};
