import React from "react";
import { useLeastPopularCharacter } from "./use-least-popular-character";
import "./least-popular-character.css";

export const LeastPopularCharacter = () => {
  const [leastPopularCharacter, error, isLoading] = useLeastPopularCharacter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="least-popular-character">
      <div className="content">
        <img
          className="profile"
          alt={leastPopularCharacter?.name}
          src={leastPopularCharacter?.image}
        />
        <table className="least-popular-character-table">
          <tbody>
            <tr>
              <td>Character name</td>
              <td>{leastPopularCharacter?.name}</td>
            </tr>
            <tr>
              <td>Origin and dimension</td>
              <td>{leastPopularCharacter?.origin.name}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{leastPopularCharacter?.status}</td>
            </tr>
            <tr>
              <td>Species</td>
              <td>{leastPopularCharacter?.species}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{leastPopularCharacter?.gender}</td>
            </tr>
            <tr>
              <td>Popularity</td>
              <td>{leastPopularCharacter?.episode.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="news-title">
        BREAKING NEWS: Least popular resident survey results
      </h1>
    </div>
  );
};
