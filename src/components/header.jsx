import React from 'react'
import trollFace from "../aassets/trollFace.png"

export default function Header() {
  return (
        <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
  )
}
