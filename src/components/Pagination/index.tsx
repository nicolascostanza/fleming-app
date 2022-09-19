import React from "react";

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
    <>
      <button disabled={!previousPage} onClick={onPrevious}>Anterior</button>
      <button disabled={!nextPage} onClick={onNext}>Siguiente</button>
    </>
  );
};

export default Pagination;
