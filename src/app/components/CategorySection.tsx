import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { ToolCard } from './ToolCard';

interface Tool {
  id: number;
  name: string;
  icon: LucideIcon;
  gradient: string;
  description: string;
}

interface Category {
  id: number;
  name: string;
  icon: LucideIcon;
  color: string;
  tools: Tool[];
}

interface CategorySectionProps {
  category: Category;
  categoryIndex: number;
}

export function CategorySection({ category, categoryIndex }: CategorySectionProps) {
  const CategoryIcon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: categoryIndex * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4">
        {/* Category Icon */}
        <div className={`
          w-9 h-9 rounded-xl
          bg-gradient-to-br ${category.color}
          flex items-center justify-center
          shadow-lg
        `}>
          <CategoryIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        
        {/* Category Name */}
        <h2 className="text-lg text-white tracking-tight">
          {category.name}
        </h2>

        {/* Decorative Line */}
        <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 gap-4">
        {category.tools.map((tool, toolIndex) => (
          <ToolCard
            key={tool.id}
            name={tool.name}
            icon={tool.icon}
            gradient={tool.gradient}
            description={tool.description}
            index={categoryIndex * 10 + toolIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}
