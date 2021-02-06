import React, { useRef, useState } from "react";
import "../assets/SignUp.css";
import { auth } from "../firebase";
import SignInScreen from "./SignIn";

function SignUpScreen({ email }) {
  const [login, setLogin] = useState(false);
  const displayNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  return (
    <>
      {!login ? (
        <div className="signUpScreen">
          <form>
            <h1>Sign Up</h1>
            <input
              ref={displayNameRef}
              placeholder="Full Name"
              type="username"
            />
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="Password" />
            <button type="submit" onClick={register}>
              Sign Up
            </button>
            <h4>
              <span className="signUpScreen__gray">Already a user? </span>
              <span className="signUpScreen__link" onClick={signIn}>
                Sign In.
              </span>
            </h4>
          </form>
        </div>
      ) : (
        <SignInScreen />
      )}
    </>
  );
}

export default SignUpScreen;
