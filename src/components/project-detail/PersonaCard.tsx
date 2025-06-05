
import { motion } from "framer-motion";

interface PersonaCardProps {
  name: string;
  age: number;
  degree: string;
  description: string;
  image: string;
  color: string;
  index: number;
}

export const PersonaCard = ({ name, age, degree, description, image, color, index }: PersonaCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-semibold text-lg mb-1" style={{ color }}>
        {name}
      </h4>
      <p className="text-sm text-muted-foreground mb-2">
        {age}, {degree}
      </p>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
};
