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
    <p className='text-[15px] md:text-[18px] md:px-2 font-serif text-ce md:w-[80%]'>Immigration law is a complex web of different Acts, Rules, Regulations and Policy that makes immigrating a daunting and stressful task. Added to the complexity is the ever-changing nature of Immigration Law. Hisbah Consultants Immigration experts is constantly monitoring all the changes to immigration laws in order to maintain the highest standard of accurate and credible advice with a goal to remove hurldles for both immigrants and non immigrants. No matter where you are in the world, we personally attend to your case.At Hisbah Consultants, we believe that two approaches are equally important: the professional, efficient provision of immigration services and advice and the personal care and attention we give to each one of our clients. Hisbah Consultants is considered to be Highly Trusted Migration Consultant in East Africa and beyond due to honesty in dealing and inimitable competency in work. We do not take up any case unless we identify the possibilities of success rate of the case before we formally accept the application. Hisbah Consultants is an independent immigration consultancy providing a wide range of global immigration and visa handling services and serving in the consultancy industry since 2010 with has hundreds of satisfied customers by now. We are specialized in Australian immigration, Canadian immigration, United Kingdom immigration,USA,UAE and the Middle East.We also have expertise in assisting with student university admission and student visas</p>
   </div>
    </div>
  <div className='flex text-center  place-content-center py-4'>
  <Link href="/immigration#section4"> <button className={`${styles.ButtonBookConsultation}`}>BOOK CONSULTATION</button></Link>
  </div>
    </div>
  )
}

export default Laws