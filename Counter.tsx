import React, { useState } from 'react';

const Counter:React.FC=()=>{
    const [count, setCount] = useState<number>(0);
    const incrementcount = () =>{
        setCount(prevcount => prevcount +1);
    }

    return(
        <div>
            <p>Click times {count}</p>
            <button onClick ={incrementcount}>Increment</button>
        </div>
    )
}

export default Counter;