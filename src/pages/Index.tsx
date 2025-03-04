
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <Process />
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Client Feedback</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What clients are saying about working with me.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="p-8 rounded-xl bg-background border border-border/40 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <p className="text-lg italic mb-6">
                "Stav's redesign of our financial app led to a 42% increase in user engagement. 
                Her attention to detail and ability to translate complex requirements into 
                intuitive interfaces is exceptional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                  <span className="font-medium text-lg">JD</span>
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">CEO, BIP Financial</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-8 rounded-xl bg-background border border-border/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-lg italic mb-6">
                "Working with Stav was a game-changer for our educational platform. 
                She created an experience that engages children while simultaneously teaching 
                them valuable coding concepts. Couldn't be happier with the results."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                  <span className="font-medium text-lg">JS</span>
                </div>
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-sm text-muted-foreground">Product Manager, EdTech Inc.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Contact />
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              Ready to create an exceptional user experience?
            </motion.h2>
            
            <motion.p 
              className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Let's collaborate to bring your vision to life with intuitive design that puts users first.
            </motion.p>
            
            <motion.a 
              href="/about#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="mr-2">Let's Talk</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
