import css from "./Loader.module.css";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "purple",
    animationDuration: "1.5s", // кастомна швидкість
  };
  return (
    <div className={css.loader}>
      <ClipLoader
        color="rgb(101, 2, 146) "
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={override}
      />
    </div>
  );
}
