import React, { useState } from "react";
import "./App.css";
import { LeastPopularCharacter } from "./least-popular-character/least-popular-character";
import { PopularityChart } from "./popularity-chart/popularity-chart";

function App() {
  const [selectedScreen, setSelectedScreen] = useState(
    "least-popular-character",
  );
  return (
    <>
      <div className="tv">
        <div className="tv-frame">
          <div className="tv-screen">
            {selectedScreen === "least-popular-character" && (
              <LeastPopularCharacter />
            )}
            {selectedScreen === "popularity-chart" && <PopularityChart />}
          </div>
        </div>
        <div className="tv-stand"></div>
        <div className="tv-leg"></div>

        <div className="cabinet">
          <div className="cabinet-top"></div>
          <div className="cabinet-corner"></div>
          <div className="cabinet-doors">
            <div className="cabinet-door left-door"></div>
            <div className="cabinet-door right-door"></div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={() => {
            setSelectedScreen("least-popular-character");
          }}
        >
          Least Popular Character
        </button>
        <button
          type="button"
          className="button"
          onClick={() => setSelectedScreen("popularity-chart")}
        >
          Popularity Chart
        </button>
      </div>
    </>
  );
}

export default App;
