
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ChallengeProps {
  icon: LucideIcon;
  title: string;
  description: ReactNode;
  iconColor: string;
}

export const Challenge = ({ icon: Icon, title, description, iconColor }: ChallengeProps) => {
  return (
    <div className="flex items-start">
      <Icon className={`h-5 w-5 mr-3 text-[${iconColor}] flex-shrink-0 mt-1`} />
      <div>
        <p className="font-medium mb-2">{title}</p>
        {typeof description === "string" ? (
          <p className="text-muted-foreground">{description}</p>
        ) : (
          description
        )}
      </div>
    </div>
  );
};
