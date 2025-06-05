
import { Project } from '../types';

export const campusPlus: Project = {
  title: "CAMPUS+",
  description: "A centralized mobile experience to support new and existing students at HIT.",
  image: "/lovable-uploads/campusplus_mockup.png",
  tags: ["UX/UI Design", "Mobile App"],
  slug: "campus-plus",
  color: "#00747A",
  overview: "A comprehensive, student-first mobile experience for navigating academic life at HIT.",
  challenge: "Many HIT students struggle to find accurate, centralized information when starting or navigating their academic journey. They often face confusion, stress, and a lack of clear guidance about administrative, academic, and logistical issues.",
  solution: "Design a mobile onboarding app that simplifies access to essential resources, supports self-service, and offers an intelligent chatbot for immediate assistance.",
  process: [
    "Conducted qualitative interviews with over 10 students from different degrees and years of study",
    "Created five detailed personas based on research insights",
    "Developed wireframes and prototypes focusing on user flows",
    "Designed visual system based on HIT's branding with accessibility improvements",
    "Created and tested HITbot chatbot experience with contextual responses",
    "Implemented first-time user onboarding flow for feature introduction"
  ],
  designProcessAndAesthetics: "We used HIT's official turquoise (#00b0b7) as the base color to maintain institutional identity. To increase emotional engagement and call-to-action clarity, we added a secondary vibrant orange (#f27e3e). Typography features Gadi font (Hebrew) for titles - handwritten, personal, optimistic - while body text uses clean sans-serif for readability. The Campus+ logo was custom-designed to echo the HIT brand while standing on its own as a fresh, mobile-native product.",
  challengesAndSolutions: "Balancing HIT's brand with user-friendly design required introducing vibrant orange accents to add warmth and approachability. The chatbot integration needed deep integration without being overwhelming - solved through accessible placement, onboarding explanations, and contextual invitations. Content clarity without overload was achieved through clean structure, icons, collapsible sections, and progressive disclosure.",
  designImages: [
    {
      title: "Visual Style System",
      image: "/lovable-uploads/campus-ui.png",
      description: "Color palette, typography, and UI elements"
    },
    {
      title: "Logo Design",
      image: "/lovable-uploads/campus-logo.png",
      description: "Campus+ logo aligned with HIT branding"
    }
  ],
  additionalImages: [
    "/lovable-uploads/campus_onboarding1.jpg",
    "/lovable-uploads/campus_onboarding2.jpg", 
    "/lovable-uploads/campus_onboarding3.jpg",
    "/lovable-uploads/campus_onboarding4.jpg",
    "/lovable-uploads/chat1.jpg",
    "/lovable-uploads/campus_home_page.jpg",
    "/lovable-uploads/chat_video.jpg",
    "/lovable-uploads/chat3.jpg"
  ],
  link: "https://www.figma.com/proto/R0SIy8oQA5kW9XlUbgNueS/Campus-plus?node-id=21-9181&p=f&t=uMZ8UfLDSiHL6vq4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=21%3A9181&show-proto-sidebar=1",
  case: "Mobile onboarding and student support app for HIT students."
};
