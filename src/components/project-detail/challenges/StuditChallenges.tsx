
import { Puzzle, Scale, Clock } from "lucide-react";
import { Challenge } from "./Challenge";

export const StuditChallenges = () => {
  return (
    <div className="prose prose-lg max-w-none space-y-4">
      <p className="text-muted-foreground">We overcame several key challenges:</p>
      
      <div className="ml-6 space-y-6">
        <Challenge 
          icon={Puzzle}
          iconColor="#F59E0B"
          title="Balancing Interactivity with Academic Rigor:"
          description="Multiple-choice felt flat, while full gamification risked losing credibility. We created custom interactions - like drag-and-drop and interactive maps - that kept users engaged without compromising learning goals."
        />
        
        <Challenge 
          icon={Scale}
          iconColor="#F59E0B"
          title="Building Trust in Scheduling:"
          description="Users were skeptical of automated schedules. We made the process transparent and adjustable, refining it through five iterations to balance control with guidance."
        />
        
        <Challenge 
          icon={Clock}
          iconColor="#F59E0B"
          title="Reducing Wait-Time Frustration:"
          description="We turned loading screens into moments of encouragement with animations and motivational cues. Color customization added a sense of ownership and personalization."
        />
      </div>
    </div>
  );
};
