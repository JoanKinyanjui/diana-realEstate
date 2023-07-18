import Link from 'next/link';
import styles from '../../styles/INdexhero.module.css';
import 'animate.css';
import IndexNav from './IndexNav';


function IndexHero() {
  return (
    <div className='w-screen ' >
        {/* Desktop */}
        <div className={`${styles.DesktopHeroDiv}  w-10/12 mx-auto md:flex items-center hidden border`}>
<div className={`${styles.Part1Hero} w-1/2 items-center grid h-full  `}>
<div  className='w-[90%] lg:w-[70%] mx-auto '>
<p>Welcome to Dingoa Consultancy, Your Trusted Partner in Navigating </p>
<p className={`${styles.MainServices} py-8 animate__animated animate__zoomIn animate__delay-2s animate__infinite animate__slower `}>IMMIGRATION & REAL ESTATE</p>
<div>
<p className={`${styles.CaptiobnTagline2} w-[80%] lg:w-[70%]`}>With years of experience and a team of dedicated proffessionals, we provide tailored solutions to help you seize new opportunities,achieve your goals and build a properous future</p>
</div>
<div className='flex justify-between text-base w-[70%] text-left py-8'>
    <Link href='/immigration'><button className={`${styles.ButtonsDiv}`} >Immigration Services</button></Link>
   <Link href='/realEstate'> <button className={`${styles.ButtonsDiv}`}>Realtor Services</button></Link>
</div>
</div>

</div>

<div className='w-1/2'>
    <img src='/images/herobg.png' className='w-[80%] h-full'/>
</div>

        </div>

{/* Mobile Design */}
<div className={`${styles.DesktopHeroDiv}  w-screen mx-auto grid md:hidden items-center pt-8 `}>
<div className={`${styles.Part1Hero} w-full items-center grid h-full  `}>
<div  className='w-[90%] text-center md:w-[80%] lg:w-[70%] mx-auto'>
<p>Dingoa Consultancy, Your Trusted Partner in Navigating </p>
<p className={`${styles.MainServices} py-6 animate__animated animate__zoomIn animate__delay-1s animate__infinit animate__slower`}>
  IMMIGRATION
 &
  REAL ESTATE</p>
 

<div className='w-full flex place-content-center py-4 '>
    <img src='/images/herobg.png' className='w-[100%] h-full'/>
</div>

<div>
<p className={`${styles.CaptiobnTagline2} w-[80%]  mx-auto text-center py-4`}>With years of experience and a team of dedicated proffessionals, we provide tailored solutions to help you seize new opportunities,achieve your goals and build a properous future</p>
</div>
<div className='flex justify-between text-base w-[90%] text-left pt-4 mx-auto'>
  <Link href='/immigration'><button className={`${styles.ButtonsDiv}`} >Immigration Services</button></Link>
  <Link href='/realEstate'>  <button className={`${styles.ButtonsDiv}`} >Realtor Services</button></Link>
</div>
</div>

</div>


        </div>


    </div>
  )
}

export default IndexHero