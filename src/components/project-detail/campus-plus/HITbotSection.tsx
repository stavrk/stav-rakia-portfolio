
import { Project } from "@/data/types";

interface HITbotSectionProps {
  project: Project;
}

export const HITbotSection = ({ project }: HITbotSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="lg:pt-8">
        <h4 className="text-xl font-semibold mb-4" style={{ color: project.color }}>
          What is HITbot?
        </h4>
        <p className="text-muted-foreground mb-6">
          A smart, always-available assistant that gives short, accurate answers and directs students to the right office or contact — based on their profile.
        </p>
        
        <h4 className="text-xl font-semibold mb-4" style={{ color: project.color }}>
          How it works:
        </h4>
        
        <div className="space-y-6 mb-8">
          <div>
            <h5 className="font-semibold mb-2" style={{ color: project.color }}>Smart Profile Matching</h5>
            <p className="text-muted-foreground text-sm">When a student first uses the app, they fill out a short profile (e.g. program, age, level of studies). HITbot uses this data to personalize the experience.</p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-2" style={{ color: project.color }}>Contextual Answers</h5>
            <p className="text-muted-foreground text-sm">HITbot adapts responses to fit the user's context — offering short, clear answers and direct links to the relevant people, locations, or digital forms.</p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-2" style={{ color: project.color }}>Real-Life Examples</h5>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>"Where do I pay tuition?"</strong> → HITbot answers with the exact contact person, office hours, and a map link</p>
              <p><strong>"Where's my classroom?"</strong> → HITbot shows the campus map and nearest entrance</p>
              <p><strong>"I have a tech issue"</strong> → HITbot offers the right IT contact and a troubleshooting guide</p>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-2" style={{ color: project.color }}>Live Video Support</h5>
            <p className="text-muted-foreground text-sm">In addition to text-based help, HITbot can initiate a live video call with a real representative — based on the user's location on campus and the issue they're facing. This feature allows students to speak directly with support staff in real time, making the help experience feel more human, immediate, and stress-free.</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center lg:justify-end">
        <div className="max-w-[320px] h-full">
          <video 
            className="w-full h-full rounded-[43px] max-w-[320px] object-cover" 
            controls 
            autoPlay
            muted
            loop
            preload="metadata"
            poster="/lovable-uploads/campus_home_page.jpg"
          >
            <source src="/lovable-uploads/campus-plus-chatbot.mp4" type="video/mp4" />
            <p className="text-muted-foreground text-center py-4">
              Video not available. Please check the video file format and hosting.
            </p>
          </video>
        </div>
      </div>
    </div>
  );
};
