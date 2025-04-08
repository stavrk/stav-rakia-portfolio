
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-8 md:pt-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight">
          <motion.span 
            className="hero-text-gradient"
            initial={{ backgroundPosition: "0%" }}
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              repeatType: "loop", 
              ease: "linear"
            }}
          >Stav Rakia</motion.span>
          <br /> UX UI Designer
        </h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I'm Stav Rakia, a UX UI Designer focused on creating 
          intuitive, functional, and user-centered digital experiences.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a 
            href="/projects" 
            className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
          >
            View Projects
          </a>
          <a 
            href="/about" 
            className="inline-block px-6 py-3 rounded-full bg-primary/20 text-primary font-medium transition-all hover:bg-primary/30 hover:translate-y-[-2px]"
          >
            About Me
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 will-change-transform"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.8, 
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        }}
      >
        <a 
          href="#featured-projects" 
          className="inline-flex flex-col items-center text-primary hover:text-primary/80 transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
