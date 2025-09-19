import React, { useRef, useEffect } from 'react';

const ChatBox: React.FC = ()=>{
    const chatboxRef = useRef<HTMLDivElement>(null);

    const message = ['Hii', 'How Are You?', 'I am Fine.'];

    useEffect(() => {
        if(chatboxRef.current){
            chatboxRef.current.scrollTop= chatboxRef.current.scrollHeight;
        }
    }, [message])
    return(
         <div ref={chatboxRef} style={{ height: '300px', overflowY: 'scroll', border: '1px solid black' }}>
      {message.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
    )
}

export default ChatBox;