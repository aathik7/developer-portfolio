
import React from 'react';
import { Project } from '../types';
import SkillBadge from './SkillBadge';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Using a generic link for case study, can be updated later.
  const caseStudyUrl = `/projects`;

  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-secondary-light dark:bg-background-secondary-dark border border-border-color-light dark:border-border-color-dark shadow-sm min-w-72">
      <div 
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl" 
        style={{ backgroundImage: `url("${project.image}")` }}
        aria-label={project.title}
      ></div>
      <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
        <div>
          <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">{project.title}</p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => <SkillBadge key={tag}>{tag}</SkillBadge>)}
        </div>
        <Link 
          to={caseStudyUrl}
          className="flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-background-primary-light dark:bg-background-primary-dark border border-border-color-light dark:border-border-color-dark text-text-primary-light dark:text-text-primary-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-border-color-light dark:hover:bg-border-color-dark transition-colors"
        >
          <span className="truncate">View Case Study</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;