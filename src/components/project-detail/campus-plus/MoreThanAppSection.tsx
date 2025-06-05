
import { Project } from "@/data/types";

interface MoreThanAppSectionProps {
  project: Project;
}

export const MoreThanAppSection = ({ project }: MoreThanAppSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
        <p className="text-muted-foreground">Empathy is key when designing for academic institutions — it's not just about usability, but stress relief</p>
      </div>
      <div className="flex items-start">
        <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
        <p className="text-muted-foreground">Visual hierarchy and tone of voice can make the difference between confusion and clarity</p>
      </div>
      <div className="flex items-start">
        <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: project.color }}></div>
        <p className="text-muted-foreground">Chatbots should enhance, not replace, human support</p>
      </div>
    </div>
  );
};
