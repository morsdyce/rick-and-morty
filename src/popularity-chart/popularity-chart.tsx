import "./popularity-chart.css";
import { useGetCharactersPopularity } from "./use-get-characters-popularity";

const CHARACTERS = [
  "Abradolf Lincler",
  "Arcade Alien",
  "Morty Smith",
  "Birdperson",
  "Mr. Meeseeks",
];
const COLORS = ["#f66c68", "#ffc76e", "#4caf50", "#7fdbff", "#3acccd"];

export const PopularityChart = () => {
  const [charactersPopularity, error, isLoading] =
    useGetCharactersPopularity(CHARACTERS);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="popularity-chart">
      <h1 className="popularity-chart-title">Popularity chart</h1>
      <div className="chart">
        {charactersPopularity.map((character, index) => (
          <div className="column" key={character.name}>
            <div
              className="bar"
              style={{
                height: character.percentage * 1.7,
                backgroundColor: COLORS[index],
              }}
            ></div>
            <div className="label">{character.name}</div>
          </div>
        ))}
      </div>
      <div className="legend">
        {charactersPopularity.map((character, index) => (
          <div key={character.name}>
            <span
              className="legend-color"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <span>{character.uniqueEpisodes}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
