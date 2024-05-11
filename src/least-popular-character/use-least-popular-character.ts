import { Character, Location } from "../../types";
import { useEffect, useState } from "react";
import { request } from "../utils/http";
import { getLeastPopularCharacter } from "./get-least-popular-character";

export const useLeastPopularCharacter = (): [
  Character | null,
  string | null,
  boolean,
] => {
  const [leastPopularCharacter, setLeastPopularCharacter] =
    useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const locationResponse = await request<Location>(
        "https://rickandmortyapi.com/api/location/1",
      );

      if (locationResponse.error) {
        setError(locationResponse.error);
        return;
      }

      const residentsIds = locationResponse.response?.residents.map(
        (residentUrl: string) =>
          residentUrl.match(/.*\/(?<charId>\d+)/)?.groups?.charId,
      );

      if (!residentsIds) {
        setError("Did not find any residents");
        setIsLoading(false);
        return;
      }

      const residentsResponse = await request<Array<Character>>(
        `https://rickandmortyapi.com/api/character/${residentsIds.join(",")}`,
      );

      if (residentsResponse.error) {
        setError("Failed getting residents information");
        setIsLoading(false);
        return;
      }

      if (!residentsResponse.response) {
        setError("Did not find any residents");
        setIsLoading(false);
        return;
      }

      setLeastPopularCharacter(
        getLeastPopularCharacter(residentsResponse.response),
      );
      setIsLoading(false);
    })();
  }, []);

  return [leastPopularCharacter, error, isLoading];
};
