import "./App.css";
import React, { useState } from "react";
import Game from "../Game";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="App">
      <h1>Hangman</h1>
      {!gameStarted && (
        <button className="game-button" onClick={() => setGameStarted(true)}>
          Start Game
        </button>
      )}
      {gameStarted && <Game />}
    </div>
  );
}

export default App;
