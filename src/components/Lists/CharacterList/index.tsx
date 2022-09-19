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
    setShowDetails(true);
    setCharacterSelected(caracter);
  };
  return (
    <div className={styles.container}>
      {data.map((caracter) => {
        return (
          <div>
            <h2 key={caracter.id}>{caracter.name}</h2>
            <img
              onClick={() => handleModal(caracter)}
              src={caracter.image}
              alt={caracter.name}
            />
          </div>
        );
      })}

      {showDetails ? (
        <div className={styles.modal}>
          <section className={styles.card}>
            <div>
              <h1>{characterSelected.name}</h1>
              <img src={characterSelected.image} alt={characterSelected.name} />
            </div>
            <div>
              <p>{`Tipo ${characterSelected.type}`}</p>
              <p>{`Especie ${characterSelected.species}`}</p>
              <p>{`Estado ${characterSelected.status}`}</p>
              {FormatterData(characterSelected.created)}
              <p>{`Genero ${characterSelected.gender}`}</p>
            </div>
            <div>
              <p>Origen</p>
              <p>{characterSelected.origin.name}</p>
              <a>
                <p>{characterSelected.origin.url}</p>
              </a>
              <p>Location</p>
              <p>{characterSelected.location.name}</p>
              <a>
                <p>{characterSelected.location.url}</p>
              </a>
              <p>{`Cantidad de episodios: ${characterSelected.episode.length}`}</p>
              <p>HACER UN DESLIZABLE CON LOS EPISODIOS</p>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
};

export default CharacterList;
