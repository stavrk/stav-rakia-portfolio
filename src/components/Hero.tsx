import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
const Hero = () => {
  return <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-8 md:pt-12 relative">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.2,
      duration: 0.6
    }} className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight">
          <motion.span className="hero-text-gradient" initial={{
          backgroundPosition: "0%"
        }} animate={{
          backgroundPosition: ["0%", "100%", "0%"]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}>Stav Rakia</motion.span>
          <br /> UX UI Designer
        </h1>
        
        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.3,
        duration: 0.6
      }} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-balance leading-relaxed mx-0 px-0">I create intuitive, user-friendly interfaces - so people curse less and smile more</motion.p>
        
        <motion.div className="flex flex-row gap-4 justify-center items-center mx-auto" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4,
        duration: 0.6
      }}>
          <a href="/projects" className="inline-block px-5 py-2.5 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:translate-y-[-2px] hover:shadow-lg text-sm sm:text-base sm:px-6 sm:py-3">
            View Projects
          </a>
          <a href="/about" className="inline-block px-5 py-2.5 rounded-full bg-white text-primary font-medium transition-all border-2 border-primary hover:bg-primary/5 hover:translate-y-[-2px] text-sm sm:text-base sm:px-6 sm:py-3">
            About Me
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div className="absolute bottom-10 will-change-transform" initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.8,
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1
    }}>
        <a href="#featured-projects" className="inline-flex flex-col items-center text-muted-foreground hover:text-muted-foreground/80 transition-colors">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </motion.div>
    </section>;
};
export default Hero;