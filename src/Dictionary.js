import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
