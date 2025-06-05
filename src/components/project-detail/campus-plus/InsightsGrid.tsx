
import { motion } from "framer-motion";
import { AlertCircle, Target, Lightbulb, MessageCircle } from "lucide-react";
import { Project } from "@/data/types";

interface InsightsGridProps {
  project: Project;
}

export const InsightsGrid = ({ project }: InsightsGridProps) => {
  const insights = [
    {
      icon: AlertCircle,
      text: "New students feel lost, unprepared, and overwhelmed"
    },
    {
      icon: Target,
      text: "Info is scattered across different websites and hard to trust"
    },
    {
      icon: Lightbulb,
      text: "Students want short, clear, practical information in one place"
    },
    {
      icon: MessageCircle,
      text: "Strong need for a non-intrusive, helpful chatbot that doesn't stand alone"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {insights.map((insight, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm border border-border/50 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <insight.icon className="h-6 w-6 mb-3 flex-shrink-0" style={{ color: project.color }} />
          <p className="text-sm text-muted-foreground">{insight.text}</p>
        </motion.div>
      ))}
    </div>
  );
};
