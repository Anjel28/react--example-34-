import React, { useState } from 'react';

interface Props{
    Name: string;
    Price: number;
}

const Cart:React.FC<Props>=({Name, Price})=>{
    const [state, setState] = useState<number>(0);

    const handleAddToCart = () => {
        setState(state+1);
    }

return(
<div style={{padding: '20px', border: '1px solid #cc', borderRadius: '8px'}}>
    <h2>Excellent T-shirt</h2>
    <p>Price: $250.0</p>
    <button onClick = {handleAddToCart}
    style={{background: '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }}>
     Add To Cart

    </button>
    <div style={{marginTop: '15px'}}>
        <h3>Shopping Cart</h3>
        <p>Total Items: {state}</p>

    </div>

</div>
)
}

export default Cart;