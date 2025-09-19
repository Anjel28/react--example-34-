import React, { useState, useEffect } from 'react';

const Timer:React.FC=()=>{
    const [message, setMessage] = useState("wating...");

    useEffect(() => {
        const timer = setTimeout(() => {
             setMessage("Times up");

        }, 5000);

        return()=> clearTimeout(timer);
    },[]);

    return(
        <>
        <div>
            <h2>Timer Demo</h2>
            <p>{message}</p>
        </div>
        </>
    )
}

export default Timer;