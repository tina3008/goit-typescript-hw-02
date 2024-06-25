import css from './LoadMoreBtn.module.css'

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button className={css.btnmore} type="button" onClick={onClick}>
      Load more
    </button>
  );
}