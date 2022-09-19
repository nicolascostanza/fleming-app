import React, { useState } from "react";
import { Character } from "../../../helpers/types";
import styles from "./styles.module.css";

type Props = {
  data: Character[];
};

const CharacterList: React.FC<Props> = ({ data }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [characterSelected, setCharacterSelected] = useState<Character | any>(
    {}
  );
  const FormatterData = (date: string) => {
    const dateFormatted = new Date(date).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return <p>Created {dateFormatted}</p>;
  };
  const handleModal = (caracter: Character) => {
    console.log(caracter);
    setShowDetails(true);
    setCharacterSelected(caracter);
  };
  return (
    <div className={styles.container}>
      {data.map((caracter) => {
        return (
          <div className={styles.card}>
            <h2 key={caracter.id}>{caracter.name}</h2>
            <img
              className={styles.imagenCaracter}
              onClick={() => handleModal(caracter)}
              src={caracter.image}
              alt={caracter.name}
            />
          </div>
        );
      })}

      {showDetails ? (
        <div className={styles.modal}>
          <section className={styles.cardModal}>
            <div className={styles.exit}>
              <h1 className={styles.title}>DETAILS</h1>
              <span className={styles.equis} onClick={() => setShowDetails(false)}>X</span>
            </div>
            <div className={styles.headerModal}>
              <img
                className={styles.imagenDetails}
                src={characterSelected.image}
                alt={characterSelected.name}
              />
            </div>
            <div className={styles.boxDetail}>
              <p>{`Tipo ${characterSelected.type}`}</p>
              <p>{`Especie ${characterSelected.species}`}</p>
              <p>{`Estado ${characterSelected.status}`}</p>
              {FormatterData(characterSelected.created)}
              <p>{`Genero ${characterSelected.gender}`}</p>
              <p>{`Origen ${characterSelected.origin.name}`}</p>
              <p>{`Location ${characterSelected.location.name}`}</p>
            </div>
            <div>
              <p
                className={styles.lastTextBox}
              >{`Cantidad de episodios: ${characterSelected.episode.length}`}</p>
              <p>HACER UN DESLIZABLE CON LOS EPISODIOS</p>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
};

export default CharacterList;
