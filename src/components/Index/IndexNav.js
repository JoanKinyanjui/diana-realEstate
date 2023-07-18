import Link from 'next/link';
import styles from '../../styles/IndexNav.module.css';
import {RxHamburgerMenu} from 'react-icons/rx';

function IndexNav() {
  return (
<>
{/* Desktop */}
<div className={`${styles.IndexNavMainDiv} hidden md:flex items-center justify-between  mx-auto`}>
  <div>
    <img  src='/images/logo.png' className='h-[80px] w-[120px]'/>
  </div>

  <div className='flex justify-between items-center'>
   <Link href='/realEstate'> <p className='px-4'>Immigration Services</p></Link>
    <Link href='/immigration'><p className='px-4'>Realtor Services</p></Link>
   <a href="mailto:dingoaconsultancy@gmail.com"> <button className={`${styles.ButtonsDiv}`}>Get in touch</button></a>
  </div>
    </div>

    {/* Mobile Design */}
   <div className={`${styles.IndexNavMainDiv} md:hidden  flex items-center justify-between  mx-auto w-11/12 `}>
  <div className='flex justify-between text-sm items-center w-full'>
    <img  src='/images/logo.png' className='h-[40px] w-[70px]'/>
     <a href="mailto:dingoaconsultancy@gmail.com"> <button className={`${styles.ButtonsDiv}`}>Get in touch</button></a>
  </div>
    </div>
    </>
  )
}

export default IndexNav 