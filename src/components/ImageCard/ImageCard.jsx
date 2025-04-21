import css from "./ImageCard.module.css";

export default function ImageCard({ src, alt }) {
  return (
    <div className={css.divCard}>
      <img  className={css.cardImage} src={src} alt={alt} />
    </div>
  );
}
