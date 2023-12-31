// StylishCard.tsx
import React from "react";
import "./PhotoCard.css";

interface StylishCardProps {
  title: string;
  cardId: number;
  url: string;
}
import cardUrl from "../../assets/images/about.jpg";
const PhotoCard: React.FC<StylishCardProps> = ({ title, cardId }) => {
  return (
    <div data-aos="flip-left" data-aos-duration="4000" className="card">
      <a className="card-item_link">
        <div className="card-item_bg"></div>
        <div className="card-image-box">
          <img className="card-image" src={cardUrl} alt="card-url" />
        </div>
        <div className="card-item_title">
          <p>
            {title.length >= 80
              ? title.slice(18)
              : (title + title).length >= 80
              ? title + title.slice(0, 1)
              : title + title}
          </p>

          <p>Photo ID {cardId}</p>
        </div>
      </a>
    </div>
  );
};

export default PhotoCard;
