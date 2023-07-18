import GetInTouch from "@/components/GetInTouch";
import Carousel from "@/components/RealEstate/Carousel";
import Explore from "@/components/RealEstate/Explore";
import FeaturedProperties from "@/components/RealEstate/FeaturedProperties";
import Nav from "@/components/Nav";
import Whatsapp from "@/components/Whatsapp";
import IndexNav from "@/components/Index/IndexNav";
import IndexHero from "@/components/Index/IndexHero";
import ReviewComponent from "@/components/Index/ReviewComponent";
import { testimonials } from "@/components/data/testimonials";
// import styles from '../styles/review.module.css'

export default function Home() {
  return (
    <div >
      <IndexNav />
      <IndexHero />
      <ReviewComponent testimonials={testimonials} />
      <div className={`flex place-content-end px-4 fixed bottom-2 right-2`}>
            <Whatsapp message="Hello, I would like to enquire more about your services" />
      </div>
    </div>
  );
}
