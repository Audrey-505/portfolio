import React from 'react'

export default function Contact(){
    const inputStyle = { display: 'block', marginTop: '5px', marginBottom: '5px', width: '50%'}
    const formStyle = {margin: '20px'}
    return (
        <div>
            <h1>Contact Me</h1>
            <h3>Please complete the form below to reach me with any questions or comments</h3>
            <div>
                <form style={formStyle} className="form">
                    <input style={inputStyle} type="text" placeholder="First Name"/>
                    <input style={inputStyle} type="email" placeholder="Email"/>
                    <input style={inputStyle} type="text" placeholder="Message"/>
                    <button className="btn btn-primary" type="button">Submit</button>
                </form>
            </div>
        </div>
    )
}