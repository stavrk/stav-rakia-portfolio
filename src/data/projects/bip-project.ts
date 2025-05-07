
import { Project } from "../project-types";

export const bipProject: Project = {
  title: "BIP - Business Intelligence Platform",
  shortDescription: "A comprehensive BI platform that transforms raw data into actionable insights, empowering data-driven decision-making.",
  overview:
    "The Business Intelligence Platform (BIP) is a comprehensive solution designed to transform raw data into actionable insights. It empowers businesses to make data-driven decisions by providing tools for data visualization, analysis, and reporting.",
  challenge:
    "The challenge was to create a unified platform that could ingest data from various sources, process it efficiently, and present it in an intuitive and actionable format for users with varying technical skills.",
  solution:
    "We developed a modular platform with customizable dashboards, automated reporting, and advanced analytics capabilities. The platform supports real-time data integration, ensuring users always have access to the most up-to-date information.",
  image: "/lovable-uploads/bip-dashboard.png",
  tags: ["Data Visualization", "Analytics", "Dashboard Design"],
  slug: "bip",
  link: "https://bip.lovablerakia.com/",
  additionalImages: [
    "/lovable-uploads/bip-dashboard-1.png",
    "/lovable-uploads/bip-dashboard-2.png",
    "/lovable-uploads/bip-dashboard-3.png",
    "/lovable-uploads/bip-dashboard-4.png",
  ],
  color: "#2A4359",
  animationFeatures: [
    {
      title: "Dynamic Data Loading",
      description: "Smooth transitions during data updates keep the interface responsive and engaging.",
      image: "/lovable-uploads/bip-loading.gif",
    },
    {
      title: "Interactive Chart Animations",
      description: "Animated charts provide clear and immediate feedback, enhancing data comprehension.",
      image: "/lovable-uploads/bip-chart.gif",
    },
  ],
  challenges: [
    {
      title: "Data Integration",
      description: "Integrating diverse data sources into a unified platform required a flexible and scalable architecture.",
    },
    {
      title: "Performance Optimization",
      description: "Ensuring real-time data processing and visualization for large datasets demanded efficient algorithms and infrastructure.",
    },
    {
      title: "User Experience",
      description: "Designing an intuitive interface for users with varying technical skills required extensive user research and usability testing.",
    },
  ],
  wireflow: {
    title: "User Interface Wireflow",
    description: "The wireflow illustrates the user's journey through the platform, from login to data analysis, highlighting key interactions and decision points.",
    image: "/lovable-uploads/bip-wireflow.png",
  },
};
