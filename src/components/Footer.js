import React from 'react'

export default function Footer(){
    return (
      <div className="card text-center">
        {/* <ul className="list-group list-group-flush"> */}
        <ul className="list-group list-group-horizontal-lg">
                <li className="list-group-item"><a href="mailto:adrianaquin22@gmail.com"><img src={require("./images/email.png")} width="20%"/></a></li>
                <li className="list-group-item"><a href="https://github.com/Audrey-505"><img src={require("./images/github.png")} width="10%"/></a></li>
                <li className="list-group-item"><a href="https://www.linkedin.com/in/adriana-alcantara-96b9b4160/"><img src={require("./images/linkedin.png")} width="10%"/></a></li>
            </ul>

            <div className="text-center">
                <p>created by Adriana Alcantara with ❤️ <br/> copyright &copy;2023</p>
            </div>
      </div>
    )
}