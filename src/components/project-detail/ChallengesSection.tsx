
import { motion } from "framer-motion";
import { Puzzle, Scale, Clock, SlidersHorizontal, BarChart4, Palette, BrainCircuit, Lightbulb, FlaskConical, Gauge, Sliders, LineChart, Code, Brain } from "lucide-react";

interface ChallengesSectionProps {
  project: any;
}

export const ChallengesSection = ({ project }: ChallengesSectionProps) => {
  const renderStuditChallenges = () => (
    <div className="prose prose-lg max-w-none space-y-4">
      <p className="text-muted-foreground">We overcame several key challenges:</p>
      
      <div className="ml-6 space-y-6">
        <div className="flex items-start">
          <Puzzle className="h-5 w-5 mr-3 text-[#F59E0B] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Balancing Interactivity with Academic Rigor:</p>
            <p className="text-muted-foreground">Multiple-choice felt flat, while full gamification risked losing credibility. We created custom interactions - like drag-and-drop and interactive maps - that kept users engaged without compromising learning goals.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Scale className="h-5 w-5 mr-3 text-[#F59E0B] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Building Trust in Scheduling:</p>
            <p className="text-muted-foreground">Users were skeptical of automated schedules. We made the process transparent and adjustable, refining it through five iterations to balance control with guidance.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="h-5 w-5 mr-3 text-[#F59E0B] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Reducing Wait-Time Frustration:</p>
            <p className="text-muted-foreground">We turned loading screens into moments of encouragement with animations and motivational cues. Color customization added a sense of ownership and personalization.</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderPlantModuleChallenges = () => (
    <div className="prose prose-lg max-w-none space-y-4">
      <p className="text-muted-foreground">We addressed two primary challenges:</p>
      
      <div className="ml-6 space-y-6">
        <div className="flex items-start">
          <SlidersHorizontal className="h-5 w-5 mr-3 text-[#22C55E] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Balancing Rich Content with User Approachability:</p>
            <p className="text-muted-foreground">Initial feedback showed that detailed care instructions could overwhelm novice plant owners. To solve this, we:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Designed a layered information system that starts with essentials and allows users to expand for more detail</li>
              <li>Marked beginner-friendly plants with visual cues</li>
              <li>Included calming, supportive messaging about common mistakes and how to recover from them</li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-start">
          <BarChart4 className="h-5 w-5 mr-3 text-[#22C55E] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Creating Meaningful Assessments:</p>
            <p className="text-muted-foreground">Rather than using simple recall questions, we designed scenario-based activities—like choosing the best location or watering schedule for a plant—that built real-world decision-making skills and increased user confidence.</p>
          </div>
        </div>
      </div>
      
      <p className="text-muted-foreground">This project highlights my ability to turn complex instructional material into an engaging, approachable experience tailored to users' needs and learning goals.</p>
    </div>
  );
  
  const renderRoomieChallenges = () => (
    <div className="prose prose-lg max-w-none space-y-4">
      <p className="text-muted-foreground">We faced several significant challenges:</p>
      
      <div className="ml-6 space-y-6">
        <div className="flex items-start">
          <Palette className="h-5 w-5 mr-3 text-[#F4DB8B] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Visual Design for Emotional Support:</p>
            <p className="text-muted-foreground">Creating a visual language that balanced practicality with emotional support was challenging. We developed a warm, calming color palette and rounded design system that provides a sense of stability during a chaotic transition.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <BrainCircuit className="h-5 w-5 mr-3 text-[#F4DB8B] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Progressive Information Disclosure:</p>
            <p className="text-muted-foreground">Users felt overwhelmed seeing all moving tasks simultaneously. We implemented a progressive disclosure system that reveals tasks based on timeline relevance, with a customizable view option for those who prefer seeing the complete picture.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Lightbulb className="h-5 w-5 mr-3 text-[#F4DB8B] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Legal Documentation Accessibility:</p>
            <p className="text-muted-foreground">The roommate agreement generator needed to create legally sound templates while remaining accessible to young adults with no legal background.</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderBipChallenges = () => (
    <div className="prose prose-lg max-w-none space-y-4">
      <p className="text-muted-foreground">We tackled several unique challenges:</p>
      
      <div className="ml-6 space-y-6">
        <div className="flex items-start">
          <FlaskConical className="h-5 w-5 mr-3 text-[#8B5CF6] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Alien Perception Adaptation:</p>
            <p className="text-muted-foreground">Standard design principles needed radical adaptation for non-human visual processing. We developed high-contrast interfaces with redundant feedback mechanisms tailored to extraterrestrial perception.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Gauge className="h-5 w-5 mr-3 text-[#8B5CF6] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Balancing Familiarity and Innovation:</p>
            <p className="text-muted-foreground">We needed to maintain some recognizable patterns from human financial apps while introducing novel interactions suited to alien cognitive processes—a delicate balance of familiarity and specialized design.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Sliders className="h-5 w-5 mr-3 text-[#8B5CF6] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Testing Limitations:</p>
            <p className="text-muted-foreground">Without direct alien testers, we created detailed extraterrestrial personas with specific perceptual constraints and validated designs against these parameters through simulated testing scenarios.</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderBipTechnicalChallenges = () => (
    <div className="prose prose-lg max-w-none space-y-4">
      <p className="text-muted-foreground">
        We overcame several unique challenges:
      </p>
      
      <div className="ml-6 space-y-6">
        <div className="flex items-start">
          <LineChart className="h-5 w-5 mr-3 text-[#8B5CF6] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">User Testing Limitations:</p>
            <p className="text-muted-foreground">In the absence of direct alien testing, we created detailed extraterrestrial personas with specific perceptual constraints and validated designs against these parameters.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Code className="h-5 w-5 mr-3 text-[#8B5CF6] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Security Verification:</p>
            <p className="text-muted-foreground">We developed a specialized facial recognition system for alien morphologies, using animated positioning guides that balance security with accessibility.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Palette className="h-5 w-5 mr-3 text-[#8B5CF6] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Visual Adaptation:</p>
            <p className="text-muted-foreground">The interface required complete reimagining for alien perception while maintaining essential financial functionality.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Brain className="h-5 w-5 mr-3 text-[#8B5CF6] flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">Usability Balance:</p>
            <p className="text-muted-foreground">We preserved recognizable patterns from human financial apps while introducing novel interactions tailored to alien cognitive processes.</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderDefaultChallenges = () => (
    <div className="prose prose-lg max-w-none">
      {project.challengesAndSolutions.split('\n\n').map((paragraph: string, idx: number) => (
        <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
      ))}
    </div>
  );

  const renderChallengesContent = () => {
    if (project.slug === 'studit') return renderStuditChallenges();
    if (project.slug === 'plant-module') return renderPlantModuleChallenges();
    if (project.slug === 'roomie') return renderRoomieChallenges();
    if (project.slug === 'bip') return project.challengesAndSolutions ? renderBipChallenges() : renderBipTechnicalChallenges();
    return renderDefaultChallenges();
  };

  if (!project.challengesAndSolutions && project.slug !== 'bip') return null;
  
  return (
    <motion.div 
      className="mb-16" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-medium mb-6">
        {project.slug === 'bip' && !project.challengesAndSolutions 
          ? "Technical & Development Challenges" 
          : "Key Challenges & Solutions"}
      </h2>
      
      {renderChallengesContent()}
    </motion.div>
  );
};

// Removed the duplicate export here
