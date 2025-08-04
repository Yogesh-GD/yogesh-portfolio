import { useState } from "react"
import ToggleButton from "./ToggleButton"
import Links from "./Links"
import { motion } from "framer-motion";



const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div className=" fixed flex flex-col items-center justify-center z-50 text-black"
        variants={variants}
        animate={toggle ? "open" : "close"}
        initial="close"
    >
      <motion.div className="fixed top-0 left-0 w-[400px]  h-screen bg-white">
        <Links setToggle={setToggle} />
      </motion.div>
      <ToggleButton setToggle={setToggle} toggle={toggle} />
    </motion.div>
  );
};


export default Sidebar