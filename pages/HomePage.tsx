import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../types';
import { Icons } from '../constants';

const HomePage: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./data/profile.json').then(res => res.json())
      .then((profileData) => {
        setProfile(profileData);
        setLoading(false);
      }).catch(err => {
          console.error("Failed to load home page data:", err);
          setLoading(false);
      });
  }, []);

  if (loading || !profile) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  const techStack = [
    { name: "PHP", link: "https://www.php.net/docs.php" },
    { name: "Laravel", link: "https://laravel.com/docs" },
    { name: "Lumen", link: "https://lumen.laravel.com/docs" },
    { name: "MySQL", link: "https://dev.mysql.com/doc/" },
    { name: "PostgreSQL", link: "https://www.postgresql.org/docs/" },
    { name: "Docker", link: "https://docs.docker.com/" },
    { name: "Git", link: "https://git-scm.com/doc" },
    { name: "TypeScript", link: "https://www.typescriptlang.org/docs/" },
    { name: "NodeJs", link: "https://nodejs.org/en/docs/" },
    { name: "NestJs", link: "https://docs.nestjs.com/" }
  ];

  const services = [
    { icon: "code" as keyof typeof Icons, title: "Website Development" },
    { icon: "cloud" as keyof typeof Icons, title: "Website Hosting" },
    { icon: "settings" as keyof typeof Icons, title: "Maintenance" }
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center gap-6 pt-20 md:pt-32 pb-8 md:pb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary-light dark:text-text-primary-dark tracking-tight">
          Hello, I'm <span className="text-primary">{profile.name}</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mt-2">
          A {profile.title}
        </h2>
        <p className="max-w-3xl text-lg text-text-secondary-light dark:text-text-secondary-dark mt-4 leading-relaxed">
          {profile.bio}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link 
            to="/contact" 
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 text-base"
          >
            Contact Me
          </Link>
          <a 
            href="assets/pdf/Aathilingam-SoftwareDev-10-25.pdf"
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-background-secondary-light dark:bg-background-secondary-dark border border-border-color-light dark:border-border-color-dark text-text-primary-light dark:text-text-primary-dark font-bold py-3 px-8 rounded-lg hover:bg-border-color-light dark:hover:bg-border-color-dark transition-colors text-base"
          >
            View Resume
          </a>
        </div>
        <div className="flex items-center justify-center gap-6 mt-8">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
            <Icons.github className="h-7 w-7" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
            <Icons.linkedin className="h-7 w-7" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${profile.email}`} className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
            <Icons.mail className="h-7 w-7" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="pt-0 pb-0 md:pb-0 border-y border-border-color-light dark:border-border-color-dark">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-text-secondary-light dark:text-text-secondary-dark text-lg py-8">
            {techStack.map(tech => (
              <a 
                key={tech.name} 
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-all duration-300 ease-in-out hover:-translate-y-1 inline-block"
              >
                {tech.name}
              </a>
            ))}
        </div>
      </section>

      {/* About & Services Section */}
      <section className="grid md:grid-cols-2 gap-16 pt-8 pb-12 md:pb-20">
        <div className="relative">
          {/* Static Background Line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-border-color-light dark:bg-border-color-dark opacity-30"></div>
          
          {/* Animated Beam Segments */}
          {/* Beam from Item 1 to Item 2 */}
          <div className="absolute left-[15px] top-4 h-[calc(50%-16px)] w-[2px] overflow-hidden">
            <div 
              className="absolute w-full h-[50%] bg-gradient-to-b from-transparent via-primary to-transparent animate-beam-flow" 
              style={{ animationDelay: '0.5s', animationDuration: '1.5s', animationIterationCount: 'infinite' }}
            ></div>
          </div>
          {/* Beam from Item 2 to Item 3 */}
          <div className="absolute left-[15px] top-1/2 h-[calc(50%-16px)] w-[2px] overflow-hidden">
             <div 
              className="absolute w-full h-[50%] bg-gradient-to-b from-transparent via-primary to-transparent animate-beam-flow"
              style={{ animationDelay: '2.5s', animationDuration: '1.5s', animationIterationCount: 'infinite' }}
            ></div>
          </div>

          <div className="flex flex-col gap-12 h-full justify-between">
            {services.map((service, index) => {
              const Icon = Icons[service.icon];
              // Delays: Icon 1 @ 0s, Icon 2 @ 2s, Icon 3 @ 4s
              const delay = `${index * 2}s`;
              return (
                <div key={service.title} className="flex items-center gap-6">
                  <div 
                    className="z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-background-secondary-light dark:bg-background-secondary-dark ring-4 ring-background-primary-light dark:ring-background-primary-dark transition-colors duration-300 animate-icon-shine"
                    style={{ animationDelay: delay }}
                  >
                    <Icon className="h-5 w-5 text-current" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6 text-left">
            <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">About me</h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                {profile.bio}
            </p>
            <div className="grid grid-cols-3 gap-4 text-center mt-4">
                <div>
                    <p className="text-4xl font-bold text-primary">4+</p>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Years of Experience</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-primary">20+</p>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Technologies Mastered</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-primary">3</p>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Awards Won</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;