import { string } from "yup";
import css from "./ImageCard.module.css";

interface ImageCardProp {
  src: string;
  alt: string;
}

export default function ImageCard({ src, alt }: ImageCardProp) {
  return (
    <div className={css.divCard}>
      <img className={css.cardImage} src={src} alt={alt} />
    </div>
  );
}
