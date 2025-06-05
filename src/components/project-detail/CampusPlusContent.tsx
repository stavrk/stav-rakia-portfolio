
import { Project } from "@/data/types";
import { ProjectSection } from "./ProjectSection";
import { MyRoleSection } from "./campus-plus/MyRoleSection";
import { PersonaGrid } from "./campus-plus/PersonaGrid";
import { InsightsGrid } from "./campus-plus/InsightsGrid";
import { FeaturesGrid } from "./campus-plus/FeaturesGrid";
import { OnboardingFlow } from "./campus-plus/OnboardingFlow";
import { HITbotSection } from "./campus-plus/HITbotSection";
import { DesignSystemSection } from "./campus-plus/DesignSystemSection";
import { MoreThanAppSection } from "./campus-plus/MoreThanAppSection";
import { DemoVideoSection } from "./campus-plus/DemoVideoSection";

interface CampusPlusContentProps {
  project: Project;
}

export const CampusPlusContent = ({ project }: CampusPlusContentProps) => {
  if (project.slug !== 'campus-plus') return null;
  
  return (
    <>
      {/* My Role Section */}
      <ProjectSection title="My Role" color={project.color}>
        <MyRoleSection project={project} />
      </ProjectSection>

      {/* User Research & Personas */}
      <ProjectSection title="User Research & Personas" color={project.color}>
        <p className="text-muted-foreground mb-8">
          We interviewed over 10 students from different degrees and years of study. Based on the research, we created five detailed personas representing real user types at HIT with unique pain points and goals.
        </p>
        <PersonaGrid project={project} />
      </ProjectSection>

      {/* Main Insights */}
      <ProjectSection title="Main Insights" color={project.color}>
        <InsightsGrid project={project} />
      </ProjectSection>

      {/* Key Features */}
      <ProjectSection title="Key Features" color={project.color}>
        <FeaturesGrid />
      </ProjectSection>

      {/* First-Time Onboarding Experience */}
      <ProjectSection title="First-Time Onboarding Experience" color={project.color}>
        <OnboardingFlow />
      </ProjectSection>

      {/* HITbot Core Feature */}
      <ProjectSection title="HITbot – Our Core Feature" color={project.color}>
        <HITbotSection project={project} />
      </ProjectSection>

      {/* Visual Design System */}
      <ProjectSection title="Visual Design System" color={project.color}>
        <DesignSystemSection project={project} />
      </ProjectSection>

      {/* More Than Just an App */}
      <ProjectSection title="More Than Just an App" color={project.color}>
        <MoreThanAppSection project={project} />
      </ProjectSection>

      {/* See It in Action Section */}
      <ProjectSection title="See It in Action" color={project.color}>
        <DemoVideoSection />
      </ProjectSection>
    </>
  );
};
