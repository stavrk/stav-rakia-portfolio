
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
      <div className="flex items-center mb-3">
        <Icon className="h-6 w-6 mr-3" style={{ color }} />
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};
