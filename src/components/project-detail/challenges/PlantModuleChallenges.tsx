
import { SlidersHorizontal, BarChart4 } from "lucide-react";
import { Challenge } from "./Challenge";

export const PlantModuleChallenges = () => {
  return (
    <div className="prose prose-lg max-w-none space-y-4">
      <p className="text-muted-foreground">We addressed two primary challenges:</p>
      
      <div className="ml-6 space-y-6">
        <Challenge 
          icon={SlidersHorizontal}
          iconColor="#22C55E"
          title="Balancing Rich Content with User Approachability:"
          description={
            <>
              <p className="text-muted-foreground">Initial feedback showed that detailed care instructions could overwhelm novice plant owners. To solve this, we:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Designed a layered information system that starts with essentials and allows users to expand for more detail</li>
                <li>Marked beginner-friendly plants with visual cues</li>
                <li>Included calming, supportive messaging about common mistakes and how to recover from them</li>
              </ul>
            </>
          }
        />
        
        <Challenge 
          icon={BarChart4}
          iconColor="#22C55E"
          title="Creating Meaningful Assessments:"
          description="Rather than using simple recall questions, we designed scenario-based activities—like choosing the best location or watering schedule for a plant—that built real-world decision-making skills and increased user confidence."
        />
      </div>
      
      <p className="text-muted-foreground">This project highlights my ability to turn complex instructional material into an engaging, approachable experience tailored to users' needs and learning goals.</p>
    </div>
  );
};
