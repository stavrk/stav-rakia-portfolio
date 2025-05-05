
import { motion } from "framer-motion";

interface ProjectChallengeSolutionProps {
  challenge: string;
  solution: string;
}

export const ProjectChallengeSolution = ({ challenge, solution }: ProjectChallengeSolutionProps) => {
  return (
    <motion.div 
      className="mb-16" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h2 className="text-2xl font-medium mb-4">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            {challenge.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-muted-foreground text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-medium mb-4">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            {solution.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-muted-foreground text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
