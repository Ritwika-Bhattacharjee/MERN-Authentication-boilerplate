import React, { useState } from 'react';
import axios from 'axios';

const LoginBox = ({ setTokenOnSuccess }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting login form!!!");
        axios({
            method: "POST",
            url: "http://localhost:5000/auth/login",
            data: { email: email, password: password},
            
          }).then(res => {
              if(res.data.message == ""){
                console.log("User Login done Successfully!", res.data.user._id, res.data.user.name);
                setTokenOnSuccess(res.data.user._id, res.data.user.name);
              }else{
                setErrMsg(res.data.message);
              }
          });
    } 

    return(
        <div>
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter Your Email" value={email} onChange={e => setEmail(e.target.value)}/><br></br>
            <input type="password" name="password" placeholder="Enter your Password" value={password} onChange={e => setPassword(e.target.value)}/><br></br>
            <input type = "submit" value="Login"/>
        </form>
        {errMsg}
        </div>
    )
}

export default LoginBox;