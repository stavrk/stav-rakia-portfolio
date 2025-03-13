
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";

const About = () => {
  const artistsData = [
    {
      name: "Jorja Smith",
      image: "/lovable-uploads/91d6a29d-d21d-4937-b3b0-66516afd5972.png"
    },
    {
      name: "Adele",
      image: "/lovable-uploads/3e513c8d-b8d5-4362-ac41-ef2940c7196d.png"
    },
    {
      name: "Alicia Keys",
      image: "/lovable-uploads/db222a8b-2a27-4c27-9ad0-b62eba54647e.png"
    },
    {
      name: "Ninet Tayeb",
      image: "/lovable-uploads/046a816a-e5b7-4e86-99e1-08d10fdc6a75.png"
    },
    {
      name: "Red Band",
      image: "/lovable-uploads/1eeacbf6-5f0d-4e22-9792-6ea96328dfc4.png"
    },
    {
      name: "Olivia Dean",
      image: "/lovable-uploads/049c7740-d430-41f4-9ba1-2e985a2ae4be.png"
    }
  ];

  const hobbiesData = [
    {
      name: "Jewelry making",
      image: "/lovable-uploads/6ae19bfb-ba54-4f5c-a4d7-041f98fa1ca9.png"
    },
    {
      name: "Pilates reformer",
      image: "/lovable-uploads/46d5114d-6177-4e20-8241-6a28781a920b.png"
    },
    {
      name: "Volunteering with Dogs",
      image: "/lovable-uploads/eaa8d20c-7335-403b-853a-b43218228e55.png"
    },
    {
      name: "Ceramic Art",
      image: "/lovable-uploads/103e68e0-0f98-4c89-bab7-a177ea172f66.png"
    },
    {
      name: "Friends",
      image: "/lovable-uploads/098ffff5-ceb1-4ab0-8644-ab1cd94accb6.png"
    },
    {
      name: "Traveling",
      image: "/lovable-uploads/95929c0c-a1ab-4969-bf78-1dcfebb6bd35.png"
    }
  ];

  const experienceData = [
    {
      role: "Military Service (Reserve Duty)",
      company: "Israeli Air Force (IAF)",
      period: "2023 - 2025",
      description: "At the Air Force Headquarters."
    },
    {
      role: "Deputy Team Leader | Orcam Hear App Involvement",
      company: "OrCam Technologies",
      period: "2021 - 2024",
      description: "Contributing to the development of the OrCam Hear application in a dual role. I participated in the conceptualization, interface design, and user testing phases, helping craft accessible experiences for users with hearing impairments. As Deputy Team Leader for the Data Collection & Entry Team, I manage teams both in Israel and abroad, coordinate with R&D departments, and support strategic work planning. This unique role allowed me to bridge UX design thinking with operational leadership, working on assistive technology that profoundly impacts users' lives."
    },
    {
      role: "Volunteer Designer",
      company: "Atid Plus Association",
      period: "2022",
      description: "Developing educational presentations that align with brand guidelines and creating engaging visual content for social programs."
    },
    {
      role: "Military Service (Regular Service)",
      company: "Simulator Instructor",
      period: "2019 - 2021",
      description: "\"Mekusharim\" - tactical training of the air force fighter planes."
    }
  ];

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
                I'm Stav Rakia, a UX/UI Designer focused on creating intuitive, functional, and user-centered digital experiences.
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
              className="relative w-full max-w-md mx-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="aspect-square w-full mx-auto rounded-xl overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/lovable-uploads/6eca0a82-eae5-4159-9730-9a7a3a3eb109.png" 
                  alt="Stav Rakia" 
                  className="w-full h-full object-cover"
                />
              </div>
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
              {experienceData.map((experience, index) => (
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
          
          {/* Square Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="p-6 rounded-xl bg-background border border-border/40 aspect-square flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 p-4 rounded-lg bg-primary/10 inline-block">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-lg font-bold">HIT</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">B.Sc in Instructional Technologies</h3>
              <div className="flex justify-between items-center mb-3">
                <p className="text-muted-foreground">Holon Institute of Technology</p>
                <p className="text-sm text-muted-foreground">2020 - 2024</p>
              </div>
              <p className="flex-grow overflow-y-auto text-sm">
                Dean's List Honoree – GPA: 97. A cutting-edge program preparing professionals to lead in digital learning, instructional technology, and UX/UI design.
              </p>
              <div className="mt-4 pt-4 border-t border-border/40">
                <p className="text-sm font-medium">Relevant Coursework:</p>
                <p className="text-xs text-muted-foreground">UX/UI Design & Analysis, Knowledge Organization & Representation, Interactive Learning Environments, Visual Communication & Graphic Design, Mobile Interface Design & Interactive Media</p>
              </div>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-xl bg-background border border-border/40 aspect-square flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="mb-4 p-4 rounded-lg bg-purple-500/10 inline-block">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-purple-500 text-white">
                  <span className="text-lg font-bold">WIT</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">Product Management Certification</h3>
              <div className="flex justify-between items-center mb-3">
                <p className="text-muted-foreground">Women in Tech Program – HIT</p>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
              <p className="flex-grow overflow-y-auto text-sm">
                A six-month intensive program designed for women entering product management, managed by HIT's FUTURE Innovation Center, in collaboration with the Israel Innovation Authority.
              </p>
              <div className="mt-4 pt-4 border-t border-border/40">
                <p className="text-sm font-medium">Key Modules:</p>
                <p className="text-xs text-muted-foreground">Market Needs & Product Strategy, UX/UI in Product Development, Agile & Scrum, Data-Driven Decision-Making, Go-to-Market Strategy & Product Launch</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Personal Interests Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Beyond Design</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The things that inspire me outside of work.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="p-6 rounded-xl bg-background border border-border/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                Artists I Love
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {artistsData.map((artist, i) => (
                  <motion.div 
                    key={i} 
                    className="flex flex-col items-center p-3 rounded-lg bg-secondary text-secondary-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-16 h-16 rounded-full object-cover mb-2"
                    />
                    <span className="text-sm font-medium">{artist.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-xl bg-background border border-border/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-medium mb-6">
                Hobbies
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {hobbiesData.map((hobby, i) => (
                  <motion.div 
                    key={i} 
                    className="flex flex-col items-center p-3 rounded-lg bg-secondary text-secondary-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <img 
                      src={hobby.image} 
                      alt={hobby.name}
                      className="w-16 h-16 rounded-full object-cover mb-2"
                    />
                    <span className="text-sm font-medium text-center">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Contact />
    </Layout>
  );
};

export default About;
