import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import PropTypes from "prop-types";

export default function ImageGallery({ images, openModal }) {
  // Перевіряємо, чи є зображення в масиві
  if (!images || images.length === 0) {
    return <p>No images found. Please try another search.</p>;  // Можна повернути повідомлення, якщо зображень немає
  }

  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li
          onClick={() => openModal(image.urls.full, image.alt_description)}
          key={image.id}
          className={css.li}
        >
          <ImageCard src={image.urls.small} alt={image.alt_description || "Image"} />
          <p className={css.text}>
            Likes: {image.likes} <br />
            Description: {image.alt_description || "No description"}
          </p>
        </li>
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      urls: PropTypes.shape({
        full: PropTypes.string.isRequired,
        small: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
      likes: PropTypes.number,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};