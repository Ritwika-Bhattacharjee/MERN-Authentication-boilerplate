import React from 'react';

const Homepage = ({ username, logout }) => {
    return(
        <div>
            <h1>Homepage</h1>
            <h3>Welcome {username}</h3>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Homepage;