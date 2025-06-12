
import { motion } from "framer-motion";

interface DesignSystemsProps {
  color: string;
}

export const DesignSystems = ({ color }: DesignSystemsProps) => {
  const designImages = [
    {
      title: "My Games Dashboard",
      image: "/lovable-uploads/save-repunzel-my-games.png",
      description: "Teacher dashboard showing created games and management interface"
    },
    {
      title: "Add New Game",
      image: "/lovable-uploads/save-repunzel-my-games-add.png", 
      description: "Game creation flow with intuitive step-by-step guidance"
    },
    {
      title: "Game Editor Interface",
      image: "/lovable-uploads/save-repunzel-sec.png",
      description: "Advanced editing tools with real-time validation"
    },
    {
      title: "Student Game View",
      image: "/lovable-uploads/save-repunzel-third.png",
      description: "Engaging gameplay interface designed for young learners"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Game Design System */}
      <div>
        <h3 className="text-2xl font-semibold mb-6" style={{ color }}>
          Visual & UX Design System – Game
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-3" style={{ color }}>Color Palette</h4>
            <p className="text-muted-foreground mb-4">
              Deep blue, moss green, golden yellow, warm copper, brick red. Stronger contrast and saturation to support engagement and emotional immersion.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3" style={{ color }}>Typography & Iconography</h4>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium">Font: Fredoka | Regular</p>
                <p>Large, playful font sizes (min 18px), optimized for readability from distance (projectors)</p>
              </div>
              <div>
                <p className="font-medium">Iconography</p>
                <p>Rounded, colorful icons with clear status indicators for kids (checkmarks, animations, etc.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Design System */}
      <div>
        <h3 className="text-2xl font-semibold mb-6" style={{ color }}>
          Visual & UX Design System – Editor
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-3" style={{ color }}>Color Palette</h4>
            <p className="text-muted-foreground">
              Calmer earth tones, lighter blues, gentle contrast. Reduces cognitive load for adults working long hours and supports visual hierarchy without visual fatigue.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3" style={{ color }}>Typography & Iconography</h4>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium">Font: Fredoka | Regular</p>
                <p>Smaller sizes, consistent hierarchy. Designed for focus, clarity and instructional content.</p>
              </div>
              <div>
                <p className="font-medium">Iconography</p>
                <p>Simplified tools (trash, pencil, confirm). Less vibrant, high contrast where needed for action buttons.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design System Images */}
      <div>
        <h3 className="text-2xl font-semibold mb-6" style={{ color }}>
          Interface Examples
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designImages.map((item, index) => (
            <motion.div
              key={item.title}
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="bg-secondary/30 p-4 text-center">
                <h4 className="font-medium mb-2" style={{ color }}>{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <img src={item.image} alt={item.title} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
