import React from 'react'

export default function Resume(){
    const cardStyle = {width: '20rem', display: 'inline-block'}
    const cardHolder= {margin: '20px', padding: '25px'}
    return (
        <div>
            <div className="text-center">
            {/* <h1>Reume</h1> */}
            <h3>Click the link below to download my resume</h3>
            <a href={require("../resume/AdrianaAQResume.pdf")}><h4>Adriana's Resume</h4></a>
            </div>

            <hr />

            <div>
            A list of a few of the technologies I leverage include: <br/>
                
                <div style={cardHolder} className="text-center">
                <div className="card" style={cardStyle}>
                <div class="card-header">
                Front-End:
                </div>
                <ul class="list-group list-group-flush">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">jQuery</li>
                <li className="list-group-item">React.js</li>
                <li className="list-group-item">JavaScript</li>
                </ul>
                </div>

                <div className="card" style={cardStyle}>
                <div class="card-header">
                Back-End:
                </div>
                <ul class="list-group list-group-flush">
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">Express.js</li>
                <li className="list-group-item">MySQL</li>
                <li className="list-group-item">Sequelize</li>
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">Mongoose</li>
                <li className="list-group-item">API's (web, third-party, RESTful, server-side)</li>
                <li className="list-group-item">Handlebars</li>
                </ul>
                </div>
                </div>


                <div>
                <img src={require("../images/html-5.png")} width="5%"/> <img src={require("../images/css-3.png")} width="5%"/> <img src={require("../images/java-script.png")} width="5%"/>
                <img src={require("../images/bootstrap.png")} width="5%"/> <img src={require("../images/nodejs.png")} width="5%"/> <img src={require("../images/mysql.png")} width="5%"/> 
                <img src={require("../images/mongoDB.png")} width="5%"/> <img src={require("../images/ExpressJS-logo.png")} width="10%"/> <img src={require("../images/react.png")} width="5%"/>
                <img src={require("../images/mongoose.png")} width="10%"/> <img src={require("../images/jquery.png")} width="10%"/> <img src={require("../images/handlebars.png")} width="10%"/>
                <img src={require("../images/github.png")} width="5%"/> <img src={require("../images/restful-api-logo.png")} width="12%"/><br/>
                </div>
            </div>
        </div>
    )
}