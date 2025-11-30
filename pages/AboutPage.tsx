
import React, { useState, useEffect } from 'react';
import { Profile, Experience, Education, Skill, Achievement } from '../types';
import TimelineItem from '../components/TimelineItem';
import SkillBadge from '../components/SkillBadge';
import AchievementCard from '../components/AchievementCard';
import { Icons } from '../constants';
import { useTheme } from '@/hooks/useTheme';

interface ExperienceData {
  work: Experience[];
  education: Education[];
}

const AboutPage: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [experienceData, setExperienceData] = useState<ExperienceData | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    Promise.all([
      fetch('./data/profile.json').then(res => res.json()),
      fetch('./data/experience.json').then(res => res.json()),
      fetch('./data/skills.json').then(res => res.json()),
      fetch('./data/achievements.json').then(res => res.json()),
    ]).then(([profileData, experienceJson, skillsData, achievementsData]) => {
      setProfile(profileData);
      setExperienceData(experienceJson);
      setSkills(skillsData);
      setAchievements(achievementsData);
      setLoading(false);
    }).catch(err => console.error("Failed to load about page data:", err));
  }, []);

  if (loading || !profile || !experienceData) {
     return (
      <div className="flex justify-center items-center h-64">
        <p>Loading...</p>
      </div>
    );
  }
  
  const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <h2 className="text-3xl font-bold text-center mb-12 text-text-primary-light dark:text-text-primary-dark">{children}</h2>
  );

  const { work, education } = experienceData;
  const skillCategories = [...new Set(skills.map(s => s.category))];

  return (
    <div className="space-y-20 py-16 md:py-24">
      {/* Bio Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 px-4 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
        <div className="md:w-1/3 text-center md:text-left">
          <img 
            src={theme === 'light' ? "/assets/images/logo_image_light.png" : "/assets/images/logo_image_dark.png"}
            alt={profile.name} 
            className="rounded-full w-35 h-80 md:w-60 md:h-80 mx-auto md:mx-0 shadow-lg border-4 border-primary/50 object-cover"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-text-primary-light dark:text-text-primary-dark">About Me</h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
            {profile.bio}
          </p>
          <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
            <a href="assets/pdf/Aathilingam-SoftwareDev-10-25.pdf" download="Aathi_Resume.pdf" rel="noopener noreferrer" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
              Download Resume
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background-secondary-light dark:bg-background-secondary-dark hover:bg-border-color-light dark:hover:bg-border-color-dark transition-colors text-text-primary-light dark:text-text-primary-dark">
              <Icons.github className="w-6 h-6"/>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background-secondary-light dark:bg-background-secondary-dark hover:bg-border-color-light dark:hover:bg-border-color-dark transition-colors text-text-primary-light dark:text-text-primary-dark">
              <Icons.linkedin className="w-6 h-6"/>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <SectionTitle>Experience</SectionTitle>
        <div className="px-4">
          <ol className="relative border-l border-border-color-light dark:border-border-color-dark max-w-3xl mx-auto">
            {work.map((job, index) => (
              <TimelineItem
                key={index}
                title={job.role}
                subtitle={job.company}
                period={job.period}
                details={job.description}
                iconName={job.icon as keyof typeof Icons}
              />
            ))}
          </ol>
        </div>
      </section>

      {/* Education Section */}
      <section className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <SectionTitle>Education</SectionTitle>
        <div className="px-4">
          <ol className="relative border-l border-border-color-light dark:border-border-color-dark max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                title={edu.degree}
                subtitle={edu.institution}
                period={edu.period}
                iconName={edu.icon as keyof typeof Icons}
              />
            ))}
          </ol>
        </div>
      </section>

      {/* Skills Section */}
      <section className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <div 
                        key={category}
                        className="bg-background-secondary-light/50 dark:bg-background-secondary-dark/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-border-color-light dark:border-border-color-dark hover:shadow-md hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col items-start h-full"
                        style={{ animationDelay: `${250 + (index * 100)}ms` }}
                    >
                        <h3 className="text-lg font-bold mb-4 text-center text-text-primary-light dark:text-text-primary-dark border-l-4 border-primary pl-3">
                            {category}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-2.5">
                            {skills.filter(s => s.category === category).map(skill => (
                                <div key={skill.name} className="transform hover:scale-105 transition-transform duration-200">
                                  <SkillBadge>{skill.name}</SkillBadge>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <SectionTitle>Achievements & Awards</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {achievements.map((ach, index) => (
            <AchievementCard key={index} achievement={ach} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;