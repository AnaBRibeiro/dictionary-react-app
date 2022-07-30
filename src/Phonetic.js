import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <span>
          <a
            href={props.phonetic.audio}
            target="_blank"
            rel="noreferrer"
            className="phonetic-listen"
          >
            Listen
          </a>
        </span>
        <span className="phonetic-text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
