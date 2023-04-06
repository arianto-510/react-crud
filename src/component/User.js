import axios from 'axios'
import React, { useEffect, useState } from 'react'


const User = () => {
    const url = 'http://localhost:5000/users'
    const [user, setUser] = useState([])

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const response = await axios.get(url)
        setUser(response.data)
    }
  return (
    <div>
        <h2>User</h2>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Actions</th>
            </tr>
            {user.map((users, index) => (
            <tr>
                <td>{index + 1}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.gender}</td>
                <th>
                    <button>Delete</button>
                    <button>Edit</button>
                </th>
            </tr>
            ))}
        </table>
    </div>
  )
}

export default User