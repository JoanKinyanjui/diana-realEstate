import React from 'react';
import styles from '../../styles/Navigation.module.css';
import Link from 'next/link';

function Navigation() {
  return (
    <div className='w-screen flex place-content-center items-center'>
        <div className={`${styles.ImmigrationNavigation} flex place-content-center items-center gap-[15px] md:gap-[30px]`}>
        <Link href="/immigration#section1"><p className='text-center' >Immigration Services</p></Link>
        <Link href="/immigration#section2"><p className='text-center' >Guidance on Visa Processing</p></Link>
        <Link href="/immigration#section3"><p className='text-center'  >Kenyan Immigration Laws</p></Link>
        <Link href="/immigration#section4"><p className='text-center'  >Book A Consultation</p></Link>
        </div>
    </div>
  )
}

export default Navigation