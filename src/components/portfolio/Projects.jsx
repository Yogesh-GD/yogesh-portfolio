import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Project from "./Project";
import Portfolio from "./Portfolio";

const projects = [
  {
    name: "Portfolio Website",
    image: "https://res.cloudinary.com/diwgq9ndi/image/upload/v1754331357/Screenshot_2025-08-04_at_23-44-42_Portfolio_rpzjvb.png",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    description:
      "A personal portfolio website to showcase my projects and skills.",
    github: "https://github.com/Yogesh-GD/my-portfolio",
    link:"https://my-portfolio-git-main-yogesh-gds-projects.vercel.app/"
  },
  {
    name: "Book Horizon",
    image: "https://res.cloudinary.com/diwgq9ndi/image/upload/v1754221723/Screenshot_2025-07-06_at_12-22-19_Vite_React_j8iiup.png",
    tools: ["React", "Node.js", "Express", "MongoDB", "PDF.js"],
    description:
      "Upload, view, and read books with a custom PDF reader. Includes user authentication, file uploads, and search functionality.",
    github: "https://github.com/Yogesh-GD/book-horizon", 
  },
   {
    name: "Jaipur Car Rental Platform",
    image: "https://res.cloudinary.com/diwgq9ndi/image/upload/v1751784595/Screenshot_2025-06-15_at_11-41-11_Vite_React_bu0emh.png", 
    tools: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "Car listing and booking system with location-specific rental management. Includes user and admin dashboards built with the full MERN stack.",
    github: "https://github.com/Yogesh-GD/rental-mart",
  },
  {
    name: "Bladz Chat App",
    image: "https://res.cloudinary.com/diwgq9ndi/image/upload/v1754221862/Screenshot_2025-06-01_222550_nexjar.png",
    tools: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "WebRTC"],
    description:
      "Developed a real-time chat application with messaging and WebRTC-based calling using Socket.io and MongoDB. Includes secure login, user management, and call history.",
    github: "https://github.com/Yogesh-GD/bladz", 
  },
  {
    name: "Anime Info Web App",
    image: "https://res.cloudinary.com/diwgq9ndi/image/upload/v1754222481/Screenshot_2025-08-03_at_17-24-26_Anime_App_pfq3as.png",
    tools: ["React", "Tailwind CSS", "Jikan API"],
    description:
      "Browse and search Japanese anime and manga with a sleek UI powered by the Jikan API.",
    github: "https://github.com/Yogesh-GD/anime-web-proj", 
  },
  
 
];


const Projects = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],})

  return (
    <section id="projects" className="  relative w-full   bg-[#121212cd]  ">
        <Portfolio />
        {projects.map((project, index) => (
            <Project key={index} project={project} />
        ))}
    </section>
  )
}

export default Projects