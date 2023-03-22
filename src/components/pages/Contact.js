import React, {useEffect, useState} from 'react'

export default function Contact(){
    const inputStyle = { display: 'block', marginTop: '5px', marginBottom: '5px', width: '50%'}
    const formStyle = {margin: '20px'}

    let [email, setEmail] = useState('')
    let [error, setError] = useState(null)

    let [message, setMessage] = useState('')
    let [warning, setWarning] = useState(null)

    let [name, setName] = useState('')



    const handleInput = function (event){
        setMessage((event.target.value))
        console.log(event.target.value)
    }

    const handleName = function (event){
        setName((event.target.value))
    }


    useEffect(function(){
        if(message.length === 0 || name.length === 0){
            setWarning('Please enter a message and a name')
        } else {
            setWarning(null)
        }
    }, [message])


    const handleEmail = function (event){
        // var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        setEmail((event.target.value))
        // return re.test(email)
        //console.log( event.target.name ,event.target.value)
      };

      useEffect(function (){
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let result = re.test(email)
        if(!result){
            setError('Please provide a valid email')
        } else {
            setError(null)
        }
        console.log(email, result)
      }, [email])


    return (
        <div>
            <h1>Contact Me</h1>
            <h3>Please complete the form below to reach me with any questions or comments</h3>
            <div>
                <form style={formStyle} className="form">
                    <p>{error}</p><p>{warning}</p>
                    <input name="fName" style={inputStyle} onChange={handleName} type="text" placeholder="First Name"/>
                    <input name ="email" style={inputStyle} onChange={handleEmail} type="email" placeholder="Email"/>
                    <input name="message" style={inputStyle} onChange={handleInput} type="text" placeholder="Message"/>
                    <button className="btn btn-primary" type="button">Submit</button>
                </form>
            </div>
        </div>
    )
}