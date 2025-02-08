
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface DocumentationCardProps {
  title: string;
  subtitle: string;
  description: string;
  path: string;
  Icon: LucideIcon;
  label: string;
  index: number;
}

export const DocumentationCard = ({
  title,
  subtitle,
  description,
  path,
  Icon,
  label,
  index
}: DocumentationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Link 
        to={path}
        className="block h-full transform transition-all duration-300 hover:scale-105"
      >
        <Card className="h-full bg-[#F8F8F8] border-none shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-8 h-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[#00313C] text-sm font-medium mb-4">
                  {label}
                </p>
                <h2 className="text-3xl font-bold text-[#00313C] mb-2">
                  {title}
                </h2>
                <p className="text-[#6B7280] text-xl mb-4">
                  {subtitle}
                </p>
              </div>
              <div className="text-[#00313C]">
                <Icon size={40} />
              </div>
            </div>
            <p className="text-[#4B5563] text-base leading-relaxed">
              {description}
            </p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
