import { features } from "../../../data/data";
import ServicesCard from "../Cards/ServicesCard/ServicesCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./style.css";
const Features = () => {
  return (
    <section id="services" className="services-area">
      <div className="container">
        <SectionHeader
          title="Our Services"
          subTitle="We work with some of the most popular brands"
          className="section-header"
        />
        <div className="feature-items">
          {features?.map((feature) => (
            <ServicesCard key={feature.title} data={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
