import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.imgList}>
      {items.map(({ id, urls, slug }) => (
        <li key={id}>
          <ImageCard imgLink={urls} imgSlug={slug} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
