
import homeHeroImg from "/src/assets/image_1.png"

import Hero from "../../components/Hero/Hero";
import Benchmarks from "../../components/Benchmarks/Benchmarks";
import AboutGrandAtlas from "../../components/AboutGrandAtlas/AboutGrandAtlas";
import Masterpieces from "../../components/Masterpieces/Masterpieces";
import Locations from "../../components/Locations/Locations";
import FutureLandmarks from "../../components/FutureLandmarks/FutureLandmarks";
function Home() {
  return (
    <>   <Hero bgImg={homeHeroImg} title="Redefining the Horizon of Modern Luxury Living"
   desc="We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"
   btn="Explore" />
   <Benchmarks/>
   <AboutGrandAtlas/>
   <Masterpieces/>
  <Locations/>
  <FutureLandmarks/>
   </>

  );

}

export default Home;