import BrandCard from "../Cards/BrandCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./style.css";
const Brands = () => {
  const brands = [
    "https://preview.uideck.com/items/basic/assets/images/brands/uideck.svg",
    "https://preview.uideck.com/items/basic/assets/images/brands/ayroui.svg",
    "https://preview.uideck.com/items/basic/assets/images/brands/graygrids.svg",
    "https://preview.uideck.com/items/basic/assets/images/brands/lineicons.svg",
    "https://preview.uideck.com/items/basic/assets/images/brands/ecommerce-html.svg",
  ];

  return (
    <section>
      <div className="container">
        <SectionHeader
          title="Our Brands"
          subTitle="We work with some of the most popular brands"
          className="section-header"
        />
        <div className="brand-logo">
          {brands?.map((brand) => (
            <BrandCard key={brand} image={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
