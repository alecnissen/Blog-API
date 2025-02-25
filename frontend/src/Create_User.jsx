import React, { useState } from 'react'
import axios from 'axios';




export default function Create_User() {

const handleChange = (e) => { 
  const { name, value } = e.target;
  setCreateUserFormData({
    ...createUserFormData,
    [name]: value
  });
} 

  let [createUserFormData, setCreateUserFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.post("http://localhost:3000/create_user_form/create_user", createUserFormData)

    .then((response) => {
      console.log(response.status, response.data);
    })

    setCreateUserFormData({
      username: '',
      password: ''
    })

    .catch((error) => {
      console.log(error);
      alert("Submission Failed");
    })


  }; 

  return (
   <> 
   <form method='post' onSubmit={handleSubmit}>
    <label>Username</label>
    <input type="text" placeholder="username" name='username' value={createUserFormData.username} onChange={handleChange}></input>

    <label>Password</label>
    <input type="text" placeholder="password" name='password' value={createUserFormData.password} onChange={handleChange}></input>

    <button type='submit'>Create User</button>
   </form>

   </>
  )
}


