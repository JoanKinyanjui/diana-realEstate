import {IoLogoWhatsapp} from 'react-icons/io'

function Whatsapp({message}) {
  const phoneNumber = '+254100431400'
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IoLogoWhatsapp className='text-[40px] md:text-[50px] text-green-600' /> 
    </a>
  )
}

export default Whatsapp