
import React, { useState, useMemo, useEffect } from 'react';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./data/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => console.error("Failed to load projects:", err));
  }, []);
  
  const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <h2 className="text-3xl font-bold text-center mb-4 text-text-primary-light dark:text-text-primary-dark">{children}</h2>
  );

  const categories = useMemo(() => {
    if (loading) return ['All'];
    return ['All', ...new Set(projects.map(p => p.category))]
  }, [projects, loading]);
  
  const filteredProjects = useMemo(() => {
    if (loading) return [];
    if (filter === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === filter);
  }, [filter, projects, loading]);

  return (
    <div className="py-16 md:py-24 animate-fade-in-up">
      <SectionTitle>My Work</SectionTitle>
      <p className="text-center text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-12 px-4">
        A selection of my work. Filter by category to see more.
      </p>

      {/* Filter Tabs */}
      <div className="flex justify-center flex-wrap gap-2 mb-12 px-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${
              filter === category
                ? 'bg-primary text-white'
                : 'bg-background-secondary-light dark:bg-background-secondary-dark text-text-primary-light dark:text-text-primary-dark hover:bg-border-color-light dark:hover:bg-border-color-dark'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="text-center">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;