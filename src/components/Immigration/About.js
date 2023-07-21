import React from 'react';
import styles from '../../styles/aboutimm.module.css'
import Link from 'next/link';
import {VscActivateBreakpoints} from 'react-icons'

function About() {
  return (
    <div className={`${styles.About} w-11/12 md:w-10/12 mx-auto  md:py-8 py-4`}>
        <p className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-4 md:py-8 uppercase w-full text-center'  >About DINGOA CONSULTANCY</p>
        <div className='grid md:flex w-full items-center'>
            <div className='md:grid w-full py-4 md:w-[40%] '>
             <img  src="https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-[5/6] mx-auto h-[200px] md:h-[250px] hidden md:flex'/>
             <div className='flex  w-5/6 md:w-[60%] h-[200px] justify-between mx-auto md:h-[250px] my-2'>
             <img  src="https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-[48%]'/>
             <img  src="https://images.pexels.com/photos/3605432/pexels-photo-3605432.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='w-[48%]'/>
             </div>
            </div>
            <div className='text-center md:text-start w-full md:w-[60%]'>
                <p className='text-base md:text-lg md:w-[80%] '>
              
              At Dingoa Consultancy we individually assess each and every application and inquiry and try to solve even critical immigration related issues without any problem.
              Any individual risk a rejection in some or other field if he or she applies without proper knowledge of submitting and lodging visa applications.
              That&apos;s when our  immigration experts come in to provide the best possible advice to the aspiring applicants who would like to come visit Kenya for tourism, study ,  engage in employment,  business or any prescribed profession or settle in Kenya.
              We strive to respond to your questions within 24 hours , during regular weekdays.
              <br />
            <p className='text-left px-4 text-neutral-500'>
            ✓ The first step on getting a Kenyan Visa is completing the application form.
              <br />

              ✓  After submitting the application form, it can take between a few business days to up to 8 days in rare cases.
              <br />

              ✓ Once approved , the Kenya evisa is immediately sent to the Applicant&apos;s email inbox.
              <br />

              ✓ Eligible travellers for the Kenya evisa are advised to consider their desired arrival  date in Kenya when applying.
              <br />

              ✓ It&apos;s recommended to apply at least 7 business days before their intended entry date.
              <br />
            </p>

                </p>
                <Link href="/immigration#section4">  <button className={`${styles.ButtonBookConsultation} `}>CONTACT US</button></Link>
            </div>
        </div>
    </div>
  )
}

export default About;