import React from 'react'
import Footer from '../Footer'

export default function About(){
    const imgStyle = {display: "block"}
    return (
        <div>
            <h1 className="text-center">About Me</h1>
            <p className="text-center"> My name is Audrey Alcantara! I am an Atlanta based developer with a goal-driven mindset.<br />
                <img className="img-fluid rounded mx-auto d-block" src={require("../images/portAudrey.JPG")} width="450" height="350" style={imgStyle}/> 
                As a junior developer I have spent the last few years building apps and growing my knowlodge base. 
                I attended Georgia Insitute of Technology's Full Stack Developement bootcamp, and with me I took several technical skills that
                I aspire to put to use. A list of a few of the technologies I leverage include: <br/> 
                <img src={require("../images/html-5.png")} width="5%"/> <img src={require("../images/css-3.png")} width="5%"/> <img src={require("../images/java-script.png")} width="5%"/>
                <img src={require("../images/bootstrap.png")} width="5%"/> <img src={require("../images/nodejs.png")} width="5%"/> <img src={require("../images/mysql.png")} width="5%"/> 
                <img src={require("../images/mongoDB.png")} width="5%"/> <img src={require("../images/github.png")} width="5%"/> <img src={require("../images/react.png")} width="5%"/><br/>
                When I'm not furthering my skill sets I persue other intrests such as photography and cooking.
            </p>
        </div>
    )
}