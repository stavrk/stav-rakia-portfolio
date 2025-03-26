
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "ROOMIE",
    description: "An interactive guide designed to simplify the often overwhelming process of moving into a first apartment for young adults.",
    image: "/lovable-uploads/roomie-home-page.png",
    tags: ["UX UI Design", "Instructional Design"],
    slug: "roomie",
    color: "#a67c52",
    comingSoon: false,
    link: undefined
  },
  {
    title: "SAVE RAPUNZEL",
    description: "An educational platform with a game for students and a content creation tool for educators built around the classic fairy tale.",
    image: "/lovable-uploads/save-repunzel-editor.png",
    tags: ["Instructional Design", "Game Design"],
    slug: "save-rapunzel",
    color: "#10B981",
    comingSoon: false,
    link: "https://saverapunzel.telem-hit.net/GamesList",
    designDescription: "Save Rapunzel features a dual-interface design that supports both young learners and their educators. The student-facing interface uses a colorful, fairy tale-inspired palette that balances a sense of wonder with clear readability.",
    colorPalette: "Earthy, storybook-inspired color palette with deep blue, moss green, golden yellow, warm copper, and brick red.",
    animationDescription: "Strategic animations support the learning experience without causing distraction. The introductory sequence - showing Rapunzel walking through the tower with a gradual zoom to the window - replaced our original storybook concept and significantly improved engagement metrics. Similarly, the prince's climbing animation provides immediate feedback on correct answers while strengthening emotional investment in the storyline.",
    challenges: [
      {
        title: "Content Creation System",
        description: "Designed an intuitive editor for non-technical educators through card-sorting exercises that informed a template-based approach with progressive customization.",
        icon: "FileCode"
      },
      {
        title: "Hebrew Interface Complexities",
        description: "Built a custom solution for right-to-left text, number reversal, and alignment of English within Hebrew sentences—greatly improving usability.",
        icon: "Globe"
      },
      {
        title: "Balancing Engagement with Focus",
        description: "After early prototypes showed students were distracted by animations, we added a \"focus mode\" that simplifies visuals during active learning moments.",
        icon: "Eye"
      },
      {
        title: "Workflow Management",
        description: "Established robust file versioning and backup protocols. These proved essential when partial code loss occurred, enabling full recovery without delays.",
        icon: "FileArchive"
      }
    ]
  },
  {
    title: "BIP",
    description: "A conceptual money transfer application designed specifically for extraterrestrial users with unique perceptual needs.",
    image: "/lovable-uploads/bip-lots-of-iphones.png",
    tags: ["UX UI Design", "Speculative Design"],
    slug: "bip",
    color: "#8B5CF6",
    comingSoon: false,
    link: "https://xd.adobe.com/view/866550b7-89fd-4901-92d2-dc087ed5fb28-d336/screen/4d7b2d99-6a21-45fb-b04b-c398d6bedc83/?fullscreen"
  },
  {
    title: "STUDIT",
    description: "An AI-powered study companion for Israeli Psychometric Entrance Test preparation with personalized study plans.",
    image: "/lovable-uploads/studit-home-page.png",
    tags: ["UX UI Design", "Instructional Design"],
    slug: "studit",
    color: "#F59E0B",
    comingSoon: false,
    link: "https://xd.adobe.com/view/a56c02e8-2d4f-4803-bcbb-811822907cf1-f03f/?fullscreen"
  },
  {
    title: "PLANT LEARNING MODULE",
    description: "An interactive experience designed to build confidence in houseplant care by providing clear, accessible information.",
    image: "/lovable-uploads/plant-first-page.png",
    tags: ["Instructional Design"],
    slug: "plant-module",
    color: "#22C55E",
    comingSoon: false,
    link: "https://360.articulate.com/review/content/6849bc42-e11b-489d-bcc4-cad07341bdbf/review"
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-20">
      <div className="container">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my UX UI design work across various platforms and industries.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              slug={project.slug}
              color={project.color}
              index={index}
              comingSoon={project.comingSoon}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
