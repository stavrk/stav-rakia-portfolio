
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollToExploreProps {
  className?: string;
}

const ScrollToExplore = ({ className = "" }: ScrollToExploreProps) => {
  const handleClick = () => {
    // Scroll down smoothly
    window.scrollBy({
      top: window.innerHeight * 0.5,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className={`flex flex-col items-center justify-center py-8 cursor-pointer ${className}`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <motion.p 
        className="text-muted-foreground mb-2 text-sm"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Scroll to explore
      </motion.p>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="h-5 w-5 text-primary" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollToExplore;
