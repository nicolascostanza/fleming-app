export interface Character {
  created: string;
  episode: string[];
  gender: "Male" | "Female";
  name: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: "Alive" | "Dead" | "Unknown";
  type: string;
  url: string;
}

export interface Location {
  created: string,
  dimension: string,
  id: number,
  name: string,
  residents: string[],
  type: string,
  url: string
}

export interface Episode {
  air_date: string,
  characters: string[],
  created: string,
  id: number,
  name: string,
  episode: string
}

export interface InfoApi {
  count: number;
  next: null | string;
  pages: number;
  prev: null | string;
}

export let initValues = {
  count: 0,
  next: "",
  pages: 0,
  prev: "",
};
