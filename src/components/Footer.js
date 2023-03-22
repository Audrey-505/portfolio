import React from 'react'

export default function Footer(){
    return (
      <div className="card">
        {/* <ul className="list-group list-group-flush"> */}
        <ul className="list-group list-group-horizontal-lg">
                <li className="list-group-item"><a href="https://www.google.com/">Extra</a></li>
                <li className="list-group-item"><a href="https://github.com/Audrey-505">GitHub</a></li>
                <li className="list-group-item"><a href="https://www.linkedin.com/in/adriana-alcantara-96b9b4160/">LinkedIn</a></li>
            </ul>

            <div className="text-center">
                <p>created by Adriana Alcantara with ❤️ <br/> copyright &copy;2023</p>
            </div>
      </div>
    )
}