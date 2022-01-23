import React, { useEffect, useState } from 'react'
import AddUser from '../Components/AddUser';
import User from '../Components/User';
import './UserScreen.css';

export const UserScreen = () => {

    const [users, setUsers] = useState([]);

    // getting user when component mounts
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err)
            })
    }

    const onAdd = async (name, email) => {
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email
            }),
            headers: {
                "Content-type": "appliction/json; charset=UTF-8",
            }

        })
            .then((res) => {
                if (res.status !== 201) {
                    return
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setUsers((users) => [...users, data]);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const onDelete = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        })
            .then((res) => {
                if (res.status !== 200) {
                    return
                } else {
                    setUsers(users.filter((user) => {
                        return user.id !== id;
                    }))
                }
            })
            .catch((err) => {
                console.log(err);
            })

    }
    return (
        <div className='App'>
            <div className="heading">
                <h3 style={{ fontSize: 30, fontFamily: 'fantasy' }}> User Data</h3>
            </div>

            <AddUser onAdd={onAdd} />
            <div>
                <div className='subcontainer'>
                    <div>
                        <h3 className='headingContainer' style={{ color: 'white' }}>Email </h3>
                    </div>
                    <div>
                        <h3 className='headingContainer' style={{ color: 'white' }}>Username </h3>
                    </div>
                    <div>
                        <h3 className='headingContainer' style={{ color: 'white' }}>Phone </h3>
                    </div>
                    <div>
                        <h3 className='headingContainer' style={{ color: 'white' }}>Website </h3>
                    </div>
                    <div>
                        <h3 className='headingContainer' style={{ color: 'white' }}>Street </h3>
                    </div>
                    <div>
                        <h3 className='headingContainer' style={{ color: 'white' }}>Suit </h3>
                    </div>
                    <div>
                        <h3 className='headingContainer' style={{ color: 'white' }}>City </h3>
                    </div>
                </div>
                {
                    users.map((userInfo, index) => {
                        return (
                            // console.log(user)
                            <User
                                key={index}
                                userInfo={userInfo}
                                onDelete={onDelete}
                            />
                        )
                    })}

            </div>
        </div>
    )
}

export default UserScreen;