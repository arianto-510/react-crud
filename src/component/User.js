import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`)
            getUser()
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <h2>User</h2>
        <button><Link to={'add'}>Add Users</Link></button>
        <br />
        {/* <br /> */}
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
                    <button onClick={() => deleteUser(users.id)}>Delete</button>
                    <button><a href={`/edit/${users.id}`}>Edit</a></button>
                </th>
            </tr>
            ))}
        </table>
    </div>
  )
}

export default User