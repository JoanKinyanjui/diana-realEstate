import styles from '../../styles/INdexhero.module.css';
import 'animate.css';

function IndexHero() {
  return (
    <div className='w-screen' >
        {/* Desktop */}
        <div className={`${styles.DesktopHeroDiv}  w-10/12 mx-auto md:flex items-center hidden`}>
<div className={`${styles.Part1Hero} w-1/2 items-center grid h-full  `}>
<div  className='w-[80%] lg:w-[70%] mx-auto '>
<p>Welcome to Dingoa Consultancy, Your Trusted Partner in Navigating </p>
<p className={`${styles.MainServices} py-8 animate__animated animate__zoomIn animate__delay-2s animate__infinite animate__slower`}>IMMIGRATION & REALESTATE</p>
<div>
<p className={`${styles.CaptiobnTagline2} w-[70%]`}>With years of experience and a team of dedicated proffessionals, we provide tailored solutions to help you seize new opportunities,achieve your goals and build a properous future</p>
</div>
<div className='flex justify-between text-base w-[70%] text-left py-8'>
    <button className={`${styles.ButtonsDiv}`} >Immigration Services</button>
    <button className={`${styles.ButtonsDiv}`}>Realtor Services</button>
</div>
</div>

</div>

<div className='w-1/2'>
    <img src='/images/herobg.png' className='w-[80%] h-full'/>
</div>

        </div>

{/* Mobile Design */}
<div className={`${styles.DesktopHeroDiv}  w-screen mx-auto grid md:hidden items-center py-4 border`}>
<div className={`${styles.Part1Hero} w-full items-center grid h-full  `}>
<div  className='w-[90%] text-center md:w-[80%] lg:w-[70%] mx-auto'>
<p>Dingoa Consultancy, Your Trusted Partner in Navigating </p>
<p className={`${styles.MainServices} py-8 animate__animated animate__zoomIn animate__delay-2s animate__infinite animate__slower`}>IMMIGRATION
 &
  REALESTATE</p>
  <div className='w-full flex place-content-center '>
    <img src='/images/herobg.png' className='w-[90%] h-full'/>
</div>
<div>
<p className={`${styles.CaptiobnTagline2} w-[80%]  mx-auto text-center py-8`}>With years of experience and a team of dedicated proffessionals, we provide tailored solutions to help you seize new opportunities,achieve your goals and build a properous future</p>
</div>
<div className='flex justify-between text-base w-[80%] text-left py-4 mx-auto'>
    <button className={`${styles.ButtonsDiv}`} >Immigration Services</button>
    <button className={`${styles.ButtonsDiv}`}>Realtor Services</button>
</div>
</div>

</div>


        </div>


    </div>
  )
}

export default IndexHero