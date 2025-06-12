
import { motion } from "framer-motion";

interface VideoDemoProps {
  color: string;
}

export const VideoDemo = ({ color }: VideoDemoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        className="rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-secondary/30 p-4 text-center">
          <h4 className="font-medium mb-2" style={{ color }}>Editor Interface</h4>
          <p className="text-sm text-muted-foreground">Teacher content creation tool</p>
        </div>
        <img src="/lovable-uploads/save-repunzel-editor.png" alt="Save Rapunzel Editor" className="w-full h-auto" />
      </motion.div>

      <motion.div
        className="rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="bg-secondary/30 p-4 text-center">
          <h4 className="font-medium mb-2" style={{ color }}>Game Interface</h4>
          <p className="text-sm text-muted-foreground">Student gameplay experience</p>
        </div>
        <img src="/lovable-uploads/save-repunzel.png" alt="Save Rapunzel Game" className="w-full h-auto" />
      </motion.div>
    </div>
  );
};
