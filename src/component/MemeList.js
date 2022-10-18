import Meme from "./Meme";
import React from "react"

const MemeList = ({ memes }) => {
  return (
    <div>
      {memes.map((meme) => (
        <Meme meme={meme} key={meme.id} />
      ))}
    </div>
  );
}

export default MemeList;