"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const skills = [
    {
        title: "Frontend",
        description: "React, Next.js, Tailwind, Bootstrap, Redux Toolkit, HTML/CSS",
    },
    {
        title: "Backend",
        description: " JavaScript, Node.js, Express, MongoDB, SQL, REST APIs",
    },
    {
        title: "Other",
        description: "Python, Numpy, Pandas, Matplotlib, PostgreSQL, Excel",
    },
    {
        title: "Tools",
        description: "Git, GitHub, VSCode, Postman",
    },
];



const RotatingCard = ({ index, total, progress, skill }) => {
    const baseAngle = Math.PI / 2;
    const radius = 300;

    const start = 0.1 + index * 0.1;
    const middle = start + 0.08;
    const end = start + 0.3;

    const angle = useTransform(progress, [start, middle, end], [Math.PI, baseAngle, 0]);

    const x = useTransform(angle, (a) => radius * Math.cos(a));
    const y = useTransform(angle, (a) => -radius * Math.sin(a));

    const opacity = useTransform(progress, [start, middle, end], [0, 1, 0]);
    const scale = useTransform(progress, [start, middle, end], [0.7, 1, 0.7]);

    return (
        <motion.div
            style={{ x, y, opacity, scale }}
            className="absolute w-10/12 sm:w-[250px] md:w-[400px] aspect-square bg-[#131313] text-white rounded-xl shadow-md p-4 text-center"
        >
            <h4 className="font-semibold text-4xl ">{skill.title}</h4>
            <div className=" flex flex-wrap justify-center  gap-5">
                {
                    skill.description.split(", ").map((item, i) => (
                        <span key={i} className={` aspect-video w-2/5  text-xl grid place-items-center mt-2 bg-[#1d1d20] px-3 py-1 rounded-lg`}>
                            {item}
                        </span>
                    ))
                }
            </div>
        </motion.div>

    );
};

const SkillsSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8,1], [1, 0.1, 0.1,0])

    return (
        <section
            ref={ref}
            className="relative scroll-smooth min-h-[500vh] bg-black"
        >
            <div className="sticky top-0 left-0 w-full flex flex-col items-center">
                <motion.h2 style={{opacity}} className="text-[70px] md:text-[80px] lg:text-[130px] bg-black xl:text-[200px] w-full h-screen  grid place-items-center font-extrabold text-white mix-blend-screen">My Skills</motion.h2>
                <div className="absolute overflow-hidden  bg-transparent w-full h-full flex justify-center items-end">

                    {skills.map((skill, index) => (
                        <RotatingCard
                            key={index}
                            index={index}
                            total={skills.length}
                            progress={scrollYProgress}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
