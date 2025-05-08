
import { Project } from '../types';

export const studit: Project = {
  title: "STUDIT",
  description: "An AI-powered study companion for Israeli Psychometric and matriculation exam prep.",
  image: "/lovable-uploads/studit-home-page.png",
  tags: ["Educational Tech", "AI"],
  slug: "studit",
  color: "#F59E0B",
  overview: "Studit is a web-based platform designed to help students prepare for the Israeli Psychometric Entrance Test and matriculation (bagrut) exams. It provides personalized study plans, adaptive practice tests, and scheduling based on diagnostic tests and user preferences.",
  challenge: "Psychometric and matriculation exam preparation is typically stressful, time-consuming, and often inefficient. Many students struggle to structure their study time effectively or identify which areas need the most attention. Existing platforms often present practice questions in a static, uninspiring format that fails to engage students.",
  solution: "Designed by Stav Rakia and Eden Nisoyev, Studit is an interactive, adaptive learning platform that makes studying feel less overwhelming and more engaging. The interface guides users through a complete journey: from selecting their exam date to taking a diagnostic assessment and receiving a personalized study schedule based on their performance and preferences.",
  wireflowDetails: {
    title: "Wireflow",
    image: "/lovable-uploads/studit-wireflow.png",
    description: "The wireframing stage for Studit focused on creating a clear, guided user journey through the exam preparation process. I developed low-fidelity wireframes that mapped out the core journey from exam selection to personalized study plan generation."
  },
  designResearch: {
    title: "Design Research",
    image: "/lovable-uploads/studit-design-research.png",
    description: "Research of leading Israeli test prep platforms (Yoel Geva, Kidum, Niv Revach) revealed critical opportunities for innovation. I strategically adapted Kidum's clear subject emphasis, Yoel Geva's interactive mapping, and Wordwall's drag-and-drop functionality to enhance Studit's user experience.\n\nMarket analysis identified three key gaps: visually uninspiring materials, lack of meaningful interaction, and absence of personalization. Users frequently reported confusion about their location in the preparation process.\n\nThese findings directly shaped Studit's core features: a guided step-by-step journey with clear progress indicators, interactive question formats instead of static multiple-choice, and a professional aesthetic that balances educational credibility with visual engagement."
  },
  process: ["Conducted extensive research into student pain points during exam preparation", "Analyzed existing educational platforms like Yoel Geva, Kidum, and Niv Revach to identify strengths and weaknesses", "Developed wireframes and user flows that addressed key pain points while introducing interactive elements", "Conducted multiple rounds of user testing to refine the interface", "Created a clean, modern aesthetic with a warm color palette for a calm, focused studying environment"],
  designProcessAndAesthetics: "For Studit, we developed a visual language that balances academic seriousness with engaging interactivity. The color palette features warm neutrals (beiges and soft browns) as a base, accented with muted blues and occasional touches of yellow to create focus points without overwhelming the learning content. This restrained approach creates a calm environment conducive to focused study while providing enough visual interest to maintain engagement.\n\nTypography choices were critical for supporting extended reading periods. We selected Assistant as the primary font for its excellent readability and comprehensive Hebrew character support, with Indie Flower as an accent font for highlighting important elements. Text hierarchy uses weight variation rather than dramatic size differences, with a minimum body text size of 16px to ensure comfortable reading during study sessions.\n\nThe layout employs generous white space and a consistent grid system to organize complex information clearly. Cards with subtle shadows and rounded corners (4px radius) contain related information groups, while interactive elements use slightly more pronounced shadows and state changes to indicate their functionality.\n\nUser flow considerations were paramount, with the interface guiding users through a logical progression from homepage through exam/date selection, location selection, diagnostic assessment and personalized scheduling. Each stage features animated transitions that provide both functional feedback and moments of delight in what could otherwise be a stressful process.",
  challengesAndSolutions: "Key Challenges & Solutions\n\n1. Balancing Interactivity with Academic Rigor\nChallenge: Traditional multiple-choice formats felt disengaging, while overly gamified approaches risked undermining educational credibility.\nSolution: We developed question-specific interaction patterns -drag-and-drop completions for verbal reasoning and interactive maps for location selection - that enhance engagement while maintaining academic focus.\n\n2. Creating Trustworthy Scheduling\nChallenge: User testing revealed skepticism about automated scheduling systems.\nSolution: We designed a transparent process showing the factors influencing schedule creation while allowing parameter adjustments. After five iterations, we achieved the optimal balance between guidance and user control.\n\n3. Transforming Waiting Periods\nSolution: Loading screens became micro-moments of encouragement with progress animations and motivational messages, significantly reducing perceived waiting time in user tests. We added schedule color customization to enhance personalization and ownership.",
  designImages: [{
    title: "Color Palette",
    image: "/lovable-uploads/studit-colors.png",
    description: "Warm neutrals with muted blues and yellow accents"
  }, {
    title: "Typography",
    image: "/lovable-uploads/studit-typography.png",
    description: "Assistant and Indie Flower fonts with weight variations and generous white space"
  }, {
    title: "Interface Components",
    image: "/lovable-uploads/studit-interface.png",
    description: "Cards with subtle shadows and clear visual feedback"
  }],
  additionalImages: ["/lovable-uploads/studit-1.png", "/lovable-uploads/studit-2.png", "/lovable-uploads/studit-3.png", "/lovable-uploads/studit-4.png"],
  link: "https://xd.adobe.com/view/a56c02e8-2d4f-4803-bcbb-811822907cf1-f03f/?fullscreen",
  case: "AI-powered study companion for personalized test preparation."
};
