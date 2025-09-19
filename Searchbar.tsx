import React, {  useRef, useEffect } from 'react';

const Searchbar:React.FC=()=>{
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
     if (inputRef.current){
        inputRef.current.focus();
     }
    }, []);
    return(
        <div>
            <input ref={inputRef}
            type="text"
            placeholder="Search...">

            </input>
        </div>
    )
}

export default Searchbar;