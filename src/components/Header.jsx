import React from 'react'

export const Header = () => {
  return (
    <header className="header">
        <img 
            className="header--img"
            src=".//images/troll-face.png"
            alt="troll-face" />
        <h2 className="header--title"> Meme Generator </h2>
        <h4 className="header--project"> React Project #3 </h4>
    </header>
  )
}