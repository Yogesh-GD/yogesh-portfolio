import { motion } from "framer-motion"



const variants = {
  open:{
    transition:{
      staggerChildren : 0.1,

    }
  },
  close:{
    transition:{
      staggerChildren:0.05, 
      staggerDirection : -1,
    }
  }
}


const variantsitem = {
  open:{
    y:0,
    opacity:1,
   
  },
  close:{
    y:50,
    opacity:0,
   
  }
}
const Links = ({setToggle}) => {
    const links = ["Home","about","projects","contact"]
  return (
    <motion.div className="  w-full h-full flex flex-col items-center justify-center gap-5" variants={variants} >
        {
            links.map((link,id) => {
                return(
                <motion.a onClick={() => setToggle(false)} className=" text-4xl" href={`#${link}`} key={id} whileHover={{ scale: 1.2 }} variants={variantsitem} >{link.toUpperCase()}</motion.a>
                )
            })
        }
    </motion.div>
  )
}

export default Links