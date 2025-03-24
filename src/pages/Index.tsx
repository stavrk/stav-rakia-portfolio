
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <Process />
      <Contact />
    </Layout>
  );
};

export default Index;
