import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import LoginBox from './LoginBox.js';
import RegisterBox from './RegisterBox.js';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

require('dotenv').config();

const Login = ({ responsesuccessGoogle, responseerrorGoogle, responseFacebook, setTokenOnSuccess}) => {

  const [chosenElement, setChosenElement] = useState(null);

  const activateRegister = () => {
    setChosenElement(< RegisterBox setTokenOnSuccess = {setTokenOnSuccess} />);
  }

  const activateLogin = () => {
    setChosenElement(< LoginBox setTokenOnSuccess = {setTokenOnSuccess}/>);
  }
    return (
        <div>
          <div>
            <button onClick={activateRegister}>Register</button>
            <button onClick={activateLogin}>Login</button>
          </div>

          <div>
            {chosenElement}
          </div>

      <h1>Login with Google</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={responsesuccessGoogle}
        onFailure={responseerrorGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <h1>Login with Facebook</h1>
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad={false}
        callback={responseFacebook} 
      />
    </div>
    )
}

export default Login;