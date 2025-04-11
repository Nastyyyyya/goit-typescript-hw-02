import { Image } from "../Image/Image.types";

export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}
