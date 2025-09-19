import React, { useState, useEffect } from 'react';

const CafeSpecial = () => {
    const [special, setSpecial] = useState('Pasta');

    useEffect(()=> {
        console.log('today is specialsidplay board setup ', special);

        return()=>{
            console.log('Display board clean');
        }
    }, [special]);

    return(
        <div>
            <h1>special: {special}</h1>
            <button onClick={()=> setSpecial('Pizza')}>Pizza</button>
        </div>


    )
}

export default CafeSpecial;