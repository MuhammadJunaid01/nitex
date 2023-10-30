// eslint-disable-next-line react/prop-types
const BrandCard = ({ image }) => {
  return (
    <div className="single-logo">
      <img src={image} alt="brand" />
    </div>
  );
};

export default BrandCard;
