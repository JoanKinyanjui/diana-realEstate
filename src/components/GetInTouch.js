import axios from 'axios';
import styles from '../styles/get.module.css';
import { useState } from 'react';

function GetInTouch() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  
  const sendEmail = async () => {
   try {
     const response = await fetch('http://localhost:5000/api/sendEmailToRealtor', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         name: name,
         email: email,
         phoneNumber: phoneNumber,
         message: message,
       }),
     });
 
     if (response.ok) {
       const { message } = await response.json();
       console.log(message);
       // Handle success
     } else {
       throw new Error('Request failed');
     }
   } catch (error) {
     console.log('Error:', error);
     // Handle error
   }
 };

  return (
    <div className='w-screen mt-12 pb-8 md:py-8'>
      <div className={`${styles.GetInTouchDiv} mx-auto`}>
        <div className='grid md:gap-[25px] gap-[10px]'>
          <p className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-4 md:py-8'>GET IN TOUCH</p>
          <p className='text-black text-bold md:text-[40px] text-[22px] mx-auto py-4 md:pb-8'>Free Consultation</p>
        </div>

        <div className='flex items-center md:gap-[30px] place-content-center md:pt-12 pt-8'>
          <div className={`${styles.ImageOfCallGirl} hidden md:flex`}>
            <img src='/images/call.jpg' className='w-full h-full' alt='Call' />
          </div>
          <div className='grid md:py-8 py-4'>
            <form
              className='grid gap-[20px] text-sm'
              onSubmit={(e) => {
                e.preventDefault();
                sendEmail();
              }}
            >
              <input
                placeholder='Your Name'
                className='md:h-[56px] md:w-[340px] w-[270px] h-[35px] px-4 rounded-sm'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='text'
                placeholder='Your Email'
                className='md:h-[56px] md:w-[340px] w-[270px] h-[35px] px-4 rounded-sm'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
               <input
                type='text'
                placeholder='Your Phone number'
                className='md:h-[56px] md:w-[340px] w-[270px] h-[35px] px-4 rounded-sm'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <textarea
                placeholder='message'
                className='md:h-[56px] md:w-[340px] w-[270px] h-[160px] px-4 rounded-sm'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <input
                type='submit'
                value="CONSULT"
                className={`${styles.EnquireButton} w-[120px] md:w-[200px] mx-auto text-white font-medium`}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}



export default GetInTouch;