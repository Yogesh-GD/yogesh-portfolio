"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Terminal,
  Code,
  Storage,
  Web,
  GitHub,
  Computer,
  IntegrationInstructions,
  Dataset,
  Cloud,
} from '@mui/icons-material';



const AboutSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0]);
 
  return (
    <div id="about" ref={ref} className="relative min-h-[500vh] bg-black">
      <div className="sticky top-0 overflow-hidden w-full h-screen flex items-center justify-center pointer-events-none">
        <motion.h1
          style={{ scale, opacity }}
          className=" text-[70px] md:text-[80px] lg:text-[130px]  xl:text-[200px] w-full h-full  grid place-items-center font-extrabold text-black mix-blend-screen bg-white z-10"
        >
          About Me
        </motion.h1>
      </div>

      <AboutInfo scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default AboutSection;






const Card = ({ title, subtitle, date, points }) => (
  <div className=" w-full  text-white space-y-3">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <span className="bg-neutral-800 text-sm px-3 py-1 rounded-full">{date}</span>
    </div>
    {subtitle && <p className="text-gray-400">{subtitle}</p>}
    {points && (
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    )}
  </div>
);

const IconGroup = ({ title, icons }) => (
  <div className="  w-full  text-white space-y-2">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <div className="flex flex-wrap gap-4 text-3xl">
      {icons.map((Icon, idx) => (
        <Icon key={idx} fontSize="inherit" />
      ))}
    </div>
  </div>
);


const AboutInfo = ({ scrollYProgress }) => {
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [0, 0, 1, 1]);
  return (
    <motion.section style={{ opacity: opacity }} className="sticky top-0 overflow-hidden w-full  flex items-center justify-center pointer-events-none">
      <div className="max-w-6xl px-8 pt-20  w-full space-y-12 pointer-events-auto">
        <div className="flex flex-wrap gap-4 justify-between">
          <HighlightBlock scrollYProgress={scrollYProgress} range={0.37}>
            <Card
              title="Freelancer"
              subtitle="Full Stack Web Developer"
              date="2022 – Present"
              points={[
                "Built responsive MERN stack applications.",
                "Implemented RESTful APIs and user authentication.",
                "Collaborated on remote freelance projects.",
              ]}
            />
          </HighlightBlock>

          <HighlightBlock scrollYProgress={scrollYProgress} range={0.44}>
            <Card
              title="Let's Collaborate"
              subtitle="Open to freelance, internships & team projects"
              date="Available Now"
              points={[
                "Passionate about building real-world products with clean code.",
                "Looking to join innovative teams or collaborate on open projects.",
                "Reach out for web development, UI/UX, or full-stack work!",
              ]}
            />
          </HighlightBlock>
        </div>

        <div className="flex flex-wrap gap-4 justify-between">
          <HighlightBlock scrollYProgress={scrollYProgress} range={0.51}>
            <IconGroup
              title="Core Technologies"
              icons={[Code, Terminal, Web, IntegrationInstructions, Dataset]}
            />
          </HighlightBlock>

          <HighlightBlock scrollYProgress={scrollYProgress} range={0.58}>
            <IconGroup
              title="Developer Tools"
              icons={[GitHub, Storage, Cloud, Computer]}
            />
          </HighlightBlock>
        </div>

        <div className="flex flex-wrap gap-4 justify-between">
          <HighlightBlock scrollYProgress={scrollYProgress} range={0.65}>
            <Card
              title="Bachelor of Computer Applications"
              subtitle="Shekhawati Group of Institutes, Sikar"
              date="2022–25"
            />
          </HighlightBlock>

          <HighlightBlock scrollYProgress={scrollYProgress} range={0.72}>
            <Card
              title="Senior Secondary (12th) – Science"
              subtitle="Bright Sr. Sec. School, Sikar (87%)"
              date="2021–22"
            />
          </HighlightBlock>

          <HighlightBlock scrollYProgress={scrollYProgress} range={0.79}>
            <Card
              title="Secondary (10th)"
              subtitle="Bright Sr. Sec. School, Sikar (95.17%)"
              date="2019–20"
            />
          </HighlightBlock>
        </div>
      </div>
    </motion.section>
  );
};



const HighlightBlock = ({ scrollYProgress, range, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const withinRange = v >= range && v < range + 0.07;
      setIsActive(withinRange);
    });
    return () => unsubscribe();
  }, [scrollYProgress, range]);

  return (
    <motiondiv
      className={`p-6  rounded-2xl w-full md:w-[48%] transition-all duration-700 ${
        isActive ? 'bg-[#101010]' : 'bg-[#1c1c1e]'
      }${
        isActive ? ' scale-110' : ''
      }`}
    >
      {children}
    </motiondiv>
  );
};