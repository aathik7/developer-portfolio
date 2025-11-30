
import React from 'react';
import { Vlog } from '../types';
import { Icons } from '../constants';
import SkillBadge from './SkillBadge';

interface VlogCardProps {
  vlog: Vlog;
}

const VlogCard: React.FC<VlogCardProps> = ({ vlog }) => {
  return (
    <a 
      href={vlog.videoUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group rounded-lg overflow-hidden bg-background-secondary-light dark:bg-background-secondary-dark shadow-md hover:shadow-xl transition-all duration-300 border border-border-color-light dark:border-border-color-dark block hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img src={vlog.thumbnail} alt={vlog.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
          <Icons.play className="w-16 h-16 text-white/70 group-hover:text-white/90 group-hover:scale-110 transition-all duration-300" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-text-secondary-light dark:text-text-secondary-dark mb-2">
            <Icons.calendar className="w-4 h-4 mr-2" />
            <time>{vlog.date}</time>
        </div>
        <h3 className="text-xl font-bold mb-2 text-text-primary-light dark:text-text-primary-dark group-hover:text-primary transition-colors">{vlog.title}</h3>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 text-sm">{vlog.description}</p>
        <div className="flex flex-wrap gap-2">
          {vlog.tags.map(tag => <SkillBadge key={tag}>{tag}</SkillBadge>)}
        </div>
      </div>
    </a>
  );
};

export default VlogCard;