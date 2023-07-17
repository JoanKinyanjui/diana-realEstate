import React from 'react';
import styles from '../../styles/aboutimm.module.css'
import Link from 'next/link';

function About() {
  return (
    <div className={`${styles.About} w-11/12 md:w-10/12 mx-auto  md:py-8 py-4`}>
        <p className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-4 md:py-8 uppercase w-full text-center'  >About Our Immigration Consulting</p>
        <div className='grid md:flex w-full items-center'>
            <div className='md:grid w-full py-4 md:w-[40%] '>
             <img  src="https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-[5/6] mx-auto h-[200px] md:h-[250px] hidden md:flex'/>
             <div className='flex  w-5/6 md:w-[60%] h-[200px] justify-between mx-auto md:h-[250px] my-2'>
             <img  src="https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-[48%]'/>
             <img  src="https://images.pexels.com/photos/4901989/pexels-photo-4901989.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-[48%]'/>
             </div>
            </div>
            <div className='text-center md:text-start w-full md:w-[60%]'>
                <p className='text-base md:text-lg md:w-[80%] '>We individually assess each and every application and inquiry and try to solve even critical immigration related issues without any problem. Any individual risk a rejection in some or other field if he or she applies without having proper knowledge of submitting and lodging visa applications. At Immigration experts, we try to provide the best possible advice to the aspiring applicants who would like to go visit, study or settle abroad. Contact us for more details.</p>
                <Link href="/immigration#section4">  <button className={`${styles.ButtonBookConsultation} `}>CONTACT US</button></Link>
            </div>
        </div>
    </div>
  )
}

export default About;