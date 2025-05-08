
import { LineChart, Code, Palette, Brain } from "lucide-react";
import { Challenge } from "./Challenge";

export const BipTechnicalChallenges = () => {
  return (
    <div className="prose prose-lg max-w-none space-y-4">
      <p className="text-muted-foreground">
        We overcame several unique challenges:
      </p>
      
      <div className="ml-6 space-y-6">
        <Challenge 
          icon={LineChart}
          iconColor="#8B5CF6"
          title="User Testing Limitations:"
          description="In the absence of direct alien testing, we created detailed extraterrestrial personas with specific perceptual constraints and validated designs against these parameters."
        />
        
        <Challenge 
          icon={Code}
          iconColor="#8B5CF6"
          title="Security Verification:"
          description="We developed a specialized facial recognition system for alien morphologies, using animated positioning guides that balance security with accessibility."
        />
        
        <Challenge 
          icon={Palette}
          iconColor="#8B5CF6"
          title="Visual Adaptation:"
          description="The interface required complete reimagining for alien perception while maintaining essential financial functionality."
        />
        
        <Challenge 
          icon={Brain}
          iconColor="#8B5CF6"
          title="Usability Balance:"
          description="We preserved recognizable patterns from human financial apps while introducing novel interactions tailored to alien cognitive processes."
        />
      </div>
    </div>
  );
};
