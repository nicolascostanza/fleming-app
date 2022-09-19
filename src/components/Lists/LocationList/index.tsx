import React from "react";
import { Location } from "../../../helpers/types";

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
    <div>
      {data.map((location, index) => (
        <div>
          <h1>{`Nombre ${location.name}`}</h1>
          <h3>{`Dimension ${location.dimension}`}</h3>
          <h3>{`Creada ${dataFormatted[index]}`}</h3>
          <h3>{`Tipo ${location.type}`}</h3>
          <h4>aca hacemos un deslizable con los personajes</h4>
          {/* <h3>{`Residentes ${location.type}`}</h3> */}
        </div>
      ))}
    </div>
  );
};

export default LocationList;
