import { StaticImageData } from "next/image";

// Define the structure for a tag
export interface Tag {
  name: string;
  color: string;
}

// Define the structure for a project
export interface Project {
  title: string;
  shortDescription?: string;
  overview: string;
  challenge: string;
  solution: string;
  image: string;
  tags?: string[];
  slug: string;
  link?: string;
  additionalImages?: string[];
  color: string;
  comingSoon?: boolean;
  process?: {
    step: number;
    title: string;
    description: string;
  }[];
	designResearch?: {
		personaTitle: string;
		personaDescription: string;
		needs: string[];
		frustrations: string[];
		image: string;
	};
	wireflowDetails?: {
		title: string;
		description: string;
		image: string;
	};
	wireflow?: {
		title: string;
		description: string;
		image: string;
	};
	specification?: {
		title: string;
		description: string;
		image: string;
	};
	interactiveElements?: {
		title: string;
		description: string;
		image: string;
	};
	designProcessAndAesthetics?: string;
	designImages?: {
		title: string;
		image: string;
		description: string;
	}[];
	animationFeatures?: {
		title: string;
		description: string;
		image: string;
	}[];
	challenges?: {
		title: string;
		description: string;
	}[];
	structureTree?: {
		title: string;
		description: string;
		image: string;
	};
	wireframes?: {
		title: string;
		description: string;
		image: string;
	};
}

// Function to return all projects
export const getProjects = (): Project[] => {
  return [
    {
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
    },
    {
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
    },
    {
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
    },
    {
      title: "Plant Learning Module",
      shortDescription: "An interactive educational module designed to teach children about plant biology through engaging activities and simulations.",
      overview:
        "The Plant Learning Module is an interactive educational tool designed to teach children about plant biology. It uses engaging activities, simulations, and visual aids to make learning fun and effective.",
      challenge:
        "The challenge was to create an educational module that simplifies complex biological concepts and keeps children engaged and motivated to learn.",
      solution:
        "We developed an interactive module with animated simulations, quizzes, and virtual experiments. The module includes a virtual garden where children can grow and care for plants, reinforcing their understanding of plant biology.",
      image: "/lovable-uploads/plant-module-virtual-garden.png",
      tags: ["Educational Module", "Interactive Learning", "Plant Biology"],
      slug: "plant-module",
      link: "https://plant-module.lovablerakia.com/",
      additionalImages: [
        "/lovable-uploads/plant-module-cross-pollination.png",
        "/lovable-uploads/plant-module-experiment.png",
        "/lovable-uploads/plant-module-photosynthesis.png",
      ],
      color: "#10B981",
			challenges: [
				{
					title: "Simplification",
					description: "Simplifying complex biological concepts for children required careful selection of content and visual aids.",
				},
				{
					title: "Engagement",
					description: "Keeping children engaged and motivated to learn demanded innovative interactive elements and gamification techniques.",
				},
				{
					title: "Accuracy",
					description: "Ensuring the accuracy of scientific information while making it accessible to children required collaboration with subject matter experts.",
				},
			],
			wireflow: {
				title: "Module Navigation Wireflow",
				description: "The wireflow illustrates how children navigate through the module, highlighting key interactions and learning activities.",
				image: "/lovable-uploads/plant-module-wireflow.png",
			},
			specification: {
				title: "Specification & Instructional Script",
				description: `The Plant Learning Module is designed to provide an engaging and educational experience for children learning about plant biology. The module is divided into several sections, each focusing on a different aspect of plant biology.

**1. Introduction to Plants**
This section introduces children to the basic concepts of plant biology, such as the parts of a plant, the life cycle of a plant, and the importance of plants to the environment.

**2. Photosynthesis**
This section explains the process of photosynthesis, including the role of sunlight, water, and carbon dioxide. Children will learn how plants convert these elements into energy and oxygen.

**3. Plant Reproduction**
This section covers the different methods of plant reproduction, including pollination, fertilization, and seed dispersal. Children will learn about the roles of flowers, bees, and other agents in plant reproduction.

**4. Plant Growth and Development**
This section explores the factors that affect plant growth and development, such as soil, water, and nutrients. Children will learn how to care for plants and ensure their healthy growth.

**5. Plant Adaptations**
This section examines the various adaptations that plants have developed to survive in different environments, such as deserts, rainforests, and mountains. Children will learn about the unique characteristics of different plant species.

Each section includes interactive activities, simulations, and quizzes to reinforce learning and keep children engaged. The module also includes a virtual garden where children can grow and care for plants, applying their knowledge of plant biology in a fun and practical way.`,
				image: "/lovable-uploads/plant-module-specification.png",
			},
			interactiveElements: {
				title: "Interactive Elements & Assessment",
				description: "The module includes a variety of interactive elements, such as quizzes, simulations, and virtual experiments, to reinforce learning and keep children engaged. Each section concludes with a quiz to assess children's understanding of the material.",
				image: "/lovable-uploads/plant-module-interactive-elements.png",
			},
    },
    {
      title: "Save Rapunzel - Educational Game",
      shortDescription: "An educational game designed to teach children math and problem-solving skills while engaging them in a fun and interactive storyline.",
      overview:
        "Save Rapunzel is an educational game designed to teach children math and problem-solving skills. The game engages children in a fun and interactive storyline where they must solve puzzles and complete challenges to save Rapunzel from the tower.",
      challenge:
        "The challenge was to create an educational game that seamlessly integrates learning with entertainment, keeping children motivated and engaged while reinforcing key academic concepts.",
      solution:
        "We developed a game with a captivating storyline, colorful graphics, and interactive puzzles. The game adapts to each child's skill level, providing personalized challenges and feedback to support their learning journey.",
      image: "/lovable-uploads/save-repunzel-game.png",
      tags: ["Educational Game", "Math Skills", "Problem-Solving"],
      slug: "save-rapunzel",
      link: "https://save-rapunzel.lovablerakia.com/",
      additionalImages: [
        "/lovable-uploads/save-repunzel-game-1.png",
        "/lovable-uploads/save-repunzel-game-2.png",
        "/lovable-uploads/save-repunzel-game-3.png",
      ],
      color: "#E44A4A",
			challenges: [
				{
					title: "Balancing Education and Entertainment",
					description: "Seamlessly integrating learning with entertainment required careful design and testing to ensure both aspects are equally engaging.",
				},
				{
					title: "Personalization",
					description: "Adapting the game to each child's skill level demanded a sophisticated algorithm and a wide range of challenges.",
				},
				{
					title: "Accessibility",
					description: "Ensuring the game is accessible to children with different learning styles and abilities required careful attention to design and content.",
				},
			],
    },
  ];
};

// Function to return a single project based on its slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  const projects = getProjects();
  return projects.find((project) => project.slug === slug);
};

// Add a function to get the next project
export const getNextProject = (currentSlug: string): Project => {
  const projects = getProjects();
  const currentIndex = projects.findIndex(project => project.slug === currentSlug);
  
  // If it's the last project, return the first one
  if (currentIndex === projects.length - 1) {
    return projects[0];
  }
  
  return projects[currentIndex + 1];
};

// Add a function to get the previous project
export const getPreviousProject = (currentSlug: string): Project => {
  const projects = getProjects();
  const currentIndex = projects.findIndex(project => project.slug === currentSlug);
  
  // If it's the first project, return the last one
  if (currentIndex <= 0) {
    return projects[projects.length - 1];
  }
  
  return projects[currentIndex - 1];
};
