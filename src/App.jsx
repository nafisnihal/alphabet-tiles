import { useState } from "react";
import "./App.css";
import AlphabetTiles from "./components/AlphabetTiles/AlphabetTiles";

const App = () => {
  const [outputString, setOutputString] = useState("");

  const handleTileClick = (letter) => {
    let newOutputString = outputString + letter;
    newOutputString = replaceConsecutiveLetters(newOutputString);
    setOutputString(newOutputString);
  };

  const replaceConsecutiveLetters = (str) => {
    return str.replace(/(.)\1{2,}/g, (match) =>
      "_".repeat(Math.ceil(match.length / 3))
    );
  };

  return (
    <div className="App">
      <h1>Alphabet Tiles</h1>
      <AlphabetTiles onTileClick={handleTileClick} />
      <div id="outputContainer">
        <h2>Output String:</h2>
        <p id="outputString">{outputString}</p>
      </div>
    </div>
  );
};

export default App;
