
import { motion } from "framer-motion";

interface GraphicDevelopmentProps {
  color: string;
}

export const GraphicDevelopment = ({ color }: GraphicDevelopmentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-muted-foreground mb-6">
        The Save Rapunzel project was characterized by an iterative design process that underwent numerous changes from the initial concept to the final product. The graphics and visual elements were carefully tailored to enhance the user experience.
      </p>
      
      <div className="rounded-xl overflow-hidden">
        <img 
          src="/lovable-uploads/first-version-save-repunzel.png" 
          alt="First version of Save Rapunzel design" 
          className="w-full h-auto rounded-xl"
        />
      </div>
    </motion.div>
  );
};
