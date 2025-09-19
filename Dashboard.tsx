import React, { useState } from 'react';

const Dashboard:React.FC=()=>{
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    const handleClick = ()=> {
        setIsLoggedIn(!isLoggedIn);
    }

    return(
        <>
        {isLoggedIn ? (
            <div>
            <h1>Welcome back, User</h1>
            <button onClick={handleClick}>
              Log Out
            </button>
        </div>
        ):(
        <div>
            <h1>Please to continue in Login</h1>
            <button onClick={handleClick}>
               Log In
            </button>
        </div>
        )}
        </>
    )
}

export default Dashboard;