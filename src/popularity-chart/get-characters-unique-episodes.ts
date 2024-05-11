import { request } from "../utils/http";
import { CharacterSearchResults } from "../../types";

export const getCharacterUniqueEpisodes = async (
  characterName: string,
): Promise<{ name: string; uniqueEpisodes: number }> => {
  const response = await request<CharacterSearchResults>(
    `https://rickandmortyapi.com/api/character/?name=${encodeURI(characterName)}`,
  );

  if (!response.response) {
    return { name: characterName, uniqueEpisodes: 0 };
  }

  const episodes = response.response.results.flatMap(
    (character) => character.episode,
  );

  const uniqueEpisodes = new Set(episodes);

  return { name: characterName, uniqueEpisodes: uniqueEpisodes.size };
};
