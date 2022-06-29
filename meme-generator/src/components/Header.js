import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://www.kindpng.com/picc/m/410-4105079_decent-memes-png-logo-harry-potter-starbucks-transparent.png" 
                className="header--image"
                alt="meme"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}