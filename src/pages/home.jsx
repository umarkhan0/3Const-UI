import TopArrow from "../ReUsebalComponenets/TopArrow";
import DrawerAppBar from "../ReUsebalComponenets/header";
import Slider from "../HomepageCom/slider";
import BuildingsIntro from "../HomepageCom/buildings";
import Counter from "../HomepageCom/counter";
import Footer from "../ReUsebalComponenets/footer";
import SwiperSlider from '../ReUsebalComponenets/cardsCarasol.jsx';
export default function Home () {
    return(
        <>
    <div>
      <DrawerAppBar />
      <div className=' mt-8 sm:mt-14'>
        <Slider />
      </div>
     <BuildingsIntro />
     <Counter />
<SwiperSlider />
< Footer />
</div>
<div>
<TopArrow />
</div>
    </>
    )
}