import React, { useState } from 'react'

export default function Main() {

    const [meme, setmeme] = useState({
        topText: "One does not simply",
        bottomText:"Walk into Mordor",
        imageURL:"http://i.imgflip.com/1bij.jpg"
})

  return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder={meme.topText}
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder={meme.bottomText}
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageURL} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
  )
}
