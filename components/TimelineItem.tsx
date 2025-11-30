
import React from 'react';
import { Icons } from '../constants';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  details?: string[];
  iconName: keyof typeof Icons;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, period, details, iconName }) => {
  const Icon = Icons[iconName] || Icons.briefcase;

  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-background-secondary-light dark:bg-background-secondary-dark rounded-full -left-4 ring-4 ring-background-primary-light dark:ring-background-primary-dark">
        <Icon className="w-5 h-5 text-primary" />
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
        {title} <span className="text-primary font-bold mx-2">@</span> {subtitle}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-text-secondary-light dark:text-text-secondary-dark">
        {period}
      </time>
      {details && (
        <ul className="list-disc pl-5 mt-2 space-y-1 text-text-secondary-light dark:text-text-secondary-dark">
          {details.map((detail, index) => <li key={index}>{detail}</li>)}
        </ul>
      )}
    </li>
  );
};

export default TimelineItem;