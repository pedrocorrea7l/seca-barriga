import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CTAButtonProps {
  primaryText: string;
  secondaryText: string;
  className?: string;
}

export function CTAButton({ primaryText, secondaryText, className = '' }: CTAButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full bg-[#a921ff] hover:bg-[#9214e6] text-white rounded-lg py-4 px-6 md:px-8 border border-white/20 shadow-xl flex flex-col items-center justify-center gap-1 transition-colors relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-white/20 translate-y-[-100%] hover:translate-y-[100%] transition-transform duration-1000 ease-in-out opacity-20 hidden md:block"></div>
      
      <div className="flex items-center gap-2 text-xl md:text-2xl font-bold uppercase text-center leading-tight">
        <span>{primaryText}</span>
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
      </div>
      <div className="text-xs md:text-sm font-medium uppercase opacity-90 tracking-wide text-center">
        {secondaryText}
      </div>
    </motion.button>
  );
}
