import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  slug: string;
}

interface ImageGalleryProps {
  items: Image[];
  onImageClick: (slug: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={css.imgList}>
      {items.map(({ id, urls, slug }) => (
        <li key={id}>
          <ImageCard imgLink={urls} imgSlug={slug} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;