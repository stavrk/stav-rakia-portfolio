
import { motion } from "framer-motion";
import { Project } from "@/data/types";

interface PersonaGridProps {
  project: Project;
}

export const PersonaGrid = ({ project }: PersonaGridProps) => {
  const personas = [
    {
      name: "Liron",
      age: 20,
      degree: "Visual Communication",
      quote: "I just want to know where to go and what to do on my first day",
      image: "/lovable-uploads/liron_persona.jpg"
    },
    {
      name: "Tomer",
      age: 35,
      degree: "Electrical Engineering MA", 
      quote: "Everything should be in one place, fast and clean",
      image: "/lovable-uploads/tomer_persona.jpg"
    },
    {
      name: "Hadar",
      age: 27,
      degree: "Medical Tech",
      quote: "The bureaucracy is so confusing and unclear",
      image: "/lovable-uploads/hadar_persona.jpg"
    },
    {
      name: "Or",
      age: 21,
      degree: "Computer Science", 
      quote: "I want to preview how my first day will actually go",
      image: "/lovable-uploads/or_persona.jpg"
    },
    {
      name: "Neta",
      age: 25,
      degree: "Learning Technologies",
      quote: "The information is always outdated and inconsistent",
      image: "/lovable-uploads/neta_persona.jpg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {personas.map((persona, index) => (
        <motion.div
          key={persona.name}
          className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
            <img 
              src={persona.image} 
              alt={persona.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-semibold text-lg mb-1" style={{ color: project.color }}>
            {persona.name}
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            {persona.age}, {persona.degree}
          </p>
          <p className="text-sm text-muted-foreground italic">
            "{persona.quote}"
          </p>
        </motion.div>
      ))}
    </div>
  );
};
