import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageData {
  id: string | number;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string | null;
  likes?: number;
}

interface ImageGalleryProp {
  images: ImageData[];
  openModal: (url: string, alt: string) => void;
}

export default function ImageGallery({ images, openModal }: ImageGalleryProp) {
  // Перевіряємо, чи є зображення в масиві
  if (!images || images.length === 0) {
    return <p>No images found. Please try another search.</p>; //
  }

  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li
          onClick={() =>
            openModal(image.urls.regular, image.alt_description || "Image")
          }
          key={image.id}
          className={css.li}
        >
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description || "Image"}
          />
          <p className={css.text}>
            Likes: {image.likes} <br />
            Description: {image.alt_description || "No description"}
          </p>
        </li>
      ))}
    </ul>
  );
}
