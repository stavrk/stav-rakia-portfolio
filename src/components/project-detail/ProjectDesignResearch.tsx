
import { motion } from "framer-motion";

export interface DesignResearchData {
  title?: string;
  description?: string;
  personaTitle?: string;
  personaDescription?: string;
  needs?: string[];
  frustrations?: string[];
  image?: string;
}

interface ProjectDesignResearchProps {
  designResearch: DesignResearchData;
  color?: string;
}

export const ProjectDesignResearch = ({ designResearch, color = "#10B981" }: ProjectDesignResearchProps) => {
  const title = designResearch.title || designResearch.personaTitle || "Design Research";
  const description = designResearch.description || designResearch.personaDescription || "";
  const needs = designResearch.needs || [];
  const frustrations = designResearch.frustrations || [];
  
  return (
    <motion.div 
      className="mb-16" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6" style={{ color }}>{title}</h2>
      
      {description && (
        <div className="prose prose-lg max-w-none mb-8">
          <p className="mb-4 text-muted-foreground">{description}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Needs & Frustrations */}
        <div>
          {needs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">Needs</h3>
              <ul className="space-y-2">
                {needs.map((need, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {frustrations.length > 0 && (
            <div>
              <h3 className="text-xl font-medium mb-4">Frustrations</h3>
              <ul className="space-y-2">
                {frustrations.map((frustration, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>{frustration}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Right side - Persona Image */}
        {designResearch.image && (
          <div className="rounded-xl overflow-hidden">
            <img src={designResearch.image} alt="User Persona" className="w-full h-auto" />
          </div>
        )}
      </div>
    </motion.div>
  );
};
