import { motion } from 'framer-motion';
import { Search, Lightbulb, Figma, Repeat } from 'lucide-react';
const processSteps = [{
  icon: <Search className="h-6 w-6" />,
  title: "Research",
  description: "Understanding user needs through interviews, surveys, and data analysis to inform design decisions."
}, {
  icon: <Lightbulb className="h-6 w-6" />,
  title: "Ideate",
  description: "Generating multiple concepts and solutions to address the identified user problems and business goals."
}, {
  icon: <Figma className="h-6 w-6" />,
  title: "Design",
  description: "Creating wireframes, prototypes, and high-fidelity mockups with a focus on user-centered design principles."
}, {
  icon: <Repeat className="h-6 w-6" />,
  title: "Iterate",
  description: "Continuously testing and refining designs based on user feedback and performance metrics."
}];
const Process = () => {
  return <section className="py-20 bg-secondary/50">
      <div className="container">
        <motion.div className="mb-16 text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">My Design Process</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A strategic approach to creating intuitive and engaging user experiences</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => <motion.div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border/40" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }} whileHover={{
          y: -5,
          transition: {
            duration: 0.2
          }
        }}>
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 flex items-center justify-center w-16 h-16 flex-shrink-0">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Process;