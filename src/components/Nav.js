import styles from '../styles/nav.module.css';
import {FiMenu} from 'react-icons/fi'

function Nav() {
  return (
    <div className={`${styles.NavComponent} flex items-center `}>
        <div className=' w-11/12 md:w-3/4 lg:w-1/2 place-content-center flex items-center h-full justify-between mx-auto'>
        <div>
          <img src='/images/logo.png'  className='w-[80px] md:w-[120px]'/>
        </div>
       <img src='/images/button.png' className='md:flex hidden'/>
       <button className={`${styles.ImmgrationDiv}  flex md:hidden`}>IMMIGRATION SERVICES</button>
        </div>
    </div>
  )
}

export default Nav