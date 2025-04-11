import { Image } from "../Image/Image.types";

export interface AppState {
  images: Image[];
  query: string;
  page: number;
  loading: boolean;
  error: string | null;
  selectedImage: Image | null;
}
