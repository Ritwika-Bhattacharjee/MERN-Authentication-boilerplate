import React, { useState } from 'react';
import axios from 'axios';
//create client id from console.cloud.google.com

//importing components
import Login from './components/Login.js';
import Homepage from './components/Homepage.js';

function App() {

  const [idtoken, setIdtoken] = useState(null);
  const [loggedinname, setloggedinname] = useState(null);

  const setTokenOnSuccess = (userid, username) => {
    setIdtoken(userid);
    setloggedinname(username);
  }

  const responsesuccessGoogle = (response) => {
      console.log(response);
      //const data =  {tokenId: response.tokenId};
      
        axios({
          method: "POST",
          url: "http://localhost:5000/auth/googlelogin",
          data: {tokenId: response.tokenId},
          
        }).then(res => {
          console.log("Google Login done Successfully!", res.data.user._id, res.data.user.name);
          setIdtoken(res.data.user._id);
          setloggedinname(res.data.user.name);
        });
  }

  const responseerrorGoogle = (response) => {
      console.log("Login failure");
  }

  const responseFacebook = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:5000/auth/facebooklogin",
      data: {accessToken: response.accessToken, userID: response.userID},
      
    }).then(res => {
      console.log("Facebook Login done Successfully!", res.data.user._id, res.data.user.name);
      setIdtoken(res.data.user._id);
      setloggedinname(res.data.user.name);
    });
}

  const logout = () => {
    setIdtoken(null);
    setloggedinname(null);
  }

  return (
    <div>
      {
        idtoken ? (
          <Homepage username = {loggedinname} logout = {logout} />
        ) : (
          <Login responsesuccessGoogle={responsesuccessGoogle} responseerrorGoogle={responseerrorGoogle} responseFacebook={responseFacebook} setTokenOnSuccess = {setTokenOnSuccess} />
        )
      }
    </div>
  )
}

export default App;
