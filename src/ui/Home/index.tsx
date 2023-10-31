import { heroSliders, testimonials } from "../../lib/data";
import About from "../../pages/about";
import Testimonials from "../../pages/testimonials";
import Brands from "../Brands/Brands";
import HeroSlider from "../HeroSlider";
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
