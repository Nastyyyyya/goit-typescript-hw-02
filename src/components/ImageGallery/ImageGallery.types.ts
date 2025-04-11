import { Image } from "../Image/Image.types";

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}
