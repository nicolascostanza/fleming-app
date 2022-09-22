import React, { useState, useEffect } from "react";
import { Character } from "../../../helpers/types";
import styles from "./styles.module.css";

type Props = {
  dataCaracteres: Character[];
};

const CharacterList: React.FC<Props> = ({ dataCaracteres }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [characterSelected, setCharacterSelected] = useState<Character | any>(
    {}
  );
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    if(Array.isArray(dataCaracteres[0]?.episode)){
      setList(
        dataCaracteres?.map((elemento) => {
          return elemento.episode.map((elem) => elem.split('/')[5])
        })
      );
    }else{
      setList([])
    }
  }, [dataCaracteres]);

  const FormatterdataCaracteres = (date: string) => {
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
    <>
      <h1 className={styles.headingTitle}>Personajes</h1>
      <div className={styles.container}>
        {dataCaracteres.map((caracter) => {
          return (
            <div key={caracter.id} className={styles.card}>
              <h2 className={styles.titleCard}>{caracter.name}</h2>
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
                <span
                  className={styles.equis}
                  onClick={() => setShowDetails(false)}
                >
                  X
                </span>
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
                {FormatterdataCaracteres(characterSelected.created)}
                <p>{`Genero ${characterSelected.gender}`}</p>
                <p>{`Origen ${characterSelected.origin?.name}`}</p>
                <p>{`Location ${characterSelected.location?.name}`}</p>
                <p
                  className={styles.lastTextBox}
                >{`Cantidad de episodios ${characterSelected.episode.length}`}</p>
                <p>Numero de episodios</p>
                <select className={styles.selectEpisodes}>
                  {list[characterSelected.id - 1]?.map((caract: string, index:number) => {
                    return <option key={index}>{caract}</option>;
                  })}
                </select>
              </div>
            </section>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CharacterList;
