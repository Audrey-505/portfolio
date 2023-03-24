import React from 'react'
import Footer from '../Footer'

export default function About(){
    const imgStyle = {display: "block"}
    return (
        <div>
            <h1 className="text-center">About Me</h1>
            <p className="text-center"> Hi! My name is Adriana Alcantara however, I often go by Audrey, and I am an Atlanta based developer.<br />
                <img className="img-fluid rounded mx-auto d-block" src={require("../images/portAudrey.JPG")} width="450" height="350" style={imgStyle}/> 
                I decided to switch gears from working in customer support to programming as I felt it was more in line with my personal strong suits and interests. The transition has not been without difficulty however, 
                there were instances where I was not sure if I was cut out for the challenge of learning all new concepts but day by day, with the help of family, friends and instructors I was able to gain confidence in the skills I was learning. 
                In my time in the web development bootcamp I attended, I was not only fortunate enough to learn several new technical skills and technologies, but most importantly I learned “how to learn”. 
                Stepping into an industry that is ever growing and changing I saw the importance of understanding that I will never stop learning and establishing a foundation of steps for learning new technologies. Having stated that, 
                as a junior developer I have spent the last few years building apps and growing my knowledge base. I attended Georgia Institute of Technology's Full Stack Development bootcamp,
                and I aspire to contribute all that I have learned with the right company.
                <br/>
                <br/>
                <br/>
                When I am not working on my next project I can usually be found trying a new recipe or on a hike. 
                I am a big fan of the movie industry and am always down to watch the latest movie or your favorite childhood film.
                I am a passionate, goal-driven person who attempts to enjoy all that life has to offer! 
            </p>
        </div>
    )
}