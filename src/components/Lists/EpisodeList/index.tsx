import React from "react";
import { Episode } from "../../../helpers/types";
import styles from "./styles.module.css";

type Props = {
  data: Episode[];
};

const EpisodeList: React.FC<Props> = ({ data }) => {
  const dataFormatted = data.map((episode) => {
    const date = new Date(episode.created).toLocaleDateString("es-ar", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return date;
  });
  return (
    <>
      <h1 className={styles.title}>Episodios</h1>
      <div className={styles.container}>
        {data.map((episode, index) => (
          <div key={index} className={styles.card}>
            <h1 className={styles.subtitle}>{episode.name}</h1>
            <div className={styles.informationBoxCard}>
              <p className={styles.text}>{`Episodio ${episode.episode}`}</p>
              <p className={styles.text}>{`Día de emision ${episode.air_date}`}</p>
              <p className={styles.text}>{`Creada ${dataFormatted[index]}`}</p>
              <p className={styles.text}>{`Cantidad de personajes que actuaron ${episode.characters?.length}`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EpisodeList;
