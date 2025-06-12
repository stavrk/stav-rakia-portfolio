
import { motion } from "framer-motion";
import { PersonaCard } from "../PersonaCard";

interface EducatorPersonasProps {
  color: string;
}

export const EducatorPersonas = ({ color }: EducatorPersonasProps) => {
  const educatorPersonas = [
    {
      name: "Jonathan",
      age: 45,
      degree: "Educator",
      description: "We need clear, intuitive tools that make it easy to build games without technical skills.",
      image: "/lovable-uploads/tomer_persona.jpg"
    },
    {
      name: "Sarah", 
      age: 32,
      degree: "Teacher",
      description: "I spend hours creating games — and then they disappear. I need a tool that keeps my work safe.",
      image: "/lovable-uploads/hadar_persona.jpg"
    },
    {
      name: "David",
      age: 29, 
      degree: "Instructor",
      description: "I need a simple, guided tool that won't let me mess things up — and keeps all my games in one place.",
      image: "/lovable-uploads/or_persona.jpg"
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6" style={{ color }}>
        Educator Personas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educatorPersonas.map((persona, index) => (
          <PersonaCard
            key={persona.name}
            name={persona.name}
            age={persona.age}
            degree={persona.degree}
            description={persona.description}
            image={persona.image}
            color={color}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
