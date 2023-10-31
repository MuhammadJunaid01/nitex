import { heroSliders, testimonials } from "../../lib/data";
import About from "../../pages/about/About";
import Testimonials from "../../pages/testimonials/Testimonials";
import Brands from "../Brands/Brands";
import HeroSlider from "../HeroSlider/HeroSlider";
import NewsLetter from "../NewsLetter";
import Photos from "../Photos";

const Home = () => {
  return (
    <div>
      <HeroSlider slideData={heroSliders} />
      <Photos />
      <About />
      <Brands />
      <Testimonials data={testimonials} />
      <NewsLetter />
    </div>
  );
};

export default Home;
