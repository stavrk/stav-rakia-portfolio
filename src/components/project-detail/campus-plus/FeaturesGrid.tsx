
import { motion } from "framer-motion";
import { Map, Phone, MessageCircle, Settings } from "lucide-react";

export const FeaturesGrid = () => {
  const features = [
    {
      icon: Map,
      title: "🗺️ Interactive Campus Map",
      description: "Clear design with filters by building, service type, and department"
    },
    {
      icon: Phone,
      title: "📞 Contact Directory", 
      description: "Smart filters with names, roles, office hours, and locations"
    },
    {
      icon: MessageCircle,
      title: "🤖 HITbot Assistant",
      description: "Smart, tailored chatbot that adapts to user profiles"
    },
    {
      icon: Settings,
      title: "👋 Onboarding Flow",
      description: "Walkthrough of app features for new users"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <h4 className="font-semibold mb-3">{feature.title}</h4>
          <p className="text-muted-foreground text-sm">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
