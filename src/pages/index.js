import GetInTouch from "@/components/GetInTouch";
import Carousel from "@/components/Index/Carousel";
import Explore from "@/components/Index/Explore";
import FeaturedProperties from "@/components/Index/FeaturedProperties";
import Nav from "@/components/Nav";


export default function Home() {
  return (
<div>
<Nav />
<Carousel />
<Explore />
<FeaturedProperties />
<GetInTouch />

</div>
  )
}
