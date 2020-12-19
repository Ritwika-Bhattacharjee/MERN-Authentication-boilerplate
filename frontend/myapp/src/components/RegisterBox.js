import React, { useState } from 'react';
import axios from 'axios';

const RegisterBox = ({ setTokenOnSuccess }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting register form!!!");
        axios({
            method: "POST",
            url: "http://localhost:5000/auth/register",
            data: { name: name, email: email, password: password},
            
          }).then(res => {
              if(res.data.message == ""){
                console.log("User Registration done Successfully!", res.data.user._id, res.data.user.name);
                setTokenOnSuccess(res.data.user._id, res.data.user.name);
              }else{
                setErrMsg(res.data.message);
              }
          });
    } 

    return(
        <div>
        <h2>Register Now</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Your Name" value={name} onChange={e => setName(e.target.value)}/><br></br>
            <input type="email" name="email" placeholder="Enter Your Email" value={email} onChange={e => setEmail(e.target.value)}/><br></br>
            <input type="password" name = "password" placeholder="Choose a Password" value={password} onChange={e => setPassword(e.target.value)}/><br></br>
            <input type = "submit" value="Register"/>
        </form>
        {errMsg}
        </div>
    )
}

export default RegisterBox;