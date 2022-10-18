import React, { useEffect } from "react"
import './App.css';
import MemeList from './component/MemeList';
import Meme from "./component/Meme";
import { useState } from 'react';
import getMemes from './api/meme';

const App = () => {
  const [memeList, setMemeList] = useState([]);
  useEffect(() => {
    getMemes().then((res) => {

      setMemeList([res.data.data.memes[Math.floor(Math.random() * 100)]]);
    });
  }, []);

  return (
    <div>
      <MemeList memes={memeList} />
      <div>
        <button className="meme-button" onClick={async () => {
          const res = await getMemes();
          setMemeList([res.data.data.memes[Math.floor(Math.random() * 100)]]);
        }}>Get Memes</button>
      </div>
    </div>
  );

}


export default App;