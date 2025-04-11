// src/types/Image.types.ts

export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user?: {
    name: string;
  };
  likes?: number;
}
