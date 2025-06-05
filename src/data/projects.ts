
import { Project } from './types';
import { saveRapunzel } from './projects/save-rapunzel';
import { bip } from './projects/bip';
import { campusPlus } from './projects/campus-plus';
import { studit } from './projects/studit';
import { plantModule } from './projects/plant-module';
import { playtika } from './projects/playtika';

// Define the project order for consistent navigation
export const projectOrder = [
  "save-rapunzel",
  "bip",
  "campus-plus", 
  "studit"
];

// Combine all projects into a single array
export const projects: Project[] = [
  saveRapunzel,
  bip,
  campusPlus,
  studit,
  plantModule,
  playtika
];

// Define UX/UI projects (excluding instructional design projects)
export const uxuiProjects: Project[] = projects.filter(
  project => project.slug !== "plant-module" && project.slug !== "playtika"
);

// Re-export the Project type
export type { Project } from './types';

// Helper function to get a project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get the previous project based on current slug
export const getPreviousProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projectOrder.findIndex(s => s === currentSlug);
  if (currentIndex === -1) return undefined;
  
  // Get the previous project in order, wrap around to end if at the beginning
  const previousIndex = currentIndex === 0 ? projectOrder.length - 1 : currentIndex - 1;
  const previousSlug = projectOrder[previousIndex];
  return getProjectBySlug(previousSlug);
};

// Helper function to get the next project based on current slug
export const getNextProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projectOrder.findIndex(s => s === currentSlug);
  if (currentIndex === -1) return undefined;
  
  // Get the next project in order, wrap around to start if at the end
  const nextSlug = projectOrder[(currentIndex + 1) % projectOrder.length];
  return getProjectBySlug(nextSlug);
};

// Export all project objects for individual access
export * from './projects/save-rapunzel';
export * from './projects/bip';
export * from './projects/campus-plus';
export * from './projects/studit';
export * from './projects/plant-module';
export * from './projects/playtika';
