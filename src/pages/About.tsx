
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const About = () => {
  const artistsData = [{
    name: "Jorja Smith",
    image: "/lovable-uploads/fdad82f9-6c24-47ab-b496-96d3c673187d.png",
    className: "object-cover object-center"
  }, {
    name: "Adele",
    image: "/lovable-uploads/ec7eabd6-87e2-4a7b-88bc-d777974d2a73.png",
    className: "object-cover object-center"
  }, {
    name: "Alicia Keys",
    image: "/lovable-uploads/70ba0890-cb07-4991-a37c-4c732986b66c.png",
    className: "object-cover object-center"
  }, {
    name: "Ninet Tayeb",
    image: "/lovable-uploads/abfa4116-755c-410b-9269-ef3511af7850.png",
    className: "object-cover object-center" // Updated to properly center the image
  }, {
    name: "Red Band",
    image: "/lovable-uploads/e3af1756-a5c4-407b-966d-82200f13fbd7.png",
    className: "object-cover object-center"
  }, {
    name: "Olivia Dean",
    image: "/lovable-uploads/0eca68f6-7db9-4f72-aa03-979ced580280.png",
    className: "object-cover object-center" // Updated to properly center the image
  }];
  const hobbiesData = [{
    name: "Jewelry making",
    image: "/lovable-uploads/e5218831-c4a7-4372-9729-b606739584d1.png",
    className: "object-cover object-center"
  }, {
    name: "Pilates reformer",
    image: "/lovable-uploads/d248eb51-ddf9-41ed-ae99-f5e37afa0c60.png",
    className: "object-cover object-center"
  }, {
    name: "Volunteers with dogs",
    image: "/lovable-uploads/da03da86-9304-4447-8d92-838b9bf49970.png",
    className: "object-cover object-center"
  }, {
    name: "Ceramic Art",
    image: "/lovable-uploads/abfa4116-755c-410b-9269-ef3511af7850.png",
    className: "object-cover object-center"
  }, {
    name: "Friends",
    image: "/lovable-uploads/23ee1d68-9bb7-4f7a-81f5-6df6c309574d.png",
    className: "object-cover object-center"
  }, {
    name: "Traveling",
    image: "/lovable-uploads/0fc6fe86-189a-4804-acb3-328837caa092.png",
    className: "object-cover object-center"
  }];
  const experienceData = [{
    role: "Military Service (Reserve Duty)",
    company: "Israeli Air Force (IAF)",
    period: "2023 - 2025",
    description: "At the Air Force Headquarters."
  }, {
    role: "Deputy Team Leader | Orcam Hear App Involvement",
    company: "OrCam Technologies",
    period: "2021 - 2024",
    description: "Contributing to the development of the OrCam Hear application in a dual role. I participated in the conceptualization, interface design, and user testing phases, helping craft accessible experiences for users with hearing impairments. As Deputy Team Leader for the Data Collection & Entry Team, I manage teams both in Israel and abroad, coordinate with R&D departments, and support strategic work planning. This unique role allowed me to bridge UX design thinking with operational leadership, working on assistive technology that profoundly impacts users' lives."
  }, {
    role: "Volunteer Designer",
    company: "Atid Plus Association",
    period: "2022",
    description: "Developing educational presentations that align with brand guidelines and creating engaging visual content for social programs."
  }, {
    role: "Military Service (Regular Service)",
    company: "Simulator Instructor",
    period: "2019 - 2021",
    description: "\"Mekusharim\" - tactical training of the air force fighter planes."
  }];
  
  return <Layout>
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }}>
              <h1 className="text-3xl md:text-4xl font-medium mb-5">About Me</h1>
              <p className="text-muted-foreground text-base mb-5">
                I'm Stav Rakia, a UX/UI Designer focused on creating intuitive, functional, and user-centered digital experiences.
              </p>
              <p className="text-muted-foreground text-base mb-5">
                Growing up in "Gallery Rakia," my family's art gallery, I was immersed in creativity 
                from an early age. Beginning my journey with jewelry making at 12 years old taught me 
                patience and attention to detail – qualities that now drive my passion for UX/UI design. 
                I thrive at the intersection of art and functionality, using design thinking to solve 
                complex problems with elegant solutions.
              </p>
              <p className="text-muted-foreground text-base mb-6">
                My professional experience at ORCAM Technologies allowed me to contribute to the 'Orcam Hear' 
                application, where I participated in its conceptualization, UI design, and user testing. 
                I'm passionate about creating digital experiences that are not only visually appealing but 
                also genuinely enhance users' lives.
              </p>
            </motion.div>
            
            <motion.div className="relative w-full max-w-lg mx-auto" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }}>
              <div className="aspect-square w-full max-w-md mx-auto rounded-xl overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/lovable-uploads/a7654f20-060a-479e-8a23-1a2201664694.png" 
                  alt="Stav Rakia" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              
              <div className="flex justify-center mt-6">
                <Button asChild size="sm" className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:translate-y-[-2px] w-auto">
                  <a href="https://www.linkedin.com/in/stav-rakia/" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">LinkedIn</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <motion.div className="mb-10 text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-2xl md:text-3xl font-medium mb-3">Experience</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              My professional journey in design and technology.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/30">
              {experienceData.map((experience, index) => <motion.div key={index} className="mb-8 relative" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              delay: index * 0.1,
              duration: 0.5
            }}>
                  <motion.div className="absolute -left-10 top-1.5 h-4 w-4 rounded-full bg-primary" initial={{
                opacity: 0,
                scale: 0
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true,
                margin: "-100px"
              }} transition={{
                delay: index * 0.1 + 0.2,
                duration: 0.4,
                type: "spring",
                stiffness: 200
              }} />
                  <div className="p-6 rounded-xl bg-background border border-primary/20">
                    <h3 className="text-lg font-medium mb-1">{experience.role}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-muted-foreground">{experience.company}</p>
                      <p className="text-sm text-muted-foreground">{experience.period}</p>
                    </div>
                    <p className="text-base">{experience.description}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </div>
      </section>
      
      <Skills />
      
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <motion.div className="mb-10 text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-2xl md:text-3xl font-medium mb-3">Education</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Academic background and continuing education.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div className="p-6 rounded-xl bg-background border border-border" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.5
          }}>
              <div className="mb-4 p-4 rounded-lg bg-primary/20 w-full inline-block">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-lg font-bold">HIT</span>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-1">B.Sc in Instructional Technologies</h3>
              <div className="flex justify-between items-center mb-3">
                <p className="text-muted-foreground">Holon Institute of Technology</p>
                <p className="text-sm text-muted-foreground">2022 - 2025</p>
              </div>
              <p className="flex-grow overflow-y-auto text-sm">Dean's List Honoree – 2023, President's List Honoree – 2024 – GPA: 97. A cutting-edge program preparing professionals to lead in digital learning, instructional technology, and UX/UI design.</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-medium">Relevant Coursework:</p>
                <p className="text-xs text-muted-foreground">UX/UI Design & Analysis, Knowledge Organization & Representation, Interactive Learning Environments, Visual Communication & Graphic Design, Mobile Interface Design & Interactive Media</p>
              </div>
            </motion.div>
            
            <motion.div className="p-6 rounded-xl bg-background border border-border" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            delay: 0.1,
            duration: 0.5
          }}>
              <div className="mb-4 p-4 rounded-lg bg-purple-500/20 w-full inline-block">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-purple-500 text-white">
                  <span className="text-lg font-bold">WIT</span>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-1">Product Management Certification</h3>
              <div className="flex justify-between items-center mb-3">
                <p className="text-muted-foreground">Women in Tech Program – HIT</p>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
              <p className="flex-grow overflow-y-auto text-sm">
                A six-month intensive program designed for women entering product management, managed by HIT's FUTURE Innovation Center, in collaboration with the Israel Innovation Authority.
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-medium">Key Modules:</p>
                <p className="text-xs text-muted-foreground">Market Needs & Product Strategy, UX/UI in Product Development, Agile & Scrum, Data-Driven Decision-Making, Go-to-Market Strategy & Product Launch</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <motion.div className="mb-10 text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-2xl md:text-3xl font-medium mb-3">Beyond Design</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              The things that inspire me outside of work.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div className="p-6 rounded-xl bg-background border border-border" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.5
          }}>
              <h3 className="text-lg font-medium mb-6 text-center">My Kind of Music</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {artistsData.map((artist, i) => <motion.div key={i} className="flex flex-col items-center p-3 rounded-lg bg-secondary/60 text-foreground border border-secondary/60" initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: i * 0.05,
                duration: 0.3
              }}>
                    <div className="w-20 h-20 mb-3 rounded-full overflow-hidden">
                      <AspectRatio ratio={1 / 1} className="bg-muted">
                        <img 
                          src={artist.image} 
                          alt={artist.name} 
                          className={`w-full h-full rounded-full ${artist.className || ''}`} 
                          loading="lazy" 
                        />
                      </AspectRatio>
                    </div>
                    <span className="text-sm font-medium">{artist.name}</span>
                  </motion.div>)}
              </div>
            </motion.div>
            
            <motion.div className="p-6 rounded-xl bg-background border border-border" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }}>
              <h3 className="text-lg font-medium mb-6 text-center">
                Hobbies
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {hobbiesData.map((hobby, i) => <motion.div key={i} className="flex flex-col items-center p-3 rounded-lg bg-secondary/60 text-foreground border border-secondary/60" initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: i * 0.05,
                duration: 0.3
              }}>
                    <div className="w-20 h-20 mb-3 rounded-full overflow-hidden">
                      <AspectRatio ratio={1 / 1} className="bg-muted">
                        <img 
                          src={hobby.image} 
                          alt={hobby.name}
                          className={`w-full h-full rounded-full ${hobby.className || ''}`}
                          loading="lazy"
                        />
                      </AspectRatio>
                    </div>
                    <span className="text-sm font-medium text-center">{hobby.name}</span>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Contact />
    </Layout>;
};
export default About;
