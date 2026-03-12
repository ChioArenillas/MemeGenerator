import React from 'react'
import trollFaceIcon from "../public/trollface.png"

export default function Header() {
  return (
        <header className="header">
            <img src={trollFaceIcon} alt='trollface icon'/>
            <h1>Meme Generator</h1>
        </header>
  )
}
