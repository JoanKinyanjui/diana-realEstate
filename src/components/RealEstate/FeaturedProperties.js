import styles from '../../styles/properties.module.css';
import { properties } from '../data/properties';
import { Grid } from '@mui/material';
import {MdLocationPin} from 'react-icons/md';
import {LiaBedSolid} from 'react-icons/lia'
import Link from 'next/link';

function FeaturedProperties() {
  return (
    <div className={`${styles.FeaturedComponent} grid place-content-center py-12`}>
        <p className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-4 md:py-8'>OUR PROPERTIES</p>
        <p  className='text-black text-bold md:text-[40px] text-[22px] mx-auto py-4 md:pb-8'>Featured Properties</p>
        
        <div className='lg:w-[70%] md:w-[80vw] mx-auto w-[70vw]'>
        <Grid container spacing={3}>
     
      {properties.map((item)=>(
         <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
         <div className='grid  rounded-xl shadow-md hover:shadow-lg   md:pb-4 bg-white  ' >
            <div className={`${styles.SpecificHouseDiv} `}>
            <img src={item.image} className='rounded-md' />
            <p className={`${styles.PriceOfAHouse}`}>Ksh 20,000 </p>
            </div>
             <div className='px-2'>
                 <p className='font-medium text-lg md:text-xl'>{item.name}</p>
                 <div className='flex justify-between items-center py-2'>
                    <div className='flex gap-[5px] items-center'> <p className={`${styles.iconStyles}`}><MdLocationPin /></p> <p>New York</p></div>
                    <div className={`${styles.SaleDiv} px-2  md:px-4text-sm rounded-sm flex`}> <p>Sale</p></div>
                 </div>
             </div>
             <div className='px-2 flex items-center gap-[5px] text-neutral-400'>
                 <p><LiaBedSolid /> </p> <p>2bedrooms</p>
             </div>
             <div className='w-full flex place-content-center px-2  py-2'>
                <Link href="/immigration#section4" > <button className={`${styles.EnquireButton}`}>ENQUIRE</button></Link>
             </div>
 
         </div>
       </Grid>
      ))}
    </Grid>
        </div>
    </div>
  )
}

export default FeaturedProperties 