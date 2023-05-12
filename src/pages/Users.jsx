import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const allUsers = useLoaderData();
    const [users, setUsers] = useState(allUsers)

    // handleDeleteBtn
    const handleDeleteBtn = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('This user Delete Successfully')
                const remaining = users.filter(user => user._id !== id)
                setUsers(remaining)
            }
        })
    }
    return (
        <div>
            <h1>Total Users: {allUsers.length}</h1>
            {
                users.map(user =>
                    <div key={user._id}>
                        <h3>Name: {user.name}, Email: {user.email}, Id: {user._id}</h3>
                        <button onClick={ () => handleDeleteBtn(user._id)}>X</button>
                        <Link to={`/details/${user._id}`}><button>Details</button></Link>
                    </div> 
                )
            }
        </div>
    );
};

export default Users;