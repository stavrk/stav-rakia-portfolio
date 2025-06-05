
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/types";

interface DesignSystemSectionProps {
  project: Project;
}

export const DesignSystemSection = ({ project }: DesignSystemSectionProps) => {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center mb-4">
          <h4 className="text-lg font-semibold">Color Palette</h4>
        </div>
        <p className="text-muted-foreground mb-6">
          We based the palette on HIT's official turquoise to maintain visual consistency and institutional branding. To support engagement and guide user action, we introduced a secondary orange color.
        </p>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold mb-4">Typography</h4>
        <p className="text-muted-foreground mb-4">
          <strong>Rubik</strong> – for most of the interface and body text. It's a rounded, lightweight, and highly readable font that brings warmth and clarity to the content.
        </p>
        <p className="text-muted-foreground mb-6">
          <strong>Gadi</strong> – a handwritten-style Hebrew font, used only in titles and short sentences to create a personal, optimistic feel.
        </p>
      </div>
      
      <div className="rounded-xl overflow-hidden mb-8">
        <img src="/lovable-uploads/campus-ui.png" alt="UI Style System" className="w-full h-auto" />
      </div>
      
      <div className="pt-12 pb-12">
        <h2 className="text-3xl font-bold mb-8" style={{ color: project.color }}>And what about the Logo?</h2>
        <p className="text-muted-foreground mb-8">
          The Campus+ logo was designed to align with HIT's branding while standing on its own as a fresh, mobile-native product.
        </p>
        
        <div className="flex gap-12 items-center justify-center mb-8">
          <div className="text-center">
            <img src="/lovable-uploads/hitlogo.png" alt="HIT Logo" className="h-48 mb-2 mx-auto" />
            <p className="text-sm text-muted-foreground">HIT</p>
          </div>
          <ArrowRight className="h-12 w-12 text-muted-foreground" />
          <div className="text-center">
            <img src="/lovable-uploads/campus-logo.png" alt="Campus+ Logo" className="h-48 mb-2 mx-auto" />
            <p className="text-sm text-muted-foreground">Campus+</p>
          </div>
        </div>
      </div>
    </div>
  );
};
