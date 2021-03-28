import React from "react";

function Image({ imageSrc }) {
  if (imageSrc) {
    return (
      <div>
        <img alt={"hangman"} src={imageSrc} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Image;
