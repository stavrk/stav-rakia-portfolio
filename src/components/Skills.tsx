
import { motion } from 'framer-motion';

const skillsCategories = [
  {
    title: "Design",
    skills: ["UI Design", "UX Design", "Wireframing", "Prototyping", "Design Systems", "Visual Design"]
  },
  {
    title: "Tools",
    skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "InVision", "Principle"]
  },
  {
    title: "Research",
    skills: ["User Interviews", "Usability Testing", "A/B Testing", "Heuristic Evaluation", "Persona Creation"]
  },
  {
    title: "Other",
    skills: ["HTML/CSS", "Basic JavaScript", "Information Architecture", "Agile Methodology", "Design Thinking"]
  }
];

const Skills = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit developed over years of design practice.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-xl bg-background border border-border/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-medium mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                    whileHover={{ y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
