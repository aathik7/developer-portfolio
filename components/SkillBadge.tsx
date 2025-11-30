import React from 'react';

interface SkillBadgeProps {
  children: React.ReactNode;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ children }) => {
  return (
    <span className="inline-flex items-center text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 transition-all duration-300 ease-out hover:bg-primary/20 hover:scale-105 active:scale-95">
      {children}
    </span>
  );
};

export default SkillBadge;