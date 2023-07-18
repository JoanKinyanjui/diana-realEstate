import {IoLogoWhatsapp} from 'react-icons/io'

function Whatsapp({message}) {
  return (
    <a
      href="https://wa.me/+254790236990?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className='flex place-content-center items-center'
    >
      <IoLogoWhatsapp className='text-[40px] md:text-[50px] text-green-600' /> 
    </a>
  )
}

export default Whatsapp