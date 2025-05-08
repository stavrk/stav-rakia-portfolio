
import { FlaskConical, Gauge, Sliders } from "lucide-react";
import { Challenge } from "./Challenge";

export const BipChallenges = () => {
  return (
    <div className="prose prose-lg max-w-none space-y-4">
      <p className="text-muted-foreground">We tackled several unique challenges:</p>
      
      <div className="ml-6 space-y-6">
        <Challenge 
          icon={FlaskConical}
          iconColor="#8B5CF6"
          title="Alien Perception Adaptation:"
          description="Standard design principles needed radical adaptation for non-human visual processing. We developed high-contrast interfaces with redundant feedback mechanisms tailored to extraterrestrial perception."
        />
        
        <Challenge 
          icon={Gauge}
          iconColor="#8B5CF6"
          title="Balancing Familiarity and Innovation:"
          description="We needed to maintain some recognizable patterns from human financial apps while introducing novel interactions suited to alien cognitive processes—a delicate balance of familiarity and specialized design."
        />
        
        <Challenge 
          icon={Sliders}
          iconColor="#8B5CF6"
          title="Testing Limitations:"
          description="Without direct alien testers, we created detailed extraterrestrial personas with specific perceptual constraints and validated designs against these parameters through simulated testing scenarios."
        />
      </div>
    </div>
  );
};
