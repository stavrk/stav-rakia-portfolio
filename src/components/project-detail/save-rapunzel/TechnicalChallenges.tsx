
import { motion } from "framer-motion";

interface TechnicalChallengesProps {
  color: string;
}

export const TechnicalChallenges = ({ color }: TechnicalChallengesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-muted-foreground mb-6">
        We overcame several key challenges:
      </p>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium mb-2" style={{ color }}>Content Creation System</h4>
          <p className="text-muted-foreground">
            Designed an intuitive editor for non-technical educators through card-sorting exercises that informed a template-based approach with progressive customization.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-2" style={{ color }}>Hebrew Interface Complexities</h4>
          <p className="text-muted-foreground">
            Built a custom solution for right-to-left text, number reversal, and alignment of English within Hebrew sentences—greatly improving usability.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-2" style={{ color }}>Workflow Management</h4>
          <p className="text-muted-foreground">
            Established robust file versioning and backup protocols. These proved essential when partial code loss occurred, enabling full recovery without delays.
          </p>
        </div>
      </div>
      
      <p className="text-muted-foreground mt-6">
        Through iterative testing and structured problem-solving, we delivered a product that meets educational goals and usability standards.
      </p>
    </motion.div>
  );
};
