'use client'

import React from 'react'

import Head from './components/Head'
import About from './components/About'
import SkillComp from './components/SkillComp'
import Projects from "./components/Projects"
import ContactComp from './components/ContactComp'
import { ToastContainer } from 'react-toastify'


function page() {
  return (
    <div className=' bg-[#1D242C] h-screen overflow-x-hidden grid place-items-center '>
      <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
      <div className=' w-full  '>
      <Head />
      <About />
      <Projects />
      <SkillComp />
      <ContactComp /> 
      
      </div>
     
    </div>
  )
}

export default page