import css from "./ImageCard.module.css";

export default function ImageCard({ imgLink: { small, regular }, imgSlug, onClick }) {
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
}
