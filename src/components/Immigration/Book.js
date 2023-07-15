import { useState } from 'react';
import styles from '../../styles/get.module.css'

function Book() {
    const options = ['Student Visa', 'Business Visa', 'Family Visa', 'Travel Visa', 'Work Visa', 'Visitor Visa','PR Visa',"Migrate Visa"];
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
  return (
    <div className='w-screen mt-12 pb-8 md:py-8 ' id="section4">
    <div className={`${styles.GetInTouchDivBook}  mx-auto `}>
           <div className='grid md:gap-[25px] gap-[10px] '>
           <p className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-4 md:py-8'>BOOK A CONSULTATION</p>
              
           </div>

           <div className='flex items-center md:gap-[30px] place-content-center md:pt-12 pt-8'>
 <div className={`${styles.ImageOfCallGirl}  hidden md:flex`}>
    <img src='/images/call.jpg' className='w-full h-full' />
 </div>
 <div className='grid md:py-8 py-4'>
    <form className='grid gap-[20px] text-sm '>
        <input placeholder='Your Name'  className='md:h-[56px] md:w-[340px] w-[270px] h-[35px] px-4 rounded-sm ' />
        <input type='text' placeholder='Your Email' className='md:h-[56px] md:w-[340px] w-[270px] h-[35px] px-4 rounded-sm ' />
        <input type='number' placeholder='Your Phone Number' className='md:h-[56px] md:w-[340px] w-[270px] h-[35px] px-4 rounded-sm ' />
        <select id="selectOption" value={selectedOption} onChange={handleOptionChange}  className='md:h-[56px] md:w-[340px] w-[270px] h-[35px] px-4 rounded-sm bg-white text-neutral-500'>
        <option value="">Select Visa</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
        <textarea placeholder='message' className='md:h-[56px] md:w-[340px] w-[270px] h-[160px] px-4 rounded-sm' />
        <button className={`${styles.EnquireButton}  w-[120px] md:w-[200px] mx-auto  text-white font-medium`}>CONSULT</button>
    </form>
 </div>
    </div>
    </div>

  
</div>
  )
}

export default Book