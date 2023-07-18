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

export default function Home() {
  return (
    <div className="w-screen ">
      <IndexNav />
      <IndexHero />

      <ReviewComponent testimonials={testimonials} />
      {/* <Whatsapp /> */}
    </div>
  );
}
