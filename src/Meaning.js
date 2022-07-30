import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definitions[0].definition}</p>
      <p className="example">{props.meaning.definitions[0].example}</p>
      {props.meaning.definitions[0].synonyms.map(function (synonym, index) {
        return (
          <div key={index}>
            <p className="synonym">{synonym}</p>
          </div>
        );
      })}
    </div>
  );
}
