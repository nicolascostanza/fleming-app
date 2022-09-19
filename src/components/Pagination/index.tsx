import React from "react";
import styles from "./styles.module.css";

type Props = {
  onPrevious: () => void;
  onNext: () => void;
  previousPage: string | null;
  nextPage: string | null;
};

const Pagination: React.FC<Props> = ({
  onPrevious,
  onNext,
  previousPage,
  nextPage,
}) => {
  return (
    <div className={styles.container}>
      <button className={styles.btn} disabled={!previousPage} onClick={onPrevious}>
        Anterior
      </button>
      <button className={styles.btn} disabled={!nextPage} onClick={onNext}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
