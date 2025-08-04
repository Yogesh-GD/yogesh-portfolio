import Sidebar from "./Sidebar"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import { animate, motion } from "framer-motion";

const variants = {
  initial:{
    x:-100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.3,

    }
  }
}

const mouseVariant = {
  start: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  },
  bstart: {
    y: 0,
    opacity: 1
  }
}

const Hero = () => {
  return (
    <div id="Home" className=" h-full w-full overflow-hidden ">
      <Sidebar />
      <motion.div className=" m-auto px-5 max-w-screen-xl" variants={variants} initial="initial" animate="animate">
        <motion.div variants={variants} className=" h-28 flex justify-between items-center  ">
          <h1>
            YOGESH JANGIR
          </h1>
          <div className=" flex gap-5  ">
            <a href="https://linkedin.com/in/yogesh-jangir-root">
              <LinkedInIcon className=" text-4xl cursor-pointer" />
            </a>
            <a href="https://github.com/Yogesh-GD">
              <GitHubIcon className=" text-4xl cursor-pointer" />
            </a>
          </div>
        </motion.div>
        <motion.div variants={variants} className=" flex flex-col-reverse sm:flex-row ">
          <motion.div variants={variants} className=" py-10 text-xl font-semibold flex flex-col gap-10 justify-center ">
            <motion.h1 variants={variants} >
              YOGESH JANGIR
            </motion.h1>
            <motion.h2 className=" text-7xl sm:text-8xl" variants={variants}>
              Web Developer
            </motion.h2>
            <motion.div className=" flex gap-5" variants={variants}>
              <a href="#projects" className=" hover:bg-white hover:text-black duration-700 border-white border px-6 py-3 rounded-lg">Projects</a>
              <a href="https://drive.google.com/file/d/1KpDP1IUIizrxa6rilmb3ScfjKkaFgVT9/view" className=" border-white bg-white text-black hover:text-white hover:bg-black duration-700 border px-6 py-3 rounded-lg">Resume</a>
            </motion.div>

            <motion.div variants={mouseVariant} initial="bstart" animate="start">
                <MouseOutlinedIcon className=" text-4xl" />

            </motion.div>
          </motion.div >
          <div>
            <img src="https://res.cloudinary.com/diwgq9ndi/image/upload/v1754334381/pf2_x47otp.jpg" alt="" />
          </div>
        </motion.div >
      </motion.div>
    </div>
  )
}

export default Hero