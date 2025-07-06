import { motion } from 'framer-motion'
import React from 'react'


const projectsData = [
    {
        name: "Real-Time Chat App with Calling",
        details: "A MERN stack real-time chat application with messaging and WebRTC-based calling using Socket.io. Features secure login, user management, and call history stored in MongoDB.",
        image: "https://res.cloudinary.com/diwgq9ndi/image/upload/v1751796378/Screenshot_2025-06-01_at_22-22-40_Vite_React_weqxsw.png",
        url:"https://github.com/Yogesh-GD/bladz"
    },
    {
        name: "Anime Info Web App",
        details: "A React frontend application that uses the Jikan Anime API to browse and search Japanese anime and manga. Styled with Tailwind CSS for a sleek, responsive UI.",
        image: "https://res.cloudinary.com/diwgq9ndi/image/upload/v1751795300/Screenshot_2025-07-06_at_10-05-34_Anime_App_tg4c8x.png",
        url:"https://github.com/Yogesh-GD/anime-web-proj"
    },
    {
        name: "Book Sharing Website",
        details: "A MERN-based platform where users can upload, view, and read books with a custom PDF reader. Includes user authentication, file uploads, and search functionality.",
        image: "https://res.cloudinary.com/diwgq9ndi/image/upload/v1751795510/Screenshot_2025-07-06_at_12-20-56_Vite_React_pfnwh7.png",
        url : "https://github.com/Yogesh-GD/book-horizon"
    },
    {
        name: "Jaipur Car Rental Platform",
        details: "A full MERN stack application for car listings and bookings with location-specific rental management. Features dashboards for both users and admins.",
        image: "https://res.cloudinary.com/diwgq9ndi/image/upload/v1751784595/Screenshot_2025-06-15_at_11-41-11_Vite_React_bu0emh.png",
        url : "https://github.com/Yogesh-GD/rental-mart"
    }
]


const Projects = () => {
    return (
        <div className='my-3 px-5  sm:px-20  '>
          <motion.h2 className='text-[#fff] text-4xl'
          
            initial={{ opacity: 0,x:-40 }}
                    whileInView={{ opacity: 1 ,x:0}}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
          >Self Projects <span className=' inline-block h-[1px] w-full bg-[#D29EFD]'></span></motion.h2>

            <div className=' flex flex-wrap  justify-center items-center sm:justify-start gap-10 '>

                {
                    projectsData.map((p, id) => {
                        return (
                            <motion.div key={id} className=' w-[400px]   flex justify-center p-5 '
                              initial={{ opacity: 0,x:-150 }}
                    whileInView={{ opacity: 1 ,x:0,}}
                    whileHover={{width:450,height:450,scale:1.2}}
                    viewport={{ once: true }}
                    transition={{ duration: 1+ (id/10), delay: 0.1*id }}
                            >
                               <a href={p.url}>
                                 <div className='relative w-full aspect-square sm:w-[400px] sm:h-[400px] grid place-items-center rounded-full  p-5 border-[#D29EFD] border-2 '>
                                    <div className=' relative rounded-full z-10  '>
                                        <img className='   rounded-full' src={p.image} alt="" />
                                    </div>
                                    <div className='z-0 absolute w-[150px] h-[150px] bg-[white] rounded-full grid place-items-center top-[0] right-[0]'> <div className=' w-[100px] h-[100px] bg-[#1D242D] rounded-full'></div> </div>
                                    <div className=' z-20 absolute w-[100px] h-[100px] bg-[white] rounded-full grid place-items-center bottom-0 left-[0]'> <div className=' w-[80px] h-[80px] bg-[#1D242D] rounded-full'></div> </div>
                                </div>
                               </a>
                            </motion.div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Projects