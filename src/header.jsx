import React from 'react'
import trollFace from "/trollFace.png"

export default function Header() {
  return (
        <header className="header">
            <img src={trollFace} alt='trollface icon'/>
            <h1>Meme Generator</h1>
        </header>
  )
}
