import css from "./ImageCard.module.css";
import { Link } from "../App.types";

interface ImageCardProps {
  imgLink: Link;
  imgSlug: string;
  onClick: (imageUrl: string) => void;
}


const ImageCard: React.FC<ImageCardProps> = ({
  imgLink: { small },
  imgSlug,
  onClick,
}) => {
  const handleClick = () => {
    onClick(small);
  };

  return (
    <div>
      <img
        className={css.card}
        src={small}
        alt={imgSlug}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
