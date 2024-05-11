import { CharacterPopularity } from "../../types";
import { useEffect, useState } from "react";
import { getCharacterUniqueEpisodes } from "./get-characters-unique-episodes";

export const useGetCharactersPopularity = (
  characters: Array<string>,
): [Array<CharacterPopularity>, string | null, boolean] => {
  const [charactersPopularity, setCharactersPopularity] = useState<
    Array<CharacterPopularity>
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const charactersEpisodeCount = await Promise.all(
          characters.map(getCharacterUniqueEpisodes),
        );

        const maxEpisodeCount = Math.max(
          ...charactersEpisodeCount.map(
            (character) => character.uniqueEpisodes,
          ),
        );
        const characterPopularity = charactersEpisodeCount.map((character) => {
          const percentage = (character.uniqueEpisodes / maxEpisodeCount) * 100;

          return {
            name: character.name,
            percentage,
            uniqueEpisodes: character.uniqueEpisodes,
          };
        });
        setCharactersPopularity(characterPopularity);
      } catch {
        setError("Unable to load character information");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return [charactersPopularity, error, isLoading];
};
