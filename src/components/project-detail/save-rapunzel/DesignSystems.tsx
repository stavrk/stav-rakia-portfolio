
import { motion } from "framer-motion";

interface DesignSystemsProps {
  color: string;
}

export const DesignSystems = ({ color }: DesignSystemsProps) => {
  return (
    <div className="space-y-12">
      {/* Game Design System */}
      <div>
        <h3 className="text-2xl font-semibold mb-6" style={{ color }}>
          Visual & UX Design System – Game
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
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
        
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden max-w-md">
            <img src="/lovable-uploads/repunzel-players-ui.png" alt="Game UI Design" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Editor Design System */}
      <div>
        <h3 className="text-2xl font-semibold mb-6" style={{ color }}>
          Visual & UX Design System – Editor
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
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
        
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden max-w-md">
            <img src="/lovable-uploads/repunzel-editors-ui.png" alt="Editor UI Design" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
