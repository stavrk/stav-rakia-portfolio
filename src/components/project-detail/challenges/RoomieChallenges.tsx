
import { Palette, BrainCircuit, Lightbulb } from "lucide-react";
import { Challenge } from "./Challenge";

export const RoomieChallenges = () => {
  return (
    <div className="prose prose-lg max-w-none space-y-4">
      <p className="text-muted-foreground">We faced several significant challenges:</p>
      
      <div className="ml-6 space-y-6">
        <Challenge 
          icon={Palette}
          iconColor="#F4DB8B"
          title="Visual Design for Emotional Support:"
          description="Creating a visual language that balanced practicality with emotional support was challenging. We developed a warm, calming color palette and rounded design system that provides a sense of stability during a chaotic transition."
        />
        
        <Challenge 
          icon={BrainCircuit}
          iconColor="#F4DB8B"
          title="Progressive Information Disclosure:"
          description="Users felt overwhelmed seeing all moving tasks simultaneously. We implemented a progressive disclosure system that reveals tasks based on timeline relevance, with a customizable view option for those who prefer seeing the complete picture."
        />
        
        <Challenge 
          icon={Lightbulb}
          iconColor="#F4DB8B"
          title="Legal Documentation Accessibility:"
          description="The roommate agreement generator needed to create legally sound templates while remaining accessible to young adults with no legal background."
        />
      </div>
    </div>
  );
};
