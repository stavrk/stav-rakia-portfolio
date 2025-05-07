
import { motion } from "framer-motion";
import { Code, LayoutPanelLeft, LineChart } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectSection } from "./ProjectSection";

interface SaveRapunzelContentProps {
  project: Project;
}

export const SaveRapunzelContent = ({ project }: SaveRapunzelContentProps) => {
  if (project.slug !== 'save-rapunzel') return null;
  
  return (
    <>
      {/* Content Generator Interface */}
      <ProjectSection title="Content Generator Interface" color={project.color}>
        <p className="text-muted-foreground mb-8">The intuitive content generator allows educators to create customized educational content without technical knowledge, featuring an easy-to-use interface with built-in validation and guidance.</p>
        
        <div className="rounded-xl overflow-hidden mb-8">
          <img src="/lovable-uploads/save-repunzel-editor.png" alt="Content Generator Interface" className="w-full h-auto" />
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-muted-foreground">The generator represents a revolutionary approach to creating educational content. Unlike traditional systems, the interface balances simplicity with power, featuring built-in protection mechanisms that prevent the publication of invalid games and provide teachers with immediate feedback.</p>
          <p className="mb-4 text-muted-foreground">The generator includes a progressive approval system that encourages users to create at least 10 quality questions before publishing the game, with a maximum allowance of 30 questions per game. These specifications were established after extensive user research with teachers and education professionals.</p>
        </div>
      </ProjectSection>

      {/* Graphic Development Section */}
      <ProjectSection title="Graphic Development and Design Evolution" color={project.color}>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-muted-foreground">The 'Save Rapunzel' project was characterized by an iterative design process that underwent numerous changes from the initial concept to the final product. The graphics and visual elements were carefully tailored to enhance the user experience.</p>
        </div>
        
        <div className="mt-8 rounded-xl overflow-hidden">
          <img src="/lovable-uploads/first-version-save-repunzel.png" alt="Initial Design Concept" className="w-full h-auto" />
        </div>
      </ProjectSection>
      
      {/* Design Process & Aesthetics Section */}
      <ProjectSection title="Design Process & Aesthetics" color={project.color}>
        <div className="space-y-8">
          <div className="mb-8">
            <p className="mb-4 text-muted-foreground">Save Rapunzel features a dual-interface design that supports both young learners and their educators. The student-facing interface uses a colorful, fairy tale-inspired palette that balances a sense of wonder with clear readability.</p>
            
            <motion.div 
              className="mt-6 rounded-lg overflow-hidden" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img src="/lovable-uploads/save-repunzel-color-palette.png" alt="Color Palette" className="w-full object-cover h-64 md:h-64" />
              <div className="p-4 bg-secondary/30">
                <h4 className="text-lg font-medium mb-1">Color Palette</h4>
                <p className="text-sm text-muted-foreground">Earthy, storybook-inspired color palette with deep blue, moss green, golden yellow, warm copper, and brick red.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mb-8">
            <p className="mb-4 text-muted-foreground">Typography choices differ between the student and educator interfaces. The game side uses the rounded, playful Fredoka font (minimum 18px) to engage younger users, while the educator dashboard employs the same font family with clear weight distinctions to create a visual hierarchy in the content management system.</p>
            
            <motion.div 
              className="mt-6 rounded-lg overflow-hidden" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img src="/lovable-uploads/save-repunzel-font.png" alt="Typography" className="w-full object-cover h-64 md:h-64" />
              <div className="p-4 bg-secondary/30">
                <h4 className="text-lg font-medium mb-1">Typography</h4>
                <p className="text-sm text-muted-foreground">Rounded, playful Fredoka font with consistent sizing for optimal readability</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mb-8">
            <p className="mb-4 text-muted-foreground">The visual elements were carefully designed to create an engaging yet focused learning environment. Game elements like buttons, answer cards, and progress indicators feature rounded edges and vibrant colors that appeal to younger users. Background elements like the tower and clouds incorporate subtle animations to create a living world without distracting from the educational content.</p>
            
            <motion.div 
              className="mt-6 rounded-lg overflow-hidden" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img src="/lovable-uploads/save-repunzel-interface.png" alt="Interface Elements" className="w-full object-cover h-[600px] md:h-[600px]" />
              <div className="p-4 bg-secondary/30">
                <h4 className="text-lg font-medium mb-1">Visual Elements</h4>
                <p className="text-sm text-muted-foreground">Rounded, vibrant interface elements with consistent visual language</p>
              </div>
            </motion.div>
          </div>
        </div>
      </ProjectSection>
      
      {/* Key Animations Section */}
      <ProjectSection title="Key Animations" color={project.color}>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-muted-foreground">Strategic animations support the learning experience without causing distraction. The introductory sequence - showing Rapunzel walking through the tower with a gradual zoom to the window - replaced our original storybook concept and significantly improved engagement metrics. Similarly, the prince's climbing animation provides immediate feedback on correct answers while strengthening emotional investment in the storyline.</p>
        </div>
      </ProjectSection>

      {/* Technical & Development Challenges Section */}
      <ProjectSection title="Technical &amp; Development Challenges" color={project.color}>
        <div className="prose prose-lg max-w-none space-y-4">
          <p className="text-muted-foreground">We overcame several key challenges:</p>
          
          <div className="ml-6 space-y-6">
            <div className="flex items-start">
              <Code className="h-5 w-5 mr-3 text-[#10B981] flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-2">Content Creation System:</p>
                <p className="text-muted-foreground">Designed an intuitive editor for non-technical educators through card-sorting exercises that informed a template-based approach with progressive customization.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <LayoutPanelLeft className="h-5 w-5 mr-3 text-[#10B981] flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-2">Hebrew Interface Complexities:</p>
                <p className="text-muted-foreground">Built a custom solution for right-to-left text, number reversal, and alignment of English within Hebrew sentences—greatly improving usability.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <LineChart className="h-5 w-5 mr-3 text-[#10B981] flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium mb-2">Workflow Management:</p>
                <p className="text-muted-foreground">Established robust file versioning and backup protocols. These proved essential when partial code loss occurred, enabling full recovery without delays.</p>
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground">Through iterative testing and structured problem-solving, we delivered a product that meets educational goals and usability standards.</p>
        </div>
      </ProjectSection>
    </>
  );
};
