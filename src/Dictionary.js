import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function searchPhotos() {
    let photosApiKey = `563492ad6f91700001000001b73422a8115d45fd98fe4e8848291256`;
    let numberOfPhotos = 6;
    let photosApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=${numberOfPhotos}`;
    let headers = { Authorization: `Bearer ${photosApiKey}` };
    axios.get(photosApiUrl, { headers: headers }).then(handlePhotosResponse);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    searchPhotos();
  }

  function searchWord() {
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    searchWord();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1 className="heading">What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              autoFocus={true}
              defaultValue={props.defaultKeyword}
              onChange={handleKeywordChange}
              className="form-input"
            />
          </form>
          <small className="word-example">
            e.g., coding, hello, plant, ...
          </small>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return <p>Loading...</p>;
  }
}
