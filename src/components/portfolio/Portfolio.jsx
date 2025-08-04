"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text = "Portfolio";

const Portfolio = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center end", "end center"],
    });

    return (
        <div ref={ref} className="w-full flex items-center justify-center h-[50vh] bg-[#121212] text-white">
            <h1 className="text-[70px] md:text-[80px] lg:text-[130px] xl:text-[200px] w-full h-[50vh]  grid place-items-center font-extrabold text-white mix-blend-screen">
                <div className="flex">
                    {text.split("").map((char, index) => {
                        return (
                            <CharAnimate char={char} scrollYProgress={scrollYProgress} index={index} key={index} />
                        );
                    })}
                </div>
            </h1>
        </div>
    );
};

export default Portfolio;


const CharAnimate = ({ char, index,scrollYProgress }) => {
    const start = 0 + index * 0.03;
    const end = 0.5 + index * 0.03;

    const y = useTransform(
        scrollYProgress,
        [start, end],
        [500, 0]
    );

    return (
        <motion.span
            style={{ y }}
            key={index}
            className="inline-block"
        >
            {char}
        </motion.span>
    );
}
