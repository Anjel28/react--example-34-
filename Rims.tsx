import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}


const Rims:React.FC=()=>{
    const [form, setForm] = useState<FormData>({name: ' ', email: ' '});



const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setForm(prev => ({ ...prev, [name]: value }));
};


return(
    <>
    <form>
  <input name="name" value={form.name} onChange={handleChange} />
  <input name="email" value={form.email} onChange={handleChange} />
</form>

    </>
)
}
export default Rims;