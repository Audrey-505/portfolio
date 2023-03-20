import React from 'react'

export default function Resume(){
    return (
        <div>
            <h1>Reume</h1>
            <h3>Click the link below to download my Resume</h3>
            <a href={require("../resume/resume.pdf")}>resume</a>
        </div>
    )
}