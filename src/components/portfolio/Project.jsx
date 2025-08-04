import { GitHub } from '@mui/icons-material';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'

const Project = ({ project }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [300, -300]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <div ref={ref} className=' px-3 py-5 snap-center relative h-screen w-full flex items-center flex-wrap gap-10 justify-center'>
            <div className="relative w-[700px] p-5 aspect-video overflow-hidden rounded-xl shadow-lg">
                <a href={project.link}>
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 700px"
                        priority
                    />
                </a>
            </div>

            <motion.div style={{ y, opacity }} className=' bg-[#1C1C1E] w-[500px] flex p-5 sm:p-14 gap-5 justify-center  flex-col aspect-video text-white '>
                <h2 className='text-2xl font-bold'>{project.name}</h2>
                <hr className=' border-blue-500' />
                <p>{project.description}</p>
                <ul>
                    {project.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
                <div>
                    <a href={project.github} className='text-blue-500'><GitHub /></a>
                </div>
            </motion.div>
        </div>
    )
}

export default Project