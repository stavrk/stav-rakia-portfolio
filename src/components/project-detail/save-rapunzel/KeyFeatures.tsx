
import { motion } from "framer-motion";
import { Play, Users, Edit3, BarChart3 } from "lucide-react";

interface KeyFeaturesProps {
  color: string;
}

export const KeyFeatures = ({ color }: KeyFeaturesProps) => {
  const features = [
    {
      title: "Storytelling & Animation",
      description: "Opens the game with a magical animated scene that sets the tone, immerses the children in the narrative, and establishes emotional engagement from the start.",
      icon: Play,
      video: "/lovable-uploads/story-talling.mp4"
    },
    {
      title: "Game Mode for Students", 
      description: "A clean, intuitive, and rewarding interface where children answer questions, receive real-time feedback, and see their progress clearly — encouraging playful learning.",
      icon: Users,
      video: "/lovable-uploads/repunzel-game.mp4"
    },
    {
      title: "Game Editor for Teachers",
      description: "A structured and friendly interface for educators, built without the need for code, featuring real-time validation and smart rules that help ensure high-quality educational content.",
      icon: Edit3,
      video: "/lovable-uploads/save-repunzl-editor.mp4"
    },
    {
      title: "Game Feedback & Scoring",
      description: "Students receive a final score based on time, number of mistakes, and correct answers, providing comprehensive performance feedback.",
      icon: BarChart3,
      video: "/lovable-uploads/repunzel-finish-game.mp4"
    }
  ];

  return (
    <div className="space-y-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
            <div className="flex items-center mb-3">
              <feature.icon className="h-6 w-6 mr-3" style={{ color }} />
              <h4 className="text-xl font-semibold" style={{ color }}>
                {feature.title}
              </h4>
            </div>
            <p className="text-muted-foreground mb-4">
              {feature.description}
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden">
            <video 
              src={feature.video} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto rounded-xl"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
