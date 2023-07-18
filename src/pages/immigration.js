import About from '@/components/Immigration/About'
import Book from '@/components/Immigration/Book'
import Guidance from '@/components/Immigration/Guidance'
import ImmServices from '@/components/Immigration/ImmServices';
import Laws from '@/components/Immigration/Laws'
import Hero from '@/components/Immigration/hero'
import Navigation from '@/components/Immigration/navigation'
import React, { useEffect, useState } from 'react';
import styles from '../styles/Immigration.module.css';
import Whatsapp from '@/components/Whatsapp';

function Immigration() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div>
     <div className={`${styles.stickyNav} ${isSticky ? styles.sticky : ''}`}>
        <Navigation />
      </div>
        <div className={`${styles.TheRest}`}>
        <Hero />
        <About />
        <ImmServices />
        <Guidance />
        <Laws />
        <Book />
        </div>
        <div className={`flex place-content-end px-4 fixed bottom-1 right-0`}>
            <Whatsapp message='Hello ,I would like to know more about Immigration services'/>
           </div>
    </div>
  )
}

export default Immigration;