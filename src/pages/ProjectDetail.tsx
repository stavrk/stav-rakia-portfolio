import { useParams, Navigate } from 'react-router-dom';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import ProjectLink from '@/components/ProjectLink';

const projectsData = [
  {
    title: "ROOMIE",
    description: "Interactive guide for simplified apartment moving for young adults.",
    image: "/lovable-uploads/roomie-home-page.png",
    tags: ["UX UI Design", "Instructional Design"],
    slug: "roomie",
    color: "#F4DB8B",
    case: "Interactive guide for simplified apartment moving for young adults.",
    comingSoon: false,
    link: "https://xd.adobe.com/view/36102754-0760-402c-b896-3eb51e5b9a6f-6343/?fullscreen"
  },
  {
    title: "SAVE RAPUNZEL",
    description: "Interactive game and tool turning lessons into experiences.",
    image: "/lovable-uploads/save-repunzel-editor.png",
    tags: ["Instructional Design", "Game Design"],
    slug: "save-rapunzel",
    color: "#10B981",
    case: "Interactive game and tool turning lessons into experiences.",
    comingSoon: false,
    link: "https://saverapunzel.telem-hit.net/GamesList"
  },
  {
    title: "BIP",
    description: "Money transfer app designed for extraterrestrial users with unique needs.",
    image: "/lovable-uploads/bip-lots-of-iphones.png",
    tags: ["UX UI Design", "Speculative Design"],
    slug: "bip",
    color: "#8B5CF6",
    case: "Money transfer app designed for extraterrestrial users with unique needs.",
    comingSoon: false,
    link: "https://xd.adobe.com/view/866550b7-89fd-4901-92d2-dc087ed5fb28-d336/screen/4d7b2d99-6a21-45fb-b04b-c398d6bedc83/?fullscreen"
  },
  {
    title: "STUDIT",
    description: "AI-powered study companion for personalized test preparation.",
    image: "/lovable-uploads/studit-home-page.png",
    tags: ["UX UI Design", "Instructional Design"],
    slug: "studit",
    color: "#F59E0B",
    case: "AI-powered study companion for personalized test preparation.",
    comingSoon: false,
    link: "https://xd.adobe.com/view/a56c02e8-2d4f-4803-bcbb-811822907cf1-f03f/?fullscreen"
  },
  {
    title: "PLANT LEARNING MODULE",
    description: "Interactive experience to build confidence in houseplant care.",
    image: "/lovable-uploads/plant-first-page.png",
    tags: ["Instructional Design"],
    slug: "plant-module",
    color: "#22C55E",
    case: "Interactive experience to build confidence in houseplant care.",
    comingSoon: false,
    link: "https://360.articulate.com/review/content/6849bc42-e11b-489d-bcc4-cad07341bdbf/review"
  },
  {
    title: "Playtika Manager Onboarding Guide",
    description: "An interactive learning module specifically designed for Playtika managers who need to guide new employees through the onboarding process.",
    image: "/lovable-uploads/playtika-home.jpg",
    tags: ["Instructional Design"],
    color: "#D946EF",
    case: "An interactive learning module specifically designed for Playtika managers who need to guide new employees through the onboarding process.",
    comingSoon: true
  }
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);
  
  if (!project) {
    return <Navigate to="/projects" />;
  }
  
  return (
    <Layout>
      <div className="py-16 md:py-20">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {/* Category tags have been removed from here */}
            
            <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">{project.title}</h1>
            
            <p className="text-muted-foreground text-lg mb-8">{project.case}</p>
            
            <div className="rounded-xl overflow-hidden mb-12">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto"
              />
            </div>

            {/* Project details content */}
            <div className="prose prose-lg max-w-none">
              {project.slug === "roomie" && (
                <>
                  <h2>About the Project</h2>
                  <p>
                    ROOMIE is an interactive guide designed to simplify the apartment moving process for young adults. The platform provides step-by-step guidance, useful tools, and resources to make the transition to a new living space as smooth as possible.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <img src="/lovable-uploads/roomie-home-page.png" alt="Roomie Homepage" className="rounded-lg" />
                    <img src="/lovable-uploads/roomie-expenses.png" alt="Roomie Expenses" className="rounded-lg" />
                  </div>
                  
                  <h2>Design Approach</h2>
                  <p>
                    The design approach for ROOMIE focused on creating a friendly, intuitive interface that reduces the stress and complexity of moving. We used a warm color palette and approachable illustrations to make the experience feel supportive.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div>
                      <img src="/lovable-uploads/color-palette-roomie.png" alt="Roomie Color Palette" className="rounded-lg mb-4" />
                      <p className="text-center text-sm text-muted-foreground">Color Palette</p>
                    </div>
                    <div>
                      <img src="/lovable-uploads/typography-roomie.png" alt="Roomie Typography" className="rounded-lg mb-4" />
                      <p className="text-center text-sm text-muted-foreground">Typography</p>
                    </div>
                  </div>
                  
                  <h2>Features and Functionality</h2>
                  <p>
                    ROOMIE includes features like expense tracking, roommate compatibility tools, neighborhood guides, and moving checklists. All designed to address the pain points young adults face when moving to a new apartment.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <img src="/lovable-uploads/interface-roomie.png" alt="Roomie Interface" className="rounded-lg" />
                    <img src="/lovable-uploads/roomie-wireframe.png" alt="Roomie Wireframe" className="rounded-lg" />
                  </div>
                </>
              )}

              {project.slug === "save-rapunzel" && (
                <>
                  <h2>About the Project</h2>
                  <p>
                    SAVE RAPUNZEL is an interactive educational game and tool that transforms traditional lessons into engaging experiences. The platform allows educators to create gamified learning content that motivates students and enhances knowledge retention.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <img src="/lovable-uploads/save-repunzel-editor.png" alt="Save Rapunzel Editor" className="rounded-lg" />
                    <img src="/lovable-uploads/save-repunzel-my-games.png" alt="Save Rapunzel Games List" className="rounded-lg" />
                  </div>
                  
                  <h2>Design Philosophy</h2>
                  <p>
                    The design philosophy behind SAVE RAPUNZEL centers on making learning fun and engaging through storytelling and game mechanics. We focused on creating an intuitive editor for teachers while ensuring the game interface is captivating for students.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div>
                      <img src="/lovable-uploads/save-repunzel-color-palette.png" alt="Save Rapunzel Color Palette" className="rounded-lg mb-4" />
                      <p className="text-center text-sm text-muted-foreground">Color Palette</p>
                    </div>
                    <div>
                      <img src="/lovable-uploads/save-repunzel-font.png" alt="Save Rapunzel Typography" className="rounded-lg mb-4" />
                      <p className="text-center text-sm text-muted-foreground">Typography</p>
                    </div>
                  </div>
                  
                  <h2>Key Features</h2>
                  <p>
                    SAVE RAPUNZEL includes a drag-and-drop game editor, various question formats, customizable characters and scenarios, and detailed analytics to track student progress.
                  </p>
                  
                  <div className="my-10">
                    <img src="/lovable-uploads/save-repunzel-interface.png" alt="Save Rapunzel Interface" className="rounded-lg" />
                  </div>
                </>
              )}

              {project.slug === "bip" && (
                <>
                  <h2>About the Project</h2>
                  <p>
                    BIP is a money transfer app designed for extraterrestrial users with unique needs. The platform aims to provide a seamless and secure way for aliens to manage their finances across galaxies.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <img src="/lovable-uploads/bip-lots-of-iphones.png" alt="BIP Interface" className="rounded-lg" />
                    <img src="/lovable-uploads/bip-onboarding.png" alt="BIP Onboarding" className="rounded-lg" />
                  </div>
                  
                  <h2>Design Considerations</h2>
                  <p>
                    The design of BIP took into account the diverse needs of extraterrestrial users, including varying levels of technology adoption and different cultural norms. We focused on creating a universal interface that is both intuitive and accessible.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div>
                      <img src="/lovable-uploads/bip-color-palette.png" alt="BIP Color Palette" className="rounded-lg mb-4" />
                      <p className="text-center text-sm text-muted-foreground">Color Palette</p>
                    </div>
                    <div>
                      <img src="/lovable-uploads/bip-typography.png" alt="BIP Typography" className="rounded-lg mb-4" />
                      <p className="text-center text-sm text-muted-foreground">Typography</p>
                    </div>
                  </div>
                  
                  <h2>Unique Features</h2>
                  <p>
                    BIP includes features such as intergalactic currency conversion, secure alien identification protocols, and real-time translation services to facilitate communication between different species.
                  </p>
                  
                  <div className="my-10">
                    <img src="/lovable-uploads/bip-transaction.png" alt="BIP Transaction" className="rounded-lg" />
                  </div>
                </>
              )}

              {project.slug === "studit" && (
                <>
                  <h2>About the Project</h2>
                  <p>
                    STUDIT is an AI-powered study companion designed to provide personalized test preparation for students. The platform uses advanced algorithms to identify knowledge gaps and create customized study plans.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <img src="/lovable-uploads/studit-home-page.png" alt="STUDIT Homepage" className="rounded-lg" />
                    <img src="/lovable-uploads/studit-dashboard.png" alt="STUDIT Dashboard" className="rounded-lg" />
                  </div>
                  
                  <h2>Design Principles</h2>
                  <p>
                    The design of STUDIT is based on principles of adaptive learning and personalized education. We aimed to create an engaging and supportive environment that motivates students to achieve their academic goals.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div>
                      <img src="/lovable-uploads/studit-color-palette.png" alt="STUDIT Color Palette" className="rounded-lg mb-4" />
                      <p className="text-center text-sm text-muted-foreground">Color Palette</p>
                    </div>
                    <div>
                      <img src="/lovable-uploads/studit-typography.png" alt="STUDIT Typography" className="rounded-lg mb-4" />
                      <p className="text-center text-sm text-muted-foreground">Typography</p>
                    </div>
                  </div>
                  
                  <h2>Key Functionalities</h2>
                  <p>
                    STUDIT offers features such as AI-driven study plans, practice tests with detailed feedback, progress tracking, and a collaborative learning community.
                  </p>
                  
                  <div className="my-10">
                    <img src="/lovable-uploads/studit-interface.png" alt="STUDIT Interface" className="rounded-lg" />
                  </div>
                </>
              )}

              {project.slug === "plant-module" && (
                <>
                  <h2>About the Project</h2>
                  <p>
                    The Plant Learning Module is an interactive experience designed to build confidence in houseplant care. The module provides users with essential knowledge and practical tips to successfully grow and maintain houseplants.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <img src="/lovable-uploads/plant-first-page.png" alt="Plant Module First Page" className="rounded-lg" />
                    <img src="/lovable-uploads/plant-watering.png" alt="Plant Watering Guide" className="rounded-lg" />
                  </div>
                  
                  <h2>Instructional Design</h2>
                  <p>
                    The instructional design of the Plant Learning Module focuses on creating a hands-on, engaging learning experience. We used interactive elements and real-world scenarios to make the content relatable and memorable.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div>
                      <img src="/lovable-uploads/plant-color-palette.png" alt="Plant Module Color Palette" className="rounded-lg mb-4" />
                      <p className="text-center text-sm text-muted-foreground">Color Palette</p>
                    </div>
                    <div>
                      <img src="/lovable-uploads/plant-typography.png" alt="Plant Module Typography" className="rounded-lg mb-4" />
                      <p className="text-center text-sm text-muted-foreground">Typography</p>
                    </div>
                  </div>
                  
                  <h2>Module Features</h2>
                  <p>
                    The Plant Learning Module includes topics such as selecting the right plants, understanding soil types, watering techniques, and troubleshooting common plant problems.
                  </p>
                  
                  <div className="my-10">
                    <img src="/lovable-uploads/plant-module-interface.png" alt="Plant Module Interface" className="rounded-lg" />
                  </div>
                </>
              )}
            </div>
            
            {/* Project link button */}
            {project.link && !project.comingSoon && (
              <div className="mt-10">
                <ProjectLink href={project.link} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
