
import { motion } from "framer-motion";
import { PersonaCard } from "../PersonaCard";

interface StudentPersonasProps {
  color: string;
}

export const StudentPersonas = ({ color }: StudentPersonasProps) => {
  const studentPersonas = [
    {
      name: "Dana",
      age: 10,
      degree: "Student",
      description: '"I don\'t want just a quiz. I want to feel like I\'m in a mission — with colors, characters and a goal."',
      image: "/lovable-uploads/persona_dana.png"
    },
    {
      name: "Itai",
      age: 9,
      degree: "Student", 
      description: '"When I get feedback and see if I got it right, it makes me want to keep going."',
      image: "/lovable-uploads/persona_itai.png"
    },
    {
      name: "Eden",
      age: 12,
      degree: "Student",
      description: '"I like it when the game talks fun — not like school. It makes me want to keep going."',
      image: "/lovable-uploads/persona_eden.png"
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6" style={{ color }}>
        Student Personas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {studentPersonas.map((persona, index) => (
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
