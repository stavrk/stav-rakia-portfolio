
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
                I'm Stav Rakia, a Product Designer and final-year Instructional Technologies 
                student at HIT (Holon Institute of Technology), where I'm proud to be a Dean's 
                List honoree with a GPA of 97. My educational background combines programming, 
                graphic design, and instructional development, giving me a unique perspective 
                on creating user-centered digital experiences.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Growing up in "Gallery Rakia," my family's art gallery, I was immersed in creativity 
                from an early age. Beginning my journey with jewelry making at 12 years old taught me 
                patience and attention to detail – qualities that now drive my passion for UX/UI design. 
                I thrive at the intersection of art and functionality, using design thinking to solve 
                complex problems with elegant solutions.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                My professional experience at ORCAM Technologies allowed me to contribute to the 'Orcam Hear' 
                application, where I participated in its conceptualization, UI design, and user testing. 
                I'm passionate about creating digital experiences that are not only visually appealing but 
                also genuinely enhance users' lives.
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
                  href="https://www.linkedin.com/in/stav-rakia/" 
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
                  <p className="font-medium mb-1">Product Designer</p>
                  <p className="text-sm text-muted-foreground">Based in Israel</p>
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
              My professional journey in design and technology.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
              {[
                {
                  role: "UX/UI Design Intern",
                  company: "ORCAM Technologies",
                  period: "2023 - Present",
                  description: "Contributing to the 'Orcam Hear' application design, participating in conceptualization, UI design, and user testing phases."
                },
                {
                  role: "Volunteer Designer",
                  company: "Atid Plus Association",
                  period: "2022 - Present",
                  description: "Developing educational presentations that align with brand guidelines and creating engaging visual content for social programs."
                },
                {
                  role: "Simulator Instructor",
                  company: "Israeli Air Force",
                  period: "2018 - 2021",
                  description: "Trained Air Force personnel in tactical scenarios, developing skills in explaining complex systems and adapting instruction to different learning styles."
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
                degree: "B.Sc in Instructional Technologies",
                institution: "Holon Institute of Technology (HIT)",
                year: "2020 - Present",
                description: "Dean's List honoree with a GPA of 97. Focus on combining programming, graphic design, and instructional development."
              },
              {
                degree: "JavaScript & React Development",
                institution: "Self-paced Learning",
                year: "2022",
                description: "Completed comprehensive courses in modern JavaScript and React development to enhance technical skillset for UX/UI implementation."
              },
              {
                degree: "UX/UI Design Certification",
                institution: "Google",
                year: "2021",
                description: "Professional certification covering the end-to-end UX design process, from research to high-fidelity prototyping."
              },
              {
                degree: "Military Service",
                institution: "Israeli Air Force",
                year: "2018 - 2021",
                description: "Served as a Simulator Instructor, developing skills in training methodology, complex systems explanation, and adaptive instruction."
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
