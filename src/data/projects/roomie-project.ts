
import { Project } from "../project-types";

export const roomieProject: Project = {
  title: "ROOMIE - Roommate Management App",
  shortDescription: "A mobile app designed to simplify shared living by managing expenses, chores, and communication among roommates.",
  overview:
    "ROOMIE is a mobile application designed to simplify shared living. It helps roommates manage expenses, track chores, and maintain seamless communication, fostering a harmonious living environment.",
  challenge:
    "The challenge was to create an intuitive and user-friendly app that addresses the common pain points of shared living, such as expense tracking, chore management, and communication breakdowns.",
  solution:
    "We developed a mobile app with features like shared expense tracking, chore scheduling, and a built-in messaging system. The app integrates push notifications to keep roommates informed and engaged.",
  image: "/lovable-uploads/roomie-dashboard.png",
  tags: ["Mobile App", "UI/UX Design", "Expense Tracking"],
  slug: "roomie",
  link: "https://roomie.lovablerakia.com/",
  additionalImages: [
    "/lovable-uploads/roomie-add-task.png",
    "/lovable-uploads/roomie-add-transaction.png",
    "/lovable-uploads/roomie-task-management.png",
  ],
  color: "#6E44FF",
  challenges: [
    {
      title: "User Adoption",
      description: "Encouraging all roommates to actively use the app required a design that is both intuitive and engaging.",
    },
    {
      title: "Data Security",
      description: "Protecting sensitive financial information and user data demanded robust security measures.",
    },
    {
      title: "Feature Integration",
      description: "Seamlessly integrating expense tracking, chore management, and communication features required careful planning and execution.",
    },
  ],
  structureTree: {
    title: "App Structure",
    description: "The app structure outlines the main sections and features, providing a clear overview of the user experience.",
    image: "/lovable-uploads/roomie-structure.png",
  },
  wireframes: {
    title: "Wireframes",
    description: "The wireframes illustrate the user interface and layout of key screens, ensuring a user-friendly design.",
    image: "/lovable-uploads/roomie-wireframes.png",
  },
};
