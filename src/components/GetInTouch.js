import React from 'react';
import styles from '../styles/get.module.css'

function GetInTouch() {
  return (
    <div className='w-screen mt-12 pb-8 md:py-8 ' >
        <div className={`${styles.GetInTouchDiv}  mx-auto `}>
               <div className='grid md:gap-[25px] gap-[10px] '>
               <p className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-4 md:py-8'>GET IN TOUCH</p>
                  <p  className='text-black text-bold md:text-[40px] text-[22px] mx-auto py-4 md:pb-8'>Free Consultation</p>
               </div>

               <div className='flex items-center md:gap-[30px] place-content-center md:pt-12 pt-8'>
     <div className={`${styles.ImageOfCallGirl}  hidden md:flex`}>
        <img src='/images/call.jpg' className='w-full h-full' />
     </div>
     <div className='grid md:py-8 py-4'>
        <form className='grid gap-[20px] text-sm '>
            <input placeholder='Your Name'  className='md:h-[56px] md:w-[340px] w-[270px] h-[35px] px-4 rounded-sm ' />
            <input type='text' placeholder='Your Email' className='md:h-[56px] md:w-[340px] w-[270px] h-[35px] px-4 rounded-sm ' />
            <input  type='text' placeholder='Subject' className='md:h-[56px] md:w-[340px] w-[270px] h-[35px] px-4 rounded-sm'/>
            <textarea placeholder='message' className='md:h-[56px] md:w-[340px] w-[270px] h-[160px] px-4 rounded-sm' />
            <button className={`${styles.EnquireButton}  w-[120px] md:w-[200px] mx-auto  text-white font-medium`}>CONSULT</button>
        </form>
     </div>
        </div>
        </div>

      
    </div>
  )
}

export default GetInTouch;