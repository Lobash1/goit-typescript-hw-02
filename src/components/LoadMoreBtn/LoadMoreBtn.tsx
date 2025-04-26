import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProp {
  page: number;
  onClick: () => void;
}

export default function LoadMoreBtn({ page, onClick }: LoadMoreBtnProp) {
  return (
    <button onClick={onClick} className={css.button}>
      Load More {page}
    </button>
  );
}
