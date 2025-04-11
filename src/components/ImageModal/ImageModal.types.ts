import { Image } from "../Image/Image.types";

export interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}
