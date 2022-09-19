import { useState, useEffect } from "react";
import styles from "../css/ejercicio1.module.css";
import CharacterList from "../components/Lists/CharacterList";
import EpisodeList from "../components/Lists/EpisodeList";
import LocationList from "../components/Lists/LocationList";
import Pagination from "../components/Pagination";
import {
  Character,
  Location,
  Episode,
  InfoApi,
  initValues,
} from "../helpers/types";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [infoApi, setInfoApi] = useState<InfoApi>(initValues);
  const [tab, setTab] = useState<string>("CharacterList");

  const getCharacters = (
    url: string = "https://rickandmortyapi.com/api/character"
  ) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfoApi(data.info);
      })
      .catch((error) => console.log(error));
  };
  const getLocations = (
    url: string = "https://rickandmortyapi.com/api/location"
  ) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfoApi(data.info);
        setLocations(data.results);
      })
      .catch((error) => console.log(error));
  };

  const getEpisodes = (
    url: string = "https://rickandmortyapi.com/api/episode"
  ) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data.results);
        setInfoApi(data.info);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCharacters();
    // getLocations();
    // getEpisodes();
  }, []);

  const onPrevious = () => {
    getCharacters(infoApi.prev ? infoApi.prev : undefined);
    getLocations(infoApi.prev ? infoApi.prev : undefined);
    getEpisodes(infoApi.prev ? infoApi.prev : undefined);
  };
  const onNext = () => {
    getCharacters(infoApi.next ? infoApi.next : undefined);
    getLocations(infoApi.next ? infoApi.next : undefined);
    getEpisodes(infoApi.next ? infoApi.next : undefined);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navBarFilter}>
        <button className={styles.btnScreen} onClick={() => setTab("CharacterList")}>Personajes</button>
        <button className={styles.btnScreen} onClick={() => setTab("LocationList")}>Lugares</button>
        <button className={styles.btnScreen} onClick={() => setTab("EpisodeList")}>Episodios</button>
      </nav>
      <main>
        <Pagination
          onNext={onNext}
          onPrevious={onPrevious}
          previousPage={infoApi.prev}
          nextPage={infoApi.next}
        />
        {tab === "CharacterList" && <CharacterList data={characters} />}
        {tab === "LocationList" && <LocationList data={locations} />}
        {tab === "EpisodeList" && <EpisodeList data={episodes} />}
      </main>
    </div>
  );
};

export default RickAndMorty;
