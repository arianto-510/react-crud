import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [gender, setGender] = useState("Male")
    const navigate = useNavigate()
    const {id} = useParams()
    const url = `http://localhost:5000/users/${id}`

    const updateUser = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(url, {email, name, gender,})
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getUserById()
    }, [])

    const getUserById = async () => {
        const response = await axios.get(url)
        setName(response.data.name)
        setEmail(response.data.email)
        setGender(response.data.gender)
    }

  return (
    <div>
        <h2>Edit User</h2>
        <form onSubmit={updateUser}>

        <div>
            <label>Name : </label>
            <input type="text" placeholder='name'  value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div>
            <label>Email : </label>
            <input type="email" placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
            <label>Gender : </label>
            <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
        <div>
        <button>Update</button>
        </div>
        </form>
    </div>
  )
}

export default EditUser