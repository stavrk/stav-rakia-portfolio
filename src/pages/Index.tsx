
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Hero />
        <FeaturedProjects />
        <Process />
        <Contact />
      </motion.div>
    </Layout>
  );
};

export default Index;
