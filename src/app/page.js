"use client";

import { ToastContainer } from "react-toastify";
import Hero from "../components/head/Hero";
import AboutSection from "../components/about/AboutSection";
import SkillsSection  from "../components/skills/SkillsSection"
import Projects from "../components/portfolio/Projects";
import Contact from "../components/contact/Contact";
import { useEffect } from "react";
function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="bg-black text-white">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

      <section>
        <Hero />
      </section>

      <AboutSection />

      <SkillsSection />
      <Projects />
      <Contact />
    </div>
  );
}

export default Page;
