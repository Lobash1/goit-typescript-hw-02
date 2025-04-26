export interface UnsplashImage {
  id: string;
  alt_description: string; //alt
  urls: {
    small: string; // gallery
    regular: string; //modal
  };
}

export interface UnsplashApiResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}
