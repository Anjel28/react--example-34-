import React, { useState, useEffect } from 'react';


const ChatComponent = () =>{
    const [message, setMessage] = useState<string[]>([]);

    useEffect(()=>{
        const socket = new WebSocket('wss://example.com/chat');
        socket.onmessage = (event) => {
            const newMessage = event.data;
            setMessage((prev => [...prev, newMessage]));
        }
        return () => {
            socket.close();
        }
    }, []);

    return(
        <div>
            <h2>Live Message: </h2>
            <ul>
                {message.map((msg, i) => <li key={i}>{msg}</li>)}
            </ul>
        </div>
    )
}

export default ChatComponent;
