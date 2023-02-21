import React from "react";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = event.target.elements;
      const user = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

      if (user) {
        console.log(user.user.uid);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleRegister}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <label>
          Confirm Password
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
