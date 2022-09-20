import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

type Props = {
  onPrevious: () => void;
  onNext: () => void;
  previousPage: string | null;
  nextPage: string | null;
  pages: number;
};

const Pagination: React.FC<Props> = ({
  onPrevious,
  onNext,
  previousPage,
  nextPage,
  pages,
}) => {
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    if (nextPage !== null) {
      setPage(parseInt(nextPage?.split("=")[1]) - 1);
    } else {
      setPage((prev: any) => prev + 1);
    }
  }, [nextPage]);

  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        disabled={!previousPage}
        onClick={onPrevious}
      >
        Anterior
      </button>
      <p className={styles.textPage}>{`Page ${page} of ${pages}`}</p>
      <button className={styles.btn} disabled={!nextPage} onClick={onNext}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
