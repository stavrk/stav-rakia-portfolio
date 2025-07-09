
import { motion } from "framer-motion";

interface KeyAnimationsProps {
  color: string;
}

export const KeyAnimations = ({ color }: KeyAnimationsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-muted-foreground mb-4">
        Strategic animations support the learning experience without causing distraction.
      </p>
      <p className="text-muted-foreground mb-8">
        The introductory sequence – showing Rapunzel walking through the tower with a gradual zoom to the window – replaced our original storybook concept and significantly improved engagement metrics. Similarly, the prince's climbing animation provides immediate feedback on correct answers while strengthening emotional investment in the storyline.
      </p>
      
      <div className="flex justify-center w-full">
        <div className="rounded-xl overflow-hidden w-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            preload="metadata"
            poster="/lovable-uploads/save-repunzel-interface.png"
            className="w-full h-auto rounded-xl"
          >
            <source src="/lovable-uploads/story-talling.mp4" type="video/mp4" />
            Your browser does not support the video tag. Please view the static image above.
          </video>
        </div>
      </div>
    </motion.div>
  );
};
