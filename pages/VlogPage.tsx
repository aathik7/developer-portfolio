
import React, { useState, useEffect } from 'react';
import { Vlog } from '../types';
import VlogCard from '../components/VlogCard';

const VlogPage: React.FC = () => {
  const [vlogs, setVlogs] = useState<Vlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./data/vlogs.json')
      .then(res => res.json())
      .then(data => {
        setVlogs(data);
        setLoading(false);
      })
      .catch(err => console.error("Failed to load vlogs:", err));
  }, []);
  
  const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <h2 className="text-3xl font-bold text-center mb-4 text-text-primary-light dark:text-text-primary-dark">{children}</h2>
  );

  return (
    <div className="py-16 md:py-24">
      <SectionTitle>Vlogs & Tech Talks</SectionTitle>
      <p className="text-center text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mb-12 px-4">
        Exploring new technologies, sharing insights, and documenting my journey in the world of software development.
      </p>

      {loading ? (
        <div className="text-center">Loading vlogs...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {vlogs.map(vlog => (
            <VlogCard key={vlog.id} vlog={vlog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VlogPage;