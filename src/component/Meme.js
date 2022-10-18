import React from "react"
import "../App.css"
const Meme = ({ meme }) => {
  return (
    <div >
      <img className="meme" alt="" src={meme.url} />
      <h3 className="meme-text" >{meme.name}</h3>
    </div>
  )
}

export default Meme;