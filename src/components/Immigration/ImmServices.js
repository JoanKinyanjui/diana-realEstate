import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import styles from '../../styles/ImmServices.module.css'
import { services } from '../data/ImmigrationServices';

function ImmServices() {
  return (
    <div className={`${styles.ImmServices} w-11/12 md:w-10/12 mx-auto py-8`} id='section1'>
        <p  className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-2 md:py-8 uppercase w-full text-center' >IMMIGRATION SERVICES</p>
        {/* Desktop Layout */}
      <div className='hidden md:grid  items-center '>
      {/* <Tabs aria-label="Basic tabs" defaultValue={0} sx={{ borderRadius: '0px' }}> */}
      <Tabs  defaultValue={0}  aria-label="Vertical tabs" orientation="vertical" sx={{ minWidth: 300, borderRadius: 'lg' }}>
      <TabList variant='plain' size="md" color='neural' sx={{backgroundColor:"",border:"none"}} className="mt-[35px] border">
        <Tab sx={{fontSize:"12px", textAlign:"center" , borderRadius:"n0px"}}  className="py-4 w-[200px]" >FAMILY IMMIGRATION</Tab>
        <Tab sx={{fontSize:"12px", textAlign:"center"}}  className="py-4 w-[200px]" >SKILLED IMMIGRATION</Tab>
        <Tab sx={{fontSize:"12px", textAlign:"center"}}   className="py-4  w-[200px]" >STUDENT VISA SERVICES</Tab>
        <Tab sx={{fontSize:"12px" , textAlign:"center"}}   className="py-4  w-[200px]" >TOURIST VISA SERVICES</Tab>
        <Tab sx={{fontSize:"12px", textAlign:"center"}}   className="py-4  w-[200px]" >BUSINESS VISA SERVICES</Tab>
        <Tab sx={{fontSize:"12px", textAlign:"center"}}   className="py-4  w-[200px]" >DUBAI VISA SERVICES</Tab>
      </TabList>
      {services.map((item)=>(
          <TabPanel value={item.value} sx={{ p: 2 }} key={item.id}>
          <div className='w-3/4  mx-auto'>
           <p  className=' text-neutral-400 text-sm md:text-base mx-auto font-semibold py-4 md:py-8 uppercase w-full text-start'>{item.title}</p>
           <div className='grid w-full  mx-auto'>
               <img className='w-auto h-[400px]' src="https://images.pexels.com/photos/2914751/pexels-photo-2914751.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
               <div className=''>
               <p className={`${styles.nowAgain} text-left py-4 text-[17px]`}>Partner, Children, Parents and other family members may apply to join their family citizens or permanent resident family members in a different country with our help and epertise. We shall help you with immigration family visas services which can be applied by the applicants who has other family members living in a different country as permanent residents or citizens.At Hisbah Consultants, we believe that each case is unique and important. We strive to respond to your questions within 24 hours, during regular weekdays. We offer proactive, creative and successful solutions to your immigration needs, and we keep you informed - you are notified of progress and changes on your case on a regular basis. </p>
               <button  className={`${styles.ButtonBookConsultation} `} >BOOK CONSULTATION</button>
           </div>
               </div>
          </div>
   
         </TabPanel>
    ))}
    </Tabs>

      </div>

      <div className='flex md:hidden'>
          {/* Mobile Layout */}
    <Tabs aria-label="Basic tabs" defaultValue={0} sx={{ borderRadius: '0px' }} id="section1">
      <TabList variant='plain' size="sm" color='neutral' sx={{backgroundColor:"rgb(249, 247, 247)", display:"flex" , overflowX:"scroll", borderRadius:"0px"}}>
        <Tab sx={{fontSize:"8px", textAlign:"center",}}  className='py-2' >FAMILY IMMIGRATION</Tab>
        <Tab sx={{fontSize:"8px", textAlign:"center"}}>SKILLED IMMIGRATION</Tab>
        <Tab sx={{fontSize:"8px", textAlign:"center"}}>STUDENT VISA SERVICES</Tab>
        <Tab sx={{fontSize:"8px" , textAlign:"center"}}>TOURIST VISA SERVICES</Tab>
        <Tab sx={{fontSize:"8px", textAlign:"center"}}>BUSINESS VISA SERVICES</Tab>
        <Tab sx={{fontSize:"8px", textAlign:"center"}}>DUBAI VISA SERVICES</Tab>
      </TabList>
    {services.map((item)=>(
          <TabPanel value={item.value} sx={{ p: 2 }} key={item.id}>
          <div>
           <p  className=' text-neutral-400 text-sm md:text-base mx-auto font-semibold py-4 md:py-8 uppercase w-full text-start'>{item.title}</p>
           <div className='grid md:flex'>
               <img src="https://images.pexels.com/photos/2914751/pexels-photo-2914751.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
               <div className=''>
               <p className={`${styles.nowAgain} text-left py-4 text-[15px]`}>Partner, Children, Parents and other family members may apply to join their family citizens or permanent resident family members in a different country with our help and epertise. We shall help you with immigration family visas services which can be applied by the applicants who has other family members living in a different country as permanent residents or citizens.At Hisbah Consultants, we believe that each case is unique and important. We strive to respond to your questions within 24 hours, during regular weekdays. We offer proactive, creative and successful solutions to your immigration needs, and we keep you informed - you are notified of progress and changes on your case on a regular basis. </p>
               <button  className={`${styles.ButtonBookConsultation} `} >BOOK CONSULTATION</button>
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