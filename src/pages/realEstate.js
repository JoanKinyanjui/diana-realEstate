import GetInTouch from "@/components/GetInTouch";
import Carousel from "@/components/RealEstate/Carousel";
import Explore from "@/components/RealEstate/Explore";
import FeaturedProperties from "@/components/RealEstate/FeaturedProperties";
import Nav from "@/components/Nav";
import Whatsapp from "@/components/Whatsapp";
import styles from "../styles/realEstate.module.css";

export default function RealEstate() {
  return (
    <div className={`${styles.RealEstateDiv} flex flex-col min-h-screen`}>
      <Carousel />
      {/* <Nav /> */}
      <Explore />
      <FeaturedProperties />
      <GetInTouch />
      <div
        className={`${styles.RealEstateWhatsapp} flex place-content-end px-4 fixed bottom-1 right-0`}
      >
        <Whatsapp message="Hello , I would like to know more about your Realtor services" />
      </div>
    </div>
  );
}
