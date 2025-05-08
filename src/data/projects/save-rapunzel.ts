
import { Project } from '../types';

export const saveRapunzel: Project = {
  title: "SAVE RAPUNZEL",
  description: "Interactive game and tool turning lessons into experiences.",
  image: "/lovable-uploads/save-repunzel-editor.png",
  tags: ["Instructional Design", "Game Design"],
  slug: "save-rapunzel",
  color: "#10B981",
  overview: "Save Rapunzel is a dual-purpose educational platform consisting of an interactive educational game for students and a content creation tool for educators. The platform transforms traditional learning material into engaging game experiences built around the classic fairy tale of Rapunzel.",
  challenge: "Traditional educational materials often fail to capture students' attention, particularly for challenging subjects. Educators need tools to create engaging content without extensive technical knowledge, while students need learning experiences that are both educational and entertaining.",
  solution: "A dual-purpose educational platform with an interactive game where correct answers help the prince climb Rapunzel's hair, and a content management system allowing educators to create custom question sets without coding knowledge.",
  graphicDevelopment: "The 'Save Rapunzel' project was characterized by an iterative design process that underwent numerous changes from the initial concept to the final product. The graphics and visual elements were carefully tailored to enhance the user experience.\n\nThe project began with a traditional storybook concept, but after user research and consultations, the approach pivoted toward an interactive animation where Rapunzel walks to the window as the story unfolds. This change significantly deepened the user experience and resulted in greater student engagement.",
  technicalChallenges: "One significant challenge was creating a system that allowed both simple interaction for students and flexibility for teachers in content creation. The solution was an intuitive content generator that enables teachers with no technical background to create customized questions, incorporate images, and define parameters such as time per question.\n\nAnother challenge involved displaying Hebrew text and navigating a bidirectional interface, which required developing a unique solution for reversing numbers and English words in mixed text, significantly enhancing the user experience for Hebrew speakers.",
  contentGenerator: "The generator represents a revolutionary approach to creating educational content. Unlike traditional systems, the interface balances simplicity with power, featuring built-in protection mechanisms that prevent the publication of invalid games and provide teachers with immediate feedback.\n\nThe generator includes a progressive approval system that encourages users to create at least 10 quality questions before publishing the game, with a maximum allowance of 30 questions per game. These specifications were established after extensive user research with teachers and education professionals.",
  animationFeatures: "Unique animations enhance the user experience without distracting from the learning process. For instance, when a student answers correctly, the prince climbs higher on Rapunzel's hair, providing immediate visual feedback on progress and strengthening the emotional connection to the story.\n\nThe opening animation sequence shows Rapunzel walking through the tower, with a gradual zoom to the window when she reaches it—a substantial change from the original storybook concept that significantly improved student engagement.",
  collaborativeDevelopment: "The project was characterized by close teamwork, with each team member bringing their skills and strengths to the table. An efficient workflow for file and version management was developed, including systematic backups, change documentation, and meticulous organization of graphic assets.\n\nDespite technical challenges, such as partial code loss at one stage, the system allowed for continued efficient work, resulting in a final product that precisely meets user needs.",
  editorShowcase: {
    title: "Content Generator Interface",
    image: "/lovable-uploads/save-repunzel-editor.png",
    description: "The intuitive content generator allows educators to create customized educational content without technical knowledge, featuring an easy-to-use interface with built-in validation and guidance."
  },
  process: ["Conducted parallel research streams on educators' content creation needs and how children engage with educational games", "Developed user personas for both audience segments (educators and students)", "Created initial concept, wireframes and interactive prototypes", "Conducted testing sessions with both educators and students to refine the user experience", "Designed vibrant fairy tale-inspired visuals for game interface and professional aesthetic for educator interface"],
  designProcessAndAesthetics: "For Save Rapunzel, a dual-interface design system serves both young learners and their educators. The game interface employs a vibrant, fairy tale-inspired color scheme dominated by purples, reds, and golds that evoke a sense of fantasy while maintaining sufficient contrast for readability.\n\nTypography choices differ between the student and educator interfaces. The game side uses the rounded, playful Fredoka font (minimum 18px) to engage younger users, while the educator dashboard employs the same font family with clear weight distinctions to create a visual hierarchy in the content management system.\n\nThe visual elements were carefully designed to create an engaging yet focused learning environment. Game elements like buttons, answer cards, and progress indicators feature rounded edges and vibrant colors that appeal to younger users. Background elements like the tower and clouds incorporate subtle animations to create a living world without distracting from the educational content.\n\nInteractive elements employ consistent visual cues—correct answers trigger animations of the prince climbing higher on Rapunzel's hair, providing immediate visual feedback that reinforces learning progress. The editor interface uses drag-and-drop functionality and inline editing to make content creation intuitive for educators with varying levels of technical expertise.",
  challengesAndSolutions: "A significant challenge in the development process was designing a content editor flexible enough to accommodate various question types while remaining simple for non-technical educators. The solution involved extensive card-sorting exercises with educators to determine the most intuitive organization of functions, resulting in a template-based approach with customization options revealed progressively as users become more comfortable with the system.\n\nAdditionally, optimizing the balance between engaging visual elements and educational clarity required careful consideration. This was addressed through multiple testing iterations with both educators and students to ensure the final product maintained educational effectiveness while providing an engaging user experience.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/save-repunzel-color-palette.png",
    description: "Earthy, storybook-inspired color palette with deep blue, moss green, golden yellow, warm copper, and brick red."
  }, {
    title: "Typography",
    image: "/lovable-uploads/save-repunzel-font.png",
    description: "Rounded, playful Fredoka font with consistent sizing for optimal readability"
  }, {
    title: "Visual Elements",
    image: "/lovable-uploads/save-repunzel-interface.png",
    description: "Rounded, vibrant interface elements with consistent visual language"
  }],
  additionalImages: ["/lovable-uploads/save-repunzel-third.png", "/lovable-uploads/save-repunzel-my-games.png", "/lovable-uploads/save-repunzel-sec.png"],
  link: "https://saverapunzel.telem-hit.net/GamesList",
  case: "Interactive game and tool turning lessons into experiences."
};
