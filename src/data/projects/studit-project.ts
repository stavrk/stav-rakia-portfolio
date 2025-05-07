
import { Project } from "../project-types";

export const studitProject: Project = {
  title: "STUDIT - Online Learning Platform",
  shortDescription: "An innovative e-learning platform designed to provide students with a personalized and engaging learning experience.",
  overview:
    "STUDIT is an innovative e-learning platform designed to provide students with a personalized and engaging learning experience. It offers a wide range of courses, interactive lessons, and collaborative tools to support students in their academic journey.",
  challenge:
    "The challenge was to create a platform that not only delivers high-quality educational content but also keeps students motivated and engaged in a virtual learning environment.",
  solution:
    "We developed a platform with personalized learning paths, gamified progress tracking, and interactive video lessons. The platform also includes collaborative tools like virtual study groups and live Q&A sessions with instructors.",
  image: "/lovable-uploads/studit-dashboard.png",
  tags: ["E-learning", "Personalized Learning", "Gamification"],
  slug: "studit",
  link: "https://studit.lovablerakia.com/",
  additionalImages: [
    "/lovable-uploads/studit-course-page.png",
    "/lovable-uploads/studit-lesson-page.png",
    "/lovable-uploads/studit-profile-page.png",
  ],
  color: "#9b87f5",
  designResearch: {
    personaTitle: "Sarah - The Dedicated Student",
    personaDescription: "Sarah is a full-time student who is highly motivated and goal-oriented. She values personalized learning experiences and seeks to maximize her academic potential.",
    needs: [
      "Personalized learning paths",
      "Interactive and engaging content",
      "Progress tracking and feedback",
      "Collaborative learning tools",
    ],
    frustrations: [
      "Generic and impersonal content",
      "Lack of motivation and engagement",
      "Difficulty tracking progress",
      "Limited opportunities for collaboration",
    ],
    image: "/lovable-uploads/studit-persona.png",
  },
  wireflowDetails: {
    title: "Personalized Learning Path Wireflow",
    description: "The wireflow illustrates how students navigate through personalized learning paths, highlighting key interactions and decision points.",
    image: "/lovable-uploads/studit-wireflow.png",
  },
  challenges: [
    {
      title: "Personalization",
      description: "Creating personalized learning paths for each student required a sophisticated algorithm and a vast library of content.",
    },
    {
      title: "Engagement",
      description: "Keeping students motivated and engaged in a virtual learning environment demanded innovative gamification techniques.",
    },
    {
      title: "Accessibility",
      description: "Ensuring the platform is accessible to students with disabilities required careful attention to WCAG guidelines.",
    },
  ],
};
