import Link from 'next/link'
import styles from '../../styles/guidance.module.css'

function Guidance() {
  return (
    <div className={`${styles.GuidanceComponet} w-11/12 md:w-10/12 mx-auto pt-14  py-2 md:pt-0 md:py-8`} id='section2'>
        <p className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-4 md:py-8 uppercase w-full text-center' >GUIDANCE</p>
        <p className='text-black text-bold md:text-[40px] text-[22px] mx-auto py-2 md:pb-8 text-center'>Get Guidance On Visa Processing </p>
        <div className='w-full text-center'>
          <img  className=' w-[90%] md:w-[60%] py-2 mx-auto' src='https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&w=1600' />
          <p className='w-full md:w-[80%] mx-auto text-center  py-4  text-[15px] md:text-[18px]'>
<br />
At Dingoa Consultancy,  we believe that two approaches are equally important; the professional , efficient provision of immigration services and advice, and the personal care and attention we give to each one of our clients.
Every person travelling to Kenya is required to have a passport valid for at least 6 months.
Kenya Visa Eligibility
Persons travelling to the Republic of Kenya are divided into 3 categories:
<br />
<br />
<div className='text-left md:pl-8'>
<strong>1.Category.</strong>
Persons from nationalities who do not require visas to Kenya.
<br />
<strong>2.Category.</strong>
Nationals and persons who require visas to enter Kenya.
<br />
<strong>3.Category.</strong>
Countries and persons who require referred visa.
<br />
</div>
<br />Fill out the online application form with your details as stated in your passport and select your preferred processing time and fees.
<br />Review all the information ,make sure it is correct and pick a form of payment.We accept Mpesa mobile money, Master cards, Visa card , credit and debit card.
<br />Upload all the required documents and apply.
<br />Take note that all the information provided must precisely match what is printed on the passport.
<br />Kindly review your information before submitting because minor mistakes are the most common reason for Kenya&apos;s online visa rejection.
<br />
If you need assistance guidance in your application process, reach out to our excellent customer support team.
          </p>
          <Link href="/immigration#section4">  <button className={`${styles.ButtonBookConsultation}`}>BOOK CONSULTATION</button></Link>
        </div>
    </div> 
  )
}

export default Guidance