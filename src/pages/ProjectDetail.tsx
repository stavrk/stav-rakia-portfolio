import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectLink from '@/components/ProjectLink';

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [sections, setSections] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!slug) return;

    const renderContent = () => {
      const sections: JSX.Element[] = [];

      if (slug === "roomie") {
        sections.push(
          <section key="overview" className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Overview</h2>
            <p className="mb-6">
              ROOMIE is a mobile application designed to streamline the roommate search process, making it easier for individuals to find compatible living partners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src="/lovable-uploads/roomie-onboarding.png"
                alt="ROOMIE Onboarding"
                className="rounded-lg border border-border w-full"
              />
              <img
                src="/lovable-uploads/roomie-matching.png"
                alt="ROOMIE Matching"
                className="rounded-lg border border-border w-full"
              />
            </div>
            <p className="mb-6">
              The app focuses on creating detailed user profiles, implementing smart matching algorithms, and providing secure communication channels to ensure a smooth and secure experience for all users.
            </p>
          </section>
        );

        sections.push(
          <section key="wireflow" className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Wireflow</h2>
            <p className="mb-6">
              The wireflow diagrams illustrate the user journey through the ROOMIE app, mapping out key interactions and decision points.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src="/lovable-uploads/roomie-wireflow-1.png"
                alt="ROOMIE Wireflow Part 1"
                className="rounded-lg border border-border w-full"
              />
              <img
                src="/lovable-uploads/roomie-wireflow-2.png"
                alt="ROOMIE Wireflow Part 2"
                className="rounded-lg border border-border w-full"
              />
            </div>
          </section>
        );

        sections.push(
          <section key="design" className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Design</h2>
            <p className="mb-6">
              The design of ROOMIE emphasizes simplicity and user-friendliness, with a clean and intuitive interface that makes navigation easy for all users.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src="/lovable-uploads/roomie-design-1.png"
                alt="ROOMIE Design Part 1"
                className="rounded-lg border border-border w-full"
              />
              <img
                src="/lovable-uploads/roomie-design-2.png"
                alt="ROOMIE Design Part 2"
                className="rounded-lg border border-border w-full"
              />
            </div>
          </section>
        );
      }

      if (slug === "flowstep") {
        sections.push(
          <section key="overview" className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Overview</h2>
            <p className="mb-6">
              FlowStep is a comprehensive platform designed to streamline and enhance the learning experience for individuals and teams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src="/lovable-uploads/flowstep-dashboard.png"
                alt="FlowStep Dashboard"
                className="rounded-lg border border-border w-full"
              />
              <img
                src="/lovable-uploads/flowstep-course-creation.png"
                alt="FlowStep Course Creation"
                className="rounded-lg border border-border w-full"
              />
            </div>
            <p className="mb-6">
              The platform focuses on intuitive course creation, interactive learning modules, and detailed progress tracking to ensure effective knowledge transfer and skill development.
            </p>
          </section>
        );

        sections.push(
          <section key="wireflow" className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Wireflow</h2>
            <p className="mb-6">
              The wireflow diagrams illustrate the user journey through the FlowStep platform, mapping out key interactions and decision points.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src="/lovable-uploads/flowstep-wireflow-1.png"
                alt="FlowStep Wireflow Part 1"
                className="rounded-lg border border-border w-full"
              />
              <img
                src="/lovable-uploads/flowstep-wireflow-2.png"
                alt="FlowStep Wireflow Part 2"
                className="rounded-lg border border-border w-full"
              />
            </div>
          </section>
        );

        sections.push(
          <section key="design" className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Design</h2>
            <p className="mb-6">
              The design of FlowStep emphasizes a clean, modern aesthetic with a focus on usability and accessibility, ensuring a seamless experience for all users.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src="/lovable-uploads/flowstep-design-1.png"
                alt="FlowStep Design Part 1"
                className="rounded-lg border border-border w-full"
              />
              <img
                src="/lovable-uploads/flowstep-design-2.png"
                alt="FlowStep Design Part 2"
                className="rounded-lg border border-border w-full"
              />
            </div>
          </section>
        );
      }

      if (slug === "plant-module") {
        sections.push(
          <section key="overview" className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Overview</h2>
            <p className="mb-6">
              The Plant Learning Module is an interactive educational tool designed to enhance users' understanding and appreciation of houseplants.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src="/lovable-uploads/plant-module-home.png"
                alt="Plant Learning Module Home"
                className="rounded-lg border border-border w-full"
              />
              <img
                src="/lovable-uploads/plant-module-quiz.png"
                alt="Plant Learning Module Quiz"
                className="rounded-lg border border-border w-full"
              />
            </div>
            <p className="mb-6">
              This module provides a comprehensive learning experience, covering various aspects of houseplant care, including identification, watering techniques, and troubleshooting common issues.
            </p>
          </section>
        );

        sections.push(
          <section key="wireflow" className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Wireflow</h2>
            <p className="mb-6">
              The wireflow diagrams illustrate the user journey through the Plant Learning Module, mapping out decision points and educational pathways.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src="/lovable-uploads/plant-wireflow.png"
                alt="Plant Learning Module Wireflow"
                className="rounded-lg border border-border w-full"
              />
              <img
                src="/lovable-uploads/plant-prototyping.png"
                alt="Plant Learning Module Prototyping"
                className="rounded-lg border border-border w-full"
              />
            </div>
          </section>
        );

        sections.push(
          <section key="design" className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Design</h2>
            <p className="mb-6">
              The design of the Plant Learning Module is clean and intuitive, featuring vibrant visuals and interactive elements to engage users and facilitate effective learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src="/lovable-uploads/plant-design-1.png"
                alt="Plant Learning Module Design Part 1"
                className="rounded-lg border border-border w-full"
              />
              <img
                src="/lovable-uploads/plant-design-2.png"
                alt="Plant Learning Module Design Part 2"
                className="rounded-lg border border-border w-full"
              />
            </div>
          </section>
        );
      }

      setSections(sections);
    };

    renderContent();
  }, [slug]);

  return (
    <Layout>
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>

          <div className="mt-12">
            {sections.map((section) => section)}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
