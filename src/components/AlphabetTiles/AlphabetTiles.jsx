import "./AlphabetTiles.css";

// eslint-disable-next-line react/prop-types
const AlphabetTiles = ({ onTileClick }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="grid-container">
      {letters.map((letter) => (
        <button
          key={letter}
          className="tile"
          onClick={() => onTileClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default AlphabetTiles;
