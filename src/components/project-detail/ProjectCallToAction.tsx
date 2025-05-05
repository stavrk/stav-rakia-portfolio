
import { motion } from "framer-motion";
import ProjectLink from "@/components/ProjectLink";

interface ProjectCallToActionProps {
  title: string;
  link: string;
}

export const ProjectCallToAction = ({ title, link }: ProjectCallToActionProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary/30 to-transparent">
      <div className="container">
        <motion.div 
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-medium mb-4">
            Ready to see it in action?
          </h3>
          <p className="text-muted-foreground mb-8">
            Check out the full {title} project to explore all the features and interactions.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ProjectLink href={link} className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              View Full Project
            </ProjectLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
