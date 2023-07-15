import React from 'react';
import styles from '../../styles/hero.module.css'

function Hero() {
  return (
    <div  className='w-screen'>
        <div className={`${styles.HeroDiv} w-full h-full`}>
            <img src='https://images.pexels.com/photos/7235894/pexels-photo-7235894.jpeg?auto=compress&cs=tinysrgb&w=1600' className='w-full h-full'/>
            <div className={`${styles.GradientHero}`}></div>
            <div className={`${styles.HeroHtag}  w-full`}>
                <p>Your Immigration Consulting Partner In Kenya</p>
                <button className={`${styles.ButtonBookConsultation}`}>BOOK A CONSULTATION</button>
            </div>
        </div>
    </div>
  )
}

export default Hero