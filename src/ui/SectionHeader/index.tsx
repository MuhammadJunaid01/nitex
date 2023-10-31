import { ISectionHeader } from "../../lib/interface";

const SectionHeader: React.FC<ISectionHeader> = ({
  title,
  subTitle,
  className,
}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
