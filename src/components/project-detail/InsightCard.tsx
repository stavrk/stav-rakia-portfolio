
import { LucideIcon } from "lucide-react";

interface InsightCardProps {
  icon: LucideIcon;
  text: string;
  color: string;
}

export const InsightCard = ({ icon: Icon, text, color }: InsightCardProps) => {
  return (
    <div className="flex items-start p-4 bg-secondary/20 rounded-lg">
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: `${color}20` }}>
        <Icon className="h-4 w-4" style={{ color }} />
      </div>
      <p className="text-muted-foreground text-sm">{text}</p>
    </div>
  );
};
