
import React from 'react';
import { Achievement } from '../types';
import { Icons } from '../constants';

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const Icon = Icons[achievement.icon as keyof typeof Icons] || Icons.award;

  return (
    <div className="p-6 bg-background-secondary-light dark:bg-background-secondary-dark rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-border-color-light dark:border-border-color-dark flex items-start space-x-4">
      <div className="flex-shrink-0">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">{achievement.title}</h3>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mt-1">{achievement.description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;