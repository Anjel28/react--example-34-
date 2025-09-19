import React, { useRef, useEffect } from 'react';

const RenderCounter:React.FC=()=>{
    const rendercounter = useRef(0);

    useEffect(()=>{
        rendercounter.current = rendercounter.current +1;
        console.log(`component has rendered ${rendercounter.current} times.`);
    },[]);

    return(
        <div>
            <h1>Check the Console</h1>
            <p>This Component has rendered multiple times, but the count is stored  in a ref, not state</p>
        </div>


    )
}

export default RenderCounter;