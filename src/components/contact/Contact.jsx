import { motion } from "framer-motion";
import { GitHub, LinkedIn, Phone, Email } from "@mui/icons-material"
import { useState } from "react";
import { toast } from "react-toastify";

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
    }
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields.");
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'name': formData.name, 'email': formData.email, 'message': formData.message }),
            });
            const result = await res.json();
            if (res.ok) {
                toast.success("Successfully sent mail.");
            } else {
                toast.error(result.message || "Failed to send message.");
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong.");
        }
    }

    return (
        <motion.div id="contact" className="min-h-screen relative overflow-hidden bg-[#121212] text-white flex flex-col items-center justify-center px-6 py-12 font-sans">
            <div className=" absolute top-0 left-0 w-full h-1/2 sm:h-full grid place-items-center  opacity-20">
                <h2 className="text-[70px] md:text-[80px] lg:text-[130px] bg-black xl:text-[200px] w-full h-full  grid place-items-center font-extrabold text-[#474747] mix-blend-screen" >
                    Contact ME
                </h2>
            </div>

            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <motion.div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    variants={variants} initial={"initial"} whileInView={"animate"}
                >
                    <motion.div variants={variants} className="space-y-10">
                        <motion.h2 variants={variants} className="text-5xl font-extrabold">
                            Let&apos; Work Together<span className="text-green-500">.</span>
                        </motion.h2>

                        <motion.div variants={variants}>
                            <motion.h3 variants={variants} className="text-lg text-gray-400 mb-2">Contacts</motion.h3>
                            <motion.div className="text-white space-y-1">
                                <motion.div className="flex items-center gap-2">
                                    <Phone fontSize="small" className="text-green-500" />
                                    <a href="tel:+917357199177" className="hover:underline">
                                        +91 73571 99177
                                    </a>
                                </motion.div>
                                <motion.div className="flex items-center gap-2">
                                    <Email fontSize="small" className="text-green-500" />
                                    <a href="mailto:yogeshjangirroot@gmail.com" className="hover:underline">
                                        yogeshjangirroot@gmail.com
                                    </a>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={variants} className="flex space-x-4 mt-6">
                            <a
                                href="https://github.com/Yogesh-GD"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <GitHub fontSize="medium" className="text-white hover:text-green-500 transition" />
                            </a>
                            <a
                                href="https://linkedin.com/in/yogesh-jangir-root"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <LinkedIn fontSize="medium" className="text-white hover:text-green-500 transition" />
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>


                <motion.div variants={variants} initial={"initial"} whileInView={"animate"} className=" relative  rounded-md shadow-lg w-full max-w-md">
                    <div className="absolute inset-0 p-4   rounded-md">
                        <svg stroke="green" style={{ fill: "#121212" }} strokeWidth={3} viewBox="0 0 512 512" >
                            <g>
                                <motion.path fill={"none"} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 2 }} className="st0" d="M255.998,0.002C114.606,0.012,0.01,114.604,0,256c0.01,141.406,114.65,255.328,255.926,255.998h0.334   l0.297-0.009c27.124,0.038,49.507-8.527,64.961-22.594c15.468-14.01,23.727-33.254,23.708-52.736   c0.02-9.148-1.914-18.306-5.521-27.024c6.086-3.464,10.143-6.612,11.301-7.444c4.152-2.957,16-18.766,7.693-31.79   c-8.344-13.014-38.042-42.678-46.152-47.702c-8.086-5.015-21.598-0.124-28.105,9.426c-6.526,9.55-11.674,6.689-11.674,6.689   s-18.516-14.957-44.124-66.621c-25.607-51.694-26.263-75.454-26.263-75.454s0.833-5.847,12.388-5.263   c11.53,0.621,23.598-7.168,24.516-16.66c0.928-9.464-4.698-51.091-10-65.598c-5.316-14.516-25.062-14.65-29.928-13.138   c-4.89,1.502-55.033,13.712-59.014,66.21c-3.966,52.506,9.565,100.18,28.943,139.309c19.387,39.119,49.128,78.765,93.3,107.406   c17.89,11.598,35.058,13.1,49.493,10.67c2.483,5.54,3.718,11.291,3.746,16.985c-0.028,11.292-4.621,22.354-14.066,30.966   c-9.469,8.564-24.071,14.928-45.2,14.967l-0.516,0.009C130.797,481.96,29.387,381.09,29.397,256   c0.01-62.621,25.339-119.186,66.367-160.237c41.053-41.023,97.612-66.354,160.234-66.364c62.621,0.01,119.181,25.34,160.232,66.364   c41.033,41.052,66.354,97.606,66.373,160.237c-0.01,38.67-9.666,74.966-26.698,106.784c-9.531,17.837-21.397,34.23-35.177,48.812   c-5.569,5.905-5.301,15.206,0.594,20.776c5.894,5.578,15.205,5.32,20.784-0.584c15.54-16.46,28.937-34.976,39.712-55.139   C501.071,340.717,512,299.589,512,256C511.98,114.604,397.389,0.012,255.998,0.002z" />
                            </g>
                        </svg>
                    </div>
                    <motion.div className="relative aspect-square bg-[#1E1E1E] p-8 opacity-0"
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }} viewport={{ once: true }}
                    >
                        <div className="absolute border-2 border-green-500 w-6 h-6 top-0 left-0" />
                        <div className="absolute border-2 border-green-500 w-6 h-6 top-0 right-0" />
                        <div className="absolute border-2 border-green-500 w-6 h-6 bottom-0 left-0" />
                        <div className="absolute border-2 border-green-500 w-6 h-6 bottom-0 right-0" />

                        <h3 className="text-xl font-bold mb-6">Contact form</h3>

                        <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                            <div className=' relative flex justify-between gap-3 items-center   text-zinc-500 rounded-xl'>
                                <input className=' peer border-b w-full border-gray-600 text-white bg-transparent focus:border-green-500  focus:outline-none'
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={(e) => handleChange(e)} />
                                <label className={` transition-all duration-200 absolute   peer-focus:-top-5 peer-focus:text-white peer-focus:text-sm ${formData.name.length > 0 ? '-top-5 text-white ' : 'top-0'} `} htmlFor="name">Name</label>

                            </div>
                            <div className=' relative flex justify-between gap-3 items-center   text-zinc-500 rounded-xl'>
                                <input className=' peer border-b w-full focus:border-green-500 border-gray-600 text-white bg-transparent   focus:outline-none'
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={(e) => handleChange(e)} />
                                <label className={` transition-all duration-200 absolute   peer-focus:-top-5 peer-focus:text-white peer-focus:text-sm ${formData.email.length > 0 ? '-top-5 text-white ' : 'top-0'} `} htmlFor="email">Email</label>

                            </div>
                            <div className=' relative flex justify-between gap-3 items-center   text-zinc-500 rounded-xl'>
                                <textarea
                                    rows="3"
                                    name="message"
                                    id="message"
                                    onChange={(e) => handleChange(e)}
                                    className="w-full peer focus:border-green-500 bg-transparent border-b border-gray-600 text-white outline-none py-1 resize-none"
                                ></textarea>
                                <label className={` transition-all duration-200 absolute peer-focus:-top-4    peer-focus:text-white peer-focus:text-sm ${formData.message.length > 0 ? '-top-4 text-white ' : 'top-0'} `} htmlFor="email">Message</label>

                            </div>
                            <button
                                type="submit"

                                className="bg-green-500 text-black font-bold py-2 px-4 rounded hover:bg-green-400 transition"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>


        </motion.div>
    );
};

export default Contact;
