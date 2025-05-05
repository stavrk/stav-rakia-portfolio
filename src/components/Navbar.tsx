
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const NavLink = ({ 
  href, 
  children, 
  isActive 
}: { 
  href: string; 
  children: React.ReactNode; 
  isActive: boolean;
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  // Determine if we're on a project detail page
  const isProjectDetailPage = location.pathname.startsWith('/projects/');
  
  // Modified active path logic to handle project detail pages
  const getActivePath = () => {
    if (isProjectDetailPage) {
      return '/projects';
    }
    return location.pathname;
  };
  
  const activePath = getActivePath();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Store the position of the active link for the indicator animation
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' }
  ];
  
  // Find the active item index for animation
  const activeIndex = navItems.findIndex(item => item.path === activePath);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 md:py-4 transition-all duration-200",
        scrolled ? "backdrop-blur-lg bg-background/80 border-b border-border/40 shadow-sm" : ""
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-medium px-2 py-1 rounded-md hover:bg-secondary/60 transition-colors">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Stav Rakia
          </motion.span>
        </Link>

        <nav className="flex items-center space-x-1 md:space-x-2 relative">
          {navItems.map((item, index) => (
            <NavLink 
              key={item.path}
              href={item.path} 
              isActive={item.path === activePath}
            >
              {item.label}
            </NavLink>
          ))}
          
          {/* Animated underline indicator */}
          <motion.div
            className="absolute bottom-0 h-0.5 bg-primary rounded-full"
            initial={false}
            animate={{
              left: `calc(${activeIndex * 100}% + ${activeIndex * 0.25}rem + 0.75rem)`,
              right: `calc(${(navItems.length - 1 - activeIndex) * 100}% + ${(navItems.length - 1 - activeIndex) * 0.25}rem + 0.75rem)`
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
