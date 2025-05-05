
import { motion } from "framer-motion";

interface ProjectChallengeSolutionProps {
  challenge: string;
  solution: string;
}

export const ProjectChallengeSolution = ({ challenge, solution }: ProjectChallengeSolutionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-medium mb-4">The Challenge</h2>
        <p className="text-muted-foreground">
          {challenge}
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-2xl font-medium mb-4">The Solution</h2>
        <p className="text-muted-foreground">
          {solution}
        </p>
      </motion.div>
    </div>
  );
};
