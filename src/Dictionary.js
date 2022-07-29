import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let photosApiKey = `563492ad6f91700001000001b73422a8115d45fd98fe4e8848291256`;
    let numberOfPhotos = 6;
    let photosApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=${numberOfPhotos}`;
    let headers = { Authorization: `Bearer ${photosApiKey}` };
    axios.get(photosApiUrl, { headers: headers }).then(handlePhotosResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
