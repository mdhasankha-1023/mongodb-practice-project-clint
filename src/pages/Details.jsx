import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const user = useLoaderData();
    

    // handle Update Form
    const handleUpdateForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const newInfo = {name, email}
    

        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <h1>Update Profile</h1>
            <form onSubmit={handleUpdateForm}>
                <input type="text" name="name" defaultValue={user.name} /><br />
                <input type="email" name="email" defaultValue={user.email} /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Details;