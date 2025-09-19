import React, { useState, useEffect } from 'react';

interface Userprofile{
    id: number;
    name: string;
    email: string;

}

const UserDashboard:React.FC=()=>{
    const [users, setUsers] = useState<Userprofile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        const data: Userprofile = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };
        fetchUser();
    }, []);

    if (loading) return<p>Loading...</p>
    if (!users) return<p>No User data found.</p>

    return(
        <div>
            <h2>Welcome , {users.name}!</h2>
              <p>Email:  {users.email}</p>
        </div>
    )
}

export default UserDashboard;