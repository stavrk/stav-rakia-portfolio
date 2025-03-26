
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { motion } from 'framer-motion';
import { Check, ChevronDown, FileCode, Globe, Eye, FileArchive } from 'lucide-react';

interface Challenge {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CollapsibleChallengesProps {
  challenges: Challenge[];
}

const CollapsibleChallenges: React.FC<CollapsibleChallengesProps> = ({ challenges }) => {
  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground mb-4">
        We overcame several key challenges:
      </div>
      
      {challenges.map((challenge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <Collapsible className="border border-border/40 rounded-lg overflow-hidden">
            <div className="flex items-center bg-secondary/20 px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                {challenge.icon}
              </div>
              <h4 className="font-medium flex-grow">{challenge.title}</h4>
              <CollapsibleTrigger className="p-2 hover:bg-secondary/30 rounded-full transition-colors">
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div className="px-6 py-4 border-t border-border/40 bg-card/50">
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </motion.div>
      ))}
      
      <div className="flex items-center mt-6 text-sm text-muted-foreground">
        <Check className="h-4 w-4 mr-2 text-primary" />
        <p>Through iterative testing and structured problem-solving, we delivered a product that meets educational goals and usability standards.</p>
      </div>
    </div>
  );
};

export default CollapsibleChallenges;
