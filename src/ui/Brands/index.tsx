import { IBrand } from "../../lib/interface";
import BrandCard from "../Cards/BrandCard";
import SectionHeader from "../SectionHeader";
import "./style.css";

const Brands: React.FC<IBrand> = ({ data }) => {
  return (
    <section data-aos="fade-down-right">
      <div className="container">
        <SectionHeader
          title="Our Brands"
          subTitle="We work with some of the most popular brands"
          className="section-header"
        />
        <div className="brand-logo">
          {data?.map((brand) => (
            <BrandCard key={brand} image={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
