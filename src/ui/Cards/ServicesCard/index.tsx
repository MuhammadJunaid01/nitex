interface IService {
  data: { img: string; shape: string; title: string; description: string };
}
const ServicesCard: React.FC<IService> = ({ data }) => {
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
