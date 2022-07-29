import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <p>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen
          </a>
        </p>
        <p>{props.phonetic.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
