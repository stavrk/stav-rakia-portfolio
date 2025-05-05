
import { motion } from "framer-motion";

interface AnimationFeaturesProps {
  project: any;
}

export const AnimationFeatures = ({ project }: AnimationFeaturesProps) => {
  if (project.slug !== 'bip') return null;
  
  return (
    <motion.div 
      className="mb-16" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-medium mb-6">Animation and Interaction Features</h2>
      <div className="prose prose-lg max-w-none space-y-4">
        <p className="text-muted-foreground">
          BIP's animation system is tailored to extraterrestrial perception patterns. Successful payments are represented through animated spaceships and meteorites, while loading states use orbital animations to maintain engagement. The interface provides immediate, redundant feedback through color shifts, size changes, and animated transitions—ensuring clarity across different alien perceptual abilities.
        </p>
      </div>
    </motion.div>
  );
};
