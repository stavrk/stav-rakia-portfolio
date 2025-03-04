
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-medium mb-6">About Me</h1>
              <p className="text-muted-foreground text-lg mb-6">
                I'm Stav Rakia, a UX/UI designer with over 5 years of experience creating 
                intuitive and engaging digital experiences across various platforms and industries.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                My approach combines user-centered design principles with strategic thinking 
                to create products that are not only beautiful but also functional and accessible.
                I'm passionate about solving complex problems through thoughtful design and 
                continuous iteration based on user feedback.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                When I'm not designing, you can find me exploring new design trends, 
                attending UX workshops, or hiking in the great outdoors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/CV_StavRakia.pdf" 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all hover:translate-y-[-2px]"
                >
                  <span className="mr-2">LinkedIn</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="aspect-square rounded-xl overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                  alt="Stav Rakia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-8 -left-8 p-5 rounded-xl bg-background border border-border/40 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="text-center">
                  <p className="font-medium mb-1">UX/UI Designer</p>
                  <p className="text-sm text-muted-foreground">Based in Tel Aviv</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey in design.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
              {[
                {
                  role: "Senior UX/UI Designer",
                  company: "TechSolutions Inc.",
                  period: "2021 - Present",
                  description: "Leading design for financial and educational products. Established design system and conducted extensive user research."
                },
                {
                  role: "UX Designer",
                  company: "DigitalCraft Agency",
                  period: "2018 - 2021",
                  description: "Designed user interfaces for various client projects across e-commerce, healthcare, and fintech sectors."
                },
                {
                  role: "UI Designer",
                  company: "CreativeMinds Studio",
                  period: "2016 - 2018",
                  description: "Created visual designs for websites and applications with focus on aesthetics and brand consistency."
                }
              ].map((experience, index) => (
                <motion.div 
                  key={index}
                  className="mb-8 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="absolute -left-10 top-1.5 h-4 w-4 rounded-full bg-primary" />
                  <div className="p-6 rounded-xl bg-background border border-border/40">
                    <h3 className="text-xl font-medium mb-1">{experience.role}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-muted-foreground">{experience.company}</p>
                      <p className="text-sm text-muted-foreground">{experience.period}</p>
                    </div>
                    <p>{experience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Skills />
      
      {/* Education Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Education</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic background and continuing education.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                degree: "Master's in Interaction Design",
                institution: "Design Academy",
                year: "2016",
                description: "Focused on human-computer interaction, user research methodologies, and interactive prototyping."
              },
              {
                degree: "Bachelor's in Graphic Design",
                institution: "Creative Arts University",
                year: "2014",
                description: "Studied visual communication, typography, color theory, and basic web design principles."
              },
              {
                degree: "UX Design Certification",
                institution: "Google",
                year: "2018",
                description: "Professional certification covering the end-to-end UX design process, from research to high-fidelity prototyping."
              },
              {
                degree: "Accessibility in Design Workshop",
                institution: "Inclusive Design Institute",
                year: "2020",
                description: "Intensive workshop on creating accessible digital experiences for users with diverse abilities."
              }
            ].map((education, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-xl bg-background border border-border/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-medium mb-1">{education.degree}</h3>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-muted-foreground">{education.institution}</p>
                  <p className="text-sm text-muted-foreground">{education.year}</p>
                </div>
                <p>{education.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Contact />
    </Layout>
  );
};

export default About;
