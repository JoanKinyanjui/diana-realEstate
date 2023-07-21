import Link from 'next/link'
import styles from '../../styles/guidance.module.css'

function Guidance() {
  return (
    <div className={`${styles.GuidanceComponet} w-11/12 md:w-10/12 mx-auto pt-14  py-2 md:pt-0 md:py-8`} id='section2'>
        <p className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-4 md:py-8 uppercase w-full text-center' >GUIDANCE</p>
        <p className='text-black text-bold md:text-[40px] text-[22px] mx-auto py-2 md:pb-8 text-center'>Get Guidance On Visa Processing </p>
        <div className='w-full text-center'>
          <img  className=' w-[90%] md:w-[60%] py-2 mx-auto' src='https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&w=1600' />
          <p className='w-full md:w-[80%] mx-auto text-center  py-4  text-[15px] md:text-[18px]'>Our forte lies in providing proper guidance and step-by-step method following so that the client gets the complete knowledge on visa processing. As Immigration experts, we aim to provide specialization in migration to foreign countries, advisory services and other immigration-related services in order to help the global community. We have made our niche market in the business by providing expert advices and immigration assistance for those aspiring to visit,settle, work or study in countires abroad
          . <br />
          We are not just working for money but also to gain respect. At Hisbah Consultants, we believe in providing high quality client-servicing in those areas that are not aided by government or any governmental bodies. We believe in providing hi-quality client satisfaction and excel in every arena of immigration related services. Our aim is to serve the applicants and executing their dream by successfully guiding them through the visa process. By reducing the stress we are providing best for your delight immigration experience.</p>
          <Link href="/immigration#section4">  <button className={`${styles.ButtonBookConsultation}`}>BOOK CONSULTATION</button></Link>
        </div>
    </div>
  )
}

export default Guidance