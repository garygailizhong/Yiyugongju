import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

interface ToolCardProps {
  name: string;
  icon: LucideIcon;
  gradient: string;
  description: string;
  index: number;
}

export function ToolCard({ name, icon: Icon, gradient, description, index }: ToolCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      className="
        relative overflow-hidden
        h-40
        rounded-3xl
        backdrop-blur-xl
        bg-gradient-to-br from-white/10 to-white/5
        border border-white/20
        shadow-2xl shadow-black/20
        transition-all duration-300
        group
      "
    >
      {/* Gradient Overlay */}
      <div className={`
        absolute inset-0 bg-gradient-to-br ${gradient}
        opacity-0 group-hover:opacity-10
        transition-opacity duration-300
      `} />

      {/* Shine Effect */}
      <div className={`
        absolute inset-0
        bg-gradient-to-br from-white/40 via-transparent to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        ${isPressed ? 'opacity-50' : ''}
      `} />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundSize: 'cover'
        }}
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center gap-3 p-5">
        {/* Icon Container */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, -5, 5, 0] : 0
          }}
          transition={{ 
            duration: 0.3,
            rotate: { duration: 0.5 }
          }}
          className={`
            relative
            w-16 h-16
            rounded-2xl
            bg-gradient-to-br ${gradient}
            flex items-center justify-center
            shadow-lg
          `}
        >
          {/* Glow Effect */}
          <div className={`
            absolute inset-0 rounded-2xl
            bg-gradient-to-br ${gradient}
            blur-xl opacity-50
            group-hover:opacity-80
            transition-opacity duration-300
          `} />
          
          {/* Icon */}
          <Icon 
            className="w-8 h-8 text-white relative z-10 drop-shadow-lg" 
            strokeWidth={2.5} 
          />

          {/* Sparkle Effect */}
          {isHovered && (
            <>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full"
              />
            </>
          )}
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-base text-white tracking-tight mb-1 drop-shadow-lg">
            {name}
          </h3>
          <p className="text-xs text-white/70 drop-shadow">
            {description}
          </p>
        </div>
      </div>

      {/* Border Glow */}
      <div className={`
        absolute inset-0 rounded-3xl
        bg-gradient-to-br ${gradient}
        opacity-0 group-hover:opacity-30
        transition-opacity duration-300
        blur-sm
        -z-10
      `} />
    </motion.button>
  );
}