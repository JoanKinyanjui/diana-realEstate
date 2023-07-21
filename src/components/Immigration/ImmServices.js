import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import styles from '../../styles/ImmServices.module.css'
import { services } from '../data/ImmigrationServices';
import Link from 'next/link';

function ImmServices() {
  return (
    <div className={`${styles.ImmServices} w-11/12 md:w-10/12 mx-auto py-8`} id='section1'>
        <p  className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium pt-12 py-4 md:pt-0 md:py-8 uppercase w-full text-center' >SERVICES</p>
        <p className='text-black text-bold md:text-[40px] text-[22px] mx-auto py-2 md:pb-8 text-center'>Explore Our Immigration Services</p>
        {/* Desktop Layout */}
      <div className='hidden md:grid  items-center '>
      <Tabs  defaultValue={0}  aria-label="Vertical tabs" orientation="vertical" sx={{ minWidth: 300, borderRadius: 'lg' }}>
      <TabList variant='soft' size="md" color='info' sx={{backgroundColor:"",border:"none"}} className="mt-[35px] border">
        <Tab sx={{fontSize:"12px", textAlign:"center" , borderBottom:"0px solid gainsboro" }}  className="py-6 w-[200px]" >TOURIST VISA SERVICES</Tab>
        <Tab sx={{fontSize:"12px", textAlign:"center",  borderBottom:"0px solid gainsboro"}}  className="py-6 w-[200px]" >BUSINESS VISA SERVICES</Tab>
        <Tab sx={{fontSize:"12px", textAlign:"center", borderBottom:"0px solid gainsboro"}}   className="py-6  w-[200px]" >STUDENT IMMIGRATION</Tab>
        <Tab sx={{fontSize:"12px" , textAlign:"center", borderBottom:"0px solid gainsboro"}}   className="py-6  w-[200px]" >FAMILY IMMIGRATION</Tab>
        <Tab sx={{fontSize:"12px", textAlign:"center", borderBottom:"0px solid gainsboro"}}   className="py-6  w-[200px]" >SKILLED IMMIGRATION</Tab>
      </TabList>
      {services.map((item)=>(
          <TabPanel value={item.value} sx={{ p: 2 }} key={item.id}>
          <div className='w-3/4  mx-auto'>
           <p  className=' text-neutral-400 text-sm md:text-base mx-auto font-semibold py-4 md:py-8 uppercase w-full text-start'>{item.title}</p>
           <div className='grid w-full  mx-auto'>
               <img className='w-auto h-[400px]' src={item.image}/>
               <div className=''>
               <p  style={{ whiteSpace: "pre-line" }}  className={`${styles.nowAgain} text-left py-4 text-[17px]`}>{item.content} </p>
               <Link href="/immigration#section4"> <button  className={`${styles.ButtonBookConsultation} `} >APPLY NOW</button></Link>
           </div>
               </div>
          </div>
   
         </TabPanel>
    ))}
    </Tabs>

      </div>

      <div className='flex md:hidden '>
          {/* Mobile Layout */}
    <Tabs aria-label="Basic tabs" defaultValue={0} sx={{ borderRadius: '0px' }} id="section1"   >
      <TabList variant='soft' size="sm" color='info' sx={{ display:"flex" , overflowX:"scroll", borderRadius:"0px" ,width:"100vw"}}>
        <Tab sx={{fontSize:"8px", textAlign:"center",}} >TOURIST VISA SERVICES</Tab>
        <Tab sx={{fontSize:"8px", textAlign:"center"}}>BUSINESS VISA SERVICES</Tab>
        <Tab sx={{fontSize:"8px", textAlign:"center"}}>STUDENT immigration</Tab>
        <Tab sx={{fontSize:"8px" , textAlign:"center"}}>FAMILY IMMIGRATION</Tab>
        <Tab sx={{fontSize:"8px", textAlign:"center"}}>SKILLED IMMIGRATION</Tab>
      </TabList>
    {services.map((item)=>(
          <TabPanel value={item.value} sx={{ p: 2 }} key={item.id}>
          <div>
           <p  className=' text-neutral-400 text-sm md:text-base mx-auto font-semibold py-4 md:py-8 uppercase w-full text-start'>{item.title}</p>
           <div className='grid md:flex'>
               <img src={item.image}/>
               <div className='text-center'>
               <p className={`${styles.nowAgain}  py-4 text-[15px]`}>{item.content}</p>
               <Link href="/immigration#section4">   <button  className={`${styles.ButtonBookConsultation}`} >BOOK CONSULTATION</button></Link>
           </div>
               </div>
          </div>
   
         </TabPanel>
    ))}
     
    </Tabs>
     </div>


        
    </div>
  )
}

export default ImmServices;