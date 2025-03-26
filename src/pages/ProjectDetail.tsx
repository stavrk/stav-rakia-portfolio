import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ProjectLink from '@/components/ProjectLink';

export const projectData = {
  "roomie": {
    title: "ROOMIE",
    subtitle: "UX UI Design, Instructional Design",
    description: "An interactive guide designed to simplify the often overwhelming process of moving into a first apartment for young adults.",
    image: "/lovable-uploads/roomie-home-page.png",
    caseImage: "/lovable-uploads/roomie-home-page.png",
    tags: ["UX UI Design", "Instructional Design"],
    slug: "roomie",
    color: "#F4DB8B",
    overview: "ROOMIE is an interactive guide designed to simplify the often overwhelming process of moving into a first apartment for young adults. The platform provides a user-friendly workflow with an interactive timeline, budget calculator, roommate agreement generator, and virtual room planner.",
    problem: "Moving into a first apartment can be overwhelming for young adults. They often lack the necessary knowledge and tools to manage the process effectively, leading to stress and potential mistakes.",
    solution: "ROOMIE simplifies the moving process by providing a comprehensive digital guide with interactive tools and resources. The platform breaks down the process into manageable steps, offering clear guidance and support at each stage.",
    challenges: `A key challenge in the development of Roomie was how to present educational content in a way that feels approachable, interactive, and non-intimidating—especially for users navigating the emotionally sensitive transition into their first shared living situation.

To solve this, we designed playful micro-interactions, modular content blocks, and gentle language cues that guide users without overwhelming them. We conducted multiple usability tests to ensure the experience felt supportive rather than formal or instructional, ultimately creating a product that informs while empowering users through empathy and clarity.`,
    outcome: "ROOMIE empowers young adults to confidently navigate the process of moving into their first apartment. By providing clear, accessible information and interactive tools, the platform reduces stress and promotes successful independent living.",
    link: "https://xd.adobe.com/view/36102754-0760-402c-b896-3eb51e5b9a6f-6343/?fullscreen"
  },
  "save-rapunzel": {
    title: "SAVE RAPUNZEL",
    subtitle: "Instructional Design, Game Design",
    description: "An educational platform with a game for students and a content creation tool for educators built around the classic fairy tale.",
    image: "/lovable-uploads/save-repunzel-editor.png",
    caseImage: "/lovable-uploads/save-repunzel-editor.png",
    tags: ["Instructional Design", "Game Design"],
    slug: "save-rapunzel",
    color: "#10B981",
    overview: "Save Rapunzel is a dual-purpose educational platform featuring an interactive game for students and a content management system for educators. The game uses the classic fairy tale to engage students, while the CMS allows educators to create custom question sets without coding knowledge.",
    problem: "Traditional educational methods often fail to engage students effectively. Educators need tools that allow them to create custom content without requiring technical expertise.",
    solution: "Save Rapunzel offers an interactive game where correct answers help the prince climb Rapunzel's hair, combined with a CMS that allows educators to create custom question sets easily.",
    challenges: "Designing a dual-purpose platform that caters to both students and educators required careful consideration of different user needs and technical capabilities. Ensuring the game was engaging while maintaining educational value was also a key challenge.",
    outcome: "Save Rapunzel provides an engaging and effective educational tool that benefits both students and educators. The platform enhances learning outcomes and empowers educators to create custom content effortlessly.",
    link: "https://saverapunzel.telem-hit.net/GamesList"
  },
  "bip": {
    title: "BIP",
    subtitle: "UX UI Design, Speculative Design",
    description: "A conceptual money transfer application designed specifically for extraterrestrial users with unique perceptual needs.",
    image: "/lovable-uploads/bip-lots-of-iphones.png",
    caseImage: "/lovable-uploads/bip-lots-of-iphones.png",
    tags: ["UX UI Design", "Speculative Design"],
    slug: "bip",
    color: "#8B5CF6",
    overview: "BIP is a conceptual money transfer application designed for extraterrestrial users with unique perceptual needs. The project reimagines a conventional app interface through an alien-centered design lens.",
    problem: "Conventional app interfaces are designed for human users and may not be suitable for extraterrestrial beings with different perceptual abilities and needs.",
    solution: "BIP reimagines a money transfer app interface through an alien-centered design lens, developing new visual languages, interaction patterns, and information hierarchies suited to extraterrestrial perception.",
    challenges: "The primary challenge was to design an interface that caters to hypothetical extraterrestrial users with unknown perceptual abilities. This required extensive research and creative problem-solving to develop a novel design language.",
    outcome: "BIP offers a unique perspective on UX UI design by exploring how interfaces can be adapted to suit the needs of non-human users. The project demonstrates the potential for inclusive design practices that consider a wide range of perceptual abilities.",
    link: "https://xd.adobe.com/view/866550b7-89fd-4901-92d2-dc087ed5fb28-d336/screen/4d7b2d99-6a21-45fb-b04b-c398d6bedc83/?fullscreen"
  },
  "studit": {
    title: "STUDIT",
    subtitle: "UX UI Design, Instructional Design",
    description: "An AI-powered study companion for Israeli Psychometric Entrance Test preparation with personalized study plans.",
    image: "/lovable-uploads/studit-home-page.png",
        caseImage: "/lovable-uploads/studit-home-page.png",
    tags: ["UX UI Design", "Instructional Design"],
    slug: "studit",
    color: "#F59E0B",
    overview: "STUDIT is an AI-powered study companion designed to help students prepare for the Israeli Psychometric Entrance Test. The platform offers personalized study plans and interactive practice questions to make test preparation less overwhelming and more engaging.",
    problem: "Preparing for the Israeli Psychometric Entrance Test can be overwhelming for students. They need a structured and personalized approach to maximize their study efforts.",
    solution: "STUDIT provides an interactive, adaptive learning platform that offers personalized study schedules and interactive practice questions, making test preparation more manageable and effective.",
    challenges: "Designing an adaptive learning platform that caters to individual student needs required the integration of AI technology and careful consideration of learning methodologies. Ensuring the platform was engaging and user-friendly was also a key challenge.",
    outcome: "STUDIT helps students prepare for the Israeli Psychometric Entrance Test more effectively. The platform's personalized study plans and interactive practice questions enhance learning outcomes and reduce test anxiety.",
    link: "https://xd.adobe.com/view/a56c02e8-2d4f-4803-bcbb-811822907cf1-f03f/?fullscreen"
  },
  "plant-module": {
    title: "PLANT LEARNING MODULE",
    subtitle: "Instructional Design",
    description: "An interactive experience designed to build confidence in houseplant care by providing clear, accessible information.",
    image: "/lovable-uploads/plant-first-page.png",
    caseImage: "/lovable-uploads/plant-first-page.png",
    tags: ["Instructional Design"],
    slug: "plant-module",
    color: "#22C55E",
    overview: "The Plant Learning Module is an interactive experience designed to build confidence in houseplant care. The module provides clear, accessible information to empower potential plant owners.",
    problem: "Many people are hesitant to own houseplants due to a lack of knowledge and fear of failure. They need a reliable source of information to build confidence in their plant care abilities.",
    solution: "The Plant Learning Module offers a comprehensive, accessible learning experience that provides potential plant owners with the information they need to care for houseplants successfully.",
    challenges: "The primary challenge was to present complex information in a clear and engaging manner. Ensuring the module was accessible to users with varying levels of plant care knowledge was also a key consideration.",
    outcome: "The Plant Learning Module increases confidence among potential plant owners by providing comprehensive, accessible information. The module empowers users to care for houseplants successfully and enjoy the benefits of indoor greenery.",
    link: "https://360.articulate.com/review/content/6849bc42-e11b-489d-bcc4-cad07341bdbf/review"
  }
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <Layout>
        <div className="container py-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-4">Project Not Found</h1>
            <p className="text-muted-foreground text-lg">
              The project you are looking for does not exist.
            </p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div
        className="container py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary mb-8"
          whileHover={{ x: -2 }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </motion.a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <motion.img
              src={project.caseImage}
              alt={project.title}
              className="rounded-xl shadow-lg overflow-hidden object-cover aspect-video"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </div>

          <div className="md:order-1">
            <motion.h1
              className="text-4xl md:text-5xl font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-muted-foreground text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {project.description}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-medium mb-4">Overview</h2>
          <p className="text-muted-foreground text-lg">{project.overview}</p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-medium mb-4">Problem</h2>
          <p className="text-muted-foreground text-lg">{project.problem}</p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-medium mb-4">Solution</h2>
          <p className="text-muted-foreground text-lg">{project.solution}</p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-medium mb-4">Challenges & Solutions</h2>
          <p className="text-muted-foreground text-lg">{project.challenges}</p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-medium mb-4">Outcome</h2>
          <p className="text-muted-foreground text-lg">{project.outcome}</p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-medium mb-4">Links</h2>
          <div className="flex flex-wrap gap-3">
            <ProjectLink href={project.link} />
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default ProjectDetail;
