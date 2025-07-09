
import { motion } from "framer-motion";

interface VideoDemoProps {
  color: string;
}

export const VideoDemo = ({ color }: VideoDemoProps) => {
  return (
    <div className="space-y-12">
      <motion.div
        className="bg-white rounded-xl p-6 shadow-sm border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <h4 className="font-medium mb-2" style={{ color }}>Game Mode for Students</h4>
          <p className="text-sm text-muted-foreground">Student gameplay experience</p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            preload="metadata"
            poster="/lovable-uploads/save-repunzel.png"
            className="w-full h-auto rounded-xl"
            onError={(e) => {
              // Fallback to image if video fails to load
              const target = e.target as HTMLVideoElement;
              const img = document.createElement('img');
              img.src = '/lovable-uploads/save-repunzel.png';
              img.alt = 'Save Rapunzel game interface';
              img.className = 'w-full h-auto rounded-xl';
              target.parentNode?.replaceChild(img, target);
            }}
          >
            <source src="/lovable-uploads/repunzel-game-2.mp4" type="video/mp4" />
            Your browser does not support the video tag. Please view the static image above.
          </video>
        </div>
      </motion.div>

      <motion.div
        className="bg-white rounded-xl p-6 shadow-sm border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="mb-4">
          <h4 className="font-medium mb-2" style={{ color }}>Game Editor for Teachers</h4>
          <p className="text-sm text-muted-foreground">Teacher content creation tool</p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            preload="metadata"
            poster="/lovable-uploads/save-repunzel-editor.png"
            className="w-full h-auto rounded-xl"
            onError={(e) => {
              // Fallback to image if video fails to load
              const target = e.target as HTMLVideoElement;
              const img = document.createElement('img');
              img.src = '/lovable-uploads/save-repunzel-editor.png';
              img.alt = 'Save Rapunzel editor interface';
              img.className = 'w-full h-auto rounded-xl';
              target.parentNode?.replaceChild(img, target);
            }}
          >
            <source src="/lovable-uploads/save-repunzl-editor-2.mp4" type="video/mp4" />
            Your browser does not support the video tag. Please view the static image above.
          </video>
        </div>
      </motion.div>
    </div>
  );
};
