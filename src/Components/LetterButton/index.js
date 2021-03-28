import React, { useState, useEffect } from "react";

const LetterButton = ({ buttonsDisabled, letter, letterGuessed }) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (buttonsDisabled) {
      setDisabled(true);
    }
  }, [buttonsDisabled]);

  return (
    <button
      disabled={disabled}
      onClick={() => {
        setDisabled(true);
        letterGuessed(letter);
      }}
    >
      {letter}
    </button>
  );
};

export default LetterButton;
