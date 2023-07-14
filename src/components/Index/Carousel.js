import Slider from "react-slick";
import styles from '../../styles/Carousel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000,
    }
  return (
    <div  className={`${styles.CarouselComponent}`}>
     
 <div>
 <Slider {...settings}>
      <div className={`${styles.slide} w-full  md:h-[900px] h-[350px]`}>
       <div className={`${styles.imageContainer} h-full`}>
       <img src="/images/image2.jpg" alt="Image 1" />
       <div className={`${styles.overlay}`}></div>
       </div>
        <div className={`${styles.content}`}>
          <h3>Your Propert Is Our Priority</h3>
          <p>Find your yanctuary in the world of real estate</p>
        </div>
      </div>
      <div  className={`${styles.slide} w-full  md:h-[900px] h-[350px]`}>
      <div className={`${styles.imageContainer}`}>
      <img src="/images/image4.jpg" alt="Image 2" />
      <div className={`${styles.overlay}`}></div>
        </div>
        <div className={`${styles.content}`} >
          <h3>Let Your House Be Unique And Modern</h3>
          <p>Experience real estate exellence, every step of the way</p>
        </div>
      </div>
      <div className={`${styles.slide} w-full  md:h-[900px] h-[350px]`}>
      <div className={`${styles.imageContainer}`}>
        <img src="/images/image3.jpg" alt="Image 3" />
        <div className={`${styles.overlay}`}></div>
        </div>
        <div className={`${styles.content}`} >
          <h3>Discover Your Perfect Space</h3>
          <p>with Dingoa Consultants we  help you build dreams one home at a time</p>
        </div>
      </div>
    </Slider>
      </div>
    </div>
  )
}

export default Carousel