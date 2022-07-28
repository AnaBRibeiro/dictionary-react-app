import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definitions[0].definition}</p>
      <p>
        <em>{props.meaning.definitions[0].example}</em>
      </p>
      {props.meaning.definitions[0].synonyms.map(function (synonym, index) {
        return (
          <div key={index}>
            <p>{synonym}</p>
          </div>
        );
      })}
    </div>
  );
}
