import "./style.css";

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { image, title, description, author } = data;
  return (
    <div className="testimonial-card-wrapper">
      <div>
        <img src={image} alt="author" className="author-image" />
      </div>
      <div className="testimonial-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#">Author: {author}</a>
      </div>
    </div>
  );
};

export default TestimonialCard;
