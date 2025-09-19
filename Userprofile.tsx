import React, { useState } from 'react';

const Userprofile:React.FC =()=> {
    const [name, setName] = useState<string>(' ');
    const [email, setEmail] = useState<string>(' ');
    const [address, setAddress] = useState<string>(' ');

    const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value);
    }

    const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value);
    }

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log('Submitted Name: ', name);
        console.log('Submitted Email: ', email);
        console.log('Submitted Address: ', address);
    }
    return(
        <>
        <form onSubmit ={handleSubmit}>
            <label>
                Name: 
                <input type="text" value={name} onChange={handleNameChange}/>
            </label>
            <label>
                Email: 
                <input type="text" value ={email} onChange={handleEmailChange}/>

            </label>
            <label>
                Address:
                <input type ="text" value={address} onChange={handleAddressChange}/>
            </label>
       <button type="submit">Submit</button>
       <p>Current Name: {name}</p>
       <p>Current Email: {email}</p>
       <p>Current Address: {address}</p>
        </form>
        </>
    )
}

export default Userprofile;