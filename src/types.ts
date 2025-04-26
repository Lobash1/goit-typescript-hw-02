export interface UnsplashImage {
  id: string;
  alt_description: string; //alt
  urls: {
    small: string; // gallery
    regular: string; //modal
  };
}
