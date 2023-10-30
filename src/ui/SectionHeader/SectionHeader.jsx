// eslint-disable-next-line react/prop-types
const SectionHeader = ({ title, subTitle, className }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
