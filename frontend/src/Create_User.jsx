import React, { useState } from 'react'


export default function Create_User() {

  let [usernameInput, setUsernameInput ] = useState('');

  let [passwordInput, setPasswordInput ] = useState('');



  function handleChangeUsername(e) {
    setUsernameInput(e.target.value);
  }

  function handleChangePassword(e) {
    setPasswordInput(e.target.value);
  }

  console.log(usernameInput)

  console.log(passwordInput)

  return (
   <> 
   <form>
    <label>Username</label>
    <input type="text" placeholder="username" onChange={handleChangeUsername}></input>

    <label>Password</label>
    <input type="text" placeholder="password" onChange={handleChangePassword}></input>

    <button type='submit'>Create User</button>
   </form>

   </>
  )
}


