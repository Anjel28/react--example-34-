import React, { useRef, useEffect } from 'react';

const LoginForm:React.FC=()=>{
    const usernameInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(usernameInputRef.current){
            usernameInputRef.current.focus();
        }
    }, []);

    return(
        <div>
            <form>
                <label htmlFor="username">Username: </label>
                <input ref={usernameInputRef} type="text" id="username"/>
                <br/>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password"/>
            </form>
        </div>
    )
}

export default LoginForm;