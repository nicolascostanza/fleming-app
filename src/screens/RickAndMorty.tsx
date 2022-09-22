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
    if (tab === "CharacterList") {
      getCharacters();
    }
    if (tab === "LocationList") {
      getLocations();
    }
    if (tab === "EpisodeList") {
      getEpisodes();
    }
  }, [tab]);

  const onPrevious = () => {
    if (infoApi.prev) {
      getCharacters(infoApi.prev);
      getLocations(infoApi.prev);
      getEpisodes(infoApi.prev);
    }
  };
  const onNext = () => {
    if (infoApi.next) {
      getCharacters(infoApi.next);
      getLocations(infoApi.next);
      getEpisodes(infoApi.next);
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navBarFilter}>
        <a className={styles.filtro} onClick={() => setTab("CharacterList")}>
          Personajes
        </a>
        <a className={styles.filtro} onClick={() => setTab("LocationList")}>
          Lugares
        </a>
        <a className={styles.filtro} onClick={() => setTab("EpisodeList")}>
          Episodios
        </a>
      </nav>
      <main>
        <Pagination
          onNext={onNext}
          onPrevious={onPrevious}
          previousPage={infoApi.prev}
          nextPage={infoApi.next}
          pages={infoApi.pages}
        />
        {tab === "CharacterList" && <CharacterList dataCaracteres={characters} />}
        {tab === "LocationList" && <LocationList data={locations} />}
        {tab === "EpisodeList" && <EpisodeList data={episodes} />}
        <Pagination
          onNext={onNext}
          onPrevious={onPrevious}
          previousPage={infoApi.prev}
          nextPage={infoApi.next}
          pages={infoApi.pages}
        />
      </main>
    </div>
  );
};

export default RickAndMorty;
