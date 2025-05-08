
import { ProjectSection } from "../ProjectSection";

export const DefaultChallenges = ({ challengesText }: { challengesText: string }) => {
  return (
    <div className="prose prose-lg max-w-none">
      {challengesText.split('\n\n').map((paragraph: string, idx: number) => (
        <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
      ))}
    </div>
  );
};
