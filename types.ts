export interface Location {
  residents: Array<string>;
}

export interface Character {
  episode: Array<string>;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: string;
  image: string;
}

export interface CharacterSearchResults {
  results: Array<Character>;
}

export interface CharacterPopularity {
  name: string;
  uniqueEpisodes: number;
  percentage: number;
}
