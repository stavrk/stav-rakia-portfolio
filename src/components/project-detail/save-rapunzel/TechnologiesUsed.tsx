
import { motion } from "framer-motion";
import { Code, Monitor } from "lucide-react";

interface TechnologiesUsedProps {
  color: string;
}

export const TechnologiesUsed = ({ color }: TechnologiesUsedProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        className="bg-white rounded-xl p-6 shadow-sm border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <Monitor className="h-6 w-6 mr-3" style={{ color }} />
          <h4 className="text-xl font-semibold" style={{ color }}>
            Game (Player Side)
          </h4>
        </div>
        <div className="space-y-2 text-muted-foreground">
          <p><span className="font-medium">Developed in:</span> Unity</p>
          <p><span className="font-medium">Code:</span> C#</p>
          <p>Included all in-game animations, logic, and feedback handling</p>
        </div>
      </motion.div>

      <motion.div
        className="bg-white rounded-xl p-6 shadow-sm border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <Code className="h-6 w-6 mr-3" style={{ color }} />
          <h4 className="text-xl font-semibold" style={{ color }}>
            Editor (Teacher Side)
          </h4>
        </div>
        <div className="space-y-2 text-muted-foreground">
          <p><span className="font-medium">Built using:</span> HTML, CSS, JS</p>
          <p>API calls integrated for game data storage and validation</p>
          <p>Modular question structure & publishing flow</p>
        </div>
      </motion.div>
    </div>
  );
};
