import React, { useState, useEffect } from "react";
import DisplayedWord from "../DisplayedWord";
import Image from "../Image";
import LetterButton from "../LetterButton";

//get a random Movie from array
function getMovie() {
  let movArray = [
    "titanic",
    "avatar",
    "fight club",
    "now you see me",
    "parasite",
    "toy story",
    "shrek",
    "donnie darko",
    "men in black",
  ];
  let randIndex = Math.floor(Math.random() * movArray.length);
  return movArray[randIndex];
}

//function takes in movie name and creates a string with _ to replace letters
function createHiddenWord(randWord) {
  return randWord.replace(/\w/g, "_");
}

function Game() {
  let buttonsDisabled = false;
  let RandWord = getMovie();

  const [word] = useState(RandWord);
  const [displayedWord, setDisplayedWord] = useState(
    createHiddenWord(RandWord)
  );
  const [imageSrc, setImageSrc] = useState("");
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  useEffect(() => console.log(word));
  let changedDisplayedWord = displayedWord;

  //function to check whether the letter guessed is in the word, if there is a match it will update the displayed word to show the guessed letter
  function letterGuessed(letter) {
    let matchFound = false;

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        matchFound = true;
        changedDisplayedWord =
          changedDisplayedWord.substring(0, i) +
          letter +
          changedDisplayedWord.substring(i + 1);
      }
    }
    let newIncorrectGuesses;

    // if no matches found, update incorrect guesses counter and update image displayed
    if (matchFound === false) {
      newIncorrectGuesses = incorrectGuesses + 1;
      setIncorrectGuesses(newIncorrectGuesses);
      setImageSrc(`./images/${newIncorrectGuesses}.png`);
    }
    setDisplayedWord(changedDisplayedWord);
  }
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  //check if player has won. If player has won, disable all buttons and show message
  let message = "";
  if (displayedWord === word) {
    message = "You Won";
    buttonsDisabled = true;
  }

  if (incorrectGuesses === 6) {
    buttonsDisabled = true;
  }

  function newGame() {
    window.location.reload();
  }

  return (
    <div className="game">
      {alphabet.map((item, index) => {
        return (
          <LetterButton
            buttonsDisabled={buttonsDisabled}
            letter={item}
            letterGuessed={letterGuessed}
            key={index}
          />
        );
      })}
      <h2>{message}</h2>
      <DisplayedWord displayedWord={displayedWord} />
      <Image imageSrc={imageSrc} />
      <button className="game-button" onClick={newGame}>
        New Game
      </button>
    </div>
  );
}

export default Game;
