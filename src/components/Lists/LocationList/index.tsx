import React from "react";
import { Location } from "../../../helpers/types";
import styles from "./styles.module.css";

type Props = {
  data: Location[];
};

const LocationList: React.FC<Props> = ({ data }) => {
  const dataFormatted = data.map((location) => {
    const date = new Date(location.created).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return date;
  });
  return (
    <>
      <h1 className={styles.title}>Lugares</h1>
      <div className={styles.container}>
        {data.map((location, index) => (
          <div key={index} className={styles.card}>
            <h1 className={styles.subtitle}>{`${location.name}`}</h1>
            <div className={styles.informationBoxCard}>
              <p className={styles.text}>{`Dimension ${location.dimension}`}</p>
              <p className={styles.text}>{`Creada ${dataFormatted[index]}`}</p>
              <p className={styles.text}>{`Tipo ${location.type}`}</p>
              <p className={styles.text}>{`Cantidad de residentes ${location.residents?.length}`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LocationList;
