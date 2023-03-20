import React from 'react'

export default function Portfolio(){
    const cardStyle = {margin: '5px'}
    const cardHolder = {margin: '20px', display: 'block'}
    return (
        <div>

            <h1>Projects</h1>
            <h3>Below are a few projects I've had the plesure of building</h3>
            
            <div className="row">
            <div className="col-sm-6">
            <div className="card" style={cardHolder}>
            <div className="card-title" style={cardStyle}>
                <h3 className="text-center"><a href="https://audrey-505.github.io/animated-spork/">🍿Minder Movie Dating</a></h3>
            </div>
            <div className="card-body d-flex text-center">
                <a href="https://github.com/Audrey-505/animated-spork"><img src={require("../images/github.png")} width="15%"/></a>
            </div>
            </div>
            </div>

            <div className="col-sm-6">
            <div className="card" style={cardHolder}>
            <div className="card-title" style={cardStyle}>
                <h3 className="text-center"><a href="https://iwanna.herokuapp.com/">🦎iWanna</a></h3>
            </div>
            <div className="card-body d-flex text-center">
                <a href="https://github.com/Audrey-505/iWanna-mvc"><img src={require("../images/github.png")} width="15%"/></a>
            </div>
            </div>
            </div>

            <div className="col-sm-6">
            <div className="card" style={cardHolder}>
            <div className="card-title" style={cardStyle}>
                <h3 className="text-center"><a href="https://audrey-505.github.io/5-Day-Weather-Forcast/">🌤Weather App</a></h3>
            </div>
            <div className="card-body d-flex text-center">
                <a href="https://github.com/Audrey-505/5-Day-Weather-Forcast"><img src={require("../images/github.png")} width="15%"/></a>
            </div>
            </div>
            </div>

        <div className="col-sm-6">
            <div className="card" style={cardHolder}>
            <div className="card-title" style={cardStyle}>
                <h3 className="text-center"><a href="https://daily-note-keeper-11323.herokuapp.com/">📝Daily Note Keeper</a></h3>
            </div>
            <div className="card-body d-flex text-center">
                <a href="https://github.com/Audrey-505/Daily-Notes-Hero"><img src={require("../images/github.png")} width="15%"/></a>
            </div>
            </div>
            </div>

            <div className="col-sm-6">
            <div className="card" style={cardHolder}>
            <div className="card-title" style={cardStyle}>
                <h3 className="text-center"><a href="https://audrey-505.github.io/">🥁Drum Kit</a></h3>
            </div>
            <div className="card-body d-flex text-center">
                <a href="https://github.com/Audrey-505/Audrey-505.Drums.io"><img src={require("../images/github.png")} width="15%"/></a>
            </div>
            </div>
            </div>

            <div className="col-sm-6">
            <div className="card" style={cardHolder}>
            <div className="card-title" style={cardStyle}>
                <h3 className="text-center"><a href="https://audrey-505.github.io/Audrey-505-.Simon-Game.io/">🔴🔵🟡🟢Follow Simon</a></h3>
            </div>
            <div className="card-body d-flex text-center">
                <a href="https://github.com/Audrey-505/Audrey-505-.Simon-Game.io"><img src={require("../images/github.png")} width="15%"/></a>
            </div>
            </div>
            </div>

            </div>
        </div>
    )
}