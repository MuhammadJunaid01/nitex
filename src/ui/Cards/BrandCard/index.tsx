const BrandCard = ({ image }: { image: string }) => {
  return (
    <div className="single-logo">
      <img src={image} alt="brand" />
    </div>
  );
};

export default BrandCard;
