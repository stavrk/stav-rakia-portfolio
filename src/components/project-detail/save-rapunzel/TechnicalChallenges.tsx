
import { motion } from "framer-motion";
import { Edit3, Globe, FolderSync } from "lucide-react";

interface TechnicalChallengesProps {
  color: string;
}

export const TechnicalChallenges = ({ color }: TechnicalChallengesProps) => {
  const challenges = [
    {
      title: "Content Creation System",
      description: "Designed an intuitive editor for non-technical educators through card-sorting exercises that informed a template-based approach with progressive customization.",
      icon: Edit3
    },
    {
      title: "Hebrew Interface Complexities",
      description: "Built a custom solution for right-to-left text, number reversal, and alignment of English within Hebrew sentences—greatly improving usability.",
      icon: Globe
    },
    {
      title: "Workflow Management",
      description: "Established robust file versioning and backup protocols. These proved essential when partial code loss occurred, enabling full recovery without delays.",
      icon: FolderSync
    }
  ];

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
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center mb-2">
              <challenge.icon className="h-5 w-5 mr-3" style={{ color }} />
              <h4 className="text-lg font-medium" style={{ color }}>{challenge.title}</h4>
            </div>
            <p className="text-muted-foreground ml-8">
              {challenge.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      <p className="text-muted-foreground mt-6">
        Through iterative testing and structured problem-solving, we delivered a product that meets educational goals and usability standards.
      </p>
    </motion.div>
  );
};
