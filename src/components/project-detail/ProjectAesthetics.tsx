
import { motion } from "framer-motion";

interface DesignImageData {
  title: string;
  image: string;
  description: string;
}

interface ProjectAestheticsProps {
  designProcessAndAesthetics: string;
  designImages: DesignImageData[];
  color?: string;
}

export const ProjectAesthetics = ({ designProcessAndAesthetics, designImages, color = '#10B981' }: ProjectAestheticsProps) => {
  return (
    <motion.div 
      className="mb-16" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6" style={{ color }}>Design Process & Aesthetics</h2>
      
      <div className="space-y-8">
        {designProcessAndAesthetics && designProcessAndAesthetics.split('\n\n').map((paragraph, idx) => (
          <div key={idx} className="mb-8">
            <p className="mb-4 text-muted-foreground">{paragraph}</p>
            
            {/* Display relevant design image if available */}
            {designImages && idx < designImages.length && (
              <motion.div 
                className="mt-6 rounded-lg overflow-hidden" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <img 
                  src={designImages[idx].image} 
                  alt={designImages[idx].title} 
                  className={`w-full object-cover ${idx === 2 ? "h-[600px] md:h-[600px]" : "h-64 md:h-64"}`} 
                />
                <div className="p-4 bg-secondary/30">
                  <h4 className="text-lg font-medium mb-1">{designImages[idx].title}</h4>
                  <p className="text-sm text-muted-foreground">{designImages[idx].description}</p>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
