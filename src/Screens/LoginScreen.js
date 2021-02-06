import React, { useState } from "react";
import "../assets/LoginScreen.css";
import Footer from "../Components/Footer";
import SignUpScreen from "../Components/SignUp";

function LoginScreen() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const reachSignUp = () => {
    setLogin(true);
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <button className="loginScreen__button" onClick={reachSignUp}>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {!login ? (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2> Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.{" "}
            </h3>
            <div className="loginScreen__input">
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="loginScreen__getStarted"
                  onClick={reachSignUp}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        ) : (
          <SignUpScreen email={email} />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default LoginScreen;
