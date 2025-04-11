import React from "react";
import style from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => (
  <div className={style.card} onClick={() => onClick(image)}>
    <img
      src={image.urls.small}
      alt={image.alt_description}
      className={style.galleryImg}
    />
  </div>
);

export default ImageCard;
