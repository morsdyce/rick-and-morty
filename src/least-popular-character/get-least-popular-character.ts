import { Character } from "../../types";

export const getLeastPopularCharacter = (
  residents: Array<Character>,
): Character => {
  const residentsWithFewestEpisodes = residents.reduce<{
    fewestEpisodesFound?: number;
    matches: Array<Character>;
  }>(
    (residentMatches, resident) => {
      if (!residentMatches.fewestEpisodesFound) {
        return {
          fewestEpisodesFound: resident.episode.length,
          matches: [resident],
        };
      }

      if (resident.episode.length < residentMatches.fewestEpisodesFound) {
        return {
          fewestEpisodesFound: resident.episode.length,
          matches: [resident],
        };
      }

      if (resident.episode.length === residentMatches.fewestEpisodesFound) {
        residentMatches.matches.push(resident);
        return residentMatches;
      }

      return residentMatches;
    },
    { matches: [] },
  );

  const sortedResidentsAlphabetically =
    residentsWithFewestEpisodes.matches.sort((resident_a, resident_b) => {
      const resident_a_name = resident_a.name.toLowerCase();
      const resident_b_name = resident_b.name.toLowerCase();

      if (resident_a_name < resident_b_name) return -1;
      if (resident_b_name < resident_a_name) return 1;
      return 0;
    });

  return sortedResidentsAlphabetically[
    sortedResidentsAlphabetically.length - 1
  ];
};
