
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
// import VlogPage from './pages/VlogPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative flex min-h-screen w-full flex-col bg-background-primary-light dark:bg-background-primary-dark">
        <div className="flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5 sm:px-10 lg:px-20 xl:px-40">
            <div className="flex w-full max-w-[1080px] flex-1 flex-col">
              <Navbar />
              <main className="flex flex-col gap-16 md:gap-24">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  {/* <Route path="/vlog" element={<VlogPage />} /> */}
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;