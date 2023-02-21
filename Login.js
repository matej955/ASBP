import React from "react";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = event.target.elements;
      const user = await signInWithEmailAndPassword(
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
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
