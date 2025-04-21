import css from "./LoadMoreBtn.module.css";


export default function LoadMoreBtn({page, onClick}) {
  return <button onClick={onClick} className={css.button}>Load More {page}</button>
}