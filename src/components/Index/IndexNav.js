import styles from '../../styles/IndexNav.module.css'

function IndexNav() {
  return (
<>
{/* Desktop */}
<div className={`${styles.IndexNavMainDiv} hidden md:flex items-center justify-between  mx-auto`}>
  <div>
    <img  src='/images/logo.png' className='h-[80px] w-[120px]'/>
  </div>

  <div className='flex justify-between'>
    <p className='px-4'>Immigration Services</p>
    <p className='px-4'>Realtor Services</p>
  </div>
    </div>

    {/* Mobile Design */}
   <div className={`${styles.IndexNavMainDiv} md:hidden  flex items-center justify-between  mx-auto`}>
  <div>
    <img  src='/images/logo.png' className='h-[50px] w-[70px]'/>
  </div>

  <div className='flex justify-between text-sm'>
    <p className='px-4'>Immigration Services</p>
    <p className='px-4'>Realtor Services</p>
  </div>
    </div>
    </>
  )
}

export default IndexNav