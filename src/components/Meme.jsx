import React, { useState } from 'react';

export const Meme = () => {
 

    // Meme initial
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

    // randomImage from data
    const getMemeImage = () => {
        // const memesObj = allMemes
        const randomNumber = (Math.floor(Math.random() * allMemes.length ));

        // setMeme
        setMeme((prevMeme) => {
            return (
                {randomImage: allMemes[randomNumber].url}
            )
        })
    }

    function handleChange(event) {
        const {name, value } = event.target
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // return
    return (
    <main>
        <div className="form">
            <input
                name="topText"
                className="form--input" 
                type="text" 
                placeholder="Top text"
                value={meme.topText}
                onChange={handleChange}
                />
            <input 
                name="bottomText"
                className="form--input" 
                type="text" 
                placeholder="Button text" 
                value={meme.bottomText}
                onChange={handleChange}/>
            <button onClick={getMemeImage} className="form--button"> Gimme a Meme! </button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} alt="#" className="meme--img" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
  )
}

/* const [isGoingOut, setIsGoingOut] = React.useState(false)
const buttonClick = () => setIsGoingOut(previousValue => !previousValue) */