
import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';
import { Profile } from '../types';

const Footer: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetch('./data/profile.json')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error("Failed to load profile data:", err));
  }, []);

  if (!profile) {
    return (
      <footer className="border-t border-solid border-border-color-light dark:border-border-color-dark mt-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-10 py-6">
          <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Loading...</div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-solid border-border-color-light dark:border-border-color-dark mt-auto bg-background-secondary-light dark:bg-background-secondary-dark">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-10 py-6 max-w-[1080px] mx-auto">
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
            <Icons.github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
            <Icons.linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${profile.email}`} className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
            <Icons.mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;