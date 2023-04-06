import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [gender, setGender] = useState("Male")
    const navigate = useNavigate()

    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/users', {email, name, gender,})
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <h2>Add User</h2>
        <form onSubmit={saveUser}>

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
        <button>Add</button>
        </div>
        </form>
    </div>
  )
}

export default AddUser