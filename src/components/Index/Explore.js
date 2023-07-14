import styles from '../../styles/explore.module.css';
import {BiSolidBuildingHouse} from 'react-icons/bi';
import {GiIsland} from 'react-icons/gi';
import {GiFactory} from 'react-icons/gi';
import  {PiBankBold} from 'react-icons/pi'

function Explore() {
  return (
    <div className={`${styles.ExploreComponent} grid  w-10/12 md:w-[70%] lg:w-[60%]  mx-auto py-8`}>
        <p className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-4 md:py-8' >DINGOA CATEGORIES</p>
        <p className='text-black text-bold md:text-[40px] text-[22px] mx-auto py-4 md:pb-8'>Explore Our Categories & Places</p>

        <div className='flex justify-between w-full md:gap-[10px] flex-wrap md:flex-nowrap '>
        <div className={`${styles.CategoriesBoxes} grid items-center place-content-center mx-4 my-4 hover:bg-purple-500`}>
            <GiIsland  className={`${styles.IconStyle} mx-auto`} />
            <p className='md:text-lg text-small font-normal py-2 mx-auto' >Land</p>
        </div>
            <div className={`${styles.CategoriesBoxes} grid items-center place-content-center mx-4 my-4  hover:bg-purple-500 `} >
                <BiSolidBuildingHouse   className={`${styles.IconStyle}  mx-auto`}/>
                <p className='md:text-lg text-small font-normal py-2 mx-auto' >Residential</p>
            </div>
            <div className={`${styles.CategoriesBoxes} grid items-center place-content-center mx-4 my-4  hover:bg-purple-500`}>
            <PiBankBold  className={`${styles.IconStyle}  mx-auto`} />
            <p className='md:text-lg text-small font-normal py-2 mx-auto' >Commercial</p>
            </div>
            <div className={`${styles.CategoriesBoxes} grid items-center place-content-center mx-4 my-4  hover:bg-purple-500`}>
            <GiFactory  className={`${styles.IconStyle}  mx-auto`} />
                <p className='md:text-lg text-small font-normal py-2 mx-auto' >Industrial</p>
            </div>
        </div>

        <div className='w-[80%] md:w-5/6 mx-auto text-neutral-600 py-4 md:py-8'>
            <div className='flex justify-between py-2 md:py-4 border-b'>
                <p className='text-small uppercase'>ruiru</p> <p className='text-neutral-400 px-4 py-1 rounded-sm '>100 properties</p>
            </div>
            <div className='flex justify-between py-2 md:py-4 border-b'>
                <p className='text-small uppercase'>nairobi </p> <p className='text-neutral-400 px-4 py-1 rounded-sm'>100 properties</p>
            </div>
            <div className='flex justify-between py-2 md:py-4 border-b'>
                <p className='text-small uppercase'>KITengela </p> <p className='text-neutral-400 px-4 py-1 rounded-sm'>100 properties</p>
            </div>
            <div className='flex justify-between py-2 md:py-4 border-b'>
                <p className='text-small uppercase'>KIAMBU ROAD </p> <p className='text-neutral-400 px-4 py-1 rounded-sm'>100 properties</p>
            </div>
            <div className='flex justify-between py-2 md:py-4 border-b'>
                <p className='text-small uppercase'>NAIVASHA </p> <p className='text-neutral-400 px-4 py-1 rounded-sm'>100 properties</p>
            </div>
        </div>
    </div>
  )
}

export default Explore