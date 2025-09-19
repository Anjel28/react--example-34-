import React, { useState } from 'react';

const Anjel:React.FC=()=>{
    const [age, setAge] = useState<number>(0);

    const Incrementage = () =>{
        setAge(age+1);
    }

    const Decrementage = () => {
        setAge(age-1);
    }
    return(
        <>
        <div>
            <p>Click Times {age}</p>
            <button onClick={Incrementage}>Increment</button>
            <button onClick={Decrementage}>Decrement</button>
        </div>
        </>
    )
}

export default Anjel;