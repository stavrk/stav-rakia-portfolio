
import { Users, MessageCircle, Settings, User, Target } from "lucide-react";
import { Project } from "@/data/types";

interface MyRoleSectionProps {
  project: Project;
}

export const MyRoleSection = ({ project }: MyRoleSectionProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center flex flex-col items-center justify-center">
          <User className="h-8 w-8 mb-4" style={{ color: project.color }} />
          <h4 className="font-semibold mb-2">UX Research</h4>
          <p className="text-sm text-muted-foreground">User interviews and persona creation</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center flex flex-col items-center justify-center">
          <Settings className="h-8 w-8 mb-4" style={{ color: project.color }} />
          <h4 className="font-semibold mb-2">Wireframing</h4>
          <p className="text-sm text-muted-foreground">Prototyping and user flows</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center flex flex-col items-center justify-center">
          <MessageCircle className="h-8 w-8 mb-4" style={{ color: project.color }} />
          <h4 className="font-semibold mb-2">UX Writing</h4>
          <p className="text-sm text-muted-foreground">Microcopy and content strategy</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 text-center flex flex-col items-center justify-center">
          <Target className="h-8 w-8 mb-4" style={{ color: project.color }} />
          <h4 className="font-semibold mb-2">Visual Design</h4>
          <p className="text-sm text-muted-foreground">Design system and UI components</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-6">
        <strong>Collaborators:</strong> Liri Katnov & Eden Nisuyeve
      </p>
    </>
  );
};
