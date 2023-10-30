// eslint-disable-next-line react/prop-types
const ServicesCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { img, shape, title, description } = data;
  return (
    <div>
      <div className="single-services">
        <div className="services-icon">
          <img className="shape" src={img} alt="shape" />
          <img className="shape-1" src={shape} alt="shape" />
        </div>
        <div className="services-content">
          <h4 className="services-title">
            <a href="#">{title}</a>
          </h4>
          <p className="text">{description}</p>
          <a className="more" href="#">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
