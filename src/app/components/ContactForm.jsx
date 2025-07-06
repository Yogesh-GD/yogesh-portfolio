import React, { useState } from 'react'
import { toast } from 'react-toastify'

function ContactForm() {
    const [data,setData] = useState({})
  
    const changeHandler = (e)=>{
      setData({...data, [e.target.name]:e.target.value})
    }
  
    const submitHandler = async (e)=>{
      e.preventDefault()
      if (!data.name || !data.email || !data.message) {
    toast.error("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.email)) {
    toast.error("Please enter a valid email address.");
    return;
  }
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({'name':data.name,'email':data.email,'message':data.message}),
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
      <div className='  px-5 sm:px-20 md:px-40 py-10 sm:py-20  ' id='contact'>
  
        <div className='' >
  
          <div className=' rounded-2xl p-5 sm:p-10  bg-[#292929] '> 
            <h2 className=' text-[#9999A1] my-2  '>GET IN TOUCH</h2>
            <h2 className=' text-[#D4D4D8] mb-10 text-3xl sm:text-5xl font-extrabold'>Contact.</h2>
            <form action="" method="post">
                <div className=' text-[#fff] flex gap-1 my-3 flex-col '>
                  <label htmlFor="na me">Your Name</label>
                  <input className=' focus:outline-none resize-none rounded-lg text-md px-4 py-3  bg-[#1F1F1F]' type="text" name="name" id="name" placeholder=" What's your name? " onChange={changeHandler}  />
                </div>
  
                <div className=' text-[#fff] flex gap-1 my-3 flex-col '>
                  <label htmlFor="email">Your Email</label>
                  <input className=' focus:outline-none resize-none rounded-lg text-md px-4 py-3  bg-[#1F1F1F] ' type="text" name="email" id="email" placeholder=" What's your Email? " onChange={changeHandler} />
                </div>
  
                <div className=' text-[#fff] flex gap-1 my-3 flex-col '>
                  <label htmlFor="message">Your Message</label>
                  <textarea className=' focus:outline-none resize-none rounded-lg text-md px-4 py-3  bg-[#1F1F1F] ' rows="6" name="message" id="message" placeholder="What's your message?" onChange={changeHandler} ></textarea>
                </div>
  
                <button className=' my-5 duration-500 px-3 py-1 rounded-lg  bg-[#141414] text-[#fff] text-xl font-bold hover:bg-[#858585] hover:text-[#141414]  ' type="submit" onClick={submitHandler}>SEND </button>
            </form> 
          </div>
  
        </div>
  
      </div>
    )
}

export default ContactForm