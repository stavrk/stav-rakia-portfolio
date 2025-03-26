
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, FileArchive, FileCode, Globe } from 'lucide-react';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';

interface Challenge {
  title: string;
  description: string;
  icon: string;
}

interface CollapsibleChallengesProps {
  challenges: Challenge[];
  color: string;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileCode':
      return <FileCode className="h-5 w-5" />;
    case 'Globe':
      return <Globe className="h-5 w-5" />;
    case 'Eye':
      return <Eye className="h-5 w-5" />;
    case 'FileArchive':
      return <FileArchive className="h-5 w-5" />;
    default:
      return <FileCode className="h-5 w-5" />;
  }
};

const CollapsibleChallenges = ({ challenges, color }: CollapsibleChallengesProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setOpenItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title) 
        : [...prev, title]
    );
  };

  return (
    <div className="space-y-4">
      {challenges.map((challenge) => (
        <Collapsible
          key={challenge.title}
          open={openItems.includes(challenge.title)}
          onOpenChange={() => toggleItem(challenge.title)}
          className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
        >
          <CollapsibleTrigger className="flex items-center w-full p-4 text-left">
            <div 
              className="rounded-full p-2 mr-3 flex items-center justify-center" 
              style={{ backgroundColor: `${color}20` }}
            >
              <div style={{ color: color }}>
                {getIcon(challenge.icon)}
              </div>
            </div>
            <h3 className="text-lg font-medium flex-1">{challenge.title}</h3>
            <div 
              className="h-6 w-6 rounded-full flex items-center justify-center text-sm"
              style={{ 
                backgroundColor: openItems.includes(challenge.title) ? color : `${color}20`,
                color: openItems.includes(challenge.title) ? 'white' : 'inherit'
              }}
            >
              {openItems.includes(challenge.title) ? '-' : '+'}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="p-4 pt-0 pl-14 text-muted-foreground"
            >
              {challenge.description}
            </motion.div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default CollapsibleChallenges;
