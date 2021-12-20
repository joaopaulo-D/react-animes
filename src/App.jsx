import React, { useEffect, useState } from "react";
import "./App.css";

import loading from "./assets/loading.gif";

import SearchInput from "./components/SearchInput";
import InfoCard from "./components/InfoCard";

const api = "https://kitsu.io/api/edge/";

function App() {

  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if(text){
      setInfo({})
      fetch(`${api}anime?filter[text]=${text}&page[limit]=15`)
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        setData(data)
      })
    }
  }, [text])

  function setData(data){
    setInfo(data)
  }

  return (
    <div className="App">
      <h1>Anime</h1>
      <SearchInput
        value={text}
        onChange={e => setText(e)}
      />
    
      {text && !info.data && (
        <img className="loading" src={loading} alt=""/>
      )}

      {info.data && (
        <ul className="anime-list">
          {info.data.map((anime) => (
            <InfoCard
              key={anime.id}
              img={anime.attributes.posterImage.small}
              title={anime.attributes.canonicalTitle}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
