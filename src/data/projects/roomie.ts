
import { Project } from '../types';

export const roomie: Project = {
  title: "ROOMIE",
  description: "An interactive guide that simplifies the process of moving into a first apartment.",
  image: "/lovable-uploads/roomie-home-page.png",
  tags: ["UX/UI Design", "Instructional Design"],
  slug: "roomie",
  color: "#2A4359",
  overview: "Roomie is a comprehensive digital guide designed to simplify the often overwhelming process of moving into a first apartment. This project emerged from recognizing the challenges and uncertainties that young adults face when navigating housing independence for the first time.",
  challenge: "First-time movers face numerous challenges: understanding lease agreements, budgeting for moving expenses, knowing what essential items to purchase, and navigating roommate dynamics. Traditional resources are often scattered, overwhelming, or fail to address the emotional aspects of this significant life transition.",
  solution: "We designed Roomie with a user-centric workflow that guides users through each stage of the moving process. The interface combines practical checklists with supportive content that acknowledges both the practical and emotional aspects of moving.",
  structureTree: {
    title: "Project Structure",
    image: "/lovable-uploads/map-roomie.png",
    description: "Our project's structure was carefully planned to ensure a logical flow of information and features. The map above illustrates how different sections of the application interconnect, making the moving process more manageable for users."
  },
  wireframes: {
    title: "Initial Wireframes",
    image: "/lovable-uploads/roomie-wireframe.png",
    description: "At the beginning of our process, we focused heavily on wireframing to prioritize product definition, interaction design, and user experience. These wireframes helped us establish the core functionality and user flows before moving into the visual design phase."
  },
  process: ["Conducted extensive user research, interviewing 12 recent first-time movers about their challenges and wishes", "Synthesized insights and created user personas and journey maps to identify key pain points", "Developed multiple iterations of wireframes and prototypes for testing with potential users", "Refined the interface and features based on user feedback", "Created final designs with a warm, approachable aesthetic and calming color palette"],
  designProcessAndAesthetics: "For Roomie, our team crafted a visual language that balances practicality with emotional support. The color palette features deep blues and navy tones—primarily muted blues and soft teals—to counteract the stress typically associated with moving. This deliberate choice helps create a sense of stability amidst the chaos of relocation.\n\nTypography plays a crucial role in the interface, with the primary font family being Assistant for its excellent readability and modern feel. Headers use weightier versions of the font (600-700) to create clear visual hierarchy, while body text maintains comfortable readability at 16px minimum.\n\nThe visual components follow a consistent rounded design system—buttons, cards, and input fields all feature softly rounded corners (8px radius) that contribute to the approachable feel of the application. Interactive elements like checklists and the budget calculator use subtle shadows and state changes to provide clear feedback to users.",
  challengesAndSolutions: "One significant challenge emerged during user testing: participants felt overwhelmed by seeing all moving tasks simultaneously. We addressed this by implementing a progressive disclosure system that reveals tasks based on timeline relevance, with a customizable view option for users who prefer seeing the complete picture. This solution required several iterations of the information architecture and careful consideration of how to balance comprehensive information with manageable cognitive load.\n\nThe roommate agreement generator presented another challenge—how to create legally sound templates while keeping them accessible to young adults with no legal background. The solution involved collaboration with a legal consultant and multiple rounds of simplification testing to strike the right balance between comprehensiveness and clarity.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/color-palette-roomie.png",
    description: "Deep, calming tones with soft blues and muted accents"
  }, {
    title: "Typography",
    image: "/lovable-uploads/typography-roomie.png",
    description: "Assistant font family with weight variations for hierarchy"
  }, {
    title: "Interface Components",
    image: "/lovable-uploads/interface-roomie.png",
    description: "Rounded components with subtle shadows and clear visual feedback"
  }],
  additionalImages: ["/lovable-uploads/roomie-4.png", "/lovable-uploads/roomie-phone.png", "/lovable-uploads/roomie-typs-img.png"],
  link: "https://xd.adobe.com/view/36102754-0760-402c-b896-3eb51e5b9a6f-6343/?fullscreen",
  case: "Interactive guide for simplified apartment moving for young adults."
};
