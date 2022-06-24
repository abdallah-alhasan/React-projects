import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map((card) => <Card {...card} key={card.id}/>)
    return (
        <div>
            <Navbar/>
            {cards}
        </div>
    )
}