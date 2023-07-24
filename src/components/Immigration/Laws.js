import Link from 'next/link'
import styles from '../../styles/Laws.module.css'

function Laws() {
  return (
    <div className={`${styles.Laws} w-11/12 md:10/12 mx-auto pt-14 md:pt-8 md:py-12`} id='section3'>
    <p className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-4 md:py-8 uppercase w-full text-center' > LAWS</p>
    <p className='text-black text-bold md:text-[40px] text-[22px] mx-auto py-2 md:pb-8 text-center'> More On Immigration Laws</p>
   
    <div className='grid md:flex w-full items-center '>
  <div className='w-full md:w-1/2 grid gap-[10px] md:px-4 py-4 md:py-0'>
<div className='w-full flex h-[200px] md:h-[220px] '>
  <img className='md:w-auto mx-auto' src="https://www.mapsnworld.com/kenya/where-is-kenya.jpg" />
</div>
<div className=' w-[100%] md:w-[80%] flex h-[100px] md:h-[200px] gap-2 mx-auto'>
<img  className='w-1/2' src="https://victormatara.com/wp-content/uploads/2023/02/List-Of-Best-Immigration-Lawyers-In-Kenya-1200x720.jpeg"/>
<img className='w-1/2'  src="/images/passports.jpg"/>
</div>
  </div>

   <div className='text-center md:text-left w-full md:w-1/2'>
    <p className='text-[15px] md:text-[18px] md:px-2 font-serif text-ce md:w-[80%]'>
<br/>Immigration law is a complex Web of different Acts , Rules , Regulations and policy that makes Immigration a daunting and stressful task. Added to the complexity is the ever-changing nature of immigration.
<br/>At Dingoa Consultancy we as immigration experts are constantly monitoring all the changes to immigration laws in order to maintain the highest standard of accurate and credible advice with a goal to remove hurdles for both immigrants and non immigrants.
<br/>Kenya has a sound legal framework that governs national immigration policy.
<br/>There is Kenya citizenship and immigration regulations 2012 which repealed the previous Kenyan Citizenship Act and immigration Act 2011 of the law of Kenya . This Act  regulates the overall immigration sytem and provides different types of visas and permits to enter the country.
<br/>Then there is Kenya citizens and Foreign Nationals Management Service, regulations 2016 which repealed the previous act - the Kenya Citizens and Foreign National Management Service Act 2011.
<br/>Kenya Immigration is governed by the directorate of immigration services,  which reports to the ministry of interior and national government coordination. And it is the same directorate that enforces the immigration law.
<br/>The immigration services  has various responsibilities; 
<div className='text-left md:pl-8'>
-Control visa regulations,  entry and exit permits at the  airport and borders.
<br />
-Recognize and deport prohibited immigrants.
<br />
-Examine and fine charges against violators of immigration laws and rules.
<br />
-Consider Kenyan nationality to suitable immigrants.
<br />
</div>

<br/>The department delivers details about every visa and permit, legal advice , and access for outside citizens seeking entry into the country.






     </p>
   </div>
    </div>
  <div className='flex text-center  place-content-center py-4'>
  <Link href="/immigration#section4"> <button className={`${styles.ButtonBookConsultation}`}>BOOK CONSULTATION</button></Link>
  </div>
    </div>
  )
}

export default Laws