import React, { useState } from "react";
import axios from "axios";
let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

export default function Create_User() {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateUserFormData({
      ...createUserFormData,
      [name]: value,
    });
  };

  let [createUserFormData, setCreateUserFormData] = useState({
    username: "",
    password: "",
  });

  let [formErrors, setFormErrors] = useState({});

  const validateForm = (data) => {
    const errors = {};

    console.log(data.username) 
    console.log(data.password)

    console.log("Password:", data.password);
    console.log("Regex Test:", regex.test(data.password));

    if (!data.username.trim()) {
      errors.username = "Username is required";
    } else if (data.username.length < 5) {
      errors.username = "Username must be at least 5 characters";
      console.log('error creating user')
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (!regex.test(data.password)) {
      console.log(regex.test(data.password))
      errors.password = "Must contain minimum eight characters, at least one letter, one number and one special character";

    }


    

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(createUserFormData);
    setFormErrors(newErrors);

    axios
      .post(
        "http://localhost:3000/create_user_form/create_user",
        createUserFormData
      )

      .then((response) => {
        console.log(response.status, response.data);

       

        if (Object.keys(newErrors).length === 0) {
          console.log("form submitted successfully");
        } else {
          console.log("form submission failed due to errors");
        }
      });

    setCreateUserFormData({
      username: "",
      password: "",
    }).catch((error) => {
      console.log(error);
      alert("Submission Failed");
    });




  };

  // const validateForm = (data) => {
  //   const errors = {};

  //   if (!data.username.trim()) {
  //     errors.username = "Username is required";
  //   } else if (data.username.length < 5) {
  //     errors.username = "Username must be at least 5 characters";
  //   }

  //   if (!data.password) {
  //     errors.password = "Password is required";
  //   } else if (data.password.length < 8) {
  //     errors.password = "Password must be at least 8 characters long";
  //   }

  //   if (data.confirmPassword !== data.password) {
  //     errors.confirmPassword = "Passwords do not match";
  //   }

  //   return errors;
  // };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={createUserFormData.username}
          onChange={handleChange}
          required
        ></input>

        {formErrors.username && (
          <span className="error-message">{formErrors.username}</span>
        )}

        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={createUserFormData.password}
          onChange={handleChange}
          required
        ></input>

        {formErrors.password && (
          <span className="error-message">{formErrors.password}</span>
        )}

        <button type="submit">Create User</button>
      </form>
    </>
  );
}
