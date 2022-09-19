import React from "react";
import { Episode } from "../../../helpers/types";

type Props = {
  data: Episode[];
};

const EpisodeList: React.FC<Props> = ({ data }) => {
  console.log(data);

  const dataFormatted = data.map((episode) => {
    const date = new Date(episode.created).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return date;
  });
  return (
    <div>
      {data.map((episode, index) => (
        <div>
          <h1>{`Dimension ${episode.name}`}</h1>
          <h3>{`Episodio ${episode.episode}`}</h3>
          <h3>{`Día de emision ${episode.air_date}`}</h3>
          <h3>{`Creada ${dataFormatted[index]}`}</h3>
          <h4>aca hacemos un deslizable con los personajes</h4>
          {/* <h3>{`Residentes ${episode.characters}`}</h3> */}
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
